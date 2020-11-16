import React from 'react'
import Aside from './Aside'
// import UserContext from '../Contexts/UserContext'
import Footer from './Footer'
import SideBarRight from './SideBarRight'
import { Link } from 'react-router-dom'


function Index( props ){
  

  const { children } = props
  // const user = useContext(UserContext);
  


   

    return (         
	<div className={'main-body app sidebar-mini sidebar-gone'} >


 


  <div className="page">

    {/* <div id="global-loader">
      <img src="../assets/img/loader.svg" className="loader-img" alt="Loader" />
    </div> */}

    <div className="app-sidebar__overlay" data-toggle="sidebar"></div>

      <Aside />


    <div className="main-content content-body singlemenu">
      <div className="main-header main-header-fixed">
        <div className="container-fluid">
          <div className="main-header-left">
            <Link to="/" data-toggle="sidebar" className="nav-link icon toggle pl-0">
             ...
            </Link>
          </div>
          <div className="main-header-center">
            <div className="header-breadcrumb">

                Total inversionistas : 
              <h3 className="badge badge-pill badge-primary ml-3" style={{fontSize : '1.3em'}}>43</h3>

              {/* <div className="main-content-breadcrumb"> <span>Pages</span> <span>Empty</span> </div> */}
            </div>
            <div className="responsive-logo"> 
                <Link to={'/'}>
                  <img src="../assets/img/brand/logo.png" className="mobile-logo" alt="logo" />
                </Link>
              </div>
          </div>
          <div className="main-header-right">
            <div id="input-search" className="input-search header-search nav-item my-auto">
              <form className="d-flex">
                <input className="search-input form-control" placeholder="Search for anything..." type="search" />
                <span className="search-icon">
                  <i className="fe fe-search tx-20"></i>

                    </span>
              </form>
            </div>

            <div className="dropdown  nav-item main-header-message ">
              <Link className="new nav-link menu-icons" to="/">
              <i className="fe fe-mail tx-20"></i>
                <span className=" pulse-danger"></span>
                </Link>
              <div className="dropdown-menu animated fadeInUp">
                <div className="menu-header-content text-left d-flex">
                  <div className="">
                    <h6 className="menu-header-title mb-0">5 new Messages</h6>
                  </div>
                  <div className="my-auto ml-auto">
                    <Link className="badge badge-pill badge-teal float-right" to="/">Mark All Read</Link>
                  </div>
                </div>
                <div className="main-message-list chat-scroll ">
                  <Link to="/" className="p-3 d-flex border-bottom">
                    <div className="  drop-img  cover-image  " data-image-src="../assets/img/faces/11.jpg">
                      <span className="avatar-status bg-teal"></span>
                    </div>

                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Paul Molive</h5>
                        <p className="time mb-0 text-right ml-auto float-right">10 min ago</p>
                      </div>
                      <p className="mb-0 desc">I'm sorry but i'm not sure how to help you with that..</p>
                    </div>
                  </Link>
                  <Link to="/" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-image-src="../assets/img/faces/2.jpg">
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Sahar Dary</h5>
                        <p className="time mb-0 text-right ml-auto float-right">13 min ago</p>
                      </div>
                      <p className="mb-0 desc">Are you ready to pickup your Delivery...</p>
                    </div>
                  </Link>
                  <Link to="/" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-image-src="../assets/img/faces/9.jpg">
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Khadija Mehr</h5>
                        <p className="time mb-0 text-right ml-auto float-right">20 min ago</p>
                      </div>
                      <p className="mb-0 desc">Here are some products i found for you form database...</p>
                    </div>
                  </Link>
                  <Link to="/" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-image-src="../assets/img/faces/12.jpg">
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Barney Cull</h5>
                        <p className="time mb-0 text-right ml-auto float-right">30 min ago</p>
                      </div>
                      <p className="mb-0 desc">All set! Now, time to get to you now...</p>
                    </div>
                  </Link>
                  <Link to="/" className="p-3 d-flex border-bottom">
                    <div className="drop-img cover-image" data-image-src="../assets/img/faces/5.jpg">
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="wd-90p">
                      <div className="d-flex">
                        <h5 className="mb-1 name">Petey Cruiser</h5>
                        <p className="time mb-0 text-right ml-auto float-right">35 min ago</p>
                      </div>
                      <p className="mb-0 desc">I'm sorry but i'm not sure how...</p>
                    </div>
                  </Link>
                </div>
                <div className="text-center dropdown-footer">
                  <Link to="/">VIEW ALL</Link>
                </div>
              </div>
            </div>
            <div className="dropdown nav-item main-header-notification">
              <Link className="new nav-link menu-icons" to="/">
                <i className="fe fe-bell tx-20"></i>
                <span className=" pulse"></span></Link>
              <div className="dropdown-menu animated fadeInUp">
                <div className="menu-header-content text-left d-flex">
                  <p className="main-notification-text mb-0">You have 1 unread notification<Link className="badge badge-pill badge-success ml-2 float-right" to="/" >Mark All Read</Link></p>
                </div>
                <div className="main-notification-list Notification-scroll">
                  <Link className="d-flex pl-3 pr-3  border-bottom" to="/">
                    <div className="media new">
                      <div className="main-img-user online"><img alt="avatar" src="../assets/img/faces/5.jpg"/></div>
                      <div className="media-body">
                        <p>Congratulate <strong> Olivia James </strong> for New template start</p><span>Oct 15 12:32pm</span>
                      </div>
                    </div>
                  </Link>
                  <Link className="d-flex pl-3 pr-3  border-bottom" to="/">
                    <div className="media">
                      <div className="main-img-user"><img alt="avatar" src="../assets/img/faces/13.jpg" /></div>
                      <div className="media-body">
                        <p> <strong> Joshua Gray </strong> New Message Received</p><span>Oct 13 02:56am</span>
                      </div>
                    </div>
                  </Link>
                  <Link className="d-flex pl-3 pr-3  border-bottom" to="/">
                    <div className="media">
                      <div className="main-img-user online"><img alt="avatar" src="../assets/img/faces/17.jpg" /></div>
                      <div className="media-body">
                        <p> <strong> Reuben Lewis </strong> added new schedule realease</p><span>Oct 12 10:40pm</span>
                      </div>
                    </div>
                  </Link>
                  <Link className="d-flex pl-3 pr-3  border-bottom" to="/">
                    <div className="media">
                      <div className="main-img-user online"><img alt="avatar" src="../assets/img/faces/10.jpg" /></div>
                      <div className="media-body">
                        <p><strong>Reanne Carnation</strong> Commented on you post</p><span>Sept 30 05:24pm</span>
                      </div>
                    </div>
                  </Link>
                  <Link className="d-flex pl-3 pr-3  border-bottom" to="/">
                    <div className="media">
                      <div className="main-img-user online"><img alt="avatar" src="../assets/img/faces/4.jpg" /></div>
                      <div className="media-body">
                        <p><strong>Vinny Gret </strong> Shared your post</p><span>Sept 12 9:05am</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="dropdown-footer">
                  <Link to="/">VIEW ALL</Link>
                </div>
              </div>
            </div>
       
            <div className="dropdown main-profile-menu nav nav-item nav-link">
              <Link className="profile-user" to="/"><img alt="" src="../assets/img/faces/6.jpg" /></Link>
              <div className="dropdown-menu animated fadeInUp">
                <div className="main-header-profile header-img">
                  <h6>Mack Adamia</h6><span>Premium Member</span>
                </div>
                <Link className="dropdown-item" to="/"><i className="bx bx-user-circle"></i> My Profile</Link>
                <Link className="dropdown-item" to="/"><i className="bx bxs-edit"></i> Edit Profile</Link>
                <Link className="dropdown-item" to="/"><i className="bx bx-envelope"></i> Chat</Link>
                <Link className="dropdown-item" to="/"><i className="bx bx-cog"></i> Account Settings</Link>
                <Link className="dropdown-item" to="/"><i className="bx bx-log-out-circle"></i> Sign Out</Link>
              </div>
            </div>
            <button className="navbar-toggler navresponsive-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
              aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon bx bx-dots-vertical-rounded"></span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="responsive main-header">
        <div className="mb-1 navbar navbar-expand-lg  nav nav-item  navbar-nav-right responsive-navbar navbar-dark  ">
          <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
            <div className="d-flex order-lg-2 ml-auto">
              <form className="navbar-form nav-item my-auto" role="search">
                <div className="input-group nav-item my-auto">
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-btn">
                    <button type="reset" className="btn btn-default">
                      <i className="bx bx-x"></i>
                    </button>
                    <button type="submit" className="btn btn-default nav-link menu-icons ">
                      ...
                    </button>
                  </span>
                </div>
              </form>
              <div className="dropdown main-header-message right-toggle">
                <div className="nav-item full-screen fullscreen-button">
                  <Link className="new nav-link full-screen-link menu-icons fullscreen" to="/">
                    ...
                  </Link>
                  <Link className="new nav-link full-screen-link exit-fullscreen" to="/">
                    ...
                  </Link>
                </div>
              </div>
              <div className="dropdown  nav-item main-header-message ">
                <Link className="new nav-link menu-icons" to="/">
                  ...
                  <span className=" pulse-danger"></span></Link>
                <div className="dropdown-menu animated fadeInUp">
                  <div className="menu-header-content text-left d-flex">
                    <div className="">
                      <h6 className="menu-header-title mb-0">5 new Messages</h6>
                    </div>
                    <div className="my-auto ml-auto">
                      <Link className="badge badge-pill badge-teal float-right" to="/">Mark All Read</Link>
                    </div>
                  </div>
                  <div className="main-message-list chat-scroll1">
                    <Link to="/" className="p-3 d-flex border-bottom">
                      <div className="  drop-img  cover-image  " data-image-src="../assets/img/faces/11.jpg">
                        <span className="avatar-status bg-teal"></span>
                      </div>

                      <div className="wd-90p">
                        <div className="d-flex">
                          <h5 className="mb-1 name">Paul Molive</h5>
                          <p className="time mb-0 text-right ml-auto float-right">10 min ago</p>
                        </div>
                        <p className="mb-0 desc">I'm sorry but i'm not sure how to help you with that..</p>
                      </div>
                    </Link>
                    <Link to="/" className="p-3 d-flex border-bottom">
                      <div className="drop-img cover-image" data-image-src="../assets/img/faces/2.jpg">
                        <span className="avatar-status bg-teal"></span>
                      </div>
                      <div className="wd-90p">
                        <div className="d-flex">
                          <h5 className="mb-1 name">Sahar Dary</h5>
                          <p className="time mb-0 text-right ml-auto float-right">13 min ago</p>
                        </div>
                        <p className="mb-0 desc">Are you ready to pickup your Delivery...</p>
                      </div>
                    </Link>
                    <Link to="/" className="p-3 d-flex border-bottom">
                      <div className="drop-img cover-image" data-image-src="../assets/img/faces/9.jpg">
                        <span className="avatar-status bg-teal"></span>
                      </div>
                      <div className="wd-90p">
                        <div className="d-flex">
                          <h5 className="mb-1 name">Khadija Mehr</h5>
                          <p className="time mb-0 text-right ml-auto float-right">20 min ago</p>
                        </div>
                        <p className="mb-0 desc">Here are some products i found for you form database...</p>
                      </div>
                    </Link>
                    <Link to="/" className="p-3 d-flex border-bottom">
                      <div className="drop-img cover-image" data-image-src="../assets/img/faces/12.jpg">
                        <span className="avatar-status bg-teal"></span>
                      </div>
                      <div className="wd-90p">
                        <div className="d-flex">
                          <h5 className="mb-1 name">Barney Cull</h5>
                          <p className="time mb-0 text-right ml-auto float-right">30 min ago</p>
                        </div>
                        <p className="mb-0 desc">All set! Now, time to get to you now...</p>
                      </div>
                    </Link>
                    <Link to="/" className="p-3 d-flex border-bottom">
                      <div className="drop-img cover-image" data-image-src="../assets/img/faces/5.jpg">
                        <span className="avatar-status bg-teal"></span>
                      </div>
                      <div className="wd-90p">
                        <div className="d-flex">
                          <h5 className="mb-1 name">Petey Cruiser</h5>
                          <p className="time mb-0 text-right ml-auto float-right">35 min ago</p>
                        </div>
                        <p className="mb-0 desc">I'm sorry but i'm not sure how...</p>
                      </div>
                    </Link>
                  </div>
                  <div className="text-center dropdown-footer">
                    <Link to="/">VIEW ALL</Link>
                  </div>
                </div>
              </div>
              <div className="dropdown nav-item main-header-notification">
                <Link className="new nav-link menu-icons" to="/">
                  ...
                  <span className=" pulse"></span></Link>
                <div className="dropdown-menu animated fadeInUp">
                  <div className="menu-header-content text-left d-flex">
                    <p className="main-notification-text mb-0">You have 1 unread notification<Link className="badge badge-pill badge-success ml-2 float-right" to="/">Mark All Read</Link></p>
                  </div>
                  <div className="main-notification-list Notification-scroll1">
                    <Link className="d-flex pl-3 pr-3  border-bottom" to="/">
                      <div className="media new">
                        <div className="main-img-user online"><img alt="avatar" src="../assets/img/faces/5.jpg"/></div>
                        <div className="media-body">
                          <p>Congratulate <strong> Olivia James </strong> for New template start</p><span>Oct 15 12:32pm</span>
                        </div>
                      </div>
                    </Link>
                    <Link className="d-flex pl-3 pr-3  border-bottom" to="/">
                      <div className="media">
                        <div className="main-img-user"><img alt="avatar" src="../assets/img/faces/13.jpg"/></div>
                        <div className="media-body">
                          <p> <strong> Joshua Gray </strong> New Message Received</p><span>Oct 13 02:56am</span>
                        </div>
                      </div>
                    </Link>
                    <Link className="d-flex pl-3 pr-3  border-bottom" to="/">
                      <div className="media">
                        <div className="main-img-user online"><img alt="avatar" src="../assets/img/faces/17.jpg"/></div>
                        <div className="media-body">
                          <p> <strong> Reuben Lewis </strong> added new schedule realease</p><span>Oct 12 10:40pm</span>
                        </div>
                      </div>
                    </Link>
                    <Link className="d-flex pl-3 pr-3  border-bottom" to="/">
                      <div className="media">
                        <div className="main-img-user online"><img alt="avatar" src="../assets/img/faces/10.jpg"/></div>
                        <div className="media-body">
                          <p><strong>Reanne Carnation</strong> Commented on you post</p><span>Sept 30 05:24pm</span>
                        </div>
                      </div>
                    </Link>
                    <Link className="d-flex pl-3 pr-3  border-bottom" to="/">
                      <div className="media">
                        <div className="main-img-user online"><img alt="avatar" src="../assets/img/faces/4.jpg"/></div>
                        <div className="media-body">
                          <p><strong>Vinny Gret </strong> Shared your post</p><span>Sept 12 9:05am</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="dropdown-footer">
                    <Link to="/">VIEW ALL</Link>
                  </div>
                </div>
              </div>
              <div className="dropdown main-header-message right-toggle">
                <Link to="/" className="nav-link menu-icons" data-toggle="sidebar-right" data-target=".sidebar-right">
                  <i className="bx bx-menu bg-transparent"></i>
                </Link>
              </div>
              <div className="dropdown main-profile-menu nav nav-item nav-link">
                <Link className="profile-user" to="/"><img alt="" src="../assets/img/faces/6.jpg" /></Link>
                <div className="dropdown-menu animated fadeInUp">
                  <div className="main-header-profile header-img">
                    <h6>Mack Adamia</h6><span>Premium Member</span>
                  </div>
                  <Link className="dropdown-item" to="/"><i className="bx bx-user-circle"></i> My Profile</Link>
                  <Link className="dropdown-item" to="/"><i className="bx bxs-edit"></i> Edit Profile</Link>
                  <Link className="dropdown-item" to="/"><i className="bx bx-envelope"></i> Chat</Link>
                  <Link className="dropdown-item" to="/"><i className="bx bx-cog"></i> Account Settings</Link>
                  <Link className="dropdown-item" to="/"><i className="bx bx-log-out-circle"></i> Sign Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid">


        <div className="main-content-body">


          <div className="header-title">
            <div className="mb-0 mb-lg-0 mb-xl-0">
              <h4 className="mb-2">Pages</h4>
              <div className="main-content-breadcrumb"> <span>Pages</span> <span>Empty Page</span> </div>
            </div>
            <div className="ml-auto my-auto">
              <Link to="/" className="btn btn-primary"><i className="fe fe-plus-square"></i> Create Report</Link>
              <Link to="/" className="btn btn-pink"><i className="fe fe-external-link"></i> Export</Link>
            </div>
          </div>





          { children }

          
         

        </div>
      </div>
    </div>


      <Footer />


  </div>



  <SideBarRight/>

  
  {/* <button to="#top" id="back-to-top"><i className="las la-angle-double-up"></i></button> */}

</div>




    )

  }
   
  

  export default Index

