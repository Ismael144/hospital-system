import React from 'react'


const Sidebar = () => {
    return (
        <aside className="main-sidebar">
        {/* sidebar*/}
        <section className="sidebar position-relative">
          <div className="multinav" style={{ overflow: "auto" }}>
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
    )
}

export default Sidebar