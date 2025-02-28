export class StaffData {
    id: string;
    Staff_FirstName: string;
    Staff_LastName: string;
    Address_1:string
    Contact_Number:string
    Designation:string
    Date_Of_Birth:string
    Email_Address: string;
    Gender:string;
    Join_Date: string;
    Staff_Role: string;
    Log_Id: string;

            
                   
   constructor(id:string,Staff_FirstName:string,Staff_LastName:string,Address_1:string,Contact_Number:string
    ,Designation:string,Date_Of_Birth:string,Email_Address:string,Gender:string,Join_Date:string,Staff_Role:string,Log_Id:string
   ){
    this.id=id;
    this.Staff_FirstName=Staff_FirstName;
    this.Staff_LastName=Staff_LastName;
    this.Address_1=Address_1;
    this.Contact_Number=Contact_Number;
    this.Designation=Designation;
    this.Date_Of_Birth=Date_Of_Birth;
    this.Email_Address=Email_Address;
    this.Gender=Gender;
    this.Join_Date=Join_Date;
    this.Staff_Role=Staff_Role;
    this.Log_Id=Log_Id;

  
    
  }
  }