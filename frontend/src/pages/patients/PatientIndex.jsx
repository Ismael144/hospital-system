import React from 'react'
import RenderIndexPage from '../../components/RenderIndexPage';

const PatientIndex = () => {
  const handleDelete = async (patientId) => {
    const accessToken = localStorage.getItem("access_token");
    try {
      // Fetch patient details for confirmation
      const response = await axios.get(
        `http://localhost:8000/api/patients/${patientId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const patientData = response.data.results;
      const confirmDelete = window.confirm(
        `Are you sure you want to delete '${patientData.name}'?`
      );
      if (confirmDelete) {
        const deleteResponse = await axios.delete(
          `http://localhost:8000/api/patients/${patientId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        // Assuming your API returns a status code in deleteResponse.data.status
        if (deleteResponse.data.status === 200) {
          alert("Successfully deleted.");
          fetchData(currentPage, rowsPerPage);
        } else {
          alert("Deletion failed.");
        }
      }
    } catch (error) {
      console.error("Error deleting patient:", error);
      alert("Error deleting patient.");
    }
  };

  const patientType = {
    Inpatient: "In Patient",
    Outpatient: "Out Patient",
    Emergency: "Emergency",
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "80px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: "NIN",
      selector: (row) => row.nin || "N/A",
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
      width: "80px",
    },
    {
      name: "Gender",
      selector: (row) => row.gender || "N/A",
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => patientType[row.patient_type],
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone || "N/A",
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
          <NavLink
            to={`/patients/${row.id}`}
            className="btn btn-primary btn-sm me-2"
          >
            <i className="fas fa-eye"></i>
          </NavLink>
          <NavLink
            to={`/patients/${row.id}/edit`}
            className="btn btn-warning btn-sm"
          >
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
    <RenderIndexPage name={"patient"} title={"Patient"} endpoint={"patients"} columns={columns} />
  )
}

export default PatientIndex
