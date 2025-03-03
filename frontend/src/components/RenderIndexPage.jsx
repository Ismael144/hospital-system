import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { NavLink } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const RenderIndexPage = ({ name, title, endpoint, columns }) => {
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
                `http://localhost:8000/api/${endpoint}?page=${page}&items_per_page=${limit}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            const dataResponse = response.data.results;
            const modelData = dataResponse.data;
            const { items_per_page } = dataResponse.pagination;
            const totalPages = dataResponse.total_pages;
            const totalRecords = totalPages * items_per_page; // total count of records
            setTotalRows(totalRecords);

            // If no data and we're not on page 1, adjust to the last available page.
            if (modelData.length === 0 && page > 1) {
                setCurrentPage(totalPages);
                fetchData(totalPages, limit);
                return;
            }
            setData(modelData);
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
                                <h3 className="mb-0">{title} Directory</h3>
                                <NavLink to={`/${endpoint}/create`} className="btn btn-success">
                                    Add New {title}
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
                                                placeholder={`Search ${name}...`}
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
                                            <div className="mt-2">Loading {name}...</div>
                                        </div>
                                    }
                                    noDataComponent={
                                        <div className="text-center my-4">
                                            <div className="no-data-component-icon my-4">
                                                <i className="fas fa-server text-dark" style={{ fontSize: "60px" }}></i>
                                            </div>
                                            <h5 className="text-muted">No {name} found</h5>
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

export default RenderIndexPage;
