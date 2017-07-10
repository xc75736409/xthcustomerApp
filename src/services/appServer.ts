/**
 * Created by Administrator on 2017/2/28.
 */
import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import {AppGlobal} from "../AppGlobal";
import {Observable} from "rxjs";

const baseUrl: string = AppGlobal.getInstance().server + AppGlobal.getInstance().apiUrl;
@Injectable()
export class AppServer {
  constructor(public http: Http) {

  }

  static formatPostData(pData: Object): URLSearchParams {
    let paramData: URLSearchParams = new URLSearchParams();
    for (let i in pData) {
      if (typeof pData[i] === 'object')
        paramData.set(i, JSON.stringify(pData[i]));
      else
        paramData.set(i, pData[i]);
    }
    paramData.set("key", AppGlobal.getInstance().user.key);
    return paramData
  }

  static formatGetData(pData: Object): string {
    let paramData: string = '?key=' + AppGlobal.getInstance().user.key;
    for (let i in pData) {
      if (typeof pData[i] === 'object')
        paramData += '&' + i + '=' + JSON.stringify(pData[i]);
      else
        paramData += '&' + i + '=' + pData[i]
    }

    return paramData
  }

  // http.get
  public httpGet(url, params) {
    return this.http.get(baseUrl + url + AppServer.formatGetData(params))
      .map(
        (result: Response) => result.json())
      .catch(
        (error: any) => Observable.throw(error || "服务错误")
      );
  }

  // http.post
  public httpPost(url, params) {
    return this.http.post(baseUrl + url, AppServer.formatPostData(params))
      .map(
        (result: Response) => result.json())
      .catch(
        (error: any) => Observable.throw(error || "服务错误"));
  }
}
