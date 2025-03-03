import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import formatDate from "../../utils/dateFormatter";

const BedDetails = () => {
  const { id } = useParams();
  const [bed, setBed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBedDetails = async () => {
      setLoading(true);
      const accessToken = localStorage.getItem("access_token");
      try {
        const response = await axios.get(`http://localhost:8000/api/beds/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // Assuming the API returns the bed data in response.data.response
        setBed(response.data.results);
      } catch (err) {
        console.error("Error fetching bed details:", err);
        setError("Failed to fetch bed details");
      } finally {
        setLoading(false);
      }
    };
    fetchBedDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>Loading bed details...</div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!bed) {
    return <div className="text-center my-4">No bed found.</div>;
  }

  return (
    <div className="wrapper">
      <Topbar />
      <Sidebar />
      <div className="content-wrapper">
        <div className="container mt-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h3>Bed Details</h3>
              <NavLink to="/beds" className="btn btn-secondary">
                Back to Beds
              </NavLink>
            </div>
            <div className="card-body">
              <p>
                <strong>Bed Number:</strong> {bed.bed_number}
              </p>
              <p>
                <strong>Ward:</strong> {bed.ward || "N/A"}
              </p>
              <p>
                <strong>Notes:</strong> {bed.notes || "N/A"}
              </p>
              <p>
                <strong>Is Occupied:</strong>{" "}
                {bed.is_occupied ? (
                  <span className="badge bg-success">Yes</span>
                ) : (
                  <span className="badge bg-danger">No</span>
                )}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {bed.created_at ? formatDate(bed.created_at) : "N/A"}
              </p>
              <p>
                <strong>Updated At:</strong>{" "}
                {bed.updated_at ? formatDate(bed.updated_at) : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedDetails;
