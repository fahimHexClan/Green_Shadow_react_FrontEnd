import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addItem ,removeItem,updateItem} from "../../Reducer/slice/StaffItem";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./pagesCss/Pages.css";
import fieldImage from "../../assets/crop1.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";



const Staff: React.FC = () => {
  const staffItems  = useSelector((state: RootState) => state.staff.items);
  const dispatch = useDispatch();
  
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    id:"",
    Staff_FirstName: "",
    Staff_LastName:  "",
    Address_1: "",
    Contact_Number: "",
    Designation: "",
    Date_Of_Birth: "",
    Email_Address:  "",
    Gender: "",
    Join_Date:  "",
    Staff_Role:  "",
    Log_Id:  "",


  });

  const getNextId = () => {
    const existingIds = staffItems .map((field) => parseInt(field.id.replace("S", ""), 10) || 0);
    const nextId = Math.max(0, ...existingIds) + 1;
    return `S${String(nextId).padStart(3, "0")}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    staff: string
  ) => {
    if (staff === "FieldImage1" || staff === "FieldImage2") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setFormData((prev) => ({ ...prev, [staff]: reader.result as string }));
        };
        reader.readAsDataURL(file);
      }
  
    } else {
      setFormData((prev) => ({ ...prev, [staff]: e.target.value }));
    }
  };
  const handleAdd = () => {
    if (formData.Email_Address.trim() === "" || formData.Log_Id.trim() === "") {
      alert("Common Name and Category are required!");
      return;
    }
    
    
    const newData = {
      ...formData,
      id: formData.id || getNextId(), // Set new ID if not editing
    };
    
  
    const existingStaff = staffItems .find((staff) => staff.id === formData.id);
  
    if (existingStaff) {
      dispatch(updateItem(newData)); 
    } else {
      dispatch(addItem( newData)); // Add new crop
    }
  
    resetForm();

  };
  const resetForm = () => {
    setFormData({
      id:"",
      Staff_FirstName: "",
      Staff_LastName:  "",
      Address_1: "",
      Contact_Number: "",
      Designation: "",
      Date_Of_Birth: "",
      Email_Address:  "",
      Gender: "",
      Join_Date:  "",
      Staff_Role:  "",
      Log_Id:  "",
    });
    setIsFormVisible(false);
  };
  
  const handleEditStaff  = (staff: any) => {
  setFormData(staff); // Populate form fields with existing crop data
};
const handleSaveEdit = () => {
  dispatch(updateItem(formData)); 
  setFormData({
    id:"",
    Staff_FirstName: "",
    Staff_LastName:  "",
    Address_1: "",
    Contact_Number: "",
    Designation: "",
    Date_Of_Birth: "",
    Email_Address:  "",
    Gender: "",
    Join_Date:  "",
    Staff_Role:  "",
    Log_Id:  "",
  });
}; 
const handleCancelEdit = () => {
  setFormData({
    id:"",
    Staff_FirstName: "",
    Staff_LastName:  "",
    Address_1: "",
    Contact_Number: "",
    Designation: "",
    Date_Of_Birth: "",
    Email_Address:  "",
    Gender: "",
    Join_Date:  "",
    Staff_Role:  "",
    Log_Id:  "",  }); 
};

const handleDeleteStaff  = (id: string) => {
  dispatch(removeItem(id)); 
};

  return (
    <div className="app-container">
      <HeaderContent />
      <BodyContent>
        <h1 className="PageHeader">Staff Management</h1>
        <p className="PageSubHead"> Manages human resources and their assignments.</p>

      {/* Toggle Add Crop Form Button */}
      <button className="add-crop-btn" onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? "Close Form" : "Add Staff"}
        </button>

        {isFormVisible && (
        <div className="add-crop-form">

      <div className="input-group">
      <label htmlFor="id">Staff Id:</label>
        <input type="text" placeholder="Staff ID" value={formData.id || getNextId()} readOnly />
      </div>
      
      <div className="input-group">
      <label htmlFor="Staff_FirstName">Staff_FirstName:</label>
          <input type="text" placeholder=" Staff_FirstName" value={formData.Staff_FirstName} onChange={(e) => handleInputChange(e, "Staff_FirstName")} />
      </div>
      <div className="input-group">
      <label htmlFor="Staff_LastName">Staff_LastName:</label>
          <input type="text" placeholder=" Staff_LastName" value={formData.Staff_LastName} onChange={(e) => handleInputChange(e, "Staff_LastName")} />
      </div>

      <div className="input-group">
      <label htmlFor="Address_1">Address_1:</label>
          <input type="text" placeholder=" Address_1" value={formData.Address_1} onChange={(e) => handleInputChange(e, "Address_1")} />
      </div>

     

      <div className="input-group">
      <label htmlFor="Contact_Number">Contact_Number:</label>
          <input type="text" placeholder=" Contact_Number" value={formData.Contact_Number} onChange={(e) => handleInputChange(e, "Contact_Number")} />
      </div>
      

      <div className="input-group">
        <label htmlFor="Designation">Designation:</label>
        <select 
          id="Designation" value={formData.Designation} onChange={(e) => handleInputChange(e, "Designation")}>
          <option value="">Select Designation</option>
          <option value="Manager">Manager</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Field Officer">Field Officer</option>
          <option value="Worker">Worker</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="Date_Of_Birth">Date_Of_Birth:</label>
          <input 
              type="date" 
              id="Date_Of_Birth" 
              value={formData.Date_Of_Birth} 
              onChange={(e) => handleInputChange(e, "Date_Of_Birth")}
            />
          </div>

          <div className="input-group">
      <label htmlFor="Email_Address">Email_Address:</label>
          <input type="text" placeholder=" Email_Address" value={formData.Email_Address} onChange={(e) => handleInputChange(e, "Email_Address")} />
      </div>


      <div className="input-group">
        <label htmlFor="Gender">Gender:</label>
        <select 
          id="Gender" value={formData.Gender} onChange={(e) => handleInputChange(e, "Gender")}>
          <option value="">Select Extent Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="Join_Date">Join_Date:</label>
          <input 
              type="date" 
              id="Join_Date" 
              value={formData.Join_Date} 
              onChange={(e) => handleInputChange(e, "Join_Date")}
            />
          </div>

    
      <div className="input-group">
      <label htmlFor="Staff_Role">Staff_Role:</label>
          <select value={formData.Staff_Role} onChange={(e) => handleInputChange(e, "Staff_Role")}>
            <option value="">Select Staff_Role</option>
            <option value="Admin">Admin</option>
            <option value="HR">HR</option>
            <option value="Technician">Technician</option>
            <option value="Operator">Operator</option>
          </select>
      </div>


      <div className="input-group">
      <label htmlFor="Log_Id">Log_Id:</label>
          <select value={formData.Log_Id} onChange={(e) => handleInputChange(e, "Log_Id")}>
              <option value="">Select Log ID</option>
              <option value="L001">L001</option>
              <option value="L002">L002</option>
              <option value="L003">L003</option>
          </select>
      </div>


          <button className="save-btn" onClick={handleAdd}>Save Crop</button>
        </div>
        )}
      <div className="table-container mt-4">
        <table className="table table-striped table-hover align-middle">
          <thead>
            <tr>
                    <th>Staff_ID</th>
                    <th>Staff_FirstName</th>
                    <th>Staff_LastName</th>
                    <th> Address_1</th>
                    <th>Contact_Number</th>
                    <th>Designation</th>
                    <th>Date_Of_Birth</th>
                    <th>Email_Address</th>
                    <th>Gender</th>
                    <th>Join_Date</th>
                    <th>Staff_Role</th>
                    <th>Log_Id</th>
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffItems .map((staff) => (
              <tr key={staff.id}>
                <td>{staff.id}</td>

                {/* Editable Category */}
      <td>
        {formData.id === staff.id ? (
         
         <input 
         type="text" 
         value={formData.Staff_FirstName} 
         onChange={(e) => handleInputChange(e, "Staff_FirstName")}
         />  
          ) : (
          staff.Staff_FirstName
        )}
     </td>
     <td>
        {formData.id === staff.id ? (
         
         <input 
         type="text" 
         value={formData.Staff_LastName} 
         onChange={(e) => handleInputChange(e, "Staff_LastName")}
         />  
          ) : (
          staff.Staff_LastName
        )}
     </td>

     <td>
        {formData.id === staff.id ? (
         
         <input 
         type="text" 
         value={formData.Address_1} 
         onChange={(e) => handleInputChange(e, "Address_1")}
         />  
          ) : (
          staff.Address_1
        )}
     </td>
     <td>
        {formData.id === staff.id ? (
         
         <input 
         type="text" 
         value={formData.Contact_Number} 
         onChange={(e) => handleInputChange(e, "Contact_Number")}
         />  
          ) : (
          staff.Contact_Number
        )}
     </td>

     

      {/* Editable Common Name */}
      <td>
        {formData.id === staff.id ? (
           <select
           value={formData.Designation}
           onChange={(e) => handleInputChange(e, "Designation")}
         >
          <option value="">Select Designation</option>
          <option value="Manager">Manager</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Field Officer">Field Officer</option>
          <option value="Worker">Worker</option>
         </select>

        ) : (
          staff.Designation
        )}
      </td>
      <td>
        {formData.id === staff.id ? (
            <input
            type="date"
            value={formData.Date_Of_Birth}
            onChange={(e) => handleInputChange(e, "Date_Of_Birth")}
          />
        ) : (
          staff.Date_Of_Birth
          
          )}
      </td>
      <td>
        {formData.id === staff.id ? (
         
         <input 
         type="text" 
         value={formData.Email_Address} 
         onChange={(e) => handleInputChange(e, "Email_Address")}
         />  
          ) : (
          staff.Email_Address
        )}
     </td>

     <td>
        {formData.id === staff.id ? (
           <select
           value={formData.Gender}
           onChange={(e) => handleInputChange(e, "Gender")}
         >
          <option value="">Select Extent Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
         </select>

        ) : (
          staff.Gender
        )}
      </td>

      <td>
        {formData.id === staff.id ? (
            <input
            type="date"
            value={formData.Join_Date}
            onChange={(e) => handleInputChange(e, "Join_Date")}
          />
        ) : (
          staff.Join_Date
          
          )}
      </td>

      <td>
        {formData.id === staff.id ? (
           <select
           value={formData.Staff_Role}
           onChange={(e) => handleInputChange(e, "Staff_Role")}
         >
          <option value="">Select Staff_Role</option>
            <option value="Admin">Admin</option>
            <option value="HR">HR</option>
            <option value="Technician">Technician</option>
            <option value="Operator">Operator</option>
         </select>

        ) : (
          staff.Staff_Role
        )}
      </td>
      <td>
          {formData.id === staff.id ? (
            <select 
              value={formData.Log_Id} 
              onChange={(e) => handleInputChange(e, "Log_Id")}
            >
              <option value="L001">L001</option>
              <option value="L002">L002</option>
              <option value="L003">L003</option>
            </select>
          ) : (
            staff.Log_Id
          )}
        </td>
        <td>
        {formData.id === staff.id ? (
          <>
            <button className="save-btn btn-outline-success" onClick={handleSaveEdit}>💾</button>
            <button className="cancel-btn" onClick={handleCancelEdit}>❌</button>
          </>
        ) : (
          <>
            <button className="edit-btn btn-outline-primary" onClick={() => handleEditStaff (staff)}>✏️</button>
            <button className="delete-btn btn-outline-danger" onClick={() => handleDeleteStaff (staff.id)}>🗑️</button>
          </>
        )}
      </td>


    </tr>
  ))}
</tbody>
        </table>
        </div>
        <img className="cropImage" src={fieldImage} alt="Crop" />
      </BodyContent>
    </div>
  );
};

export default Staff;