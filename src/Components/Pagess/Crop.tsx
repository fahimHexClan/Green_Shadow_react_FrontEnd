import React, { useState } from "react";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./pagesCss/Crop.css";
import fieldImage from "../../assets/crop1.jpg";

const mockCropData = [
  {
    cropId: "C001",
    cropCategory: "Veg",
    commonName: "Carrot",
    image: "assets/field1.jpg",
    scientificName: "GOWWAA",
    season: "Winter",
    fieldId: "F001",
    logId: "L001",
  },
];

const Crop: React.FC = () => {
  const [crops, setCrops] = useState(mockCropData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedCrop, setEditedCrop] = useState<any>({});
  const [newCrop, setNewCrop] = useState<any>({});
  const [showAddForm, setShowAddForm] = useState(false);

  const handleEditClick = (crop: any) => {
    setEditingId(crop.cropId);
    setEditedCrop({ ...crop });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (field === "image") {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setEditedCrop((prev: any) => ({ ...prev, image: reader.result as string }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setEditedCrop((prev: any) => ({ ...prev, [field]: e.target.value }));
    }
  };
  

  const handleNewCropChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    setNewCrop((prev: any) => ({ ...prev, [field]: e.target.value }));
  };
  

  const handleSaveClick = () => {
    setCrops(crops.map(crop => (crop.cropId === editingId ? editedCrop : crop)));
    setEditingId(null);
  };

  const handleAddCrop = () => {
    setCrops([...crops, { ...newCrop, cropId: `C00${crops.length + 1}` }]);
    setShowAddForm(false);
    setNewCrop({});
  };

  const handleDeleteClick = (cropId: string) => {
    setCrops(crops.filter(crop => crop.cropId !== cropId));
  };
  

  return (
    <div className="app-container">
      <HeaderContent />
      <BodyContent>
        <h1 className="PageHeader">Crop Management</h1>
        <p className="PageSubHead">Handles information related to crop types and growth stages.</p>

        <button className="add-crop-btn" onClick={() => setShowAddForm(!showAddForm)}>
          <i className="fas fa-plus-circle me-2"></i> {showAddForm ? "Cancel" : "Add New Crop"}
        </button>

        {showAddForm && (
          <div className="add-crop-form">

        <div className="input-group">
          <select onChange={(e) => handleNewCropChange(e, "cropCategory")}>
            <option value="">Select Crop Category</option>
            <option value="Veg">Vegetable</option>
            <option value="Fruit">Fruit</option>
            <option value="Grain">Grain</option>
          </select>
        </div>


            <div className="input-group">
            <input type="text" placeholder="Common Name" onChange={(e) => handleNewCropChange(e, "commonName")} />
            </div>

            <div className="input-group">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                      setNewCrop((prev:any) => ({ ...prev, image: reader.result as string }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>


            <div className="input-group">
            <input type="text" placeholder="Scientific Name" onChange={(e) => handleNewCropChange(e, "scientificName")} />
            </div>

            <div className="input-group">
            <select onChange={(e) => handleNewCropChange(e, "season")}>
              <option value="">Select Season</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
            </select>
          </div>


            <div className="input-group">
              <select onChange={(e) => handleNewCropChange(e, "fieldId")}>
                <option value="">Select Field ID</option>
                <option value="F001">F001</option>
                <option value="F002">F002</option>
                <option value="F003">F003</option>
                <option value="F004">F004</option>
              </select>
            </div>


            <div className="input-group">
              <select onChange={(e) => handleNewCropChange(e, "logId")}>
                <option value="">Select Log ID</option>
                <option value="L001">L001</option>
                <option value="L002">L002</option>
                <option value="L003">L003</option>
                <option value="L004">L004</option>
              </select>
            </div>


            <div className="form-actions">
            <button className="save-btn" onClick={handleAddCrop}>Save Crop</button>
            </div>
          </div>
        )}

        <div className="table-container mt-4">
          <table className="table table-striped table-hover align-middle">
            <thead>
              <tr>
                <th>Crop ID</th>
                <th>Crop Category</th>
                <th>Common Name</th>
                <th>Crop Image</th>
                <th>Scientific Name</th>
                <th>Season</th>
                <th>Field ID</th>
                <th>Log ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {crops.map((crop) => (
                <tr key={crop.cropId}>
                  <td>{crop.cropId}</td>
                  <td>{editingId === crop.cropId ? (<input type="text" value={editedCrop.cropCategory} onChange={(e) => handleInputChange(e, "cropCategory")} />) : (crop.cropCategory)}</td>
                  <td>{editingId === crop.cropId ? (<input type="text" value={editedCrop.commonName} onChange={(e) => handleInputChange(e, "commonName")} />) : (crop.commonName)}</td>
                  <td>
  {editingId === crop.cropId ? (
    <>
      <input type="file" accept="image/*" onChange={(e) => handleInputChange(e, "image")} />
      {editedCrop.image && (
        <img
          src={editedCrop.image}
          alt="Crop Preview"
          className="img-fluid mt-2"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "30px",
            marginRight: "50%",
          }}
        />
      )}
    </>
  ) : (
    crop.image ? (
      <img
        src={crop.image}
        alt="Crop"
        className="img-fluid"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "160px",
        }}
      />
    ) : (
      "No Image"
    )
  )}
</td>


                  <td>{editingId === crop.cropId ? (<input type="text" value={editedCrop.scientificName} onChange={(e) => handleInputChange(e, "scientificName")} />) : (crop.scientificName)}</td>
                  <td>{editingId === crop.cropId ? (<input type="text" value={editedCrop.season} onChange={(e) => handleInputChange(e, "season")} />) : (crop.season)}</td>
                  <td>{editingId === crop.cropId ? (<input type="text" value={editedCrop.fieldId} onChange={(e) => handleInputChange(e, "fieldId")} />) : (crop.fieldId)}</td>
                  <td>{editingId === crop.cropId ? (<input type="text" value={editedCrop.logId} onChange={(e) => handleInputChange(e, "logId")} />) : (crop.logId)}</td>
                  <td>
                    {editingId === crop.cropId ? (
                      <button className="btn btn-outline-success btn-sm" onClick={handleSaveClick}>
                        <i className="fas fa-save"></i> Save
                      </button>
                    ) : (
                      <button className="btn btn-outline-primary btn-sm" onClick={() => handleEditClick(crop)}>
                        <i className="fas fa-edit"></i> Edit
                      </button>
                    )}
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDeleteClick(crop.cropId)}>
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
      <img className="cropImage" src={fieldImage} alt="Crop" />
    </div>
      </BodyContent>
    </div>
  );
};

export default Crop;
