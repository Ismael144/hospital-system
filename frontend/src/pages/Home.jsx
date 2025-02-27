import { React } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

const Home = () => (
    <div className="wrapper">
      <Topbar />
      <Sidebar />
      {/* Left side column. contains the logo and sidebar */}
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        <div className="container-full">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="d-flex align-items-center">
              <div className="me-auto">
                <h4 className="page-title">Blank page</h4>
                <div className="d-inline-block align-items-center">
                  <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">
                          <i className="mdi mdi-home-outline" />
                        </a>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Sample Page
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Blank page
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
                  <div className="box-header with-border">
                    <h4 className="box-title">Title</h4>
                  </div>
                  <div className="box-body">
                    This is some text within a card block.
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">Footer</div>
                  {/* /.box-footer*/}
                </div>
              </div>
            </div>
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
                  <img src="/assets/images/avatar/1.jpg" alt="..." />
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
                  <img src="/assets/images/avatar/2.jpg" alt="..." />
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
                  <img src="/assets/images/avatar/3.jpg" alt="..." />
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
                  <img src="/assets/images/avatar/4.jpg" alt="..." />
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
                  <img src="/assets/images/avatar/1.jpg" alt="..." />
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
                  <img src="/assets/images/avatar/2.jpg" alt="..." />
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
                  <img src="/assets/images/avatar/3.jpg" alt="..." />
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
                  <img src="/assets/images/avatar/4.jpg" alt="..." />
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
export default Home;