export class ServiceBase {
  private _host: string = "http://localhost:3003";
  protected apiUrlBase = this._host + "/api"; //"http://localhost:3003/api";
  protected tokenUrl:string=this._host+"/token";
}
