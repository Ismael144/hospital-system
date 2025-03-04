import React, { useState, useCallback, useEffect } from 'react'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const PrescriptionUpdate = () => {
    const { prescriptionId } = useParams()
    const [formInput, setFormInput] = useState({
        name: '',
        description: '',
        unit_price: 0,
        requires_prescription: false,
        is_active: false,
    })
    const [prescriptionData, setPrescriptionData] = useState({})
    const [response, setResponse] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;

        console.log("Form Input: ", formInput, "Checked: ", checked, "Name: ", name)

        setFormInput((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }, []);

    useEffect(() => {
        setIsLoading(true)
        // Fetch the current prescription id here 
        const fetchPrescriptionData = async () => {
            const accessToken = localStorage.getItem('access_token')

            try {
                const response = await axios.get(`http://localhost:8000/api/prescriptions/${prescriptionId}`, {
                    headers: {
                        "Content-Type": 'application/json',
                        "Authorization": `Bearer ${accessToken}`
                    }
                })
                console.log("Response Data: ", response.data.results)
                setPrescriptionData(response.data.results)
                setFormInput(response.data.results)
            } catch (err) {
                // Redirect back to the base page
                console.log(err)
            }
        }

        fetchPrescriptionData()
        setIsLoading(false)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)
        try {
            const accessToken = localStorage.getItem('access_token')

            const response = await axios.put(`http://localhost:8000/api/prescriptions/${prescriptionId}`, formInput, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })

            setResponse(response.response)

            navigate("/prescriptions")
        } catch (e) {
            setResponse(e.response)
            console.log(e)
        }

        setIsLoading(false)
    }

    return (
        <div className="wrapper">
            <Topbar />
            <Sidebar />
            <div className="content-wrapper">
                <div className="container-full m-5" style={{ padding: 20 }}>
                    <div className="">
                        <div className="content-header my-3">
                            <div className="d-flex align-items-center">
                                <div className="me-auto">
                                    <h4 className="page-title">Prescription Form</h4>
                                    <div className="d-inline-block align-items-center">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                                                <li className="breadcrumb-item" aria-current="page">Prescriptions</li>
                                                <li className="breadcrumb-item active" aria-current="page">Prescription's edit form</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title d-flex align-items-center gap-2">
                                    {isLoading ?
                                        <div className="spinner-border text-primary"></div> : <></>}
                                    Editing Prescription '{prescriptionData.name}'
                                </h4>
                            </div>
                            <div className="card-body">
                                {response?.status == 200 ?
                                    <div className="alert alert-success">
                                        You successfully added a new prescription
                                    </div> : <></>}
                                {response?.errors ? <div className="alert alert-danger">
                                    Please correct all errors inorder to continue
                                </div> : <></>}
                                <form action method="post" encType='multipart/formdata' onSubmit={handleSubmit}>
                                    <div className="form-group-element my-2">
                                        <label htmlFor="" className="form-label">Name of prescription <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" name="name" placeholder="Enter prescription's name..." onChange={handleChange} min={0} value={formInput.name} required />
                                        <div className="text-danger my-2">
                                            {response?.data?.errors?.name}
                                        </div>
                                    </div>
                                    <div className="form-group-element my-2 mt-3">
                                        <label htmlFor="" className="form-label">Description </label>
                                        <textarea name="description" className="form-control" rows={4} placeholder='Enter some notes here...' value={formInput.description} onChange={handleChange}></textarea>
                                        <span className="text-danger">
                                            {response?.data?.errors?.ward}
                                        </span>
                                    </div>
                                    <div className="form-group-element my-2 mt-3">
                                        <label htmlFor="is_occupied" className="form-label">Unit Price</label>
                                        <input type="number" name="unit_price" min={0} className="form-control" value={formInput.unit_price} />
                                        <span className="text-danger">
                                            {response?.data?.errors?.notes}
                                        </span>
                                    </div>
                                    <div className="form-group-element my-2 mt-3">
                                        <input type="checkbox" name="requires_prescription" id="requires_prescription" className="form-check-input" onChange={handleChange} checked={formInput.requires_prescription} />
                                        <label htmlFor="requires_prescription" className="form-label">Requires Prescription</label>
                                        <span className="text-danger"></span>
                                    </div>
                                    <div className="form-group-element my-2 mt-3">
                                        <input type="checkbox" name="is_active" id="is_active" className="form-check-input" onChange={handleChange} checked={formInput.is_active} />
                                        <label htmlFor="is_active" className="form-label">Is Active</label>
                                        <span className="text-danger"></span>
                                    </div>
                                    <div className="buttons my-2 mt-4 d-flex align-items-center gap-2 justify-content-end">
                                        <button className="btn btn-success" disabled={isLoading}>
                                            {isLoading ? "Editing Prescription" : "Edit Prescription"}
                                        </button>
                                        <NavLink to="/prescriptions" className="btn btn-warning">
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
    )
}

export default PrescriptionUpdate