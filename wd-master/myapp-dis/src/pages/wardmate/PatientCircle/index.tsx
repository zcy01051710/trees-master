import { useRequest, useSetState } from "ahooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { WDHeader } from "../../../components";
import { Form, Input, Picker, DatetimePicker, Button, Uploader, Notify } from "react-vant";
import {
  getDiseaseLis,
  getTitle,
  postImage,
  Postwite,
} from "../../../api/Wardmeta";
import timestampToTime from "../Time";
export interface DiseaseTitleState{
    departmentName:string,
    id: number,
    pic: string,
    rank: number
}
export interface SendState {
  title: string; // 标题
  departmentId: number; //科室 id
  disease: string; //	病症描述
  detail: string; //病症详情
  treatmentHospital: string; //治疗医院
  treatmentStartTime: string; //治疗开始时间 格式’2018-3-26’
  treatmentEndTime: string; //治疗结束时间 格式’2018-6-26’
  treatmentProcess: string; //治疗过程描述
  amount: number; // 悬赏额度，//无时为0
  // uploader:{flie:File}[]
   uploader: { file: File }[]
}

interface DiseaseListState {
  departmentId: number;
  id: number;
  name: string;
}

const Index = () => {
  const navigate=useNavigate()
  const [params, setParams] = useSetState({
    amount: 0,
  } as SendState);
    const { data: departmentData = [] } = useRequest(async () => {
    // 获取科室列表
    const data = await getTitle();
    
    // 数据转换  转化成为 第三方支持的格式
    const result = (data.result as DiseaseTitleState[]).map((v) => {
      return { text: v.departmentName, value: v.departmentName, id: v.id };
    });
    return result;
  });
  
  const {data:diseaseData=[]} = useRequest(
    async () => {
      if (!params.departmentId) return [];
      const data = await getDiseaseLis(params.departmentId);
      const result = (data.result as DiseaseListState[]).map((v) => {
        return { text: v.name, value: v.name, id: v.id };
      });
      return result;
    },
    // 依赖： 科室id， 只要科室id 发生改变， 这个函数就执行
    {refreshDeps:[params.departmentId]}
  );
  const onFinish = async (result: SendState) => {
    const oo = Object.assign(result, params); 
    oo.treatmentStartTime = timestampToTime(oo.treatmentStartTime);
    oo.treatmentEndTime = timestampToTime(oo.treatmentEndTime);
    const {status,result:id} = await Postwite(oo);
    
    if(status === '0000') {
      const ss = await postImage(id, oo.uploader[0].file)
      if(ss.status === '0000') {
        Notify.show({ type: "success", message: '发布成功' })
      } else {
        Notify.show({ type: 'danger', message: '图片上传失败' })
      }
    } else {
      Notify.show({ type: 'danger', message: '发布失败' })
    }
    navigate('/home/meta?id='+result.departmentId)
  };


  const handleConFirm = (_: string, b: any) => {
    setParams({
      departmentId: b.id,
    });
  };
  return (
    <div>
      <WDHeader showSearch={false}></WDHeader>

      <Form
        onFinish={onFinish}
        footer={
          <Button type="primary" round block nativeType="submit">
            提交
          </Button>
        }
      >
        {/* 上面 */}
        <Form.Item
          name="title"
          rules={[{ required: true, message: "标题不可以为空" }]}
        >
          <Input placeholder="请输入标题"></Input>
        </Form.Item>
        <Form.Item
          name="departmentId"
          rules={[{ required: true, message: "科室不可以为空" }]}
          trigger="onConfirm"
          onClick={(_, action) => {
            action?.current?.open();
          }}
        >
          <Picker
            popup
            columns={departmentData}
            onConfirm={(value: string, item: any) => handleConFirm(value, item)}
          >
            {(val) => val || "请选择就诊科室"}
          </Picker>
        </Form.Item>
        <Form.Item
          name="disease"
          rules={[{ required: true, message: "主要病症不可以为空" }]}
          trigger="onConfirm"
          onClick={(_, action) => {
            action?.current?.open();
          }}
        >
          <Picker
            popup
            columns={diseaseData}
            onConfirm={(value: string, item: any) =>
              setParams({
                disease: item.id,
              })
            }
          >
            {(val) => val || "请选择主要病症"}
          </Picker>
        </Form.Item>
        <Form.Item
          name="detail"
          rules={[{ required: true, message: "病症详情不可以为空" }]}
        >
          <Input.TextArea
            rows={5}
            autoSize={{ maxHeight: 200 }}
            placeholder="请输入病症详情"
            maxLength={300}
            showWordLimit
          />
        </Form.Item>
        {/* 下面 */}
        <Form.Item
          name="treatmentHospital"
          rules={[{ required: true, message: "治疗医院不可以为空" }]}
        >
          <Input placeholder="请输入治疗医院"></Input>
        </Form.Item>
        <Form.Item
          name="treatmentEndTime"
          label="开始治疗时间"
          trigger="onConfirm"
          onClick={(_, action) => {
            action?.current?.open();
          }}
        >
          <DatetimePicker popup type="date">
            {(val: Date) =>
              val ? timestampToTime(val.getTime()) : "请选择日期"
            }
          </DatetimePicker>
        </Form.Item>
        <Form.Item
          name="treatmentStartTime"
          label="结束治疗时间"
          trigger="onConfirm"
          onClick={(_, action) => {
            action?.current?.open();
          }}
        >
          <DatetimePicker popup type="date">
            {(val: Date) =>
              val ? timestampToTime(val.getTime()) : "请选择日期"
            }
          </DatetimePicker>
        </Form.Item>
        <Form.Item
          name="treatmentProcess"
          rules={[{ required: true, message: "治疗过程不可以为空" }]}
        >
          <Input.TextArea
            rows={5}
            autoSize={{ maxHeight: 200 }}
            placeholder="请输入治疗过程"
            maxLength={300}
          />
        </Form.Item>
        <Form.Item
        name='uploader'
        label='上传文件'
        rules={[{ required: true, message: '请选择文件' }]}
        initialValue={[
        ]}
      >
        <Uploader />
      </Form.Item>
        <Form.Item name="amount">
          <Input placeholder="请输入奖励金额" />
        </Form.Item>
      </Form>
    </div>
  );
};
export default Index;
