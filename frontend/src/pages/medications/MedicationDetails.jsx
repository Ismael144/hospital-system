import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import formatDate from "../../utils/dateFormatter";
import currencyFormatter from "../../utils/currencyFormatter";

const MedicationDetails = () => {
  const { id } = useParams();
  const [medication, setMedication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicationDetails = async () => {
      setLoading(true);
      const accessToken = localStorage.getItem("access_token");
      try {
        const response = await axios.get(`http://localhost:8000/api/medications/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // Assuming the API returns the medication data in response.data.response
        setMedication(response.data.results);
      } catch (err) {
        console.error("Error fetching medication details:", err);
        setError("Failed to fetch medication details");
      } finally {
        setLoading(false);
      }
    };
    fetchMedicationDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>Loading medication details...</div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!medication) {
    return <div className="text-center my-4">No medication found.</div>;
  }

  return (
    <div className="wrapper">
      <Topbar />
      <Sidebar />
      <div className="content-wrapper">
        <div className="container mt-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h3>Medication Details</h3>
              <NavLink to="/medications" className="btn btn-secondary">
                Back to Medications
              </NavLink>
            </div>
            <div className="card-body">
              <p>
                <strong>Medication Name:</strong> {medication.name}
              </p>
              <p>
                <strong>Description:</strong> {medication.description || "N/A"}
              </p>
              <p>
                <strong>Unit Price:</strong> UGX {currencyFormatter(medication.unit_price)}
              </p>
              <p>
                <strong>Requires Prescription:</strong>{" "}
                {medication.requires_prescription ? (
                  <span className="badge bg-success">Yes</span>
                ) : (
                  <span className="badge bg-danger">No</span>
                )}
              </p>
              <p>
                <strong>Is Active:</strong>{" "}
                {medication.is_active ? (
                  <span className="badge bg-success">Yes</span>
                ) : (
                  <span className="badge bg-danger">No</span>
                )}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {medication.created_at ? formatDate(medication.created_at) : "N/A"}
              </p>
              <p>
                <strong>Updated At:</strong>{" "}
                {medication.updated_at ? formatDate(medication.updated_at) : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationDetails;
