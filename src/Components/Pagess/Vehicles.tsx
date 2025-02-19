import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addItem ,removeItem,updateItem} from "../../Reducer/slice/VehicleItem";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./pagesCss/Pages.css";
import fieldImage from "../../assets/crop1.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";



const Vehicle: React.FC = () => {
  const vehicleItems  = useSelector((state: RootState) => state.vehicle.items);
  const dispatch = useDispatch();
  
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
  
    id: "",
    VehicleCategory: "",
    FuelType:"",
    LicensePlateNumber: "",
    VehicleRemarks: "",
    VehicleStatus: "",
    StaffID: "",

  });

  const getNextId = () => {
    const existingIds = vehicleItems .map((vehicle) => parseInt(vehicle.id.replace("V", ""), 10) || 0);
    const nextId = Math.max(0, ...existingIds) + 1;
    return `V${String(nextId).padStart(3, "0")}`;
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
    if (formData.StaffID.trim() === "" || formData.LicensePlateNumber.trim() === "") {
      alert("Common Name and Category are required!");
      return;
    }
    
    
    const newData = {
      ...formData,
      id: formData.id || getNextId(), // Set new ID if not editing
    };
    
  
    const existingVehicle = vehicleItems .find((vehicle) => vehicle.id === formData.id);
  
    if (existingVehicle) {
      dispatch(updateItem(newData)); 
    } else {
      dispatch(addItem( newData)); // Add new crop
    }
  
    resetForm();

  };
  const resetForm = () => {
    setFormData({
      id: "",
      VehicleCategory: "",
      FuelType:"",
      LicensePlateNumber: "",
      VehicleRemarks: "",
      VehicleStatus: "",
      StaffID: "",
    });
    setIsFormVisible(false);
  };
  
  const handleEdit  = (vehicle: any) => {
  setFormData(vehicle); // Populate form fields with existing crop data
};
const handleSaveEdit = () => {
  dispatch(updateItem(formData)); // Dispatch update action
  setFormData({
    id: "",
    VehicleCategory: "",
    FuelType:"",
    LicensePlateNumber: "",
    VehicleRemarks: "",
    VehicleStatus: "",
    StaffID: "",
  }); 
}; 
const handleCancelEdit = () => {
  setFormData({
      id: "",
      VehicleCategory: "",
      FuelType:"",
      LicensePlateNumber: "",
      VehicleRemarks: "",
      VehicleStatus: "",
      StaffID: "",
  }); 
};

