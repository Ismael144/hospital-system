import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import formatDate from "../../utils/dateFormatter";
import currencyFormatter from "../../utils/currencyFormatter";

const PrescriptionDetails = () => {
  const { id } = useParams();
  const [prescription, setPrescription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrescriptionDetails = async () => {
      setLoading(true);
      const accessToken = localStorage.getItem("access_token");
      try {
        const response = await axios.get(`http://localhost:8000/api/prescriptions/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // Assuming the API returns the prescription data in response.data.response
        setPrescription(response.data.results);
      } catch (err) {
        console.error("Error fetching prescription details:", err);
        setError("Failed to fetch prescription details");
      } finally {
        setLoading(false);
      }
    };
    fetchPrescriptionDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>Loading prescription details...</div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!prescription) {
    return <div className="text-center my-4">No prescription found.</div>;
  }

  return (
    <div className="wrapper">
      <Topbar />
      <Sidebar />
      <div className="content-wrapper">
        <div className="container mt-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h3>Prescription Details</h3>
              <NavLink to="/prescriptions" className="btn btn-secondary">
                Back to Prescriptions
              </NavLink>
            </div>
            <div className="card-body">
              <p>
                <strong>Prescription Name:</strong> {prescription.name}
              </p>
              <p>
                <strong>Description:</strong> {prescription.description || "N/A"}
              </p>
              <p>
                <strong>Unit Price:</strong> UGX {currencyFormatter(prescription.unit_price)}
              </p>
              <p>
                <strong>Requires Prescription:</strong>{" "}
                {prescription.requires_prescription ? (
                  <span className="badge bg-success">Yes</span>
                ) : (
                  <span className="badge bg-danger">No</span>
                )}
              </p>
              <p>
                <strong>Is Active:</strong>{" "}
                {prescription.is_active ? (
                  <span className="badge bg-success">Yes</span>
                ) : (
                  <span className="badge bg-danger">No</span>
                )}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {prescription.created_at ? formatDate(prescription.created_at) : "N/A"}
              </p>
              <p>
                <strong>Updated At:</strong>{" "}
                {prescription.updated_at ? formatDate(prescription.updated_at) : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionDetails;
