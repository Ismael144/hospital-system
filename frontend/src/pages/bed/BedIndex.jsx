import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { NavLink } from "react-router-dom";
import formatDate from "../../utils/dateFormatter";

const BedIndex = () => {
  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetchData(currentPage, rowsPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, rowsPerPage]);

  const fetchData = async (page, limit) => {
    setLoading(true);
    const accessToken = localStorage.getItem("access_token");
    try {
      const response = await axios.get(
        `http://localhost:8000/api/beds?page=${page}&items_per_page=${limit}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // API response structure:
      // {
      //   status: 200,
      //   success: true,
      //   errors: null,
      //   response: {
      //     data: [ ... ],
      //     pagination: { page: X, items_per_page: Y },
      //     total_pages: Z
      //   }
      // }
      const bedResponse = response.data.results;
      const beds = bedResponse.data;
      const { items_per_page } = bedResponse.pagination;
      const totalPages = bedResponse.total_pages;
      const totalRecords = totalPages * items_per_page; // total count of records
      setTotalRows(totalRecords);

      // If no data and we're not on page 1, adjust to the last available page.
      if (beds.length === 0 && page > 1) {
        setCurrentPage(totalPages);
        fetchData(totalPages, limit);
        return;
      }
      setData(beds);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    const lastPage = Math.ceil(totalRows / rowsPerPage) || 1;
    setCurrentPage(page > lastPage ? lastPage : page);
  };

  const handleRowsPerPageChange = (newRowsPerPage, page) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(page);
  };

  // Frontend filtering
  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  const handleDelete = async (bedId) => {
    const accessToken = localStorage.getItem("access_token");
    try {
      // Get bed details for confirmation
      const response = await axios.get(`http://localhost:8000/api/beds/${bedId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // Access the single bed details from response.data.results
      const bedData = response.data.results;
      const isDelete = window.confirm(
        `Are you sure you want to delete 'Bed No.${bedData.bed_number}', Ward: ${bedData.ward}?`
      );
      if (isDelete) {
        const deleteResponse = await axios.delete(`http://localhost:8000/api/beds/${bedId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // Check if deletion was successful. Adjust this check if your API returns a different structure.
        if (deleteResponse.data.status === 200) {
          alert("Successfully deleted...");
          fetchData(currentPage, rowsPerPage);
        } else {
          alert("Deletion failed.");
        }
      }
    } catch (error) {
      console.error("Error during deletion:", error);
      alert("Error deleting bed.");
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
      name: "Bed Number",
      selector: (row) => row.bed_number,
      sortable: true,
      width: "150px",
    },
    {
      name: "Ward",
      selector: (row) => row.ward || "N/A",
      sortable: true,
    },
    {
      name: "Notes",
      selector: (row) => row.notes || "N/A",
      sortable: true,
    },
    {
      name: "Is Occupied",
      selector: (row) =>
        row.is_occupied ? (
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
          <NavLink to={`/beds/${row.id}`} className="btn btn-primary btn-sm me-2">
            <i className="fas fa-eye"></i>
          </NavLink>
          <NavLink to={`/beds/${row.id}/edit`} className="btn btn-warning btn-sm">
            <i className="fas fa-pen"></i>
          </NavLink>
        </div>
      ),
      ignoreRowClick: true,
      button: true,
      width: "150px",
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#f8f9fa",
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: "#e9ecef",
      },
    },
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
        padding: "16px",
      },
    },
    rows: {
      style: {
        minHeight: "60px",
        fontSize: "14px",
        "&:nth-of-type(odd)": {
          backgroundColor: "#f8f9fa",
        },
        "&:hover": {
          backgroundColor: "#e9ecef",
          cursor: "pointer",
        },
      },
    },
    pagination: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: "#e9ecef",
      },
    },
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <Topbar />
        <Sidebar />
        <div className="container-full">
          <div className="container mt-4">
            <div className="card">
              <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Beds Directory</h3>
                <NavLink to="/beds/create" className="btn btn-success">
                  Add New Bed
                </NavLink>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-search"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search beds..."
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                      />
                      {filterText && (
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => setFilterText("")}
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <DataTable
                  columns={columns}
                  data={filteredData}
                  pagination
                  paginationServer
                  paginationTotalRows={totalRows}
                  onChangePage={handlePageChange}
                  onChangeRowsPerPage={handleRowsPerPageChange}
                  progressPending={loading}
                  progressComponent={
                    <div className="text-center my-3">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <div className="mt-2">Loading beds...</div>
                    </div>
                  }
                  noDataComponent={
                    <div className="text-center my-4">
                      <p className="text-muted">No beds found</p>
                    </div>
                  }
                  customStyles={customStyles}
                  highlightOnHover
                  pointerOnHover
                  responsive
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedIndex;
