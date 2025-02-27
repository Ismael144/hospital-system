import React, { useState } from 'react'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


const PatientDetail = () => {
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
                                        <h4 class="page-title">Patient's Details</h4>
                                        <div class="d-inline-block align-items-center">
                                            <nav>
                                                <ol class="breadcrumb">
                                                    <li class="breadcrumb-item"><a href="#"><i class="mdi mdi-home-outline"></i></a></li>
                                                    <li class="breadcrumb-item" aria-current="page">Patients</li>
                                                    <li class="breadcrumb-item active" aria-current="page">Patient's details</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientDetail