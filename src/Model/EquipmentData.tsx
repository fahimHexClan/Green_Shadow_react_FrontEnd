export class EquipmentData {
    id: string;
    EquipmentName: string;
    EquipmentStatus: string;
    EquipmentType: string;
    FieldID: string;
    StaffID: string;
  


 constructor(id:string,EquipmentName:string,EquipmentStatus:string,EquipmentType:string,FieldID:string,StaffID:string){
     this.id=id;
     this.EquipmentName=EquipmentName;
     this.EquipmentStatus=EquipmentStatus;
     this.EquipmentType=EquipmentType;
     this.FieldID=FieldID;
     this.StaffID=StaffID;
 }
   
}