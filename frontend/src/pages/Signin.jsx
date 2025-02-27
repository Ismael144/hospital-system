import React, { useState } from 'react'
import { default as axios } from 'axios';
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [formErrorResponse, setFormErrorResponse] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    'use server'
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.target)
    try {

      const request = await axios.post("http://localhost:8000/api/auth/signin", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setIsLoading(false)

      // Store token
      localStorage.setItem("access_token", request?.data.response.token);

      // Navigate to home page
      navigate("/")
    } catch (e) {
      setIsLoading(false)
      setFormErrorResponse(e?.response?.data)
      console.log(e?.response)
    }
  }

  return (
    <main style={{ background: "#f8f8f8" }}>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">Montana</span>
                  </a>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p className="text-center small">Enter your email & password to login</p>
                    </div>
                    {formErrorResponse?.message?.length ? (
                      <div className="my-2 alert alert-danger">
                        {formErrorResponse?.message}
                      </div>
                    ) : (<></>)}

                    {formErrorResponse?.errors?.message?.length ? (
                      <div className="my-2 alert alert-danger">
                        {formErrorResponse?.errors?.message}
                      </div>
                    ) : (<></>)}

                    <form className="row g-3 needs-validation" method="POST" onSubmit={handleSubmit}>

                      <div className="col-12">
                        <label for="youremail" className="form-label">Email</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="email" name="email" className="form-control" placeholder="Enter email to continue..." id="email" onChange={handleChange} required />
                          <div className="invalid-feedback" >Please enter your email.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="yourPassword" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" onChange={handleChange} id="yourPassword" placeholder="Please enter your password" required />
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>

                      <button className="btn btn-primary" type="submit" disabled={isLoading}>
                        {isLoading ? "Signing In" : "Sign In"}
                      </button>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
    </main>
  )
}

export default Signin