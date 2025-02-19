import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addItem ,removeCropItem,updateItem} from "../../Reducer/slice/CropItem";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./pagesCss/Pages.css";
import fieldImage from "../../assets/crop1.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";



const Crop: React.FC = () => {
  const crops = useSelector((state: RootState) => state.crop.items);
  const dispatch = useDispatch();
  
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    Category: "",
    CommonName: "",
    SciencetificName: "",
    Image: "",
    Season: "",
    FieldId: "",
    LogId: "",
  });

  const getNextCropId = () => {
    const existingIds = crops.map((crop) => parseInt(crop.id.replace("C", ""), 10) || 0);
    const nextId = Math.max(0, ...existingIds) + 1;
    return `C${String(nextId).padStart(3, "0")}`;
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
  const handleAddCrop = () => {
    if (formData.CommonName.trim() === "" || formData.Category.trim() === "") {
      alert("Common Name and Category are required!");
      return;
    }
    const newCropData = {
      ...formData,
      id: formData.id || getNextCropId(), // Set new ID if not editing
    };
    
  
    const existingCrop = crops.find((crop) => crop.id === formData.id);
  
    if (existingCrop) {
      dispatch(updateItem(newCropData)); 
    } else {
      dispatch(addItem( newCropData)); // Add new crop
    }
  
    resetForm();

  };
  const resetForm = () => {
    setFormData({
      id: "",
      Category: "",
      CommonName: "",
      SciencetificName: "",
      Image: "",
      Season: "",
      FieldId: "",
      LogId: "",
    });
    setIsFormVisible(false);
  };
  
  const handleEditCrop = (crop: any) => {
  setFormData(crop); // Populate form fields with existing crop data
};
const handleSaveEdit = () => {
  dispatch(updateItem(formData)); // Dispatch update action
  setFormData({
    id: "",
    Category: "",
    CommonName: "",
    SciencetificName: "",
    Image: "",
    Season: "",
    FieldId: "",
    LogId: "",
  }); // Reset form
}; 
const handleCancelEdit = () => {
  setFormData({
    id: "",
    Category: "",
    CommonName: "",
    SciencetificName: "",
    Image: "",
    Season: "",
    FieldId: "",
    LogId: "",
  }); // Reset form without saving
};

const handleDeleteCrop = (id: string) => {
  dispatch(removeCropItem(id)); // Dispatch delete action
};



  return (
    <div className="app-container">
      <HeaderContent />
      <BodyContent>
        <h1 className="PageHeader">Crop Management</h1>
        <p className="PageSubHead">Handles information related to crop types and growth stages.</p>

      {/* Toggle Add Crop Form Button */}
      <button className="add-crop-btn" onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? "Close Form" : "Add Crop"}
        </button>

        {isFormVisible && (
        <div className="add-crop-form">

      <div className="input-group">
      <label htmlFor="id">Crop Id:</label>
        <input type="text" placeholder="Crop ID" value={formData.id || getNextCropId()} readOnly />
      </div>

      <div className="input-group">
      <label htmlFor="Category">Crop Category:</label>
          <select  id="category" value={formData.Category} onChange={(e) => handleInputChange(e, "Category")}>
            <option value="">Select Crop Category</option>
            <option value="Veg">Vegetable</option>
            <option value="Fruit">Fruit</option>
            <option value="Grain">Grain</option>
          </select>
      </div>
          
      <div className="input-group">
      <label htmlFor="CommonName">Common Name:</label>
          <input type="text" placeholder="Common Name" value={formData.CommonName} onChange={(e) => handleInputChange(e, "CommonName")} />
      </div>

      <div className="input-group">
      <label htmlFor="Image">Crop Image:</label>
          <input type="file" accept="image/*" onChange={(e) => handleInputChange(e, "Image")} />
      </div>

      <div className="input-group">
      <label htmlFor="SciencetificName">Sciencetific Name:</label>
          <input type="text" placeholder="Scientific Name" value={formData.SciencetificName} onChange={(e) => handleInputChange(e, "SciencetificName")} />

      </div>

      <div className="input-group">
      <label htmlFor="Season">Season:</label>
          <select onChange={(e) => handleInputChange(e, "Season")}>
            <option value="">Select Season</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
      </div>

      <div className="input-group">
      <label htmlFor="FieldId">Field Id:</label>
          <select value={formData.FieldId} onChange={(e) => handleInputChange(e, "FieldId")}>
              <option value="">Select Field ID</option>
              <option value="F001">F001</option>
              <option value="F002">F002</option>
              <option value="F003">F003</option>
          </select>
      </div>

      <div className="input-group">
      <label htmlFor="LogId">Log Id:</label>
          <select value={formData.LogId} onChange={(e) => handleInputChange(e, "LogId")}>
            <option value="">Select Log ID</option>
            <option value="L001">L001</option>
            <option value="L002">L002</option>
            <option value="L003">L003</option>
          </select>
      </div>

          <button className="save-btn" onClick={handleAddCrop}>Save Crop</button>
        </div>
        )}
      <div className="table-container mt-4">
        <table className="table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th>Crop ID</th>
              <th>Category</th>
              <th>Common Name</th>
              <th>Image</th>
              <th>Scientific Name</th>
              <th>Season</th>
              <th>Field ID</th>
              <th>Log ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {crops.map((crop) => (
              <tr key={crop.id}>
                <td>{crop.id}</td>

                {/* Editable Category */}
      <td>
        {formData.id === crop.id ? (
          <select
            value={formData.Category}
            onChange={(e) => handleInputChange(e, "Category")}
          >
            <option value="">Select Category</option>
            <option value="Veg">Vegetable</option>
            <option value="Fruit">Fruit</option>
            <option value="Grain">Grain</option>
          </select>
        ) : (
          crop.Category
        )}
      </td>

      {/* Editable Common Name */}
      <td>
        {formData.id === crop.id ? (
          <input
            type="text"
            value={formData.CommonName}
            onChange={(e) => handleInputChange(e, "CommonName")}
          />
        ) : (
          crop.CommonName
        )}
      </td>

      {/* Editable Image */}
      <td>
        {formData.id === crop.id ? (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleInputChange(e, "Image")}
          />
        ) : crop.Image ? (
          <img src={crop.Image} alt="Crop" style={{ width: "80px", height: "80px" }} />
        ) : (
          "No Image"
        )}
      </td>

      {/* Editable Scientific Name */}
      <td>
        {formData.id === crop.id ? (
          <input
            type="text"
            value={formData.SciencetificName}
            onChange={(e) => handleInputChange(e, "SciencetificName")}
          />
        ) : (
          crop.SciencetificName
        )}
      </td>

      {/* Editable Season */}
      <td>
        {formData.id === crop.id ? (
          <select
            value={formData.Season}
            onChange={(e) => handleInputChange(e, "Season")}
          >
            <option value="">Select Season</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
        ) : (
          crop.Season
        )}
      </td>

      {/* Editable Field ID */}
      <td>
        {formData.id === crop.id ? (
         <select value={formData.FieldId} onChange={(e) => handleInputChange(e, "FieldId")}>
         <option value="">Select Field ID</option>
         <option value="F001">F001</option>
         <option value="F002">F002</option>
         <option value="F003">F003</option>
       </select>
       
        ) : (
          crop.FieldId
        )}
      </td>

      {/* Editable Log ID */}
      <td>
        {formData.id === crop.id ? (
          <select value={formData.LogId} onChange={(e) => handleInputChange(e, "LogId")}>
          <option value="">Select Log ID</option>
          <option value="L001">L001</option>
          <option value="L002">L002</option>
          <option value="L003">L003</option>
        </select>
        ) : (
          crop.LogId
        )}
      </td>

      {/* Actions - Edit, Save, Cancel, Delete */}
      <td>
        {formData.id === crop.id ? (
          <>
            <button className="save-btn btn-outline-success" onClick={handleSaveEdit}>💾</button>
            <button className="cancel-btn" onClick={handleCancelEdit}>❌</button>
          </>
        ) : (
          <>
            <button className="edit-btn btn-outline-primary" onClick={() => handleEditCrop(crop)}>✏️</button>
            <button className="delete-btn btn-outline-danger" onClick={() => handleDeleteCrop(crop.id)}>🗑️</button>
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

export default Crop;