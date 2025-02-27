import React, { useState } from 'react'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


const PatientCreate = () => {
    const [formInput, setFormInput] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormInput(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const access_token = localStorage.getItem("access_token")

        try {
            const request = await axios.post("http://localhost:8000/api/patients", formData, {
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${access_token}`
                }
            })

            console.log(request)
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className="wrapper">
                <Topbar />
                <Sidebar />
                <div className="content-wrapper">
                    <div className="container-full m-5" style={{ padding: 20 }}>
                        <div className="">
                            <div class="content-header my-3">
                                <div class="d-flex align-items-center">
                                    <div class="me-auto">
                                        <h4 class="page-title">Patient's Form</h4>
                                        <div class="d-inline-block align-items-center">
                                            <nav>
                                                <ol class="breadcrumb">
                                                    <li class="breadcrumb-item"><a href="#"><i class="mdi mdi-home-outline"></i></a></li>
                                                    <li class="breadcrumb-item" aria-current="page">Patients</li>
                                                    <li class="breadcrumb-item active" aria-current="page">Patient's create form</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Add New Patient</h4>
                                </div>
                                <div className="card-body">
                                    <form action method="post" encType='multipart/formdata' onSubmit={handleSubmit}>
                                        <div className="form-group-element my-2">
                                            <label htmlFor="" className="form-label">Full Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" name="name" placeholder="Enter patient's full name" required />
                                            <span className="text-danger"></span>
                                        </div>
                                        <div className="form-group-element my-2 mt-3">
                                            <label htmlFor="" className="form-label">NIN Number </label>
                                            <input type="text" className="form-control" name="nin" placeholder="Enter patient's NIN Number found on National ID" onChange={handleChange} required />
                                            <span className="text-danger"></span>
                                        </div>
                                        <div className="form-group-element my-2 mt-3">
                                            <label htmlFor="" className="form-label">Age <span className="text-danger">*</span></label>
                                            <input type="number" className="form-control" name="age" placeholder="Enter patient's age" onChange={handleChange} max={12} required />
                                            <span className="text-danger"></span>
                                        </div>
                                        <div className="form-group-element my-2 mt-3">
                                            <label htmlFor="" className="form-label">Gender <span className="text-danger">*</span></label>
                                            <select name="gender" id="" className="form-control" onChange={handleChange} required>
                                                <option value="">Select gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <span className="text-danger"></span>
                                        </div>
                                        <div className="form-group-element my-2 mt-3">
                                            <label htmlFor="" className="form-label">Patient Type <span className="text-danger">*</span></label>
                                            <select name="gender" id="" className="form-control" onChange={handleChange} required>
                                                <option value="">Select patient type</option>
                                                <option value="Inpatient">In Patient</option>
                                                <option value="Outpatient">Out Patient</option>
                                                <option value="Emergency">Emergency</option>
                                            </select>
                                            <span className="text-danger"></span>
                                        </div>
                                        <div className="form-group-element my-2 mt-3">
                                            <label htmlFor="" className="form-label">Phone Number</label>
                                            <input type="text" max={110} className="form-control" name="phone" placeholder="Enter patient's phone number" onChange={handleChange} />
                                            <span className="text-danger"></span>
                                        </div>
                                        <div className="form-group-element my-2 mt-3">
                                            <label htmlFor="" className="form-label">Emergency Phone Number</label>
                                            <input type="text" max={110} className="form-control" name="address" placeholder="Enter patient's emergency phone number" onChange={handleChange} />
                                            <span className="text-danger"></span>
                                        </div>
                                        <div className="form-group-element my-2 mt-3">
                                            <label htmlFor="" className="form-label">Address</label>
                                            <input type="text" max={110} className="form-control" name="address" placeholder="Enter patient's address" onChange={handleChange} />
                                            <span className="text-danger"></span>
                                        </div>
                                        <div className="form-group-element my-2 mt-3">
                                            <label htmlFor="" className="form-label">Photo</label>
                                            <input type="file" name="profile_photo" id="" className="form-control" />
                                        </div>
                                        <div className="buttons my-2 mt-4 d-flex align-items-center gap-2 justify-content-end">
                                            <button className="btn btn-success">
                                                Add Patient
                                            </button>
                                            <NavLink to="" className="btn btn-warning">
                                                Back
                                            </NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientCreate