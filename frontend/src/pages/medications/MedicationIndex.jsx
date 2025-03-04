import React from 'react';
import RenderIndexPage from '../../components/RenderIndexPage';
import formatDate from "../../utils/dateFormatter";
import { NavLink, useNavigate } from 'react-router-dom';
import currencyFormatter from '../../utils/currencyFormatter';
import axios from 'axios';

const MedicationIndex = () => {
  const navigate = useNavigate()
  
  const handleDelete = async (itemId) => {
    const accessToken = localStorage.getItem("access_token");
    try {
      // Get bed details for confirmation
      const response = await axios.get(`http://localhost:8000/api/medications/${itemId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // Access the single bed details from response.data.results
      const medicationData = response.data.results;
      const isDelete = window.confirm(
        `Are you sure you want to delete medication '${medicationData.name}'?`
      );
      if (isDelete) {
        const deleteResponse = await axios.delete(`http://localhost:8000/api/medications/${itemId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // Check if deletion was successful. Adjust this check if your API returns a different structure.
        if (deleteResponse.data.status === 200) {
          alert("Successfully deleted...");
          navigate("/medications")
        } else {
          alert("Deletion failed.");
        }
      }
    } catch (error) {
      console.error("Error during deletion:", error);
      alert("Error deleting medication.");
    }
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "100px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "160px",
    },
    {
      name: "Description",
      selector: (row) => row.description || "N/A",
      sortable: true,
    },
    {
      name: "Unit Price",
      selector: (row) => `UGX ${currencyFormatter(row.unit_price)}` || 0,
      sortable: true,
      width: "180px"
    },
    {
      name: "Requires Prescription",
      selector: (row) =>
        row.requires_prescription ? (
          <span className="badge bg-success">Yes</span>
        ) : (
          <span className="badge bg-danger">No</span>
        ),
      sortable: true,
    },
    {
      name: "Is Active",
      selector: (row) =>
        row.is_active ? (
          <span className="badge bg-success">Yes</span>
        ) : (
          <span className="badge bg-danger">No</span>
        ),
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => formatDate(row.created_at),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="d-flex">
          <button
            className="btn btn-danger btn-sm me-2"
            onClick={() => handleDelete(row.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
          <NavLink to={`/medications/${row.id}`} className="btn btn-primary btn-sm me-2">
            <i className="fas fa-eye"></i>
          </NavLink>
          <NavLink to={`/medications/${row.id}/edit`} className="btn btn-warning btn-sm">
            <i className="fas fa-pen"></i>
          </NavLink>
        </div>
      ),
      ignoreRowClick: true,
      button: true,
      width: "150px",
    },
  ];

  return (
    <RenderIndexPage
      name={"medication"}
      title={"Medication"}
      endpoint={"medications"}
      columns={columns} />
  )
}

export default MedicationIndex