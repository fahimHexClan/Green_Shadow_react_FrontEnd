import React from "react";
import BodyContent from "../BodyContent/BodyContent";
import HeaderContent from "../HeaderContent/HeaderContent";
import './pagesCss/Crop.css';

const Crop: React.FC = () => {
  return (
    <div className="app-container">
      <HeaderContent />
      <BodyContent>
        <h3>Crop Management</h3>
        <p>Handles information related to crop types and growth stages.</p>

        {/* Add New Field Button */}
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addCropModal"
        >
          <i className="fas fa-plus-circle me-2"></i>Add New Crop
        </button>

        {/* Field Table */}
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
                    data-bs-toggle="modal"
                    data-bs-target="#updateCropModal"
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
        <AddCropModal />
        <UpdateCropModal />
      </BodyContent>
    </div>
  );
};

const AddCropModal: React.FC = () => (
  <div
    className="modal fade"
    id="addCropModal"
    tabIndex={-1}
    aria-labelledby="addCropModalLabel"
    aria-hidden="true"
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
          ></button>
        </div>
        <div className="modal-body">
          <form id="addCropForm">
            {/* Add form fields here */}
            <button
              type="button"
              className="btn btn-outline-success w-100"
              onClick={() => console.log("Add crop functionality")}
            >
              Save Crop
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const UpdateCropModal: React.FC = () => (
  <div
    className="modal fade"
    id="updateCropModal"
    tabIndex={-1}
    aria-labelledby="updateCropModalLabel"
    aria-hidden="true"
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
          ></button>
        </div>
        <div className="modal-body">
          <form id="updateCropForm">
            {/* Add update form fields here */}
            <button
              type="button"
              className="btn btn-outline-success w-100"
              onClick={() => console.log("Update crop functionality")}
            >
              Update Crop
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Crop;
