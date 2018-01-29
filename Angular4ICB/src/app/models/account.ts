export class Account {
  ID: number=0;
  Username: string;
  Password: string;
  RetypePassword?:string;
  Role: number;
  CreateTime: string;
  Email: string;
  Fullname: string;
  IsActive: boolean;
  IsDeleted: boolean;
  IsLocked: boolean;
  PhoneNumber?: string;
  LastLoginTime?: string;
  LastMordifiedTime?: string;
  ImageURL?: string
  constructor(){
    
    this.CreateTime='';
    this.Username='';
    this.Password='';
    this.RetypePassword='';
    this.Role=4;
    this.Email='';
    this.Fullname='';
    this.IsActive=false;
    this.IsDeleted=false;
    this.IsLocked=false;
    this.PhoneNumber='';
    this.LastLoginTime='';
    this.LastMordifiedTime='';
    this.ImageURL='';
  }
}
