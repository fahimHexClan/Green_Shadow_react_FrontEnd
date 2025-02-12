import React, { useState, useEffect } from "react";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./pagesCss/Crop.css";

const Crop: React.FC = () => {
  const [isAddCropModalOpen, setIsAddCropModalOpen] = useState(false);
  const [isUpdateCropModalOpen, setIsUpdateCropModalOpen] = useState(false);

  useEffect(() => {
    if (isAddCropModalOpen) {
      document.getElementById("addCropModal")?.focus();
    }
    if (isUpdateCropModalOpen) {
      document.getElementById("updateCropModal")?.focus();
    }
  }, [isAddCropModalOpen, isUpdateCropModalOpen]);

  const openAddCropModal = () => setIsAddCropModalOpen(true);
  const closeAddCropModal = () => setIsAddCropModalOpen(false);

  const openUpdateCropModal = () => setIsUpdateCropModalOpen(true);
  const closeUpdateCropModal = () => setIsUpdateCropModalOpen(false);

  return (
    <div className="app-container">
      <HeaderContent />
      <BodyContent>
        <h1 className="PageHeader">Crop Management</h1>
        <p className="PageSubHead">
          Handles information related to crop types and growth stages.
        </p>

        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addCropModal"
          onClick={openAddCropModal}
        >
          <i className="fas fa-plus-circle me-2"></i>Add New Crop
        </button>

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
              <tr>
                <td>C001</td>
                <td>Veg</td>
                <td>Carrot</td>
                <td>
                  <img
                    src="assets/field1.jpg"
                    alt="Crop Image 1"
                    className="img-fluid"
                    width="100"
                  />
                </td>
                <td>GOWWAA</td>
                <td>Winter</td>
                <td>F001</td>
                <td>L001</td>
                <td>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={openUpdateCropModal}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="btn btn-outline-danger btn-sm">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Modals */}
        <AddCropModal isOpen={isAddCropModalOpen} close={closeAddCropModal} />
        <UpdateCropModal isOpen={isUpdateCropModalOpen} close={closeUpdateCropModal} />
      </BodyContent>
    </div>
  );
};

const AddCropModal: React.FC<{ isOpen: boolean; close: () => void }> = ({
  isOpen,
  close,
}) => {
  const handleAddCrop = async () => {
    try {
      console.log("Adding crop...");
      await someApiRequest();
      console.log("Crop added successfully!");
      close(); // Close modal
    } catch (error) {
      console.error("Error adding crop:", error);
    }
  };

  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      id="addCropModal"
      tabIndex={-1}
      aria-labelledby="addCropModalLabel"
      aria-hidden={!isOpen}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addCropModalLabel">
              Add New Crop
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <form id="addCropForm">
              <button
                type="button"
                className="btn btn-outline-success w-100"
                onClick={handleAddCrop}
              >
                Save Crop
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpdateCropModal: React.FC<{ isOpen: boolean; close: () => void }> = ({
  isOpen,
  close,
}) => {
  const handleUpdateCrop = async () => {
    try {
      console.log("Updating crop...");
      await someApiRequest();
      console.log("Crop updated successfully!");
      close(); // Close modal
    } catch (error) {
      console.error("Error updating crop:", error);
    }
  };

  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      id="updateCropModal"
      tabIndex={-1}
      aria-labelledby="updateCropModalLabel"
      aria-hidden={!isOpen}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateCropModalLabel">
              Update Crop
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <form id="updateCropForm">
              <button
                type="button"
                className="btn btn-outline-success w-100"
                onClick={handleUpdateCrop}
              >
                Update Crop
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crop;
