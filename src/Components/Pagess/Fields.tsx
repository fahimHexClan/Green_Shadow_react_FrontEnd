import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addItem ,removeItem,updateItem} from "../../Reducer/slice/FieldItem";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./pagesCss/Pages.css";
import fieldImage from "../../assets/crop1.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";



const Field: React.FC = () => {
  const fieldItems  = useSelector((state: RootState) => state.field.items);
  const dispatch = useDispatch();
  
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    FieldName: "",
    FieldLocation: "",
    ExtentSize:"",
    FieldImage1: "",
    FieldImage2: "",
    LogID:"",
    StaffID: "",
  });

  const getNextId = () => {
    const existingIds = fieldItems .map((field) => parseInt(field.id.replace("F", ""), 10) || 0);
    const nextId = Math.max(0, ...existingIds) + 1;
    return `F${String(nextId).padStart(3, "0")}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    if (field === "FieldImage1" || field === "FieldImage2") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setFormData((prev) => ({ ...prev, [field]: reader.result as string }));
        };
        reader.readAsDataURL(file);
      }
  
    } else {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    }
  };
  const handleAdd = () => {
    if (formData.LogID.trim() === "" || formData.StaffID.trim() === "") {
      alert("Common Name and Category are required!");
      return;
    }
    
    
    const newData = {
      ...formData,
      id: formData.id || getNextId(), // Set new ID if not editing
    };
    
  
    const existingfield = fieldItems .find((field) => field.id === formData.id);
  
    if (existingfield) {
      dispatch(updateItem(newData)); 
    } else {
      dispatch(addItem( newData)); // Add new crop
    }
  
    resetForm();

  };
  const resetForm = () => {
    setFormData({
      id: "",
      FieldName: "",
      FieldLocation: "",
      ExtentSize:"",
      FieldImage1: "",
      FieldImage2: "",
      LogID:"",
      StaffID: "",
    });
    setIsFormVisible(false);
  };
  
  const handleEditField  = (field: any) => {
  setFormData(field); // Populate form fields with existing crop data
};
const handleSaveEdit = () => {
  dispatch(updateItem(formData)); 
  setFormData({
    id: "",
    FieldName: "",
    FieldLocation: "",
    ExtentSize:"",
    FieldImage1: "",
    FieldImage2: "",
    LogID:"",
    StaffID: "",
  });
}; 
const handleCancelEdit = () => {
  setFormData({
    id: "",
    FieldName: "",
    FieldLocation: "",
    ExtentSize:"",
    FieldImage1: "",
    FieldImage2: "",
    LogID:"",
    StaffID: "",
  }); 
};

const handleDeleteEquipment  = (id: string) => {
  dispatch(removeItem(id)); 
};

  return (
    <div className="app-container">
      <HeaderContent />
      <BodyContent>
        <h1 className="PageHeader">Fields Management</h1>
        <p className="PageSubHead">Manage fields allocated for cultivation.</p>

      {/* Toggle Add Crop Form Button */}
      <button className="add-crop-btn" onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? "Close Form" : "Add Field"}
        </button>

        {isFormVisible && (
        <div className="add-crop-form">

      <div className="input-group">
      <label htmlFor="id">Field Id:</label>
        <input type="text" placeholder="Field ID" value={formData.id || getNextId()} readOnly />
      </div>
      
      <div className="input-group">
      <label htmlFor="FieldName">Field Name:</label>
          <input type="text" placeholder="Field Name" value={formData.FieldName} onChange={(e) => handleInputChange(e, "FieldName")} />
      </div>

      <div className="input-group">
        <label htmlFor="FieldLocation">Field Location:</label>
        <select 
          id="FieldLocation" value={formData.FieldLocation} onChange={(e) => handleInputChange(e, "FieldLocation")}>
          <option value="">Select Field Location</option>
          <option value="North Zone">North Zone</option>
          <option value="South Zone">South Zone</option>
          <option value="East Zone">East Zone</option>
          <option value="West Zone">West Zone</option>
          <option value="Central Field">Central Field</option>
        </select>
      </div>


      <div className="input-group">
        <label htmlFor="ExtentSize">Extent Size:</label>
        <select 
          id="ExtentSize" value={formData.ExtentSize} onChange={(e) => handleInputChange(e, "ExtentSize")}>
          <option value="">Select Extent Size</option>
          <option value="0.5 Acres">0.5 Acres</option>
          <option value="1 Acre">1 Acre</option>
          <option value="2 Acres">2 Acres</option>
          <option value="5 Acres">5 Acres</option>
          <option value="10 Acres">10 Acres</option>
        </select>
      </div>

      <div className="input-group">
      <label htmlFor="FieldImage1">FieldImage1:</label>
          <input type="file" accept="image/*" onChange={(e) => handleInputChange(e, "FieldImage1")} />
      </div>

      <div className="input-group">
      <label htmlFor="FieldImage2">FieldImage2:</label>
          <input type="file" accept="image/*" onChange={(e) => handleInputChange(e, "FieldImage2")} />
      </div>
      
      <div className="input-group">
      <label htmlFor="StaffID">Staff Id:</label>
          <select value={formData.StaffID} onChange={(e) => handleInputChange(e, "StaffID")}>
            <option value="">Select Staff ID</option>
            <option value="S001">S001</option>
            <option value="S002">S002</option>
            <option value="S003">S003</option>
          </select>
      </div>


      <div className="input-group">
      <label htmlFor="LogID">Log Id:</label>
          <select value={formData.LogID} onChange={(e) => handleInputChange(e, "LogID")}>
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
            <th>Field ID</th>
            <th>Name</th>
            <th>Field Location</th>
            <th>Extent Size (acres)</th>
            <th>Field Image 1</th>
            <th>Field Image 2</th>
            <th>Log ID</th>
            <th>Staff ID</th>
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fieldItems .map((field) => (
              <tr key={field.id}>
                <td>{field.id}</td>

                {/* Editable Category */}
      <td>
        {formData.id === field.id ? (
          <input 
          type="text" 
          value={formData.FieldName} 
          onChange={(e) => handleInputChange(e, "FieldName")}
          />        ) : (
          field.FieldName
        )}
      </td>

      {/* Editable Common Name */}
      <td>
        {formData.id === field.id ? (
         <select 
         value={formData.FieldLocation} 
         onChange={(e) => handleInputChange(e, "FieldLocation")}
       >
         <option value="North Zone">North Zone</option>
         <option value="South Zone">South Zone</option>
         <option value="East Zone">East Zone</option>
         <option value="West Zone">West Zone</option>
         <option value="Central Field">Central Field</option>
       </select>
        ) : (
          field.FieldLocation
        )}
      </td>

      {/* Editable Image */}
      <td>
        {formData.id === field.id ? (
                       <select 
                       value={formData.ExtentSize} 
                       onChange={(e) => handleInputChange(e, "ExtentSize")}
                     >
                       <option value="0.5 Acres">0.5 Acres</option>
                       <option value="1 Acre">1 Acre</option>
                       <option value="2 Acres">2 Acres</option>
                       <option value="5 Acres">5 Acres</option>
                       <option value="10 Acres">10 Acres</option>
                     </select>
         
        ) : (
          field.ExtentSize
        )}
      </td>

      {/* Editable Scientific Name */}
      <td>
        {formData.id === field.id ? (
            <input type="file" accept="image/*" onChange={(e) => handleInputChange(e, "FieldImage1")} />

        ) : (
          field.FieldImage1 ? <img src={field.FieldImage1} alt="Field" width="50" /> : "No Image"
        )}
      </td>

      <td>
          {formData.id === field.id ? (
            <input type="file" accept="image/*" onChange={(e) => handleInputChange(e, "FieldImage2")} />
          ) : (
            field.FieldImage2 ? <img src={field.FieldImage2} alt="Field" width="50" /> : "No Image"
          )}
        </td>

        <td>
          {formData.id === field.id ? (
            <select 
              value={formData.LogID} 
              onChange={(e) => handleInputChange(e, "LogID")}
            >
              <option value="L001">L001</option>
              <option value="L002">L002</option>
              <option value="L003">L003</option>
            </select>
          ) : (
            field.LogID
          )}
        </td>

        <td>
          {formData.id === field.id ? (
            <select 
              value={formData.StaffID} 
              onChange={(e) => handleInputChange(e, "StaffID")}
            >
              <option value="S001">S001</option>
              <option value="S002">S002</option>
              <option value="S003">S003</option>
            </select>
          ) : (
            field.StaffID
          )}
        </td>

      

      {/* Actions - Edit, Save, Cancel, Delete */}
      <td>
        {formData.id === field.id ? (
          <>
            <button className="save-btn btn-outline-success" onClick={handleSaveEdit}>💾</button>
            <button className="cancel-btn" onClick={handleCancelEdit}>❌</button>
          </>
        ) : (
          <>
            <button className="edit-btn btn-outline-primary" onClick={() => handleEditField (field)}>✏️</button>
            <button className="delete-btn btn-outline-danger" onClick={() => handleDeleteEquipment (field.id)}>🗑️</button>
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

export default Field;