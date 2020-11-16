import React from 'react'
import axios from 'axios'

function index( props ){



  return (

			<div className="main-content singlemenu">
				<div className="main-header main-header-fixed">
					<div className="container-fluid">
						<div className="main-header-left">
							<a href="#" data-toggle="sidebar" className="nav-link icon toggle pl-0"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg></a>
						</div>
						<div className="main-header-center">
							<div className="header-breadcrumb">
								<h5 className="mb-1">Dashboard</h5>
								<div className="main-content-breadcrumb"> <span>Dashboard</span> <span>Ecommerce</span> </div>
							</div>
							<div className="responsive-logo"> <a href="index.html"><img src="../assets/img/brand/logo.png" className="mobile-logo" alt="logo"></a></div>
						</div>
						<div className="main-header-right">
							<div id="input-search" className="input-search header-search nav-item my-auto">
								<form className="d-flex">
									<input className="search-input form-control" placeholder="Search for anything..." type="search">
									<span className="search-icon"><svg className="svg-icon"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
								</form>
							</div>
							<div className="dropdown main-header-message right-toggle">
								<div className="nav-item full-screen fullscreen-button">
									<a className="new nav-link full-screen-link menu-icons fullscreen" href="#"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></a>
									<a className="new nav-link full-screen-link exit-fullscreen" href="#"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg></a>
								</div>
							</div>
							<div className="dropdown  nav-item main-header-message ">
								<a className="new nav-link menu-icons" href="#"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><span className=" pulse-danger"></span></a>
								<div className="dropdown-menu animated fadeInUp">
									<div className="menu-header-content text-left d-flex">
										<div className="">
											<h6 className="menu-header-title mb-0">5 new Messages</h6>
										</div>
										<div className="my-auto ml-auto">
											<a className="badge badge-pill badge-teal float-right" href="#">Mark All Read</a>
										</div>
									</div>
									<div className="main-message-list chat-scroll ">
										<a href="#" className="p-3 d-flex border-bottom">
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
										</a>
										<a href="#" className="p-3 d-flex border-bottom">
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
										</a>
										<a href="#" className="p-3 d-flex border-bottom">
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
										</a>
										<a href="#" className="p-3 d-flex border-bottom">
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
										</a>
										<a href="#" className="p-3 d-flex border-bottom">
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
										</a>
									</div>
									<div className="text-center dropdown-footer">
										<a href="text-center">VIEW ALL</a>
									</div>
								</div>
							</div><!-- Main-header-message closed -->
							<div className="dropdown nav-item main-header-notification">
								<a className="new nav-link menu-icons" href="#"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><span className=" pulse"></span></a>
								<div className="dropdown-menu animated fadeInUp">
									<div className="menu-header-content text-left d-flex">
										<p className="main-notification-text mb-0">You have 1 unread notification<a className="badge badge-pill badge-success ml-2 float-right" href="#">Mark All Read</a></p>
									</div>
									<div className="main-notification-list Notification-scroll">
										<a className="d-flex pl-3 pr-3  border-bottom" href="#">
											<div className="media new">
												<div className="main-img-user online"><img alt="avatar" src="../assets/img/faces/5.jpg" /></div>
												<div className="media-body">
													<p>Congratulate <strong> Olivia James </strong> for New template start</p><span>Oct 15 12:32pm</span>
												</div>
											</div>
										</a>
										<a className="d-flex pl-3 pr-3  border-bottom" href="#">
											<div className="media">
												<div className="main-img-user"><img alt="avatar" src="../assets/img/faces/13.jpg" /></div>
												<div className="media-body">
													<p> <strong> Joshua Gray </strong> New Message Received</p><span>Oct 13 02:56am</span>
												</div>
											</div>
										</a>
										<a className="d-flex pl-3 pr-3  border-bottom" href="#">
											<div className="media">
												<div className="main-img-user online"><img alt="avatar" src="../assets/img/faces/17.jpg" /></div>
												<div className="media-body">
													<p> <strong> Reuben Lewis </strong> added new schedule realease</p><span>Oct 12 10:40pm</span>
												</div>
											</div>
										</a>
										<a className="d-flex pl-3 pr-3  border-bottom" href="#">
											<div className="media">
												<div className="main-img-user online"><img alt="avatar" src="../assets/img/faces/10.jpg"></div>
												<div className="media-body">
													<p><strong>Reanne Carnation</strong> Commented on you post</p><span>Sept 30 05:24pm</span>
												</div>
											</div>
										</a>
										<a className="d-flex pl-3 pr-3  border-bottom" href="#">
											<div className="media">
												<div className="main-img-user online"><img alt="avatar" src="../assets/img/faces/4.jpg"></div>
												<div className="media-body">
													<p><strong>Vinny Gret </strong> Shared your post</p><span>Sept 12 9:05am</span>
												</div>
											</div>
										</a>
									</div>
									<div className="dropdown-footer">
										<a href="">VIEW ALL</a>
									</div>
								</div>
							</div><!-- Notification closed -->
							<div className="dropdown main-header-message right-toggle">
								<a className="nav-link menu-icons" data-toggle="sidebar-right" data-target=".sidebar-right">
									<svg className="svg-icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
								</a>
							</div><!-- Main-header-message closed -->
							<div className="dropdown main-profile-menu nav nav-item nav-link">
								<a className="profile-user" href=""><img alt="" src="../assets/img/faces/6.jpg"></a>
								<div className="dropdown-menu animated fadeInUp">
									<div className="main-header-profile header-img">
										<h6>Mack Adamia</h6><span>Premium Member</span>
									</div>
									<a className="dropdown-item" href="profile.html"><i className="bx bx-user-circle"></i> My Profile</a>
									<a className="dropdown-item" href="editprofile.html"><i className="bx bxs-edit"></i> Edit Profile</a>
									<a className="dropdown-item" href="chat.html"><i className="bx bx-envelope"></i> Chat</a>
									<a className="dropdown-item" href="account-setting.html"><i className="bx bx-cog"></i> Account Settings</a>
									<a className="dropdown-item" href="signin.html"><i className="bx bx-log-out-circle"></i> Sign Out</a>
								</div>
							</div><!-- Main-profile-menu closed -->
							<button className="navbar-toggler navresponsive-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
								aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon bx bx-dots-vertical-rounded"></span>
							</button><!-- Navresponsive closed -->
						</div>
					</div>
				</div>
				<!-- Main-header closed --></div>

  )
}


export default index


