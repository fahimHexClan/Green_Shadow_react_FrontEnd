import React, { useState } from "react";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./pagesCss/Crop.css";

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
    setEditedCrop({ ...editedCrop, [field]: e.target.value });
  };

  const handleNewCropChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setNewCrop({ ...newCrop, [field]: e.target.value });
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

        <button className="btn btn-success" onClick={() => setShowAddForm(!showAddForm)}>
          <i className="fas fa-plus-circle me-2"></i> {showAddForm ? "Cancel" : "Add New Crop"}
        </button>

        {showAddForm && (
          <div className="add-crop-form">
            <input type="text" placeholder="Crop Category" onChange={(e) => handleNewCropChange(e, "cropCategory")} />
            <input type="text" placeholder="Common Name" onChange={(e) => handleNewCropChange(e, "commonName")} />
            <input type="text" placeholder="Scientific Name" onChange={(e) => handleNewCropChange(e, "scientificName")} />
            <input type="text" placeholder="Season" onChange={(e) => handleNewCropChange(e, "season")} />
            <input type="text" placeholder="Field ID" onChange={(e) => handleNewCropChange(e, "fieldId")} />
            <input type="text" placeholder="Log ID" onChange={(e) => handleNewCropChange(e, "logId")} />
            <button className="btn btn-primary" onClick={handleAddCrop}>Save Crop</button>
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
                  <td><img src={crop.image} alt="Crop" className="img-fluid" width="100" /></td>
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
      </BodyContent>
    </div>
  );
};

export default Crop;
