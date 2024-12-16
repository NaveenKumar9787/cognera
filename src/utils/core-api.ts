import Request from "./request";

export class CoreAPi {
    http = Request;

    constructor(public_base_path: string) { }

    findAllGet(url: any) {
        return this.http.get(url)
    }

    findAllPost(url: string, data: any) {
        return this.http.post(url, data)
    }
    
    // deleteInfo(url:any){
    //   return this.http.delete(url)
    // }

    // delete(id: NumberOrString) {
    //   return this.http.delete(`api/v1/customer/address?address_id=`+id);
    // }
}
