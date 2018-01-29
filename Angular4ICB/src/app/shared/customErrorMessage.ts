import { ErrorMessage } from "ng-bootstrap-form-validation";

export const CUSTOM_ERRORS: ErrorMessage[] = [
    {
      error: "required",
      format: requiredFormat
    }, {
      error: "email",
      format: emailFormat
    },
    {
      error:'minlength',
      format:minLengthFormat
    },
    {
      error:'maxlength',
      format:maxLengthFormat
    }
  ];
  export function requiredFormat(label:string,error:any){
      return `${label} không được để trống!`;
  }
  export function emailFormat(label:string,error:any){
    return `Địa chỉ email không hợp lệ!`;
}
export function minLengthFormat(label:string,error:any){
  //console.log(error);
  return `${label} phải chứa ít nhất ${error.requiredLength} kí tự` ;
}
export function maxLengthFormat(label:string,error:any){
  //console.log(error);
  return `${label} không quá ${error.requiredLength} kí tự` ;
}