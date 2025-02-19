export class VehicleData {
    id: string;
    VehicleCategory: string;
    FuelType:string
    LicensePlateNumber: string;
    VehicleRemarks: string;
    VehicleStatus: string;
    StaffID: string;
  


 constructor(id:string,VehicleCategory:string,FuelType:string,LicensePlateNumber:string,VehicleRemarks:string,VehicleStatus:string,StaffID:string){
     this.id=id;
     this.VehicleCategory=VehicleCategory;
     this.FuelType=FuelType;
     this.LicensePlateNumber=LicensePlateNumber;
     this.VehicleRemarks=VehicleRemarks;
     this.VehicleStatus=VehicleStatus;
     this.StaffID=StaffID;
 }
   
}