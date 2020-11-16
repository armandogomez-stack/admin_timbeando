import React from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../Contexts/UserContext'
import Env from '../Env'

function Index( props ){

	// const { setUserDetails } = useContext(UserContext)
  const user = React.useContext(UserContext);
  const {default_avatar, cdn} = Env

  const drawMembership = ()=>{

    const investment = parseInt(user.investment)

    if( investment === 0 )
        return <span className="badge badge-pill badge-primary">MEMBERSHIP FREE</span> 

    if( investment >= 100 && investment <= 990 )
        return <span className="badge badge-pill badge-primary">MEMBERSHIP INVESTOR</span> 

    if( investment >= 1000 && investment <= 2490 )
        return <span className="badge badge-pill badge-warning">MEMBERSHIP PRESTIGE</span> 
    
    if( investment >= 2500 && investment <= 4990 ){
        return (
          <div>
          <span className="badge badge-pill badge-warning">MEMBERSHIP PRESTIGE</span>
          <span className="badge badge-pill badge-warning">MEMBERSHIP AMBASSADOR</span>
          </div>
        ) 
    }


    if( investment >= 5000 && investment <= 10000 ){
        return (
          <div>
          <span className="badge badge-pill badge-warning">MEMBERSHIP PRESTIGE</span>
          <span className="badge badge-pill badge-warning">MEMBERSHIP AMBASSADOR</span>
          </div>
        ) 
    }


  }



  return (
  <aside className="app-sidebar sidebar-scroll">
    <div className="main-sidebar-header active">
      <Link className="desktop-logo logo-light active" to={"/dashboard"} style={{height : '100px'}}>
        <img src="https://myworkmoney.com/static/logo.jpg" className="main-logo" alt="logo" style={{ height : '100px' }} /></Link>
      <Link className="desktop-logo logo-dark active" to={"/dashboard"}><img src="https://myworkmoney.com/static/logo.jpg" className="main-logo dark-theme" alt="logo"/></Link>
      <Link className="logo-icon mobile-logo icon-light active" to={"/dashboard"}><img src="../assets/img/brand/favicon.png" className="logo-icon" alt="logo"/></Link>
      <Link className="logo-icon mobile-logo icon-dark active" to={"/dashboard"}><img src="../assets/img/brand/favicon-white.png" className="logo-icon dark-theme" alt="logo"/></Link>
    </div>
    <div className="main-sidemenu">
      <div className="app-sidebar__user clearfix">
        <div className="user-info">
          <div className="users-profile">
            <Link to={'/profile'} className="user-profile-img"> 
            

            <img 
            src={ ( user.avatar ) ? 
              `${cdn}/image/${user.avatar}/120/120`
            : default_avatar
          }
            alt="User" 
            className="brround avatar-xl"/>
            </Link>
            <div className="green_icon"></div>
          </div>
          <div className="social-details mt-2">
            <h6 className="mb-0">{user.firstName}</h6>
            {drawMembership()}
            
            <p className="mb-2 mt-1 text-muted tx-12">{user.rol}</p>
            <Link to="/login"><i className="zmdi zmdi-facebook-box"></i></Link>
            <Link to="/login"><i className="zmdi zmdi-linkedin-box"></i></Link>
            <Link to="/login"><i className="zmdi zmdi-instagram"></i></Link>
            <Link to="/login"><i className="zmdi zmdi-twitter-box"></i></Link>

          </div>
        </div>
      </div>
      <ul className="side-menu">
      
        <li className="side-item side-item-category">Dashboard</li>
        <li className="slide is-expanded">
          <Link className="side-menu__item" data-toggle="slide" to="/dashboard">
            <i className="side-menu__icon bx bx-layer"></i>
            <span className="side-menu__label">Secciones</span>
            <i className="angle fe fe-chevron-down"></i></Link>
          <ul className="slide-menu">
          <li>
            <Link to={'/dashboard'} className="slide-item"><i className="las la-box-open"></i>Home</Link>
          </li>
          <li><Link to={'/refferers'} className="slide-item"><i className="las la-box-open"></i>Referidos</Link></li>
          <li><Link to={'/membership'} className="slide-item"><i className="las la-box-open"></i>Membresia</Link></li>
          <li><Link to={'/team'} className="slide-item"><i className="las la-box-open"></i>Equipo</Link></li>
          <li><Link to={'/messages'} className="slide-item"><i className="las la-box-open"></i>Mensajes</Link></li>
          <li><Link to={'/finances'} className="slide-item"><i className="las la-box-open"></i>Finanzas</Link></li>
          <li><Link to={'/billing'} className="slide-item"><i className="las la-box-open"></i>Facturacion</Link></li>
          <li><Link to="/logout" className="slide-item"><i className="las la-chart-area"></i>Salir</Link></li>
          </ul>
        </li>
       


     
      </ul>
    </div>
  </aside>

  )
}


export default Index


