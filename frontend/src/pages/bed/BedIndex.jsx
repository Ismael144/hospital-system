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
      const beds = response.data.response;
      const totalRecords = response.data.total_records || 0;

      // If the current page returns no items and we're not on the first page,
      // adjust the page to the last available page.
      if (beds.length === 0 && page > 1) {
        const lastPage = Math.ceil(totalRecords / limit) || 1;
        setCurrentPage(lastPage);
        fetchData(lastPage, limit);
        return;
      }

      setData(beds);
      setTotalRows(totalRecords);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    // Prevent going beyond the last page.
    const lastPage = Math.ceil(totalRows / rowsPerPage);
    if (page > lastPage) {
      setCurrentPage(lastPage);
    } else {
      setCurrentPage(page);
    }
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

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "70px",
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
          <NavLink
            to={`/beds/${row.id}`}
            className="btn btn-primary btn-sm me-2"
          >
            <i className="fas fa-eye"></i>
          </NavLink>
          <NavLink to={`/beds/${row.id}/edit`} className="btn btn-warning btn-sm">
            <i className="fas fa-pen"></i>
          </NavLink>
        </div>
      ),
      ignoreRowClick: true,
      button: true,
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
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <div className="mt-2">Loading beds...</div>
                    </div>
                  }
                  noDataComponent={
                    <div className="text-center my-4">
                      <p className="text-muted">No beds found</p>
                      {filterText && <p>Try clearing your search filter</p>}
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
