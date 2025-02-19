import React, { useState } from "react";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./pagesCss/Pages.css";
import fieldImage from "../../assets/vehicle.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";


const mockVehicleData = [
  {
    VehicleID: "V001",
    VehicleCategory: "Car",
    FuelType: "Petrol",
    LicensePlateNumber: "ABC-8233",
    VehicleRemarks: "New",
    VehicleStatus: "Using",
    StaffID: "S001",
  },
];

const Vehicle: React.FC = () => {
  const [Vehicle, setVehicle] = useState(mockVehicleData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedVehicle, setEditedVehicle] = useState<any>({});
  const [newVehicle, setNewVehicle] = useState<any>({});
  const [showAddForm, setShowAddForm] = useState(false);

  const handleEditClick = (vehicle: any) => {
    setEditingId(vehicle.VehicleID); 
    setEditedVehicle({ ...vehicle });
  };
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setEditedVehicle((prev: any) => ({ ...prev, [field]: e.target.value }));
  };
  
  

  const handleNewVehicleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    setNewVehicle((prev: any) => ({ ...prev, [field]: e.target.value }));
  };
  

  const handleSaveClick = () => {
    setVehicle((prev) =>
      prev.map((vehicle) => (vehicle.VehicleID === editingId ? editedVehicle : vehicle))
    );
    setEditingId(null);
    setEditedVehicle({});
  };
  

  const handleAddVehicle = () => {
    setVehicle([...Vehicle, { ...newVehicle, VehicleID: `V00${Vehicle.length + 1}` }]);
    setShowAddForm(false);
    setNewVehicle({});
  };

  const handleDeleteClick = (vehicleId: string) => {
    setVehicle(Vehicle.filter(crop => crop.VehicleID !== vehicleId));
  };
  

  return (
    <div className="app-container">
      <HeaderContent />
      <BodyContent>
        <h1 className="PageHeader">Vehicle Management</h1>
        <p className="PageSubHead">Oversees vehicle management and allocations for staff and operations.</p>

        <button className="add-crop-btn" onClick={() => setShowAddForm(!showAddForm)}>
          <i className="fas fa-plus-circle me-2"></i> {showAddForm ? "Cancel" : "Add New Vehicle"}
        </button>

        {showAddForm && (
          <div className="add-crop-form">

        <div className="input-group">
        <label htmlFor="VehicleCategory">Vehicle Category:</label>
          <select onChange={(e) => handleNewVehicleChange(e, "VehicleCategory")}>
            <option value="">Select Vehicle Category</option>
            <option value="TRUCK">TRUCK</option>
            <option value="TRACTOR">TRACTOR</option>
            <option value="MOTORBIKE">MOTORBIKE</option>
            <option value="LORRY">LORRY</option>
          </select>
        </div>
        
        <div className="input-group">
        <label htmlFor="FuelType">Fuel Type:</label>
          <select onChange={(e) => handleNewVehicleChange(e, "FuelType")}>
            <option value="">Select FuelType </option>
            <option value="DIESEL">DIESEL</option>
            <option value="PETROL">PETROL</option>
          </select>
        </div>


            <div className="input-group">
            <label htmlFor="LicensePlateNumber">License Plate Number:</label>
            <input type="text"     placeholder="Enter License Plate Number (e.g., ABC-123)" pattern="[A-Za-z]{3}-\d{3}"
             title="License Plate Number should follow the format: ABC-123 (3 letters, a hyphen, followed by 3 digits)"
             required 
             onChange={(e) => handleNewVehicleChange(e, "LicensePlateNumber")} />
            </div>

            <div className="input-group">
            <label htmlFor="VehicleRemarks">Vehicle Remarks:</label>
            <select onChange={(e) => handleNewVehicleChange(e, "VehicleRemarks")}>
            <option value="">Select VehicleRemarks </option>
            <option value="OLD">OLD</option>
            <option value="NEW">NEW</option>
            <option value="DAMAGED">DAMAGED</option>
            <option value="USED">USED</option>
            </select>
            </div>

           <div className="input-group">
           <label htmlFor="VehicleStatus">Vehicle Status:</label>
            <select onChange={(e) => handleNewVehicleChange(e, "VehicleStatus")}>
            <option value="">Select VehicleStatus </option>
            <option value="AVAILABLE">AVAILABLE</option>
            <option value="UNDER_MAINTENANCE">UNDER_MAINTENANCE</option>
            </select>
            </div>

            <div className="input-group">
            <label htmlFor="StaffID">Staff ID:</label>
              <select onChange={(e) => handleNewVehicleChange(e, "StaffID")}>
                <option value="">Select Staff ID</option>
                <option value="S001">S001</option>
                <option value="S002">S002</option>
                <option value="S003">S003</option>
                <option value="S004">S004</option>
              </select>
            </div>


            <div className="form-actions">
            <button className="save-btn" onClick={handleAddVehicle}>Save Staff</button>
            </div>
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
              {Vehicle.map((vehicle) => (
                <tr key={vehicle.VehicleID}>
                  <td>{vehicle.VehicleID}</td>
                  <td>{editingId === vehicle.VehicleID ? (<input type="text"  className="form-control" value={editedVehicle.VehicleCategory} onChange={(e) => handleInputChange(e, "VehicleCategory")} />) : (vehicle.VehicleCategory)}</td>
                  <td>{editingId === vehicle.VehicleID ? (<input type="text"  className="form-control" value={editedVehicle.FuelType} onChange={(e) => handleInputChange(e, "FuelType")} />) : (vehicle.FuelType)}</td>

                  <td>{editingId === vehicle.VehicleID ? (<input type="text" className="form-control" value={editedVehicle.LicensePlateNumber} onChange={(e) => handleInputChange(e, "LicensePlateNumber")} />) : (vehicle.LicensePlateNumber)}</td>
                  <td>{editingId === vehicle.VehicleID ? (<input type="text" className="form-control" value={editedVehicle.VehicleRemarks} onChange={(e) => handleInputChange(e, "VehicleRemarks")} />) : (vehicle.VehicleRemarks)}</td>
                  <td>{editingId === vehicle.VehicleID ? (<input type="text" className="form-control" value={editedVehicle.VehicleStatus} onChange={(e) => handleInputChange(e, "VehicleStatus")} />) : (vehicle.VehicleStatus)}</td>
                  <td>{editingId === vehicle.VehicleID ? (<input type="text" className="form-control" value={editedVehicle.StaffID} onChange={(e) => handleInputChange(e, "StaffID")} />) : (vehicle.StaffID)}</td>
                  <td>
                    {editingId === vehicle.VehicleID ? (
                      <button className="btn btn-outline-success btn-sm" onClick={handleSaveClick}>
                        <i className="fas fa-save"></i> 
                      </button>
                    ) : (
                      <button className="btn btn-outline-primary btn-sm me-2" onClick={() => handleEditClick(vehicle)}>
                        <i className="fas fa-edit"></i> 
                      </button>
                    )}
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDeleteClick(vehicle.VehicleID)}>
                      <i className="fas fa-trash"></i> 
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

export default Vehicle;
