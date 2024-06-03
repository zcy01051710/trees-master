import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
// import add from "../../../../asstes/切图/image/image/hdpi/add.png";
import add from "../../asses/hdpi/add.png";
import { Input, NavBar, DatetimePicker, Field, Button, Cell, Uploader,Form, UploaderValueItem, Notify } from "react-vant";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { FileState } from "../mycon1";
import timestampToTime from "../../wardmate/Time";
import { addUserFile, getUserFiles, postImage, updateUserFile } from "../../../api/MyIndex";
import logo from '../../asses/icon/common resource/hdpi/common_icon_back_black_n.png';
import { useRequest, useSetState } from "ahooks";

const Index: React.FC = () => {

  const [form]=Form.useForm()
  const onFinish=(values: any)=>{
    console.log(values.uploader[0].file)
   getUserFiles().then((resp)=>{
    console.log(resp.result[0].archivesId)
    postImage(resp.result[0].archivesId,values.uploader[0].file).then((resp)=>{
      if(resp.status === '0000') {
        Notify.show({ type: "success", message: '发布成功' })
      } else {
        Notify.show({ type: 'danger', message: '图片上传失败' })
      }
    })
   }) 
  }
   const [data, setData] = useSetState({} as FileState);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  console.log(code)
  const getMyFile = async () => {
    const resp = await getUserFiles();
    console.log(resp);
    setData(resp.result[0])
  }

  // const {data:FileState}=useRequest(async ()=>(await getUserFiles()).result)
  // console.log(FileState);
  // setData(FileState);

  const handleSubmit = async () => {
    data.treatmentStartTime = timestampToTime(data.treatmentStartTime);
    data.treatmentEndTime = timestampToTime(data.treatmentEndTime);
    if (code === "1") {
      // 添加
      await addUserFile(data);
    }
    if (code === "2") {
      // 编辑
      await updateUserFile(data)
    }

    
    navigate('/my', { replace: true })

  };

  useEffect(() => {
      if(code === '2') 
     {
       getMyFile()
     }
       
  }, [])

  

  return (
    <div className={style.addP}>
     <div className={style.top}>
        <img src={logo} alt="" onClick={()=>navigate('/my')}/>
        <span>我的档案</span>
       </div>

      <Cell>
        <p>[主要症状]</p>
        <Input
          value={data.diseaseMain}
          onChange={(value) => setData({ diseaseMain: value })}
          placeholder="请输入您的主要症状"
          clearable
        />
      </Cell>
      <Cell>
        <p>[现病史]</p>
        <Input
          value={data.diseaseNow}
          type="text"
          onChange={(value) => setData({ diseaseNow:value })}
          placeholder="请详细输入您的当前病状"
        />
      </Cell>
      <Cell>
        <p>[既往病史]</p>
        <Input
          value={data.diseaseBefore}
          type="text"
          onChange={(value) => setData({ diseaseBefore:value })}
          placeholder="请输入您的既往病史"
        />
      </Cell>
      <Cell>
        <p>[最近一次治疗经历]</p>
        <Input
          value={data.treatmentHospitalRecent}
          type="text"
          onChange={(value) =>
            setData({ treatmentHospitalRecent:value })
          }
          placeholder="请输入医院名称"
        />
      </Cell>

      <DatetimePicker
        popup={{
          round: true,
        }}
        type="date"
        title="选择年月日"
        value={new Date(data.treatmentStartTime)}
        onConfirm={(value: any) =>
          setData({ treatmentStartTime:value})
        }
      >
        {(val: any, _: any, actions: { open: () => void }) => {
          return (
            <Field
              readOnly
              clickable
              label="请选择治疗开始时间"
              value={val.toLocaleDateString()}
              onClick={() => actions.open()}
            />
          );
        }}
      </DatetimePicker>

      <DatetimePicker
        popup={{
          round: true,
        }}
        type="date"
        value={new Date(data.treatmentEndTime)}
        onConfirm={(value: any) => setData({ treatmentEndTime :value})}
      >
        {(val: any, _: any, actions: { open: () => void }) => {
          return (
            <Field
              readOnly
              clickable
              label="请选择治疗结束时间"
              value={val.toLocaleDateString()}
              onClick={() => actions.open()}
            />
          );
        }}
      </DatetimePicker>
      <Cell>
        <Input
          value={data.treatmentProcess}
          type="text"
          onChange={(value) => setData({ treatmentProcess:value })}
          placeholder="请输入治疗过程"
        />
      </Cell>
      <p>[相关图片]</p>

      <div className={style.imgadd}>最多可添加五张图片；长按为图片排序</div>
      <Form 
      form={form}
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType='submit' type='primary' block>
            上传文件
          </Button>
        </div>
      }
      >
       <Form.Item
        name='uploader'
        label='上传文件'
        rules={[{ required: true, message: '请选择文件' }]}
        initialValue={[
        
        ]}
      >
        <Uploader/>
      </Form.Item>
      </Form>
      <br />

      <div className={style.a}>
        <button className={style.addBtn} onClick={() => handleSubmit()}>
          保存
        </button>
      </div>
    </div>
  );
};

export default Index;
