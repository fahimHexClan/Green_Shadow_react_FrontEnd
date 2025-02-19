export class MonitoringLogData {
  id: string;
  MonitoringDate: string;
  MonitoringLogDetails:string
  MonitoringImage: string;
                        
                 
 constructor(id:string,MonitoringDate:string,MonitoringLogDetails:string,MonitoringImage:string){
  this.id=id;
  this.MonitoringDate=MonitoringDate;
  this.MonitoringLogDetails=MonitoringLogDetails;
  this.MonitoringImage=MonitoringImage;
  
}
}