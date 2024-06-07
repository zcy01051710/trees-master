import React, { useEffect, useMemo, useRef } from "react";
import style from "./style.module.scss";
import { WDHeader } from "../../../components";
import { WDChatItem } from "../../../components/WDchat";
import { useRequest, useSetState } from "ahooks";
import { GetDoctor, GetXiaoxi, postSendMessgess } from "../../../api/qian";
import { Button, Input } from "react-vant";
interface DocetorParamsList {
  department: string;
  departmentId: number;
  doctorId: number;
  doctorName: string;
  evaluateStatus: number;
  imagePic: string;
  inquiryTime: number;
  jiGuangPwd: string;
  jobTitle: string;
  recordId: number;
  userName: string;
}
export interface paramsHistoryList {
  askTime: number;
  content: string;
  direction: number;
  doctorHeadPic: string;
  msgType: number;
  userHeadPic: string;
}
export interface DoectorHistoryList {
  inquiryId: number;
  page: number;
  count: number;
}
export interface SendState {
  inquiryId: number;
  content: string;
  type: number;
  doctorId: number;
}
const Index: React.FC = () => {
  const scrollSreen=useRef<HTMLElement | null>(null)
  const { data: Docetor = {} as DocetorParamsList } = useRequest(async () => {
    const resp = await GetDoctor();
    console.log(resp.result);
    run(resp.result.recordId);
    setParams({
      inquiryId: resp.result.recordId,
      doctorId: resp.result.doctorId,
    });
    return resp.result as DocetorParamsList;
  });
 console.log(Docetor);
 

  const { data: Doectorhistory = [], run } = useRequest(
    async (id: number) => {
      const params = {
        inquiryId: id,
        page: 1,
        count: 10,
      };
      const resp = await GetXiaoxi(params);
      return resp.result as paramsHistoryList[];
    },
    { manual: true }
  );
  const renderDoectorhistory = useMemo(() => {
    return [...Doectorhistory].reverse();
  }, [Doectorhistory]);
  const [params, setParams] = useSetState({
    content: "",
    type: 1,
  } as SendState);
  const sendMegess = async () => {
    const resp = await postSendMessgess(params);
    if (resp.status === "0000") {
      run(params.inquiryId);
      
      setParams({
        content: "",
      });
    }
  };
  useEffect(()=>{
    if(scrollSreen.current){
      scrollSreen.current.scrollTop=100000000000
    }
  },[renderDoectorhistory])
  return (
    <div className={style.liao}>
      <header>
        <WDHeader showSearch={false} title={Docetor.doctorName} />
      </header>
      <main ref={scrollSreen}>
        <div className={style.list}>
          {renderDoectorhistory.map((v, i) => {
            return <WDChatItem key={i} v={v}></WDChatItem>;
          })}
        </div>
      </main>
      <footer>
        <Input
          value={params.content}
          onChange={(value) => setParams({ content: value })}
          onKeyDown={(e) => e.keyCode === 13 && sendMegess()}
          style={{ height: "100%" }}
          prefix={
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3282"
              width="40"
              height="40"
            >
              <path
                d="M496.974276 917.472016c-225.908864 0-409.710054-183.80119-409.710054-409.710054S271.065412 98.051909 496.974276 98.051909s409.710054 183.80119 409.710054 409.710054S722.883139 917.472016 496.974276 917.472016zM496.974276 157.744784c-192.992126 0-350.017179 157.025053-350.017179 350.017179s157.025053 350.017179 350.017179 350.017179S846.991454 700.754089 846.991454 507.761963 689.966401 157.744784 496.974276 157.744784z"
                fill="#231815"
                p-id="3283"
              ></path>
              <path
                d="M585.114544 726.772511c-4.313517 0-8.704947-0.933021-12.844131-2.914959-14.865027-7.092126-21.17996-24.911069-14.087834-39.776096 0.427553-0.913542 43.234506-91.871377 41.408395-176.728542-1.845589-85.245761-48.481043-173.85254-48.947554-174.746603-7.733943-14.554344-2.214707-32.625534 12.338664-40.358504 14.437473-7.714465 32.606056-2.273142 40.358504 12.338664 2.196202 4.119705 53.786016 102.189145 55.943261 201.483783 2.118288 99.314117-45.235923 199.521323-47.23734 203.737447C606.916843 720.516013 596.248461 726.772511 585.114544 726.772511z"
                fill="#231815"
                p-id="3284"
              ></path>
              <path
                d="M473.151081 666.982244c-5.537741 0-11.133918-1.534907-16.128208-4.74107-13.87357-8.919211-17.876405-27.398475-8.958168-41.252567 0.13635-0.21329 23.317727-38.026926 23.317727-97.525989 0-59.460107-25.998944-93.25143-26.271643-93.562112-10.376203-12.824652-8.394265-31.614599 4.410909-41.990803 12.86361-10.356725 31.634078-8.355308 41.990803 4.410909 1.612821 2.001417 39.561832 49.80266 39.561832 131.142006 0 77.939371-31.459745 127.742031-32.799867 129.821363C492.563367 662.143781 482.964356 666.982244 473.151081 666.982244z"
                fill="#231815"
                p-id="3285"
              ></path>
              <path
                d="M366.200414 603.267056c-3.905442 0-7.888797-0.777193-11.717299-2.409492-15.15623-6.470762-22.190895-24.017006-15.700655-39.173236l0 0c0 0 5.304973-13.174292 5.304973-29.205107 0-14.981898-5.848423-26.426498-5.906859-26.543369-7.539158-14.495909-2.118288-32.528142 12.280228-40.242606 14.359559-7.714465 32.236938-2.604277 40.145214 11.717299 1.341096 2.42897 13.174292 24.735763 13.174292 55.068676 0 28.214625-9.074065 50.269171-10.123957 52.678663C388.818862 596.485612 377.801816 603.267056 366.200414 603.267056z"
                fill="#231815"
                p-id="3286"
              ></path>
            </svg>
          }
          suffix={
            <div>
              <Button
                size="small"
                type="default"
                style={{ border: 0, height: "100%" }}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4353"
                  width="30"
                  height="40"
                >
                  <path
                    d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z"
                    fill="#272536"
                    p-id="4354"
                  ></path>
                  <path
                    d="M807.273469 216.727043c-162.808016-162.836669-427.736874-162.836669-590.544891 0-162.836669 162.806993-162.836669 427.736874 0 590.543867 162.808016 162.837692 427.737898 162.837692 590.544891 0C970.110137 644.462894 970.110137 379.534036 807.273469 216.727043M764.893242 764.92036c-139.444912 139.443889-366.370225 139.414213-505.798764 0-139.459239-139.473565-139.459239-366.354875 0-505.827417 139.428539-139.429563 366.354875-139.460262 505.798764 0C904.336108 398.521482 904.336108 625.476471 764.893242 764.92036"
                    fill="#231F20"
                    p-id="4355"
                  ></path>
                  <path
                    d="M381.724423 468.02137c24.783453 0 44.953841-20.169365 44.953841-44.967144 0-24.828478-20.170388-45.027519-44.953841-45.027519-24.842805 0-45.013193 20.199041-45.013193 45.027519C336.71123 447.852004 356.881618 468.02137 381.724423 468.02137"
                    fill="#231F20"
                    p-id="4356"
                  ></path>
                  <path
                    d="M640.680243 468.095048c24.812105 0 45.010123-20.213367 45.010123-45.01217 0-24.827455-20.198018-44.99682-45.010123-44.99682-24.785499 0-44.953841 20.169365-44.953841 44.99682C595.726401 447.88168 615.894743 468.095048 640.680243 468.095048"
                    fill="#231F20"
                    p-id="4357"
                  ></path>
                  <path
                    d="M642.245901 619.058294l-2.453888 0.798179c-40.310078 18.248619-83.548858 27.5341-128.411625 27.5341-46.343491 0-90.173742-9.375531-130.305765-27.799136l-2.425236-0.741897c-1.508353-0.413416-3.548826-1.003863-6.092765-1.003863-14.757099 0-26.734898 11.977799-26.734898 26.675546 0 6.978948 3.282766 13.988596 8.695033 19.253506l-0.325411 1.62501 6.831592 3.076058c47.911196 21.679765 100.021018 33.095769 150.681838 33.095769 51.608402 0 102.180194-11.120268 150.978597-33.361829 8.575306-4.703115 13.928221-13.721513 13.928221-23.511483C676.611593 627.458615 661.027663 613.290941 642.245901 619.058294"
                    fill="#231F20"
                    p-id="4358"
                  ></path>
                </svg>
              </Button>
              <Button type="default" style={{ border: 0 }}>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5348"
                  width="20"
                  height="20"
                >
                  <path
                    d="M469.333333 469.333333V170.666667h85.333334v298.666666h298.666666v85.333334h-298.666666v298.666666h-85.333334v-298.666666H170.666667v-85.333334h298.666666z"
                    fill="#444444"
                    p-id="5349"
                  ></path>
                </svg>
              </Button>
            </div>
          }
        />
      </footer>
    </div>
  );
};
export default Index;
