import { ErrorMessage } from "ng-bootstrap-form-validation";

export const CUSTOM_ERRORS: ErrorMessage[] = [
    {
      error: "required",
      format: requiredFormat
    }, {
      error: "email",
      format: emailFormat
    }
  ];
  export function requiredFormat(label:string,error:any){
      return `${label} không được để trống!`;
  }
  export function emailFormat(label:string,error:any){
    return `Địa chỉ email không hợp lệ!`;
}