const handleDelete  = (id: string) => {
  dispatch(removeItem(id)); 
};

  return (
    <div className="app-container">
      <HeaderContent />
      <BodyContent>
        <h1 className="PageHeader">Vehicle Management</h1>
        <p className="PageSubHead">Oversees vehicle management and allocations for staff and operations.</p>

      {/* Toggle Add Crop Form Button */}
      <button className="add-crop-btn" onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? "Close Form" : "Add New Vehicle"}
        </button>

        {isFormVisible && (
        <div className="add-crop-form">

      <div className="input-group">
      <label htmlFor="id">Vehicle Id:</label>
        <input type="text" placeholder="Vehicle ID" value={formData.id || getNextId()} readOnly />
      </div>
      
      <div className="input-group">
          <label htmlFor="VehicleCategory">Vehicle Category:</label>
        <select  id="VehicleCategory" value={formData.VehicleCategory} onChange={(e) => handleInputChange(e, "VehicleCategory")}>
          <option value="">Select Vehicle Category</option>
          <option value="Tractor">Tractor</option>
          <option value="Harvester">Harvester</option>
          <option value="Seeder">Seeder</option>
          <option value="Sprayer">Sprayer</option>
          <option value="Plow">Plow</option>
          <option value="Cultivator">Cultivator</option>
          <option value="Tiller">Tiller</option>
        </select>
      </div>


      <div className="input-group">
      <label htmlFor="FuelType">Fuel Type:</label>
          <select  id="FuelType" value={formData.FuelType} onChange={(e) => handleInputChange(e, "FuelType")}>
            <option value="">Select Fuel Type</option>
            <option value="Diesel">Diesel</option>
            <option value="Petrol">Petrol</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
            <option value="CNG">CNG (Compressed Natural Gas)</option>
          </select>
      </div>

      <div className="input-group">
       <label htmlFor="LicensePlateNumber">License Plate Number:</label>
          <input 
            type="text" 
            id="LicensePlateNumber" 
            placeholder="Enter License Plate Number" 
            value={formData.LicensePlateNumber} 
            onChange={(e) => handleInputChange(e, "LicensePlateNumber")} 
          />
      </div>


      <div className="input-group">
      <label htmlFor="VehicleRemarks">Vehicle Remarks:</label>
          <select value={formData.VehicleRemarks} onChange={(e) => handleInputChange(e, "VehicleRemarks")}>
              <option value="">Select Vehicle Remarks</option>
              <option value="Well Maintained">Well Maintained</option>
              <option value="Needs Repair">Needs Repair</option>
              <option value="Under Maintenance">Under Maintenance</option>
              <option value="Out of Service">Out of Service</option>
          </select>
      </div>

      <div className="input-group">
      <label htmlFor="VehicleStatus">Vehicle Status:</label>
          <select value={formData.VehicleStatus} onChange={(e) => handleInputChange(e, "VehicleStatus")}>
              <option value="">Select Vehicle Status</option>
              <option value="Active">Active</option>
              <option value="In Use">In Use</option>
              <option value="Under Maintenance">Under Maintenance</option>
              <option value="Decommissioned">Decommissioned</option>
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
              <th>Vehicle ID</th>
              <th>Vehicle Category</th>
              <th>Fuel Type</th>
              <th>License Plate Number</th>
              <th>Vehicle Remarks</th>
              <th>Vehicle Status</th>
              <th>Staff ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicleItems .map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.id}</td>

                {/* Editable Category */}
      <td>
        {formData.id === vehicle.id ? (
            <select
            value={formData.VehicleCategory}
            onChange={(e) => handleInputChange(e, "VehicleCategory")}
          >
            <option value="Tractor">Tractor</option>
            <option value="Harvester">Harvester</option>
            <option value="Seeder">Seeder</option>
            <option value="Sprayer">Sprayer</option>
            <option value="Plow">Plow</option>
            <option value="Cultivator">Cultivator</option>
            <option value="Tiller">Tiller</option>
          </select>
        ) : (
          vehicle.VehicleCategory
        )}
      </td>

      {/* Editable Common Name */}
      <td>
        {formData.id === vehicle.id ? (
          <select
          value={formData.FuelType}
          onChange={(e) => handleInputChange(e, "FuelType")}
        >
          <option value="Diesel">Diesel</option>
          <option value="Petrol">Petrol</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
          <option value="CNG">CNG</option>
        </select>

        ) : (
          vehicle.FuelType
        )}
      </td>

      {/* Editable Image */}
      <td>
        {formData.id === vehicle.id ? (
           <input
           type="text"
           value={formData.LicensePlateNumber}
           onChange={(e) => handleInputChange(e, "LicensePlateNumber")}
         />
        ) : (
          vehicle.LicensePlateNumber
        )}
      </td>

      {/* Editable Scientific Name */}
      <td>
        {formData.id === vehicle.id ? (
             <select
             value={formData.VehicleRemarks}
             onChange={(e) => handleInputChange(e, "VehicleRemarks")}
           >
             <option value="Well Maintained">Well Maintained</option>
             <option value="Needs Repair">Needs Repair</option>
             <option value="Under Maintenance">Under Maintenance</option>
             <option value="Out of Service">Out of Service</option>
           </select>
        ) : (
          vehicle.VehicleRemarks
        )}
      </td>

      {/* Editable Season */}
      <td>
        {formData.id === vehicle.id ? (
         <select
         value={formData.VehicleStatus}
         onChange={(e) => handleInputChange(e, "VehicleStatus")}
       >
         <option value="Active">Active</option>
         <option value="In Use">In Use</option>
         <option value="Under Maintenance">Under Maintenance</option>
         <option value="Decommissioned">Decommissioned</option>
       </select>
        ) : (
          vehicle.VehicleStatus
        )}
      </td>

       {/* Editable Staff ID */}
       <td>
        {formData.id === vehicle.id ? (
          <select
            value={formData.StaffID}
            onChange={(e) => handleInputChange(e, "StaffID")}
          >
            <option value="S001">S001</option>
            <option value="S002">S002</option>
            <option value="S003">S003</option>
          </select>
        ) : (
          vehicle.StaffID
        )}
      </td>

      

      {/* Actions - Edit, Save, Cancel, Delete */}
      <td>
        {formData.id === vehicle.id ? (
          <>
            <button className="save-btn btn-outline-success" onClick={handleSaveEdit}>💾</button>
            <button className="cancel-btn" onClick={handleCancelEdit}>❌</button>
          </>
        ) : (
          <>
            <button className="edit-btn btn-outline-primary" onClick={() => handleEdit (vehicle)}>✏️</button>
            <button className="delete-btn btn-outline-danger" onClick={() => handleDelete (vehicle.id)}>🗑️</button>
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

export default Vehicle;