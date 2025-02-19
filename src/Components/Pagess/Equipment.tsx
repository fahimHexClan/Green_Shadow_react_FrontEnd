import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addItem ,removeItem,updateItem} from "../../Reducer/slice/EquipmentItem";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./pagesCss/Pages.css";
import fieldImage from "../../assets/crop1.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";



const Equipment: React.FC = () => {
  const equipmentItems  = useSelector((state: RootState) => state.equipment.items);
  const dispatch = useDispatch();
  
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    EquipmentName: "",
    EquipmentStatus: "",
    EquipmentType: "",
    FieldID: "",
    StaffID: "",

  });

  const getNextId = () => {
    const existingIds = equipmentItems .map((equipment) => parseInt(equipment.id.replace("E", ""), 10) || 0);
    const nextId = Math.max(0, ...existingIds) + 1;
    return `E${String(nextId).padStart(3, "0")}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    if (field === "Image") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setFormData((prev) => ({ ...prev, Image: reader.result as string }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    }
  };
  const handleAdd = () => {
    if (formData.EquipmentName.trim() === "" || formData.EquipmentType.trim() === "") {
      alert("Common Name and Category are required!");
      return;
    }
    
    
    const newData = {
      ...formData,
      id: formData.id || getNextId(), // Set new ID if not editing
    };
    
  
    const existingEquipment = equipmentItems .find((equipment) => equipment.id === formData.id);
  
    if (existingEquipment) {
      dispatch(updateItem(newData)); 
    } else {
      dispatch(addItem( newData)); // Add new crop
    }
  
    resetForm();

  };
  const resetForm = () => {
    setFormData({
      id: "",
      EquipmentName: "",
      EquipmentStatus: "",
      EquipmentType: "",
      FieldID: "",
      StaffID: "",
    });
    setIsFormVisible(false);
  };
  
  const handleEditEquipment  = (equipment: any) => {
  setFormData(equipment); // Populate form fields with existing crop data
};
const handleSaveEdit = () => {
  dispatch(updateItem(formData)); // Dispatch update action
  setFormData({
    id: "",
    EquipmentName: "",
    EquipmentStatus: "",
    EquipmentType: "",
    FieldID: "",
    StaffID: "",
  }); // Reset form
}; 
const handleCancelEdit = () => {
  setFormData({
    id: "",
    EquipmentName: "",
    EquipmentStatus: "",
    EquipmentType: "",
    FieldID: "",
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
        <h1 className="PageHeader">Equipment Management</h1>
        <p className="PageSubHead">Manages agricultural equipment used in various operations.</p>

      {/* Toggle Add Crop Form Button */}
      <button className="add-crop-btn" onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? "Close Form" : "Add Equipment"}
        </button>

        {isFormVisible && (
        <div className="add-crop-form">

      <div className="input-group">
      <label htmlFor="id">Equipment Id:</label>
        <input type="text" placeholder="Equipment ID" value={formData.id || getNextId()} readOnly />
      </div>
      
      <div className="input-group">
      <label htmlFor="EquipmentName">Equipment Name:</label>
          <input type="text" placeholder="Equipment Name" value={formData.EquipmentName} onChange={(e) => handleInputChange(e, "EquipmentName")} />
      </div>

      <div className="input-group">
      <label htmlFor="EquipmentStatus">Equipment Status:</label>
          <select  id="EquipmentStatus" value={formData.EquipmentStatus} onChange={(e) => handleInputChange(e, "EquipmentStatus")}>
            <option value="">Select Equipment Status</option>
            <option value="Available">Available</option>
            <option value="In Use">In Use</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Out of Order">Out of Order</option>
          </select>
      </div>

      <div className="input-group">
      <label htmlFor="EquipmentType">Equipment Type:</label>
          <select  id="EquipmentType" value={formData.EquipmentType} onChange={(e) => handleInputChange(e, "EquipmentType")}>
            <option value="">Select Equipment Type</option>
            <option value="Tractor">Tractor</option>
            <option value="Harvester">Harvester</option>
            <option value="Sprayer">Sprayer</option>
            <option value="Plow">Plow</option>
            <option value="Seeder">Seeder</option>
          </select>
      </div>

      <div className="input-group">
      <label htmlFor="FieldID">Field Id:</label>
          <select value={formData.FieldID} onChange={(e) => handleInputChange(e, "FieldID")}>
              <option value="">Select Field ID</option>
              <option value="F001">F001</option>
              <option value="F002">F002</option>
              <option value="F003">F003</option>
          </select>
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

          <button className="save-btn" onClick={handleAdd}>Save Crop</button>
        </div>
        )}
      <div className="table-container mt-4">
        <table className="table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th>Equipment ID</th>
              <th>EquipmentName</th>
              <th>EquipmentStatus</th>
              <th>EquipmentType</th>
              <th>Field ID</th>
              <th>Staff ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipmentItems .map((equipment) => (
              <tr key={equipment.id}>
                <td>{equipment.id}</td>

                {/* Editable Category */}
      <td>
        {formData.id === equipment.id ? (
          <input
          type="text"
          value={formData.EquipmentName}
          onChange={(e) => handleInputChange(e, "EquipmentName")}
        />
        ) : (
          equipment.EquipmentName
        )}
      </td>

      {/* Editable Common Name */}
      <td>
        {formData.id === equipment.id ? (
          <select
          value={formData.EquipmentStatus}
          onChange={(e) => handleInputChange(e, "EquipmentStatus")}
        >
          <option value="Available">Available</option>
          <option value="In Use">In Use</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Out of Order">Out of Order</option>
        </select>
        ) : (
          equipment.EquipmentStatus
        )}
      </td>

      {/* Editable Image */}
      <td>
        {formData.id === equipment.id ? (
           <select
           value={formData.EquipmentType}
           onChange={(e) => handleInputChange(e, "EquipmentType")}
         >
           <option value="Tractor">Tractor</option>
           <option value="Harvester">Harvester</option>
           <option value="Sprayer">Sprayer</option>
           <option value="Plow">Plow</option>
           <option value="Seeder">Seeder</option>
         </select>
        ) : (
          equipment.EquipmentType
        )}
      </td>

      {/* Editable Scientific Name */}
      <td>
        {formData.id === equipment.id ? (
           <select
           value={formData.FieldID}
           onChange={(e) => handleInputChange(e, "FieldID")}
         >
           <option value="F001">F001</option>
           <option value="F002">F002</option>
           <option value="F003">F003</option>
         </select>
        ) : (
          equipment.FieldID
        )}
      </td>

      {/* Editable Season */}
      <td>
        {formData.id === equipment.id ? (
          <select
          value={formData.StaffID}
          onChange={(e) => handleInputChange(e, "StaffID")}
        >
          <option value="S001">S001</option>
          <option value="S002">S002</option>
          <option value="S003">S003</option>
        </select>
        ) : (
          equipment.StaffID
        )}
      </td>

      

      {/* Actions - Edit, Save, Cancel, Delete */}
      <td>
        {formData.id === equipment.id ? (
          <>
            <button className="save-btn btn-outline-success" onClick={handleSaveEdit}>💾</button>
            <button className="cancel-btn" onClick={handleCancelEdit}>❌</button>
          </>
        ) : (
          <>
            <button className="edit-btn btn-outline-primary" onClick={() => handleEditEquipment (equipment)}>✏️</button>
            <button className="delete-btn btn-outline-danger" onClick={() => handleDeleteEquipment (equipment.id)}>🗑️</button>
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

export default Equipment;