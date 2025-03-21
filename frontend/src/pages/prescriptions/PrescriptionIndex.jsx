import React from 'react';
import RenderIndexPage from '../../components/RenderIndexPage';
import formatDate from "../../utils/dateFormatter";
import { NavLink, useNavigate } from 'react-router-dom';
import currencyFormatter from '../../utils/currencyFormatter';
import axios from 'axios';

const PrescriptionIndex = () => {
  const navigate = useNavigate()
  
  const handleDelete = async (itemId) => {
    const accessToken = localStorage.getItem("access_token");
    try {
      // Get bed details for confirmation
      const response = await axios.get(`http://localhost:8000/api/prescriptions/${itemId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // Access the single bed details from response.data.results
      const prescriptionData = response.data.results;
      const isDelete = window.confirm(
        `Are you sure you want to delete prescription '${prescriptionData.name}'?`
      );
      if (isDelete) {
        const deleteResponse = await axios.delete(`http://localhost:8000/api/prescriptions/${itemId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // Check if deletion was successful. Adjust this check if your API returns a different structure.
        if (deleteResponse.data.status === 200) {
          alert("Successfully deleted...");
          navigate("/prescriptions")
        } else {
          alert("Deletion failed.");
        }
      }
    } catch (error) {
      console.error("Error during deletion:", error);
      alert("Error deleting prescription.");
    }
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.prescription.id,
      sortable: true,
      width: "80px",
    },
    // {
    //   name: "Doc Consultation",
    //   selector: (row) => row?.consultation?..name,
    //   sortable: true,
    //   width: "160px",
    // },
    {
      name: "Medication",
      selector: (row) => row?.medication?.name || 'N/A',
      sortable: true,
      width: "180px",
    },
    {
      name: "Dosage",
      selector: (row) => row.prescription.dosage,
      sortable: true,
      width: "140px",
    },
    {
      name: "Frequency",
      selector: (row) => `${row.prescription.frequency} times a day` || "N/A",
      sortable: true,
    },
    {
      name: "Duration(Days)",
      selector: (row) => row.prescription.duration_days,
      sortable: true,
      width: "180px"
    },
    {
      name: "Notes",
      selector: (row) => row.prescription.notes,
      sortable: true,
      width: "180px"
    },
    {
      name: "Created At",
      selector: (row) => formatDate(row.prescription.created_at),
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
          <NavLink to={`/prescriptions/${row.prescription.id}`} className="btn btn-primary btn-sm me-2">
            <i className="fas fa-eye"></i>
          </NavLink>
          <NavLink to={`/prescriptions/${row.prescription.id}/edit`} className="btn btn-warning btn-sm">
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
      name={"prescription"}
      title={"Prescription"}
      endpoint={"prescriptions"}
      columns={columns} />
  )
}

export default PrescriptionIndex