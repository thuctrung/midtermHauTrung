import React, { Component } from 'react';
class Admin extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="adjust-nav">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="#">
                  <img src="assets/img/logo.png" />
                </a>
              </div>
              <span className="logout-spn">
                <a href="#" style={{ color: '#fff' }}>LOGOUT</a>
              </span>
            </div>
          </div>
          {/* /. NAV TOP  */}
          <nav className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
              <ul className="nav" id="main-menu">
                <li className="active-link">
                  <a href="index.html"><i className="fa fa-desktop " />Dashboard <span className="badge">Included</span></a>
                </li>
                <li>
                  <a href="ui.html"><i className="fa fa-table " />UI Elements  <span className="badge">Included</span></a>
                </li>
                <li>
                  <a href="blank.html"><i className="fa fa-edit " />Blank Page  <span className="badge">Included</span></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-qrcode " />My Link One</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-bar-chart-o" />My Link Two</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-edit " />My Link Three </a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-table " />My Link Four</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-edit " />My Link Five </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* /. NAV SIDE  */}
          <div id="page-wrapper">
            <div id="page-inner">
              <div className="row">
                <div className="col-lg-12">
                  <h2>ADMIN DASHBOARD</h2>
                </div>
              </div>
              {/* /. ROW  */}
              <hr />
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="alert alert-info">
                    <strong>Welcome Jhon Doe ! </strong> You Have No pending Task For Today.
                  </div>
                </div>
              </div>
              {/* /. ROW  */}
              <div className="row text-center pad-top">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-circle-o-notch fa-5x" />
                      <h4>Check Data</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-envelope-o fa-5x" />
                      <h4>Mail Box</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-lightbulb-o fa-5x" />
                      <h4>New Issues</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-users fa-5x" />
                      <h4>See Users</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-key fa-5x" />
                      <h4>Admin </h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-comments-o fa-5x" />
                      <h4>Support</h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* /. ROW  */}
              <div className="row text-center pad-top">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-clipboard fa-5x" />
                      <h4>All Docs</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-gear fa-5x" />
                      <h4>Settings</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-wechat fa-5x" />
                      <h4>Live Talk</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-bell-o fa-5x" />
                      <h4>Notifications </h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-rocket fa-5x" />
                      <h4>Launch</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-user fa-5x" />
                      <h4>Register User</h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* /. ROW  */}
              <div className="row text-center pad-top">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-envelope-o fa-5x" />
                      <h4>Mail Box</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-lightbulb-o fa-5x" />
                      <h4>New Issues</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-users fa-5x" />
                      <h4>See Users</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-key fa-5x" />
                      <h4>Admin </h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="#">
                      <i className="fa fa-comments-o fa-5x" />
                      <h4>Support</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-circle-o-notch fa-5x" />
                      <h4>Check Data</h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* /. ROW  */}
              <div className="row text-center pad-top">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-rocket fa-5x" />
                      <h4>Launch</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-clipboard fa-5x" />
                      <h4>All Docs</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-gear fa-5x" />
                      <h4>Settings</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-wechat fa-5x" />
                      <h4>Live Talk</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-bell-o fa-5x" />
                      <h4>Notifications </h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-user fa-5x" />
                      <h4>Register User</h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* /. ROW  */}
              <div className="row text-center pad-top">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-lightbulb-o fa-5x" />
                      <h4>New Issues</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-users fa-5x" />
                      <h4>See Users</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-key fa-5x" />
                      <h4>Admin </h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-comments-o fa-5x" />
                      <h4>Support</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-circle-o-notch fa-5x" />
                      <h4>Check Data</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="blank.html">
                      <i className="fa fa-envelope-o fa-5x" />
                      <h4>Mail Box</h4>
                    </a>
                  </div>
                </div>
              </div>
              {/* /. ROW  */}
              <div className="row">
                <div className="col-lg-12 ">
                  <br />
                  <div className="alert alert-danger">
                    <strong>Want More Icons Free ? </strong> Checkout fontawesome website and use any icon <a target="_blank" href="http://fortawesome.github.io/Font-Awesome/icons/">Click Here</a>.
                  </div>
                </div>
              </div>
              {/* /. ROW  */}
            </div>
            {/* /. PAGE INNER  */}
          </div>
          {/* /. PAGE WRAPPER  */}
        </div>
        <div className="footer">
          <div className="row">
            <div className="col-lg-12">
              ©  2014 yourdomain.com | Design by: <a href="http://binarytheme.com" style={{ color: '#fff' }} target="_blank">www.binarytheme.com</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin;