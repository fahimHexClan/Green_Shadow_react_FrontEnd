export class Cropdata {
    id: string;
    Category: string;
    CommonName: string;
    SciencetificName: string;
    Image: string;
    Season: string;
    FieldId: string;
    LogId: string;
 constructor(id:string,Category:string,CommonName:string,SciencetificName:string,Image:string,Season:string,FieldId:string,LogId:string){
     this.id=id;
     this.Category=Category;
     this.CommonName=CommonName;
     this.SciencetificName=SciencetificName;
     this.Image=Image;
     this.Season=Season;
     this.FieldId=FieldId;
     this.LogId=LogId;
 }
   
}