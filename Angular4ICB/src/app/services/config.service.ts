import { Injectable } from "@angular/core";
import { ServiceBase } from "../shared/serviceBase";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ConfigService extends ServiceBase {
  private configUrl = this.apiUrlBase + "/config/get";
  private configLocalString: string = "Angular_config";
  constructor(private http: HttpClient) {
    super();
  }
  getConfig(): Promise<any> {
    return this.http
      .get(this.configUrl)
      .toPromise().then(res=>{
        localStorage.setItem(this.configLocalString,JSON.stringify(res));
        return res;
      });
  }
  getConfigLocal(): any[] {
    let config = localStorage.getItem(this.configLocalString);
    if (config) {
      return JSON.parse(config);
    } else return [];
  }
}
