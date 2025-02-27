import React from 'react'

const Tables = () => {
    return (
        <div className="wrapper">
            <div id="loader" />
            <header className="main-header">
                <div className="d-flex align-items-center logo-box justify-content-start">
                    {/* Logo */}
                    <a href="index.html" className="logo">
                        {/* logo*/}
                        <div className="logo-mini w-50">
                            <span className="light-logo">
                                <img src="../images/logo-letter.png" alt="logo" />
                            </span>
                            <span className="dark-logo">
                                <img src="../images/logo-letter.png" alt="logo" />
                            </span>
                        </div>
                        <div className="logo-lg">
                            <span className="light-logo">
                                <img src="../images/logo-dark-text.png" alt="logo" />
                            </span>
                            <span className="dark-logo">
                                <img src="../images/logo-light-text.png" alt="logo" />
                            </span>
                        </div>
                    </a>
                </div>
                {/* Header Navbar */}
                <nav className="navbar navbar-static-top">
                    {/* Sidebar toggle button*/}
                    <div className="app-menu">
                        <ul className="header-megamenu nav">
                            <li className="btn-group nav-item">
                                <a
                                    href="#"
                                    className="waves-effect waves-light nav-link push-btn btn-primary-light"
                                    data-toggle="push-menu"
                                    role="button"
                                >
                                    <i className="icon-Menu">
                                        <span className="path1" />
                                        <span className="path2" />
                                    </i>
                                </a>
                            </li>
                            <li className="btn-group d-lg-inline-flex d-none">
                                <div className="app-menu">
                                    <div className="search-bx mx-5">
                                        <form>
                                            <div className="input-group">
                                                <input
                                                    type="search"
                                                    className="form-control"
                                                    placeholder="Search"
                                                />
                                                <div className="input-group-append">
                                                    <button
                                                        className="btn"
                                                        type="submit"
                                                        id="button-addon3"
                                                    >
                                                        <i className="icon-Search">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-custom-menu r-side">
                        <ul className="nav navbar-nav">
                            {/* User Account*/}
                            <li className="dropdown user user-menu">
                                <a
                                    href="#"
                                    className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow"
                                    data-bs-toggle="dropdown"
                                    title="User"
                                >
                                    <div className="d-flex pt-1">
                                        <div className="text-end me-10">
                                            <p className="pt-5 fs-14 mb-0 fw-700 text-primary">
                                                Johen Doe
                                            </p>
                                            <small className="fs-10 mb-0 text-uppercase text-mute">
                                                Admin
                                            </small>
                                        </div>
                                        <img
                                            src="../images/avatar/avatar-1.png"
                                            className="avatar rounded-10 bg-primary-light h-40 w-40"
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <ul className="dropdown-menu animated flipInX">
                                    <li className="user-body">
                                        <a className="dropdown-item" href="extra_profile.html">
                                            <i className="ti-user text-muted me-2" /> Profile
                                        </a>
                                        <a className="dropdown-item" href="auth_login.html">
                                            <i className="ti-lock text-muted me-2" /> Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="btn-group nav-item d-lg-inline-flex d-none">
                                <a
                                    href="#"
                                    data-provide="fullscreen"
                                    className="waves-effect waves-light nav-link full-screen btn-warning-light"
                                    title="Full Screen"
                                >
                                    <i className="icon-Position" />
                                </a>
                            </li>
                            {/* Notifications */}
                            <li className="dropdown notifications-menu">
                                <a
                                    href="#"
                                    className="waves-effect waves-light dropdown-toggle btn-info-light"
                                    data-bs-toggle="dropdown"
                                    title="Notifications"
                                >
                                    <i className="icon-Notification">
                                        <span className="path1" />
                                        <span className="path2" />
                                    </i>
                                </a>
                                <ul className="dropdown-menu animated bounceIn">
                                    <li className="header">
                                        <div className="p-20">
                                            <div className="flexbox">
                                                <div>
                                                    <h4 className="mb-0 mt-0">Notifications</h4>
                                                </div>
                                                <div>
                                                    <a href="#" className="text-danger">
                                                        Clear All
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        {/* inner menu: contains the actual data */}
                                        <ul className="menu sm-scrol">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-info" /> Curabitur id
                                                    eros quis nunc suscipit blandit.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-warning text-warning" /> Duis
                                                    malesuada justo eu sapien elementum, in semper diam
                                                    posuere.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-danger" /> Donec at nisi
                                                    sit amet tortor commodo porttitor pretium a erat.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-shopping-cart text-success" /> In
                                                    gravida mauris et nisi
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-danger" /> Praesent eu
                                                    lacus in libero dictum fermentum.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-primary" /> Nunc fringilla
                                                    lorem
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-success" /> Nullam euismod
                                                    dolor ut quam interdum, at scelerisque ipsum imperdiet.
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="#">View all</a>
                                    </li>
                                </ul>
                            </li>
                            {/* Control Sidebar Toggle Button */}
                            <li className="btn-group nav-item">
                                <a
                                    href="#"
                                    data-toggle="control-sidebar"
                                    title="Setting"
                                    className="waves-effect full-screen waves-light btn-danger-light"
                                >
                                    <i className="icon-Settings1">
                                        <span className="path1" />
                                        <span className="path2" />
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            {/* Left side column. contains the logo and sidebar */}
            <aside className="main-sidebar">
                {/* sidebar*/}
                <section className="sidebar position-relative">
                    <div className="multinav">
                        <div className="multinav-scroll" style={{ height: "100%" }}>
                            {/* sidebar menu*/}
                            <ul className="sidebar-menu" data-widget="tree">
                                <li className="treeview">
                                    <a href="#">
                                        <i className="icon-Layout-4-blocks">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </i>
                                        <span>Dashboard</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li>
                                            <a href="index.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Patients Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index4.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Patients Dashboard 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index2.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Doctor Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index6.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Doctor Dashboard 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index7.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Doctor Dashboard 3
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index3.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Hospital Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index5.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Hospital Dashboard 2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="appointments.html">
                                        <i className="icon-Barcode-read">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </i>
                                        <span>Appointments</span>
                                    </a>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="icon-Compiling">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </i>
                                        <span>Patients</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li>
                                            <a href="patients.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Patients
                                            </a>
                                        </li>
                                        <li>
                                            <a href="patient_details.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Patient Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="reports.html">
                                        <i className="icon-Settings-1">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </i>
                                        <span>Reports</span>
                                    </a>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="icon-Diagnostics">
                                            <span className="path1" />
                                            <span className="path2" />
                                            <span className="path3" />
                                        </i>
                                        <span>Doctors</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li>
                                            <a href="doctor_list.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Doctors
                                            </a>
                                        </li>
                                        <li>
                                            <a href="doctors.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Doctor Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="header">Components</li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="icon-Library">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </i>
                                        <span>Features</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Card
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li>
                                                    <a href="box_cards.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        User Card
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="box_advanced.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Advanced Card
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="box_basic.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Basic Card
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="box_color.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Card Color
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="box_group.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Card Group
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                BS UI
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li>
                                                    <a href="ui_grid.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Grid System
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_badges.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Badges
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_border_utilities.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Border
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_buttons.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Buttons
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_color_utilities.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Color
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_dropdown.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Dropdown
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_dropdown_grid.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Dropdown Grid
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_progress_bars.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Progress Bars
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Icons
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li>
                                                    <a href="icons_fontawesome.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Font Awesome
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="icons_glyphicons.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Glyphicons
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="icons_material.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Material Icons
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="icons_themify.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Themify Icons
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="icons_simpleline.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Simple Line Icons
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="icons_cryptocoins.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Cryptocoins Icons
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="icons_flag.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Flag Icons
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="icons_weather.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Weather Icons
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Custom UI
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li>
                                                    <a href="ui_ribbons.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Ribbons
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_sliders.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Sliders
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_typography.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Typography
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_tab.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Tabs
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_timeline.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Timeline
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ui_timeline_horizontal.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Horizontal Timeline
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Components
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li>
                                                    <a href="component_bootstrap_switch.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Bootstrap Switch
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="component_date_paginator.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Date Paginator
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="component_media_advanced.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Advanced Medias
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="component_rangeslider.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Range Slider
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="component_rating.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Ratings
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="component_animations.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Animations
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="extension_fullscreen.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Fullscreen
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="extension_pace.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Pace
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="component_nestable.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Nestable
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="component_portlet_draggable.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Draggable Portlets
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="icon-Box2">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </i>
                                        <span>Forms, Tables &amp; Charts</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Forms
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li>
                                                    <a href="forms_advanced.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Form Elements
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="forms_general.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Form Layout
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="forms_wizard.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Form Wizard
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="forms_validation.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Form Validation
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="forms_mask.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Formatter
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="forms_xeditable.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Xeditable Editor
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="forms_dropzone.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Dropzone
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="forms_code_editor.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Code Editor
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="forms_editors.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Editor
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="forms_editor_markdown.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Markdown
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Tables
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li>
                                                    <a href="tables_simple.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Simple tables
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tables_data.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Data tables
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tables_editable.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Editable Tables
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tables_color.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Table Color
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Charts
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li>
                                                    <a href="charts_chartjs.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        ChartJS
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="charts_flot.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Flot
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="charts_inline.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Inline charts
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="charts_morris.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Morris
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="charts_peity.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Peity
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="charts_chartist.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Chartist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="charts_c3_axis.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Axis Chart
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="charts_c3_bar.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Bar Chart
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="charts_c3_data.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Data Chart
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="charts_c3_line.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Line Chart
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="charts_echarts_basic.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Basic Charts
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="charts_echarts_bar.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Bar Chart
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="charts_echarts_pie_doughnut.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Pie &amp; Doughnut Chart
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="icon-Globe">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </i>
                                        <span>Apps &amp; Widgets</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Apps
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li>
                                                    <a href="extra_calendar.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Calendar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="contact_app.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Contact List
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="contact_app_chat.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Chat
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="extra_taskboard.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Todo
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="mailbox.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Mailbox
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Widgets
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li className="treeview">
                                                    <a href="#">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Custom
                                                        <span className="pull-right-container">
                                                            <i className="fa fa-angle-right pull-right" />
                                                        </span>
                                                    </a>
                                                    <ul className="treeview-menu">
                                                        <li>
                                                            <a href="widgets_blog.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                Blog
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="widgets_chart.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                Chart
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="widgets_list.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                List
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="widgets_social.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                Social
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="widgets_statistic.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                Statistic
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="widgets_weather.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                Weather
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="widgets.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                Widgets
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="email_index.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                Emails
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="treeview">
                                                    <a href="#">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Maps
                                                        <span className="pull-right-container">
                                                            <i className="fa fa-angle-right pull-right" />
                                                        </span>
                                                    </a>
                                                    <ul className="treeview-menu">
                                                        <li>
                                                            <a href="map_google.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                Google Map
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="map_vector.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                Vector Map
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="treeview">
                                                    <a href="#">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Modals
                                                        <span className="pull-right-container">
                                                            <i className="fa fa-angle-right pull-right" />
                                                        </span>
                                                    </a>
                                                    <ul className="treeview-menu">
                                                        <li>
                                                            <a href="component_modals.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                Modals
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="component_sweatalert.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                Sweet Alert
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="component_notification.html">
                                                                <i className="icon-Commit">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </i>
                                                                Toastr
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Ecommerce
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li>
                                                    <a href="ecommerce_products.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Products
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ecommerce_cart.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Products Cart
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ecommerce_products_edit.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Products Edit
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ecommerce_details.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Product Details
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ecommerce_orders.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Product Orders
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="ecommerce_checkout.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Products Checkout
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Sample Pages
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-right pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li>
                                                    <a href="invoice.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Invoice
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="invoicelist.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Invoice List
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="extra_app_ticket.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Support Ticket
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="extra_profile.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        User Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="contact_userlist_grid.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Userlist Grid
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="contact_userlist.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Userlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="sample_faq.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        FAQs
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="sample_blank.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Blank
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="sample_coming_soon.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Coming Soon
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="sample_custom_scroll.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Custom Scrolls
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="sample_gallery.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Gallery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="sample_lightbox.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Lightbox Popup
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="sample_pricing.html">
                                                        <i className="icon-Commit">
                                                            <span className="path1" />
                                                            <span className="path2" />
                                                        </i>
                                                        Pricing
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="icon-Lock-overturning">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </i>
                                        <span>Authentication</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li>
                                            <a href="auth_login.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Login
                                            </a>
                                        </li>
                                        <li>
                                            <a href="auth_register.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Register
                                            </a>
                                        </li>
                                        <li>
                                            <a href="auth_lockscreen.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Lockscreen
                                            </a>
                                        </li>
                                        <li>
                                            <a href="auth_user_pass.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Recover password
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="icon-Warning-2">
                                            <span className="path1" />
                                            <span className="path2" />
                                            <span className="path3" />
                                        </i>
                                        <span>Miscellaneous</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li>
                                            <a href="error_404.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Error 404
                                            </a>
                                        </li>
                                        <li>
                                            <a href="error_500.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Error 500
                                            </a>
                                        </li>
                                        <li>
                                            <a href="error_maintenance.html">
                                                <i className="icon-Commit">
                                                    <span className="path1" />
                                                    <span className="path2" />
                                                </i>
                                                Maintenance
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="sidebar-widgets">
                                <div className="mx-25 mb-30 pb-20 side-bx bg-primary-light rounded20">
                                    <div className="text-center">
                                        <img
                                            src="https://medical-admin-template.multipurposethemes.com/images/svg-icon/color-svg/custom-17.svg"
                                            className="sideimg p-5"
                                            alt=""
                                        />
                                        <h4 className="title-bx text-primary">
                                            Make an Appointments
                                        </h4>
                                        <a href="#" className="py-10 fs-14 mb-0 text-primary">
                                            Best Helth Care here <i className="mdi mdi-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="copyright text-center m-25">
                                    <p>
                                        <strong className="d-block">Doclinic Dashboard</strong> © All
                                        Rights Reserved
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </aside>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                <div className="container-full">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="d-flex align-items-center">
                            <div className="me-auto">
                                <h4 className="page-title">Data Tables</h4>
                                <div className="d-inline-block align-items-center">
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="#">
                                                    <i className="mdi mdi-home-outline" />
                                                </a>
                                            </li>
                                            <li className="breadcrumb-item" aria-current="page">
                                                Tables
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data Tables
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h4 className="box-title">
                                            Complex headers (rowspan and colspan)
                                        </h4>
                                    </div>
                                    <div className="box-body">
                                        <div className="table-responsive">
                                            <table
                                                id="complex_header"
                                                className="table table-striped table-bordered display"
                                                style={{ width: "100%" }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <th rowSpan={2}>Name</th>
                                                        <th colSpan={2}>HR Information</th>
                                                        <th colSpan={3}>Contact</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Position</th>
                                                        <th>Salary</th>
                                                        <th>Office</th>
                                                        <th>Extn.</th>
                                                        <th>E-mail</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Tiger Nixon</td>
                                                        <td>System Architect</td>
                                                        <td>Edinburgh</td>
                                                        <td>61</td>
                                                        <td>2011/04/25</td>
                                                        <td>$320,800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Garrett Winters</td>
                                                        <td>Accountant</td>
                                                        <td>Tokyo</td>
                                                        <td>63</td>
                                                        <td>2011/07/25</td>
                                                        <td>$170,750</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ashton Cox</td>
                                                        <td>Junior Technical Author</td>
                                                        <td>San Francisco</td>
                                                        <td>66</td>
                                                        <td>2009/01/12</td>
                                                        <td>$86,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cedric Kelly</td>
                                                        <td>Senior Javascript Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>22</td>
                                                        <td>2012/03/29</td>
                                                        <td>$433,060</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Airi Satou</td>
                                                        <td>Accountant</td>
                                                        <td>Tokyo</td>
                                                        <td>33</td>
                                                        <td>2008/11/28</td>
                                                        <td>$162,700</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brielle Williamson</td>
                                                        <td>Integration Specialist</td>
                                                        <td>New York</td>
                                                        <td>61</td>
                                                        <td>2012/12/02</td>
                                                        <td>$372,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Herrod Chandler</td>
                                                        <td>Sales Assistant</td>
                                                        <td>San Francisco</td>
                                                        <td>59</td>
                                                        <td>2012/08/06</td>
                                                        <td>$137,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rhona Davidson</td>
                                                        <td>Integration Specialist</td>
                                                        <td>Tokyo</td>
                                                        <td>55</td>
                                                        <td>2010/10/14</td>
                                                        <td>$327,900</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Colleen Hurst</td>
                                                        <td>Javascript Developer</td>
                                                        <td>San Francisco</td>
                                                        <td>39</td>
                                                        <td>2009/09/15</td>
                                                        <td>$205,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sonya Frost</td>
                                                        <td>Software Engineer</td>
                                                        <td>Edinburgh</td>
                                                        <td>23</td>
                                                        <td>2008/12/13</td>
                                                        <td>$103,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jena Gaines</td>
                                                        <td>Office Manager</td>
                                                        <td>London</td>
                                                        <td>30</td>
                                                        <td>2008/12/19</td>
                                                        <td>$90,560</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Quinn Flynn</td>
                                                        <td>Support Lead</td>
                                                        <td>Edinburgh</td>
                                                        <td>22</td>
                                                        <td>2013/03/03</td>
                                                        <td>$342,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Charde Marshall</td>
                                                        <td>Regional Director</td>
                                                        <td>San Francisco</td>
                                                        <td>36</td>
                                                        <td>2008/10/16</td>
                                                        <td>$470,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Haley Kennedy</td>
                                                        <td>Senior Marketing Designer</td>
                                                        <td>London</td>
                                                        <td>43</td>
                                                        <td>2012/12/18</td>
                                                        <td>$313,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tatyana Fitzpatrick</td>
                                                        <td>Regional Director</td>
                                                        <td>London</td>
                                                        <td>19</td>
                                                        <td>2010/03/17</td>
                                                        <td>$385,750</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michael Silva</td>
                                                        <td>Marketing Designer</td>
                                                        <td>London</td>
                                                        <td>66</td>
                                                        <td>2012/11/27</td>
                                                        <td>$198,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Paul Byrd</td>
                                                        <td>Chief Financial Officer (CFO)</td>
                                                        <td>New York</td>
                                                        <td>64</td>
                                                        <td>2010/06/09</td>
                                                        <td>$725,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gloria Little</td>
                                                        <td>Systems Administrator</td>
                                                        <td>New York</td>
                                                        <td>59</td>
                                                        <td>2009/04/10</td>
                                                        <td>$237,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bradley Greer</td>
                                                        <td>Software Engineer</td>
                                                        <td>London</td>
                                                        <td>41</td>
                                                        <td>2012/10/13</td>
                                                        <td>$132,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dai Rios</td>
                                                        <td>Personnel Lead</td>
                                                        <td>Edinburgh</td>
                                                        <td>35</td>
                                                        <td>2012/09/26</td>
                                                        <td>$217,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jenette Caldwell</td>
                                                        <td>Development Lead</td>
                                                        <td>New York</td>
                                                        <td>30</td>
                                                        <td>2011/09/03</td>
                                                        <td>$345,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Yuri Berry</td>
                                                        <td>Chief Marketing Officer (CMO)</td>
                                                        <td>New York</td>
                                                        <td>40</td>
                                                        <td>2009/06/25</td>
                                                        <td>$675,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Caesar Vance</td>
                                                        <td>Pre-Sales Support</td>
                                                        <td>New York</td>
                                                        <td>21</td>
                                                        <td>2011/12/12</td>
                                                        <td>$106,450</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Doris Wilder</td>
                                                        <td>Sales Assistant</td>
                                                        <td>Sidney</td>
                                                        <td>23</td>
                                                        <td>2010/09/20</td>
                                                        <td>$85,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Angelica Ramos</td>
                                                        <td>Chief Executive Officer (CEO)</td>
                                                        <td>London</td>
                                                        <td>47</td>
                                                        <td>2009/10/09</td>
                                                        <td>$1,200,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gavin Joyce</td>
                                                        <td>Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>42</td>
                                                        <td>2010/12/22</td>
                                                        <td>$92,575</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Chang</td>
                                                        <td>Regional Director</td>
                                                        <td>Singapore</td>
                                                        <td>28</td>
                                                        <td>2010/11/14</td>
                                                        <td>$357,650</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brenden Wagner</td>
                                                        <td>Software Engineer</td>
                                                        <td>San Francisco</td>
                                                        <td>28</td>
                                                        <td>2011/06/07</td>
                                                        <td>$206,850</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fiona Green</td>
                                                        <td>Chief Operating Officer (COO)</td>
                                                        <td>San Francisco</td>
                                                        <td>48</td>
                                                        <td>2010/03/11</td>
                                                        <td>$850,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shou Itou</td>
                                                        <td>Regional Marketing</td>
                                                        <td>Tokyo</td>
                                                        <td>20</td>
                                                        <td>2011/08/14</td>
                                                        <td>$163,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michelle House</td>
                                                        <td>Integration Specialist</td>
                                                        <td>Sidney</td>
                                                        <td>37</td>
                                                        <td>2011/06/02</td>
                                                        <td>$95,400</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suki Burks</td>
                                                        <td>Developer</td>
                                                        <td>London</td>
                                                        <td>53</td>
                                                        <td>2009/10/22</td>
                                                        <td>$114,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Prescott Bartlett</td>
                                                        <td>Technical Author</td>
                                                        <td>London</td>
                                                        <td>27</td>
                                                        <td>2011/05/07</td>
                                                        <td>$145,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gavin Cortez</td>
                                                        <td>Team Leader</td>
                                                        <td>San Francisco</td>
                                                        <td>22</td>
                                                        <td>2008/10/26</td>
                                                        <td>$235,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Martena Mccray</td>
                                                        <td>Post-Sales support</td>
                                                        <td>Edinburgh</td>
                                                        <td>46</td>
                                                        <td>2011/03/09</td>
                                                        <td>$324,050</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unity Butler</td>
                                                        <td>Marketing Designer</td>
                                                        <td>San Francisco</td>
                                                        <td>47</td>
                                                        <td>2009/12/09</td>
                                                        <td>$85,675</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Howard Hatfield</td>
                                                        <td>Office Manager</td>
                                                        <td>San Francisco</td>
                                                        <td>51</td>
                                                        <td>2008/12/16</td>
                                                        <td>$164,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hope Fuentes</td>
                                                        <td>Secretary</td>
                                                        <td>San Francisco</td>
                                                        <td>41</td>
                                                        <td>2010/02/12</td>
                                                        <td>$109,850</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vivian Harrell</td>
                                                        <td>Financial Controller</td>
                                                        <td>San Francisco</td>
                                                        <td>62</td>
                                                        <td>2009/02/14</td>
                                                        <td>$452,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Timothy Mooney</td>
                                                        <td>Office Manager</td>
                                                        <td>London</td>
                                                        <td>37</td>
                                                        <td>2008/12/11</td>
                                                        <td>$136,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jackson Bradshaw</td>
                                                        <td>Director</td>
                                                        <td>New York</td>
                                                        <td>65</td>
                                                        <td>2008/09/26</td>
                                                        <td>$645,750</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Olivia Liang</td>
                                                        <td>Support Engineer</td>
                                                        <td>Singapore</td>
                                                        <td>64</td>
                                                        <td>2011/02/03</td>
                                                        <td>$234,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bruno Nash</td>
                                                        <td>Software Engineer</td>
                                                        <td>London</td>
                                                        <td>38</td>
                                                        <td>2011/05/03</td>
                                                        <td>$163,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sakura Yamamoto</td>
                                                        <td>Support Engineer</td>
                                                        <td>Tokyo</td>
                                                        <td>37</td>
                                                        <td>2009/08/19</td>
                                                        <td>$139,575</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thor Walton</td>
                                                        <td>Developer</td>
                                                        <td>New York</td>
                                                        <td>61</td>
                                                        <td>2013/08/11</td>
                                                        <td>$98,540</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Finn Camacho</td>
                                                        <td>Support Engineer</td>
                                                        <td>San Francisco</td>
                                                        <td>47</td>
                                                        <td>2009/07/07</td>
                                                        <td>$87,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Serge Baldwin</td>
                                                        <td>Data Coordinator</td>
                                                        <td>Singapore</td>
                                                        <td>64</td>
                                                        <td>2012/04/09</td>
                                                        <td>$138,575</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zenaida Frank</td>
                                                        <td>Software Engineer</td>
                                                        <td>New York</td>
                                                        <td>63</td>
                                                        <td>2010/01/04</td>
                                                        <td>$125,250</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zorita Serrano</td>
                                                        <td>Software Engineer</td>
                                                        <td>San Francisco</td>
                                                        <td>56</td>
                                                        <td>2012/06/01</td>
                                                        <td>$115,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Acosta</td>
                                                        <td>Junior Javascript Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>43</td>
                                                        <td>2013/02/01</td>
                                                        <td>$75,650</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cara Stevens</td>
                                                        <td>Sales Assistant</td>
                                                        <td>New York</td>
                                                        <td>46</td>
                                                        <td>2011/12/06</td>
                                                        <td>$145,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hermione Butler</td>
                                                        <td>Regional Director</td>
                                                        <td>London</td>
                                                        <td>47</td>
                                                        <td>2011/03/21</td>
                                                        <td>$356,250</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lael Greer</td>
                                                        <td>Systems Administrator</td>
                                                        <td>London</td>
                                                        <td>21</td>
                                                        <td>2009/02/27</td>
                                                        <td>$103,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jonas Alexander</td>
                                                        <td>Developer</td>
                                                        <td>San Francisco</td>
                                                        <td>30</td>
                                                        <td>2010/07/14</td>
                                                        <td>$86,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shad Decker</td>
                                                        <td>Regional Director</td>
                                                        <td>Edinburgh</td>
                                                        <td>51</td>
                                                        <td>2008/11/13</td>
                                                        <td>$183,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michael Bruce</td>
                                                        <td>Javascript Developer</td>
                                                        <td>Singapore</td>
                                                        <td>29</td>
                                                        <td>2011/06/27</td>
                                                        <td>$183,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Donna Snider</td>
                                                        <td>Customer Support</td>
                                                        <td>New York</td>
                                                        <td>27</td>
                                                        <td>2011/01/25</td>
                                                        <td>$112,000</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Salary</th>
                                                        <th>Office</th>
                                                        <th>Extn.</th>
                                                        <th>E-mail</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Individual column searching</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <div className="table-responsive">
                                            <table
                                                id="example5"
                                                className="table table-bordered table-striped"
                                                style={{ width: "100%" }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                        <th>Age</th>
                                                        <th>Start date</th>
                                                        <th>Salary</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Tiger Nixon</td>
                                                        <td>System Architect</td>
                                                        <td>Edinburgh</td>
                                                        <td>61</td>
                                                        <td>2011/04/25</td>
                                                        <td>$320,800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Garrett Winters</td>
                                                        <td>Accountant</td>
                                                        <td>Tokyo</td>
                                                        <td>63</td>
                                                        <td>2011/07/25</td>
                                                        <td>$170,750</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ashton Cox</td>
                                                        <td>Junior Technical Author</td>
                                                        <td>San Francisco</td>
                                                        <td>66</td>
                                                        <td>2009/01/12</td>
                                                        <td>$86,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cedric Kelly</td>
                                                        <td>Senior Javascript Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>22</td>
                                                        <td>2012/03/29</td>
                                                        <td>$433,060</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Airi Satou</td>
                                                        <td>Accountant</td>
                                                        <td>Tokyo</td>
                                                        <td>33</td>
                                                        <td>2008/11/28</td>
                                                        <td>$162,700</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brielle Williamson</td>
                                                        <td>Integration Specialist</td>
                                                        <td>New York</td>
                                                        <td>61</td>
                                                        <td>2012/12/02</td>
                                                        <td>$372,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Herrod Chandler</td>
                                                        <td>Sales Assistant</td>
                                                        <td>San Francisco</td>
                                                        <td>59</td>
                                                        <td>2012/08/06</td>
                                                        <td>$137,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rhona Davidson</td>
                                                        <td>Integration Specialist</td>
                                                        <td>Tokyo</td>
                                                        <td>55</td>
                                                        <td>2010/10/14</td>
                                                        <td>$327,900</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Colleen Hurst</td>
                                                        <td>Javascript Developer</td>
                                                        <td>San Francisco</td>
                                                        <td>39</td>
                                                        <td>2009/09/15</td>
                                                        <td>$205,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sonya Frost</td>
                                                        <td>Software Engineer</td>
                                                        <td>Edinburgh</td>
                                                        <td>23</td>
                                                        <td>2008/12/13</td>
                                                        <td>$103,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jena Gaines</td>
                                                        <td>Office Manager</td>
                                                        <td>London</td>
                                                        <td>30</td>
                                                        <td>2008/12/19</td>
                                                        <td>$90,560</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Quinn Flynn</td>
                                                        <td>Support Lead</td>
                                                        <td>Edinburgh</td>
                                                        <td>22</td>
                                                        <td>2013/03/03</td>
                                                        <td>$342,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Charde Marshall</td>
                                                        <td>Regional Director</td>
                                                        <td>San Francisco</td>
                                                        <td>36</td>
                                                        <td>2008/10/16</td>
                                                        <td>$470,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Haley Kennedy</td>
                                                        <td>Senior Marketing Designer</td>
                                                        <td>London</td>
                                                        <td>43</td>
                                                        <td>2012/12/18</td>
                                                        <td>$313,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tatyana Fitzpatrick</td>
                                                        <td>Regional Director</td>
                                                        <td>London</td>
                                                        <td>19</td>
                                                        <td>2010/03/17</td>
                                                        <td>$385,750</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michael Silva</td>
                                                        <td>Marketing Designer</td>
                                                        <td>London</td>
                                                        <td>66</td>
                                                        <td>2012/11/27</td>
                                                        <td>$198,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Paul Byrd</td>
                                                        <td>Chief Financial Officer (CFO)</td>
                                                        <td>New York</td>
                                                        <td>64</td>
                                                        <td>2010/06/09</td>
                                                        <td>$725,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gloria Little</td>
                                                        <td>Systems Administrator</td>
                                                        <td>New York</td>
                                                        <td>59</td>
                                                        <td>2009/04/10</td>
                                                        <td>$237,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bradley Greer</td>
                                                        <td>Software Engineer</td>
                                                        <td>London</td>
                                                        <td>41</td>
                                                        <td>2012/10/13</td>
                                                        <td>$132,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dai Rios</td>
                                                        <td>Personnel Lead</td>
                                                        <td>Edinburgh</td>
                                                        <td>35</td>
                                                        <td>2012/09/26</td>
                                                        <td>$217,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jenette Caldwell</td>
                                                        <td>Development Lead</td>
                                                        <td>New York</td>
                                                        <td>30</td>
                                                        <td>2011/09/03</td>
                                                        <td>$345,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Yuri Berry</td>
                                                        <td>Chief Marketing Officer (CMO)</td>
                                                        <td>New York</td>
                                                        <td>40</td>
                                                        <td>2009/06/25</td>
                                                        <td>$675,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Caesar Vance</td>
                                                        <td>Pre-Sales Support</td>
                                                        <td>New York</td>
                                                        <td>21</td>
                                                        <td>2011/12/12</td>
                                                        <td>$106,450</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Doris Wilder</td>
                                                        <td>Sales Assistant</td>
                                                        <td>Sidney</td>
                                                        <td>23</td>
                                                        <td>2010/09/20</td>
                                                        <td>$85,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Angelica Ramos</td>
                                                        <td>Chief Executive Officer (CEO)</td>
                                                        <td>London</td>
                                                        <td>47</td>
                                                        <td>2009/10/09</td>
                                                        <td>$1,200,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gavin Joyce</td>
                                                        <td>Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>42</td>
                                                        <td>2010/12/22</td>
                                                        <td>$92,575</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Chang</td>
                                                        <td>Regional Director</td>
                                                        <td>Singapore</td>
                                                        <td>28</td>
                                                        <td>2010/11/14</td>
                                                        <td>$357,650</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brenden Wagner</td>
                                                        <td>Software Engineer</td>
                                                        <td>San Francisco</td>
                                                        <td>28</td>
                                                        <td>2011/06/07</td>
                                                        <td>$206,850</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fiona Green</td>
                                                        <td>Chief Operating Officer (COO)</td>
                                                        <td>San Francisco</td>
                                                        <td>48</td>
                                                        <td>2010/03/11</td>
                                                        <td>$850,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shou Itou</td>
                                                        <td>Regional Marketing</td>
                                                        <td>Tokyo</td>
                                                        <td>20</td>
                                                        <td>2011/08/14</td>
                                                        <td>$163,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michelle House</td>
                                                        <td>Integration Specialist</td>
                                                        <td>Sidney</td>
                                                        <td>37</td>
                                                        <td>2011/06/02</td>
                                                        <td>$95,400</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suki Burks</td>
                                                        <td>Developer</td>
                                                        <td>London</td>
                                                        <td>53</td>
                                                        <td>2009/10/22</td>
                                                        <td>$114,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Prescott Bartlett</td>
                                                        <td>Technical Author</td>
                                                        <td>London</td>
                                                        <td>27</td>
                                                        <td>2011/05/07</td>
                                                        <td>$145,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gavin Cortez</td>
                                                        <td>Team Leader</td>
                                                        <td>San Francisco</td>
                                                        <td>22</td>
                                                        <td>2008/10/26</td>
                                                        <td>$235,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Martena Mccray</td>
                                                        <td>Post-Sales support</td>
                                                        <td>Edinburgh</td>
                                                        <td>46</td>
                                                        <td>2011/03/09</td>
                                                        <td>$324,050</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unity Butler</td>
                                                        <td>Marketing Designer</td>
                                                        <td>San Francisco</td>
                                                        <td>47</td>
                                                        <td>2009/12/09</td>
                                                        <td>$85,675</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Howard Hatfield</td>
                                                        <td>Office Manager</td>
                                                        <td>San Francisco</td>
                                                        <td>51</td>
                                                        <td>2008/12/16</td>
                                                        <td>$164,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hope Fuentes</td>
                                                        <td>Secretary</td>
                                                        <td>San Francisco</td>
                                                        <td>41</td>
                                                        <td>2010/02/12</td>
                                                        <td>$109,850</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vivian Harrell</td>
                                                        <td>Financial Controller</td>
                                                        <td>San Francisco</td>
                                                        <td>62</td>
                                                        <td>2009/02/14</td>
                                                        <td>$452,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Timothy Mooney</td>
                                                        <td>Office Manager</td>
                                                        <td>London</td>
                                                        <td>37</td>
                                                        <td>2008/12/11</td>
                                                        <td>$136,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jackson Bradshaw</td>
                                                        <td>Director</td>
                                                        <td>New York</td>
                                                        <td>65</td>
                                                        <td>2008/09/26</td>
                                                        <td>$645,750</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Olivia Liang</td>
                                                        <td>Support Engineer</td>
                                                        <td>Singapore</td>
                                                        <td>64</td>
                                                        <td>2011/02/03</td>
                                                        <td>$234,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bruno Nash</td>
                                                        <td>Software Engineer</td>
                                                        <td>London</td>
                                                        <td>38</td>
                                                        <td>2011/05/03</td>
                                                        <td>$163,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sakura Yamamoto</td>
                                                        <td>Support Engineer</td>
                                                        <td>Tokyo</td>
                                                        <td>37</td>
                                                        <td>2009/08/19</td>
                                                        <td>$139,575</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thor Walton</td>
                                                        <td>Developer</td>
                                                        <td>New York</td>
                                                        <td>61</td>
                                                        <td>2013/08/11</td>
                                                        <td>$98,540</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Finn Camacho</td>
                                                        <td>Support Engineer</td>
                                                        <td>San Francisco</td>
                                                        <td>47</td>
                                                        <td>2009/07/07</td>
                                                        <td>$87,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Serge Baldwin</td>
                                                        <td>Data Coordinator</td>
                                                        <td>Singapore</td>
                                                        <td>64</td>
                                                        <td>2012/04/09</td>
                                                        <td>$138,575</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zenaida Frank</td>
                                                        <td>Software Engineer</td>
                                                        <td>New York</td>
                                                        <td>63</td>
                                                        <td>2010/01/04</td>
                                                        <td>$125,250</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zorita Serrano</td>
                                                        <td>Software Engineer</td>
                                                        <td>San Francisco</td>
                                                        <td>56</td>
                                                        <td>2012/06/01</td>
                                                        <td>$115,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Acosta</td>
                                                        <td>Junior Javascript Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>43</td>
                                                        <td>2013/02/01</td>
                                                        <td>$75,650</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cara Stevens</td>
                                                        <td>Sales Assistant</td>
                                                        <td>New York</td>
                                                        <td>46</td>
                                                        <td>2011/12/06</td>
                                                        <td>$145,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hermione Butler</td>
                                                        <td>Regional Director</td>
                                                        <td>London</td>
                                                        <td>47</td>
                                                        <td>2011/03/21</td>
                                                        <td>$356,250</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lael Greer</td>
                                                        <td>Systems Administrator</td>
                                                        <td>London</td>
                                                        <td>21</td>
                                                        <td>2009/02/27</td>
                                                        <td>$103,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jonas Alexander</td>
                                                        <td>Developer</td>
                                                        <td>San Francisco</td>
                                                        <td>30</td>
                                                        <td>2010/07/14</td>
                                                        <td>$86,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shad Decker</td>
                                                        <td>Regional Director</td>
                                                        <td>Edinburgh</td>
                                                        <td>51</td>
                                                        <td>2008/11/13</td>
                                                        <td>$183,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michael Bruce</td>
                                                        <td>Javascript Developer</td>
                                                        <td>Singapore</td>
                                                        <td>29</td>
                                                        <td>2011/06/27</td>
                                                        <td>$183,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Donna Snider</td>
                                                        <td>Customer Support</td>
                                                        <td>New York</td>
                                                        <td>27</td>
                                                        <td>2011/01/25</td>
                                                        <td>$112,000</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                        <th>Age</th>
                                                        <th>Start date</th>
                                                        <th>Salary</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                            </div>
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Form inputs</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <div className="table-responsive">
                                            <table
                                                id="example6"
                                                className="display table table-bordered table-separated"
                                                style={{ width: "100%" }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Age</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Tiger Nixon</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-1-age"
                                                                name="row-1-age"
                                                                defaultValue={61}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-1-position"
                                                                name="row-1-position"
                                                                defaultValue="System Architect"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-1-office"
                                                                name="row-1-office"
                                                            >
                                                                <option value="Edinburgh" selected="selected">
                                                                    Edinburgh
                                                                </option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Garrett Winters</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-2-age"
                                                                name="row-2-age"
                                                                defaultValue={63}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-2-position"
                                                                name="row-2-position"
                                                                defaultValue="Accountant"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-2-office"
                                                                name="row-2-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo" selected="selected">
                                                                    Tokyo
                                                                </option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ashton Cox</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-3-age"
                                                                name="row-3-age"
                                                                defaultValue={66}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-3-position"
                                                                name="row-3-position"
                                                                defaultValue="Junior Technical Author"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-3-office"
                                                                name="row-3-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cedric Kelly</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-4-age"
                                                                name="row-4-age"
                                                                defaultValue={22}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-4-position"
                                                                name="row-4-position"
                                                                defaultValue="Senior Javascript Developer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-4-office"
                                                                name="row-4-office"
                                                            >
                                                                <option value="Edinburgh" selected="selected">
                                                                    Edinburgh
                                                                </option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Airi Satou</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-5-age"
                                                                name="row-5-age"
                                                                defaultValue={33}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-5-position"
                                                                name="row-5-position"
                                                                defaultValue="Accountant"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-5-office"
                                                                name="row-5-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo" selected="selected">
                                                                    Tokyo
                                                                </option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brielle Williamson</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-6-age"
                                                                name="row-6-age"
                                                                defaultValue={61}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-6-position"
                                                                name="row-6-position"
                                                                defaultValue="Integration Specialist"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-6-office"
                                                                name="row-6-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York" selected="selected">
                                                                    New York
                                                                </option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Herrod Chandler</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-7-age"
                                                                name="row-7-age"
                                                                defaultValue={59}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-7-position"
                                                                name="row-7-position"
                                                                defaultValue="Sales Assistant"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-7-office"
                                                                name="row-7-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rhona Davidson</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-8-age"
                                                                name="row-8-age"
                                                                defaultValue={55}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-8-position"
                                                                name="row-8-position"
                                                                defaultValue="Integration Specialist"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-8-office"
                                                                name="row-8-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo" selected="selected">
                                                                    Tokyo
                                                                </option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Colleen Hurst</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-9-age"
                                                                name="row-9-age"
                                                                defaultValue={39}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-9-position"
                                                                name="row-9-position"
                                                                defaultValue="Javascript Developer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-9-office"
                                                                name="row-9-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sonya Frost</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-10-age"
                                                                name="row-10-age"
                                                                defaultValue={23}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-10-position"
                                                                name="row-10-position"
                                                                defaultValue="Software Engineer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-10-office"
                                                                name="row-10-office"
                                                            >
                                                                <option value="Edinburgh" selected="selected">
                                                                    Edinburgh
                                                                </option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jena Gaines</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-11-age"
                                                                name="row-11-age"
                                                                defaultValue={30}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-11-position"
                                                                name="row-11-position"
                                                                defaultValue="Office Manager"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-11-office"
                                                                name="row-11-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London" selected="selected">
                                                                    London
                                                                </option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Quinn Flynn</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-12-age"
                                                                name="row-12-age"
                                                                defaultValue={22}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-12-position"
                                                                name="row-12-position"
                                                                defaultValue="Support Lead"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-12-office"
                                                                name="row-12-office"
                                                            >
                                                                <option value="Edinburgh" selected="selected">
                                                                    Edinburgh
                                                                </option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Charde Marshall</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-13-age"
                                                                name="row-13-age"
                                                                defaultValue={36}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-13-position"
                                                                name="row-13-position"
                                                                defaultValue="Regional Director"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-13-office"
                                                                name="row-13-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Haley Kennedy</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-14-age"
                                                                name="row-14-age"
                                                                defaultValue={43}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-14-position"
                                                                name="row-14-position"
                                                                defaultValue="Senior Marketing Designer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-14-office"
                                                                name="row-14-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London" selected="selected">
                                                                    London
                                                                </option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tatyana Fitzpatrick</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-15-age"
                                                                name="row-15-age"
                                                                defaultValue={19}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-15-position"
                                                                name="row-15-position"
                                                                defaultValue="Regional Director"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-15-office"
                                                                name="row-15-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London" selected="selected">
                                                                    London
                                                                </option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michael Silva</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-16-age"
                                                                name="row-16-age"
                                                                defaultValue={66}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-16-position"
                                                                name="row-16-position"
                                                                defaultValue="Marketing Designer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-16-office"
                                                                name="row-16-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London" selected="selected">
                                                                    London
                                                                </option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Paul Byrd</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-17-age"
                                                                name="row-17-age"
                                                                defaultValue={64}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-17-position"
                                                                name="row-17-position"
                                                                defaultValue="Chief Financial Officer (CFO)"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-17-office"
                                                                name="row-17-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York" selected="selected">
                                                                    New York
                                                                </option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gloria Little</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-18-age"
                                                                name="row-18-age"
                                                                defaultValue={59}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-18-position"
                                                                name="row-18-position"
                                                                defaultValue="Systems Administrator"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-18-office"
                                                                name="row-18-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York" selected="selected">
                                                                    New York
                                                                </option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bradley Greer</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-19-age"
                                                                name="row-19-age"
                                                                defaultValue={41}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-19-position"
                                                                name="row-19-position"
                                                                defaultValue="Software Engineer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-19-office"
                                                                name="row-19-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London" selected="selected">
                                                                    London
                                                                </option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dai Rios</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-20-age"
                                                                name="row-20-age"
                                                                defaultValue={35}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-20-position"
                                                                name="row-20-position"
                                                                defaultValue="Personnel Lead"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-20-office"
                                                                name="row-20-office"
                                                            >
                                                                <option value="Edinburgh" selected="selected">
                                                                    Edinburgh
                                                                </option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jenette Caldwell</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-21-age"
                                                                name="row-21-age"
                                                                defaultValue={30}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-21-position"
                                                                name="row-21-position"
                                                                defaultValue="Development Lead"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-21-office"
                                                                name="row-21-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York" selected="selected">
                                                                    New York
                                                                </option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Yuri Berry</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-22-age"
                                                                name="row-22-age"
                                                                defaultValue={40}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-22-position"
                                                                name="row-22-position"
                                                                defaultValue="Chief Marketing Officer (CMO)"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-22-office"
                                                                name="row-22-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York" selected="selected">
                                                                    New York
                                                                </option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Caesar Vance</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-23-age"
                                                                name="row-23-age"
                                                                defaultValue={21}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-23-position"
                                                                name="row-23-position"
                                                                defaultValue="Pre-Sales Support"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-23-office"
                                                                name="row-23-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York" selected="selected">
                                                                    New York
                                                                </option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Doris Wilder</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-24-age"
                                                                name="row-24-age"
                                                                defaultValue={23}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-24-position"
                                                                name="row-24-position"
                                                                defaultValue="Sales Assistant"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-24-office"
                                                                name="row-24-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Angelica Ramos</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-25-age"
                                                                name="row-25-age"
                                                                defaultValue={47}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-25-position"
                                                                name="row-25-position"
                                                                defaultValue="Chief Executive Officer (CEO)"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-25-office"
                                                                name="row-25-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London" selected="selected">
                                                                    London
                                                                </option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gavin Joyce</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-26-age"
                                                                name="row-26-age"
                                                                defaultValue={42}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-26-position"
                                                                name="row-26-position"
                                                                defaultValue="Developer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-26-office"
                                                                name="row-26-office"
                                                            >
                                                                <option value="Edinburgh" selected="selected">
                                                                    Edinburgh
                                                                </option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Chang</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-27-age"
                                                                name="row-27-age"
                                                                defaultValue={28}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-27-position"
                                                                name="row-27-position"
                                                                defaultValue="Regional Director"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-27-office"
                                                                name="row-27-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brenden Wagner</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-28-age"
                                                                name="row-28-age"
                                                                defaultValue={28}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-28-position"
                                                                name="row-28-position"
                                                                defaultValue="Software Engineer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-28-office"
                                                                name="row-28-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fiona Green</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-29-age"
                                                                name="row-29-age"
                                                                defaultValue={48}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-29-position"
                                                                name="row-29-position"
                                                                defaultValue="Chief Operating Officer (COO)"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-29-office"
                                                                name="row-29-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shou Itou</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-30-age"
                                                                name="row-30-age"
                                                                defaultValue={20}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-30-position"
                                                                name="row-30-position"
                                                                defaultValue="Regional Marketing"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-30-office"
                                                                name="row-30-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo" selected="selected">
                                                                    Tokyo
                                                                </option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michelle House</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-31-age"
                                                                name="row-31-age"
                                                                defaultValue={37}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-31-position"
                                                                name="row-31-position"
                                                                defaultValue="Integration Specialist"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-31-office"
                                                                name="row-31-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suki Burks</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-32-age"
                                                                name="row-32-age"
                                                                defaultValue={53}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-32-position"
                                                                name="row-32-position"
                                                                defaultValue="Developer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-32-office"
                                                                name="row-32-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London" selected="selected">
                                                                    London
                                                                </option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Prescott Bartlett</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-33-age"
                                                                name="row-33-age"
                                                                defaultValue={27}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-33-position"
                                                                name="row-33-position"
                                                                defaultValue="Technical Author"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-33-office"
                                                                name="row-33-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London" selected="selected">
                                                                    London
                                                                </option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gavin Cortez</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-34-age"
                                                                name="row-34-age"
                                                                defaultValue={22}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-34-position"
                                                                name="row-34-position"
                                                                defaultValue="Team Leader"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-34-office"
                                                                name="row-34-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Martena Mccray</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-35-age"
                                                                name="row-35-age"
                                                                defaultValue={46}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-35-position"
                                                                name="row-35-position"
                                                                defaultValue="Post-Sales support"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-35-office"
                                                                name="row-35-office"
                                                            >
                                                                <option value="Edinburgh" selected="selected">
                                                                    Edinburgh
                                                                </option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unity Butler</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-36-age"
                                                                name="row-36-age"
                                                                defaultValue={47}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-36-position"
                                                                name="row-36-position"
                                                                defaultValue="Marketing Designer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-36-office"
                                                                name="row-36-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Howard Hatfield</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-37-age"
                                                                name="row-37-age"
                                                                defaultValue={51}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-37-position"
                                                                name="row-37-position"
                                                                defaultValue="Office Manager"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-37-office"
                                                                name="row-37-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hope Fuentes</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-38-age"
                                                                name="row-38-age"
                                                                defaultValue={41}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-38-position"
                                                                name="row-38-position"
                                                                defaultValue="Secretary"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-38-office"
                                                                name="row-38-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vivian Harrell</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-39-age"
                                                                name="row-39-age"
                                                                defaultValue={62}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-39-position"
                                                                name="row-39-position"
                                                                defaultValue="Financial Controller"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-39-office"
                                                                name="row-39-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Timothy Mooney</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-40-age"
                                                                name="row-40-age"
                                                                defaultValue={37}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-40-position"
                                                                name="row-40-position"
                                                                defaultValue="Office Manager"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-40-office"
                                                                name="row-40-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London" selected="selected">
                                                                    London
                                                                </option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jackson Bradshaw</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-41-age"
                                                                name="row-41-age"
                                                                defaultValue={65}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-41-position"
                                                                name="row-41-position"
                                                                defaultValue="Director"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-41-office"
                                                                name="row-41-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York" selected="selected">
                                                                    New York
                                                                </option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Olivia Liang</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-42-age"
                                                                name="row-42-age"
                                                                defaultValue={64}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-42-position"
                                                                name="row-42-position"
                                                                defaultValue="Support Engineer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-42-office"
                                                                name="row-42-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bruno Nash</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-43-age"
                                                                name="row-43-age"
                                                                defaultValue={38}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-43-position"
                                                                name="row-43-position"
                                                                defaultValue="Software Engineer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-43-office"
                                                                name="row-43-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London" selected="selected">
                                                                    London
                                                                </option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sakura Yamamoto</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-44-age"
                                                                name="row-44-age"
                                                                defaultValue={37}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-44-position"
                                                                name="row-44-position"
                                                                defaultValue="Support Engineer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-44-office"
                                                                name="row-44-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo" selected="selected">
                                                                    Tokyo
                                                                </option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thor Walton</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-45-age"
                                                                name="row-45-age"
                                                                defaultValue={61}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-45-position"
                                                                name="row-45-position"
                                                                defaultValue="Developer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-45-office"
                                                                name="row-45-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York" selected="selected">
                                                                    New York
                                                                </option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Finn Camacho</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-46-age"
                                                                name="row-46-age"
                                                                defaultValue={47}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-46-position"
                                                                name="row-46-position"
                                                                defaultValue="Support Engineer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-46-office"
                                                                name="row-46-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Serge Baldwin</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-47-age"
                                                                name="row-47-age"
                                                                defaultValue={64}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-47-position"
                                                                name="row-47-position"
                                                                defaultValue="Data Coordinator"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-47-office"
                                                                name="row-47-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zenaida Frank</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-48-age"
                                                                name="row-48-age"
                                                                defaultValue={63}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-48-position"
                                                                name="row-48-position"
                                                                defaultValue="Software Engineer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-48-office"
                                                                name="row-48-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York" selected="selected">
                                                                    New York
                                                                </option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zorita Serrano</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-49-age"
                                                                name="row-49-age"
                                                                defaultValue={56}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-49-position"
                                                                name="row-49-position"
                                                                defaultValue="Software Engineer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-49-office"
                                                                name="row-49-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Acosta</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-50-age"
                                                                name="row-50-age"
                                                                defaultValue={43}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-50-position"
                                                                name="row-50-position"
                                                                defaultValue="Junior Javascript Developer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-50-office"
                                                                name="row-50-office"
                                                            >
                                                                <option value="Edinburgh" selected="selected">
                                                                    Edinburgh
                                                                </option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cara Stevens</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-51-age"
                                                                name="row-51-age"
                                                                defaultValue={46}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-51-position"
                                                                name="row-51-position"
                                                                defaultValue="Sales Assistant"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-51-office"
                                                                name="row-51-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York" selected="selected">
                                                                    New York
                                                                </option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hermione Butler</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-52-age"
                                                                name="row-52-age"
                                                                defaultValue={47}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-52-position"
                                                                name="row-52-position"
                                                                defaultValue="Regional Director"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-52-office"
                                                                name="row-52-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London" selected="selected">
                                                                    London
                                                                </option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lael Greer</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-53-age"
                                                                name="row-53-age"
                                                                defaultValue={21}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-53-position"
                                                                name="row-53-position"
                                                                defaultValue="Systems Administrator"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-53-office"
                                                                name="row-53-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London" selected="selected">
                                                                    London
                                                                </option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jonas Alexander</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-54-age"
                                                                name="row-54-age"
                                                                defaultValue={30}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-54-position"
                                                                name="row-54-position"
                                                                defaultValue="Developer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-54-office"
                                                                name="row-54-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco" selected="selected">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shad Decker</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-55-age"
                                                                name="row-55-age"
                                                                defaultValue={51}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-55-position"
                                                                name="row-55-position"
                                                                defaultValue="Regional Director"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-55-office"
                                                                name="row-55-office"
                                                            >
                                                                <option value="Edinburgh" selected="selected">
                                                                    Edinburgh
                                                                </option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michael Bruce</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-56-age"
                                                                name="row-56-age"
                                                                defaultValue={29}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-56-position"
                                                                name="row-56-position"
                                                                defaultValue="Javascript Developer"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-56-office"
                                                                name="row-56-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York">New York</option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Donna Snider</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-57-age"
                                                                name="row-57-age"
                                                                defaultValue={27}
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                id="row-57-position"
                                                                name="row-57-position"
                                                                defaultValue="Customer Support"
                                                            />
                                                        </td>
                                                        <td>
                                                            <select
                                                                size={1}
                                                                id="row-57-office"
                                                                name="row-57-office"
                                                            >
                                                                <option value="Edinburgh">Edinburgh</option>
                                                                <option value="London">London</option>
                                                                <option value="New York" selected="selected">
                                                                    New York
                                                                </option>
                                                                <option value="San Francisco">
                                                                    San Francisco
                                                                </option>
                                                                <option value="Tokyo">Tokyo</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Age</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                            </div>
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Data Table With Full Features</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <div className="table-responsive">
                                            <table
                                                id="example1"
                                                className="table table-bordered table-striped"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                        <th>Age</th>
                                                        <th>Start date</th>
                                                        <th>Salary</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Tiger Nixon</td>
                                                        <td>System Architect</td>
                                                        <td>Edinburgh</td>
                                                        <td>61</td>
                                                        <td>2011/04/25</td>
                                                        <td>$320,800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Garrett Winters</td>
                                                        <td>Accountant</td>
                                                        <td>Tokyo</td>
                                                        <td>63</td>
                                                        <td>2011/07/25</td>
                                                        <td>$170,750</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ashton Cox</td>
                                                        <td>Junior Technical Author</td>
                                                        <td>San Francisco</td>
                                                        <td>66</td>
                                                        <td>2009/01/12</td>
                                                        <td>$86,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cedric Kelly</td>
                                                        <td>Senior Javascript Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>22</td>
                                                        <td>2012/03/29</td>
                                                        <td>$433,060</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Airi Satou</td>
                                                        <td>Accountant</td>
                                                        <td>Tokyo</td>
                                                        <td>33</td>
                                                        <td>2008/11/28</td>
                                                        <td>$162,700</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brielle Williamson</td>
                                                        <td>Integration Specialist</td>
                                                        <td>New York</td>
                                                        <td>61</td>
                                                        <td>2012/12/02</td>
                                                        <td>$372,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Herrod Chandler</td>
                                                        <td>Sales Assistant</td>
                                                        <td>San Francisco</td>
                                                        <td>59</td>
                                                        <td>2012/08/06</td>
                                                        <td>$137,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rhona Davidson</td>
                                                        <td>Integration Specialist</td>
                                                        <td>Tokyo</td>
                                                        <td>55</td>
                                                        <td>2010/10/14</td>
                                                        <td>$327,900</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Colleen Hurst</td>
                                                        <td>Javascript Developer</td>
                                                        <td>San Francisco</td>
                                                        <td>39</td>
                                                        <td>2009/09/15</td>
                                                        <td>$205,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sonya Frost</td>
                                                        <td>Software Engineer</td>
                                                        <td>Edinburgh</td>
                                                        <td>23</td>
                                                        <td>2008/12/13</td>
                                                        <td>$103,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jena Gaines</td>
                                                        <td>Office Manager</td>
                                                        <td>London</td>
                                                        <td>30</td>
                                                        <td>2008/12/19</td>
                                                        <td>$90,560</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Quinn Flynn</td>
                                                        <td>Support Lead</td>
                                                        <td>Edinburgh</td>
                                                        <td>22</td>
                                                        <td>2013/03/03</td>
                                                        <td>$342,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Charde Marshall</td>
                                                        <td>Regional Director</td>
                                                        <td>San Francisco</td>
                                                        <td>36</td>
                                                        <td>2008/10/16</td>
                                                        <td>$470,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Haley Kennedy</td>
                                                        <td>Senior Marketing Designer</td>
                                                        <td>London</td>
                                                        <td>43</td>
                                                        <td>2012/12/18</td>
                                                        <td>$313,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tatyana Fitzpatrick</td>
                                                        <td>Regional Director</td>
                                                        <td>London</td>
                                                        <td>19</td>
                                                        <td>2010/03/17</td>
                                                        <td>$385,750</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michael Silva</td>
                                                        <td>Marketing Designer</td>
                                                        <td>London</td>
                                                        <td>66</td>
                                                        <td>2012/11/27</td>
                                                        <td>$198,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Paul Byrd</td>
                                                        <td>Chief Financial Officer (CFO)</td>
                                                        <td>New York</td>
                                                        <td>64</td>
                                                        <td>2010/06/09</td>
                                                        <td>$725,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gloria Little</td>
                                                        <td>Systems Administrator</td>
                                                        <td>New York</td>
                                                        <td>59</td>
                                                        <td>2009/04/10</td>
                                                        <td>$237,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bradley Greer</td>
                                                        <td>Software Engineer</td>
                                                        <td>London</td>
                                                        <td>41</td>
                                                        <td>2012/10/13</td>
                                                        <td>$132,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dai Rios</td>
                                                        <td>Personnel Lead</td>
                                                        <td>Edinburgh</td>
                                                        <td>35</td>
                                                        <td>2012/09/26</td>
                                                        <td>$217,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jenette Caldwell</td>
                                                        <td>Development Lead</td>
                                                        <td>New York</td>
                                                        <td>30</td>
                                                        <td>2011/09/03</td>
                                                        <td>$345,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Yuri Berry</td>
                                                        <td>Chief Marketing Officer (CMO)</td>
                                                        <td>New York</td>
                                                        <td>40</td>
                                                        <td>2009/06/25</td>
                                                        <td>$675,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Caesar Vance</td>
                                                        <td>Pre-Sales Support</td>
                                                        <td>New York</td>
                                                        <td>21</td>
                                                        <td>2011/12/12</td>
                                                        <td>$106,450</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Doris Wilder</td>
                                                        <td>Sales Assistant</td>
                                                        <td>Sidney</td>
                                                        <td>23</td>
                                                        <td>2010/09/20</td>
                                                        <td>$85,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Angelica Ramos</td>
                                                        <td>Chief Executive Officer (CEO)</td>
                                                        <td>London</td>
                                                        <td>47</td>
                                                        <td>2009/10/09</td>
                                                        <td>$1,200,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gavin Joyce</td>
                                                        <td>Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>42</td>
                                                        <td>2010/12/22</td>
                                                        <td>$92,575</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Chang</td>
                                                        <td>Regional Director</td>
                                                        <td>Singapore</td>
                                                        <td>28</td>
                                                        <td>2010/11/14</td>
                                                        <td>$357,650</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brenden Wagner</td>
                                                        <td>Software Engineer</td>
                                                        <td>San Francisco</td>
                                                        <td>28</td>
                                                        <td>2011/06/07</td>
                                                        <td>$206,850</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fiona Green</td>
                                                        <td>Chief Operating Officer (COO)</td>
                                                        <td>San Francisco</td>
                                                        <td>48</td>
                                                        <td>2010/03/11</td>
                                                        <td>$850,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shou Itou</td>
                                                        <td>Regional Marketing</td>
                                                        <td>Tokyo</td>
                                                        <td>20</td>
                                                        <td>2011/08/14</td>
                                                        <td>$163,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michelle House</td>
                                                        <td>Integration Specialist</td>
                                                        <td>Sidney</td>
                                                        <td>37</td>
                                                        <td>2011/06/02</td>
                                                        <td>$95,400</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suki Burks</td>
                                                        <td>Developer</td>
                                                        <td>London</td>
                                                        <td>53</td>
                                                        <td>2009/10/22</td>
                                                        <td>$114,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Prescott Bartlett</td>
                                                        <td>Technical Author</td>
                                                        <td>London</td>
                                                        <td>27</td>
                                                        <td>2011/05/07</td>
                                                        <td>$145,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gavin Cortez</td>
                                                        <td>Team Leader</td>
                                                        <td>San Francisco</td>
                                                        <td>22</td>
                                                        <td>2008/10/26</td>
                                                        <td>$235,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Martena Mccray</td>
                                                        <td>Post-Sales support</td>
                                                        <td>Edinburgh</td>
                                                        <td>46</td>
                                                        <td>2011/03/09</td>
                                                        <td>$324,050</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unity Butler</td>
                                                        <td>Marketing Designer</td>
                                                        <td>San Francisco</td>
                                                        <td>47</td>
                                                        <td>2009/12/09</td>
                                                        <td>$85,675</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Howard Hatfield</td>
                                                        <td>Office Manager</td>
                                                        <td>San Francisco</td>
                                                        <td>51</td>
                                                        <td>2008/12/16</td>
                                                        <td>$164,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hope Fuentes</td>
                                                        <td>Secretary</td>
                                                        <td>San Francisco</td>
                                                        <td>41</td>
                                                        <td>2010/02/12</td>
                                                        <td>$109,850</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vivian Harrell</td>
                                                        <td>Financial Controller</td>
                                                        <td>San Francisco</td>
                                                        <td>62</td>
                                                        <td>2009/02/14</td>
                                                        <td>$452,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Timothy Mooney</td>
                                                        <td>Office Manager</td>
                                                        <td>London</td>
                                                        <td>37</td>
                                                        <td>2008/12/11</td>
                                                        <td>$136,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jackson Bradshaw</td>
                                                        <td>Director</td>
                                                        <td>New York</td>
                                                        <td>65</td>
                                                        <td>2008/09/26</td>
                                                        <td>$645,750</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Olivia Liang</td>
                                                        <td>Support Engineer</td>
                                                        <td>Singapore</td>
                                                        <td>64</td>
                                                        <td>2011/02/03</td>
                                                        <td>$234,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bruno Nash</td>
                                                        <td>Software Engineer</td>
                                                        <td>London</td>
                                                        <td>38</td>
                                                        <td>2011/05/03</td>
                                                        <td>$163,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sakura Yamamoto</td>
                                                        <td>Support Engineer</td>
                                                        <td>Tokyo</td>
                                                        <td>37</td>
                                                        <td>2009/08/19</td>
                                                        <td>$139,575</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thor Walton</td>
                                                        <td>Developer</td>
                                                        <td>New York</td>
                                                        <td>61</td>
                                                        <td>2013/08/11</td>
                                                        <td>$98,540</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Finn Camacho</td>
                                                        <td>Support Engineer</td>
                                                        <td>San Francisco</td>
                                                        <td>47</td>
                                                        <td>2009/07/07</td>
                                                        <td>$87,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Serge Baldwin</td>
                                                        <td>Data Coordinator</td>
                                                        <td>Singapore</td>
                                                        <td>64</td>
                                                        <td>2012/04/09</td>
                                                        <td>$138,575</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zenaida Frank</td>
                                                        <td>Software Engineer</td>
                                                        <td>New York</td>
                                                        <td>63</td>
                                                        <td>2010/01/04</td>
                                                        <td>$125,250</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zorita Serrano</td>
                                                        <td>Software Engineer</td>
                                                        <td>San Francisco</td>
                                                        <td>56</td>
                                                        <td>2012/06/01</td>
                                                        <td>$115,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Acosta</td>
                                                        <td>Junior Javascript Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>43</td>
                                                        <td>2013/02/01</td>
                                                        <td>$75,650</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cara Stevens</td>
                                                        <td>Sales Assistant</td>
                                                        <td>New York</td>
                                                        <td>46</td>
                                                        <td>2011/12/06</td>
                                                        <td>$145,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hermione Butler</td>
                                                        <td>Regional Director</td>
                                                        <td>London</td>
                                                        <td>47</td>
                                                        <td>2011/03/21</td>
                                                        <td>$356,250</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lael Greer</td>
                                                        <td>Systems Administrator</td>
                                                        <td>London</td>
                                                        <td>21</td>
                                                        <td>2009/02/27</td>
                                                        <td>$103,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jonas Alexander</td>
                                                        <td>Developer</td>
                                                        <td>San Francisco</td>
                                                        <td>30</td>
                                                        <td>2010/07/14</td>
                                                        <td>$86,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shad Decker</td>
                                                        <td>Regional Director</td>
                                                        <td>Edinburgh</td>
                                                        <td>51</td>
                                                        <td>2008/11/13</td>
                                                        <td>$183,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michael Bruce</td>
                                                        <td>Javascript Developer</td>
                                                        <td>Singapore</td>
                                                        <td>29</td>
                                                        <td>2011/06/27</td>
                                                        <td>$183,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Donna Snider</td>
                                                        <td>Customer Support</td>
                                                        <td>New York</td>
                                                        <td>27</td>
                                                        <td>2011/01/25</td>
                                                        <td>$112,000</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                        <th>Age</th>
                                                        <th>Start date</th>
                                                        <th>Salary</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                                <div className="box">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Hover Export Data Table</h3>
                                        <h6 className="box-subtitle">
                                            Export data to Copy, CSV, Excel, PDF &amp; Print
                                        </h6>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <div className="table-responsive">
                                            <table
                                                id="example"
                                                className="table table-bordered table-hover display nowrap margin-top-10 w-p100"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                        <th>Age</th>
                                                        <th>Start date</th>
                                                        <th>Salary</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Tiger Nixon</td>
                                                        <td>System Architect</td>
                                                        <td>Edinburgh</td>
                                                        <td>61</td>
                                                        <td>2011/04/25</td>
                                                        <td>$320,800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Garrett Winters</td>
                                                        <td>Accountant</td>
                                                        <td>Tokyo</td>
                                                        <td>63</td>
                                                        <td>2011/07/25</td>
                                                        <td>$170,750</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ashton Cox</td>
                                                        <td>Junior Technical Author</td>
                                                        <td>San Francisco</td>
                                                        <td>66</td>
                                                        <td>2009/01/12</td>
                                                        <td>$86,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cedric Kelly</td>
                                                        <td>Senior Javascript Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>22</td>
                                                        <td>2012/03/29</td>
                                                        <td>$433,060</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Airi Satou</td>
                                                        <td>Accountant</td>
                                                        <td>Tokyo</td>
                                                        <td>33</td>
                                                        <td>2008/11/28</td>
                                                        <td>$162,700</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brielle Williamson</td>
                                                        <td>Integration Specialist</td>
                                                        <td>New York</td>
                                                        <td>61</td>
                                                        <td>2012/12/02</td>
                                                        <td>$372,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Herrod Chandler</td>
                                                        <td>Sales Assistant</td>
                                                        <td>San Francisco</td>
                                                        <td>59</td>
                                                        <td>2012/08/06</td>
                                                        <td>$137,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rhona Davidson</td>
                                                        <td>Integration Specialist</td>
                                                        <td>Tokyo</td>
                                                        <td>55</td>
                                                        <td>2010/10/14</td>
                                                        <td>$327,900</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Colleen Hurst</td>
                                                        <td>Javascript Developer</td>
                                                        <td>San Francisco</td>
                                                        <td>39</td>
                                                        <td>2009/09/15</td>
                                                        <td>$205,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sonya Frost</td>
                                                        <td>Software Engineer</td>
                                                        <td>Edinburgh</td>
                                                        <td>23</td>
                                                        <td>2008/12/13</td>
                                                        <td>$103,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jena Gaines</td>
                                                        <td>Office Manager</td>
                                                        <td>London</td>
                                                        <td>30</td>
                                                        <td>2008/12/19</td>
                                                        <td>$90,560</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Quinn Flynn</td>
                                                        <td>Support Lead</td>
                                                        <td>Edinburgh</td>
                                                        <td>22</td>
                                                        <td>2013/03/03</td>
                                                        <td>$342,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Charde Marshall</td>
                                                        <td>Regional Director</td>
                                                        <td>San Francisco</td>
                                                        <td>36</td>
                                                        <td>2008/10/16</td>
                                                        <td>$470,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Haley Kennedy</td>
                                                        <td>Senior Marketing Designer</td>
                                                        <td>London</td>
                                                        <td>43</td>
                                                        <td>2012/12/18</td>
                                                        <td>$313,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tatyana Fitzpatrick</td>
                                                        <td>Regional Director</td>
                                                        <td>London</td>
                                                        <td>19</td>
                                                        <td>2010/03/17</td>
                                                        <td>$385,750</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michael Silva</td>
                                                        <td>Marketing Designer</td>
                                                        <td>London</td>
                                                        <td>66</td>
                                                        <td>2012/11/27</td>
                                                        <td>$198,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Paul Byrd</td>
                                                        <td>Chief Financial Officer (CFO)</td>
                                                        <td>New York</td>
                                                        <td>64</td>
                                                        <td>2010/06/09</td>
                                                        <td>$725,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gloria Little</td>
                                                        <td>Systems Administrator</td>
                                                        <td>New York</td>
                                                        <td>59</td>
                                                        <td>2009/04/10</td>
                                                        <td>$237,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bradley Greer</td>
                                                        <td>Software Engineer</td>
                                                        <td>London</td>
                                                        <td>41</td>
                                                        <td>2012/10/13</td>
                                                        <td>$132,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dai Rios</td>
                                                        <td>Personnel Lead</td>
                                                        <td>Edinburgh</td>
                                                        <td>35</td>
                                                        <td>2012/09/26</td>
                                                        <td>$217,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jenette Caldwell</td>
                                                        <td>Development Lead</td>
                                                        <td>New York</td>
                                                        <td>30</td>
                                                        <td>2011/09/03</td>
                                                        <td>$345,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Yuri Berry</td>
                                                        <td>Chief Marketing Officer (CMO)</td>
                                                        <td>New York</td>
                                                        <td>40</td>
                                                        <td>2009/06/25</td>
                                                        <td>$675,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Caesar Vance</td>
                                                        <td>Pre-Sales Support</td>
                                                        <td>New York</td>
                                                        <td>21</td>
                                                        <td>2011/12/12</td>
                                                        <td>$106,450</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Doris Wilder</td>
                                                        <td>Sales Assistant</td>
                                                        <td>Sidney</td>
                                                        <td>23</td>
                                                        <td>2010/09/20</td>
                                                        <td>$85,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Angelica Ramos</td>
                                                        <td>Chief Executive Officer (CEO)</td>
                                                        <td>London</td>
                                                        <td>47</td>
                                                        <td>2009/10/09</td>
                                                        <td>$1,200,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gavin Joyce</td>
                                                        <td>Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>42</td>
                                                        <td>2010/12/22</td>
                                                        <td>$92,575</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Chang</td>
                                                        <td>Regional Director</td>
                                                        <td>Singapore</td>
                                                        <td>28</td>
                                                        <td>2010/11/14</td>
                                                        <td>$357,650</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brenden Wagner</td>
                                                        <td>Software Engineer</td>
                                                        <td>San Francisco</td>
                                                        <td>28</td>
                                                        <td>2011/06/07</td>
                                                        <td>$206,850</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fiona Green</td>
                                                        <td>Chief Operating Officer (COO)</td>
                                                        <td>San Francisco</td>
                                                        <td>48</td>
                                                        <td>2010/03/11</td>
                                                        <td>$850,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shou Itou</td>
                                                        <td>Regional Marketing</td>
                                                        <td>Tokyo</td>
                                                        <td>20</td>
                                                        <td>2011/08/14</td>
                                                        <td>$163,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michelle House</td>
                                                        <td>Integration Specialist</td>
                                                        <td>Sidney</td>
                                                        <td>37</td>
                                                        <td>2011/06/02</td>
                                                        <td>$95,400</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Suki Burks</td>
                                                        <td>Developer</td>
                                                        <td>London</td>
                                                        <td>53</td>
                                                        <td>2009/10/22</td>
                                                        <td>$114,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Prescott Bartlett</td>
                                                        <td>Technical Author</td>
                                                        <td>London</td>
                                                        <td>27</td>
                                                        <td>2011/05/07</td>
                                                        <td>$145,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gavin Cortez</td>
                                                        <td>Team Leader</td>
                                                        <td>San Francisco</td>
                                                        <td>22</td>
                                                        <td>2008/10/26</td>
                                                        <td>$235,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Martena Mccray</td>
                                                        <td>Post-Sales support</td>
                                                        <td>Edinburgh</td>
                                                        <td>46</td>
                                                        <td>2011/03/09</td>
                                                        <td>$324,050</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unity Butler</td>
                                                        <td>Marketing Designer</td>
                                                        <td>San Francisco</td>
                                                        <td>47</td>
                                                        <td>2009/12/09</td>
                                                        <td>$85,675</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Howard Hatfield</td>
                                                        <td>Office Manager</td>
                                                        <td>San Francisco</td>
                                                        <td>51</td>
                                                        <td>2008/12/16</td>
                                                        <td>$164,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hope Fuentes</td>
                                                        <td>Secretary</td>
                                                        <td>San Francisco</td>
                                                        <td>41</td>
                                                        <td>2010/02/12</td>
                                                        <td>$109,850</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vivian Harrell</td>
                                                        <td>Financial Controller</td>
                                                        <td>San Francisco</td>
                                                        <td>62</td>
                                                        <td>2009/02/14</td>
                                                        <td>$452,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Timothy Mooney</td>
                                                        <td>Office Manager</td>
                                                        <td>London</td>
                                                        <td>37</td>
                                                        <td>2008/12/11</td>
                                                        <td>$136,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jackson Bradshaw</td>
                                                        <td>Director</td>
                                                        <td>New York</td>
                                                        <td>65</td>
                                                        <td>2008/09/26</td>
                                                        <td>$645,750</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Olivia Liang</td>
                                                        <td>Support Engineer</td>
                                                        <td>Singapore</td>
                                                        <td>64</td>
                                                        <td>2011/02/03</td>
                                                        <td>$234,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bruno Nash</td>
                                                        <td>Software Engineer</td>
                                                        <td>London</td>
                                                        <td>38</td>
                                                        <td>2011/05/03</td>
                                                        <td>$163,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sakura Yamamoto</td>
                                                        <td>Support Engineer</td>
                                                        <td>Tokyo</td>
                                                        <td>37</td>
                                                        <td>2009/08/19</td>
                                                        <td>$139,575</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thor Walton</td>
                                                        <td>Developer</td>
                                                        <td>New York</td>
                                                        <td>61</td>
                                                        <td>2013/08/11</td>
                                                        <td>$98,540</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Finn Camacho</td>
                                                        <td>Support Engineer</td>
                                                        <td>San Francisco</td>
                                                        <td>47</td>
                                                        <td>2009/07/07</td>
                                                        <td>$87,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Serge Baldwin</td>
                                                        <td>Data Coordinator</td>
                                                        <td>Singapore</td>
                                                        <td>64</td>
                                                        <td>2012/04/09</td>
                                                        <td>$138,575</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zenaida Frank</td>
                                                        <td>Software Engineer</td>
                                                        <td>New York</td>
                                                        <td>63</td>
                                                        <td>2010/01/04</td>
                                                        <td>$125,250</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zorita Serrano</td>
                                                        <td>Software Engineer</td>
                                                        <td>San Francisco</td>
                                                        <td>56</td>
                                                        <td>2012/06/01</td>
                                                        <td>$115,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Acosta</td>
                                                        <td>Junior Javascript Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>43</td>
                                                        <td>2013/02/01</td>
                                                        <td>$75,650</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cara Stevens</td>
                                                        <td>Sales Assistant</td>
                                                        <td>New York</td>
                                                        <td>46</td>
                                                        <td>2011/12/06</td>
                                                        <td>$145,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hermione Butler</td>
                                                        <td>Regional Director</td>
                                                        <td>London</td>
                                                        <td>47</td>
                                                        <td>2011/03/21</td>
                                                        <td>$356,250</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lael Greer</td>
                                                        <td>Systems Administrator</td>
                                                        <td>London</td>
                                                        <td>21</td>
                                                        <td>2009/02/27</td>
                                                        <td>$103,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jonas Alexander</td>
                                                        <td>Developer</td>
                                                        <td>San Francisco</td>
                                                        <td>30</td>
                                                        <td>2010/07/14</td>
                                                        <td>$86,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shad Decker</td>
                                                        <td>Regional Director</td>
                                                        <td>Edinburgh</td>
                                                        <td>51</td>
                                                        <td>2008/11/13</td>
                                                        <td>$183,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Michael Bruce</td>
                                                        <td>Javascript Developer</td>
                                                        <td>Singapore</td>
                                                        <td>29</td>
                                                        <td>2011/06/27</td>
                                                        <td>$183,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Donna Snider</td>
                                                        <td>Customer Support</td>
                                                        <td>New York</td>
                                                        <td>27</td>
                                                        <td>2011/01/25</td>
                                                        <td>$112,000</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                        <th>Age</th>
                                                        <th>Start date</th>
                                                        <th>Salary</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>
            </div>
            {/* /.content-wrapper */}
            <footer className="main-footer">
                <div className="pull-right d-none d-sm-inline-block">
                    <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://themeforest.net/item/doclinic-medical-responsive-bootstrap-admin-dashboard/32737529"
                            >
                                Purchase Now
                            </a>
                        </li>
                    </ul>
                </div>
                © <a href="https://www.multipurposethemes.com/">Multipurpose Themes</a>.
                All Rights Reserved.
            </footer>
            {/* Control Sidebar */}
            <aside className="control-sidebar">
                <div className="rpanel-title">
                    <span
                        className="pull-right btn btn-circle btn-danger"
                        data-toggle="control-sidebar"
                    >
                        <i className="ion ion-close text-white" />
                    </span>{" "}
                </div>{" "}
                {/* Create the tabs */}
                <ul className="nav nav-tabs control-sidebar-tabs">
                    <li className="nav-item">
                        <a
                            href="#control-sidebar-home-tab"
                            data-bs-toggle="tab"
                            className="active"
                        >
                            <i className="mdi mdi-message-text" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#control-sidebar-settings-tab" data-bs-toggle="tab">
                            <i className="mdi mdi-playlist-check" />
                        </a>
                    </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                    {/* Home tab content */}
                    <div className="tab-pane active" id="control-sidebar-home-tab">
                        <div className="flexbox">
                            <a href="javascript:void(0)" className="text-grey">
                                <i className="ti-more" />
                            </a>
                            <p>Users</p>
                            <a href="javascript:void(0)" className="text-end text-grey">
                                <i className="ti-plus" />
                            </a>
                        </div>
                        <div className="lookup lookup-sm lookup-right d-none d-lg-block">
                            <input
                                type="text"
                                name="s"
                                placeholder="Search"
                                className="w-p100"
                            />
                        </div>
                        <div className="media-list media-list-hover mt-20">
                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-success" href="#">
                                    <img src="../images/avatar/1.jpg" alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <a className="hover-primary" href="#">
                                            <strong>Tyler</strong>
                                        </a>
                                    </p>
                                    <p>Praesent tristique diam...</p>
                                    <span>Just now</span>
                                </div>
                            </div>
                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-danger" href="#">
                                    <img src="../images/avatar/2.jpg" alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <a className="hover-primary" href="#">
                                            <strong>Luke</strong>
                                        </a>
                                    </p>
                                    <p>Cras tempor diam ...</p>
                                    <span>33 min ago</span>
                                </div>
                            </div>
                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-warning" href="#">
                                    <img src="../images/avatar/3.jpg" alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <a className="hover-primary" href="#">
                                            <strong>Evan</strong>
                                        </a>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>
                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-primary" href="#">
                                    <img src="../images/avatar/4.jpg" alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <a className="hover-primary" href="#">
                                            <strong>Evan</strong>
                                        </a>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>
                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-success" href="#">
                                    <img src="../images/avatar/1.jpg" alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <a className="hover-primary" href="#">
                                            <strong>Tyler</strong>
                                        </a>
                                    </p>
                                    <p>Praesent tristique diam...</p>
                                    <span>Just now</span>
                                </div>
                            </div>
                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-danger" href="#">
                                    <img src="../images/avatar/2.jpg" alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <a className="hover-primary" href="#">
                                            <strong>Luke</strong>
                                        </a>
                                    </p>
                                    <p>Cras tempor diam ...</p>
                                    <span>33 min ago</span>
                                </div>
                            </div>
                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-warning" href="#">
                                    <img src="../images/avatar/3.jpg" alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <a className="hover-primary" href="#">
                                            <strong>Evan</strong>
                                        </a>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>
                            <div className="media py-10 px-0">
                                <a className="avatar avatar-lg status-primary" href="#">
                                    <img src="../images/avatar/4.jpg" alt="..." />
                                </a>
                                <div className="media-body">
                                    <p className="fs-16">
                                        <a className="hover-primary" href="#">
                                            <strong>Evan</strong>
                                        </a>
                                    </p>
                                    <p>In posuere tortor vel...</p>
                                    <span>42 min ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.tab-pane */}
                    {/* Settings tab content */}
                    <div className="tab-pane" id="control-sidebar-settings-tab">
                        <div className="flexbox">
                            <a href="javascript:void(0)" className="text-grey">
                                <i className="ti-more" />
                            </a>
                            <p>Todo List</p>
                            <a href="javascript:void(0)" className="text-end text-grey">
                                <i className="ti-plus" />
                            </a>
                        </div>
                        <ul className="todo-list mt-20">
                            <li className="py-15 px-5 by-1">
                                {/* checkbox */}
                                <input
                                    type="checkbox"
                                    id="basic_checkbox_1"
                                    className="filled-in"
                                />
                                <label htmlFor="basic_checkbox_1" className="mb-0 h-15" />
                                {/* todo text */}
                                <span className="text-line">Nulla vitae purus</span>
                                {/* Emphasis label */}
                                <small className="badge bg-danger">
                                    <i className="fa fa-clock-o" /> 2 mins
                                </small>
                                {/* General tools such as edit or delete*/}
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li className="py-15 px-5">
                                {/* checkbox */}
                                <input
                                    type="checkbox"
                                    id="basic_checkbox_2"
                                    className="filled-in"
                                />
                                <label htmlFor="basic_checkbox_2" className="mb-0 h-15" />
                                <span className="text-line">Phasellus interdum</span>
                                <small className="badge bg-info">
                                    <i className="fa fa-clock-o" /> 4 hours
                                </small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                                {/* checkbox */}
                                <input
                                    type="checkbox"
                                    id="basic_checkbox_3"
                                    className="filled-in"
                                />
                                <label htmlFor="basic_checkbox_3" className="mb-0 h-15" />
                                <span className="text-line">Quisque sodales</span>
                                <small className="badge bg-warning">
                                    <i className="fa fa-clock-o" /> 1 day
                                </small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li className="py-15 px-5">
                                {/* checkbox */}
                                <input
                                    type="checkbox"
                                    id="basic_checkbox_4"
                                    className="filled-in"
                                />
                                <label htmlFor="basic_checkbox_4" className="mb-0 h-15" />
                                <span className="text-line">Proin nec mi porta</span>
                                <small className="badge bg-success">
                                    <i className="fa fa-clock-o" /> 3 days
                                </small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                                {/* checkbox */}
                                <input
                                    type="checkbox"
                                    id="basic_checkbox_5"
                                    className="filled-in"
                                />
                                <label htmlFor="basic_checkbox_5" className="mb-0 h-15" />
                                <span className="text-line">Maecenas scelerisque</span>
                                <small className="badge bg-primary">
                                    <i className="fa fa-clock-o" /> 1 week
                                </small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li className="py-15 px-5">
                                {/* checkbox */}
                                <input
                                    type="checkbox"
                                    id="basic_checkbox_6"
                                    className="filled-in"
                                />
                                <label htmlFor="basic_checkbox_6" className="mb-0 h-15" />
                                <span className="text-line">Vivamus nec orci</span>
                                <small className="badge bg-info">
                                    <i className="fa fa-clock-o" /> 1 month
                                </small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                                {/* checkbox */}
                                <input
                                    type="checkbox"
                                    id="basic_checkbox_7"
                                    className="filled-in"
                                />
                                <label htmlFor="basic_checkbox_7" className="mb-0 h-15" />
                                {/* todo text */}
                                <span className="text-line">Nulla vitae purus</span>
                                {/* Emphasis label */}
                                <small className="badge bg-danger">
                                    <i className="fa fa-clock-o" /> 2 mins
                                </small>
                                {/* General tools such as edit or delete*/}
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li className="py-15 px-5">
                                {/* checkbox */}
                                <input
                                    type="checkbox"
                                    id="basic_checkbox_8"
                                    className="filled-in"
                                />
                                <label htmlFor="basic_checkbox_8" className="mb-0 h-15" />
                                <span className="text-line">Phasellus interdum</span>
                                <small className="badge bg-info">
                                    <i className="fa fa-clock-o" /> 4 hours
                                </small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li className="py-15 px-5 by-1">
                                {/* checkbox */}
                                <input
                                    type="checkbox"
                                    id="basic_checkbox_9"
                                    className="filled-in"
                                />
                                <label htmlFor="basic_checkbox_9" className="mb-0 h-15" />
                                <span className="text-line">Quisque sodales</span>
                                <small className="badge bg-warning">
                                    <i className="fa fa-clock-o" /> 1 day
                                </small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                            <li className="py-15 px-5">
                                {/* checkbox */}
                                <input
                                    type="checkbox"
                                    id="basic_checkbox_10"
                                    className="filled-in"
                                />
                                <label htmlFor="basic_checkbox_10" className="mb-0 h-15" />
                                <span className="text-line">Proin nec mi porta</span>
                                <small className="badge bg-success">
                                    <i className="fa fa-clock-o" /> 3 days
                                </small>
                                <div className="tools">
                                    <i className="fa fa-edit" />
                                    <i className="fa fa-trash-o" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* /.tab-pane */}
                </div>
            </aside>
        </div>
    )
}

export default Tables