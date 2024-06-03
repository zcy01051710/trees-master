export interface MetaList {
    doctorName(doctorName: any): import("react").ReactNode
    amount:number,
    collectionNum: number,
    commentNum: number,
    detail: string,
    releaseTime: number,
    sickCircleId: string,
    title: string,
}
export interface From{
    id:number,
    page:number,
    count:number
}
export interface list{
    doctorName:string
}