import React, { useState, useCallback } from 'react'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'


const MedicationCreate = () => {
  const [formInput, setFormInput] = useState({})
  const [response, setResponse] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    console.log("Checked: ", checked)
    setFormInput((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)
    try {
      const accessToken = localStorage.getItem('access_token')

      const request = await axios.post("http://localhost:8000/api/medications", formInput, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      })

      setResponse(request.results)

      navigate("/medications")
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
            <div class="content-header my-3">
              <div class="d-flex align-items-center">
                <div class="me-auto">
                  <h4 class="page-title">Medication Form</h4>
                  <div class="d-inline-block align-items-center">
                    <nav>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#"><i class="mdi mdi-home-outline"></i></a></li>
                        <li class="breadcrumb-item" aria-current="page">Medications</li>
                        <li class="breadcrumb-item active" aria-current="page">Medication's create form</li>
                      </ol>
                    </nav>
                  </div>
                </div>

              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add New Medication</h4>
              </div>
              <div className="card-body">
                {response?.status == 200 ?
                  <div className="alert alert-success">
                    You successfully added a new medication
                  </div> : <></>}
                {response?.errors ? <div className="alert alert-danger">
                  Please correct all errors inorder to continue
                </div> : <></>}
                <form action method="post" encType='multipart/formdata' onSubmit={handleSubmit}>
                  <div className="form-group-element my-2">
                    <label htmlFor="" className="form-label">Name of medication <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" name="name" placeholder="Enter medication's name..." onChange={handleChange} min={0} required />
                    <div className="text-danger my-2">
                      {response?.data?.errors?.name}
                    </div>
                  </div>
                  <div className="form-group-element my-2 mt-3">
                    <label htmlFor="" className="form-label">Description </label>
                    <textarea name="description" className="form-control" rows={4} placeholder='Enter some notes here...' onChange={handleChange}></textarea>
                    <span className="text-danger">
                      {response?.data?.errors?.ward}
                    </span>
                  </div>
                  <div className="form-group-element my-2 mt-3">
                    <label htmlFor="is_occupied" className="form-label">Unit Price</label>
                    <input type="number" name="unit_price" className="form-control" onChange={handleChange} min={0} id="" />
                    <span className="text-danger">
                      {response?.data?.errors?.notes}
                    </span>
                  </div>
                  <div className="form-group-element my-2 mt-3">
                    <input type="checkbox" name="requires_prescription" id="requires_prescription" className="form-check-input" onChange={handleChange} />
                    <label htmlFor="requires_prescription" className="form-label">Requires Prescription</label>
                    <span className="text-danger"></span>
                  </div>
                  <div className="form-group-element my-2 mt-3">
                    <input type="checkbox" name="is_active" id="is_active" className="form-check-input" onChange={handleChange} />
                    <label htmlFor="is_active" className="form-label">Is Active</label>
                    <span className="text-danger"></span>
                  </div>
                  <div className="buttons my-2 mt-4 d-flex align-items-center gap-2 justify-content-end">
                    <button className="btn btn-success" disabled={isLoading}>
                      {isLoading ? "Adding Medication" : "Add Medication"}
                    </button>
                    <NavLink to="/medications" className="btn btn-warning">
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

export default MedicationCreate