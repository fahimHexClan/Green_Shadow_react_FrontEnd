export class FieldData {
  id: string;
  FieldName: string;
  FieldLocation: string;
  ExtentSize:string
  FieldImage1: string;
  FieldImage2:string;
  LogID: string;
  StaffID: string;
                        
                 
 constructor(id:string,FieldName:string,FieldLocation:string,ExtentSize:string,FieldImage1:string,FieldImage2:string,LogID:string,StaffID:string){
  this.id=id;
  this.FieldName=FieldName;
  this.FieldLocation=FieldLocation;
  this.ExtentSize=ExtentSize;
  this.FieldImage1=FieldImage1;
  this.FieldImage2=FieldImage2;
  this.LogID=LogID;
  this.StaffID=StaffID;

  
}
}