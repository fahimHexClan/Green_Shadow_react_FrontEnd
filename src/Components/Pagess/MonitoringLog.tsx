import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addItem ,removeItem,updateItem} from "../../Reducer/slice/MonitorLogItem";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./pagesCss/Pages.css";
import fieldImage from "../../assets/crop1.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";



const MonitorLog: React.FC = () => {
  const monitorLogItems  = useSelector((state: RootState) => state.monitorLog.items);
  const dispatch = useDispatch();
  
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    MonitoringDate: "",
    MonitoringLogDetails:"",
    MonitoringImage: "",

  });

  const getNextId = () => {
    const existingIds = monitorLogItems .map((monitorLog) => parseInt(monitorLog.id.replace("M", ""), 10) || 0);
    const nextId = Math.max(0, ...existingIds) + 1;
    return `M${String(nextId).padStart(3, "0")}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    if (field === "MonitoringImage") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setFormData((prev) => ({ ...prev, MonitoringImage: reader.result as string }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    }
  };
  const handleAdd = () => {
    if (formData.MonitoringLogDetails.trim() === "" || formData.MonitoringDate.trim() === "") {
      alert("Common Name and Category are required!");
      return;
    }
    
    
    const newData = {
      ...formData,
      id: formData.id || getNextId(), // Set new ID if not editing
    };
    
  
    const existingMonitorLog = monitorLogItems .find((monitorLog) => monitorLog.id === formData.id);
  
    if (existingMonitorLog) {
      dispatch(updateItem(newData)); 
    } else {
      dispatch(addItem( newData)); // Add new crop
    }
  
    resetForm();

  };
  const resetForm = () => {
    setFormData({
      id: "",
      MonitoringDate: "",
      MonitoringLogDetails:"",
      MonitoringImage: "",
    });
    setIsFormVisible(false);
  };
  
  const handleEdit  = (monitorLog: any) => {
  setFormData(monitorLog); // Populate form fields with existing crop data
};
const handleSaveEdit = () => {
  dispatch(updateItem(formData)); // Dispatch update action
  setFormData({
    id: "",
    MonitoringDate: "",
    MonitoringLogDetails:"",
    MonitoringImage: "",

  }); 
}; 
const handleCancelEdit = () => {
  setFormData({
    id: "",
    MonitoringDate: "",
    MonitoringLogDetails:"",
    MonitoringImage: "",

  }); 
};

const handleDelete  = (id: string) => {
  dispatch(removeItem(id)); 
};

  return (
    <div className="app-container">
      <HeaderContent />
      <BodyContent>
        <h1 className="PageHeader">Monitoring Management</h1>
        <p className="PageSubHead">Manages agricultural equipment used in various operations.</p>

      {/* Toggle Add Crop Form Button */}
      <button className="add-crop-btn" onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? "Close Form" : "Add MonitoringLog"}
        </button>

        {isFormVisible && (
        <div className="add-crop-form">

      <div className="input-group">
      <label htmlFor="id">MonitorLog Id:</label>
        <input type="text" placeholder="MonitorLog ID" value={formData.id || getNextId()} readOnly />
      </div>
      
      <div className="input-group">
        <label htmlFor="MonitoringDate">Monitoring Date:</label>
          <input 
              type="date" 
              id="MonitoringDate" 
              value={formData.MonitoringDate} 
              onChange={(e) => handleInputChange(e, "MonitoringDate")}
            />
          </div>



      <div className="input-group">
      <label htmlFor="MonitoringLogDetails">Monitoring Log Details:</label>
          <select  id="MonitoringLogDetails" value={formData.MonitoringLogDetails} onChange={(e) => handleInputChange(e, "MonitoringLogDetails")}>
          <option value="">Select Monitoring Log Details Type</option>
          <option value="Routine Check">Routine Check</option>
          <option value="Issue Identified">Issue Identified</option>
          <option value="Maintenance Required">Maintenance Required</option>
          <option value="Resolved Issue">Resolved Issue</option>
          <option value="Pending Investigation">Pending Investigation</option>
          </select>
      </div>

      <div className="input-group">
      <label htmlFor="MonitoringImage">Monitoring Image:</label>
          <input type="file" accept="image/*" onChange={(e) => handleInputChange(e, "MonitoringImage")} />
      </div>

          <button className="save-btn" onClick={handleAdd}>Save Crop</button>
        </div>
        )}
      <div className="table-container mt-4">
        <table className="table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th>Log ID</th>
              <th>Monitoring Date</th>
              <th>Monitoring Log Details</th>
              <th>Monitoring Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {monitorLogItems .map((monitorLog) => (
              <tr key={monitorLog.id}>
                <td>{monitorLog.id}</td>

                {/* Editable Category */}
      <td>
        {formData.id === monitorLog.id ? (
            <input
            type="date"
            value={formData.MonitoringDate}
            onChange={(e) => handleInputChange(e, "MonitoringDate")}
          />
        ) : (
          monitorLog.MonitoringDate
          
          )}
      </td>

      {/* Editable Common Name */}
      <td>
        {formData.id === monitorLog.id ? (
           <select
           value={formData.MonitoringLogDetails}
           onChange={(e) => handleInputChange(e, "MonitoringLogDetails")}
         >
           <option value="">Select Monitoring Log Details Type</option>
           <option value="Routine Check">Routine Check</option>
           <option value="Issue Identified">Issue Identified</option>
           <option value="Maintenance Required">Maintenance Required</option>
           <option value="Resolved Issue">Resolved Issue</option>
           <option value="Pending Investigation">Pending Investigation</option>
         </select>

        ) : (
          monitorLog.MonitoringLogDetails
        )}
      </td>

      {/* Editable Image */}
      <td>
        {formData.id === monitorLog.id ? (
            <input
            type="file"
            accept="image/*"
            onChange={(e) => handleInputChange(e, "MonitoringImage")}
          />
        ) : monitorLog.MonitoringImage ? (
          <img src={monitorLog.MonitoringImage} alt="Monitoring" width="50" />
        ) : (
          "No Image"
                  )}
      </td>
      

      {/* Actions - Edit, Save, Cancel, Delete */}
      <td>
        {formData.id === monitorLog.id ? (
          <>
            <button className="save-btn btn-outline-success" onClick={handleSaveEdit}>💾</button>
            <button className="cancel-btn" onClick={handleCancelEdit}>❌</button>
          </>
        ) : (
          <>
            <button className="edit-btn btn-outline-primary" onClick={() => handleEdit (monitorLog)}>✏️</button>
            <button className="delete-btn btn-outline-danger" onClick={() => handleDelete (monitorLog.id)}>🗑️</button>
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

export default MonitorLog;