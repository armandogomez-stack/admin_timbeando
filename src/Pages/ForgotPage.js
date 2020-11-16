import React, { useState } from 'react'
import axios from 'axios'
import Env from '../Env'
import { Link } from 'react-router-dom'
import { store } from 'react-notifications-component'

function Index( props ){
  
  const [ email, setEmail ] = useState('')
  const [ sended, setSended ] = useState( false )
  const { api_uri, base_url } = Env

  const onSubmitHandler = async (e)=>{
    
    e.preventDefault()
    if( !email ){
      return false
    }
    let result = {}
    let data ={ email, frontend : 'affiliate' }
    try {
      result = await axios.post(base_url(api_uri,`api/auth/recovery/request`), data )
      setSended( true )
    } catch (error) {
      console.log(error)
      if( error && error.response && error.response.status === 403){
        
        store.addNotification({
          title: "Este email no existe en nuestro sistema!",
          message: `Verifica tu informacion`,
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      }
    }
    
    if( result && result.status === 200 ){
      store.addNotification({
        title: "Te enviamos un email!",
        message: `Enviamos un correo de recuperación a tu cuenta, abrelo para cambiar tu clave`,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    }


  }


  const onChangeEmail  = ( e )=>{
    setEmail(e.target.value)
  }


  return (
    <div className="container-fluid">
			<div className="row no-gutter">

				<div className="col-md-6 col-lg-6 col-xl-7 d-none d-md-flex bg-image">
					<div className="row">
						<div className="col-md-10 col-lg-10 col-xl-10 my-auto mx-auto">
							<div>
              <div className="mb-4 d-flex"> 
                <img src="https://myworkmoney.com/static/logohorizontal.png" alt="logo" width={'400px'} />
                </div>
                <h1 className="text-white mb-3">Work Money Finance - Get Ready</h1> 
                  <p className="text-white" style={{fontSize : '1.6em'}} >Sistema de alto rendimiento al alcance de todos. Obtendrás rendimientos de Cripto-Fiat y Surbet, de la mano de expertos.</p>
								<p className="text-white" style={{fontSize : '1.6em'}} >Work Money. Tu mejor aliado del crecimiento de tus finanzas</p>
                <Link to="/" className="btn btn-success">Descubra como</Link>
							</div>
						</div>
					</div>
				</div>
			
				<div className="col-md-6 col-lg-6 col-xl-5 bg-white">
					<div className="login d-flex align-items-center py-2">

						<div className="container p-0">
							<div className="row">
								<div className="col-md-10 col-lg-10 col-xl-9 mx-auto">
									<div className="main-card-signin d-md-flex bg-white border-0">
										<div className="wd-100p">
											<div className="main-signin-header">
												<h2>Se te olvidó tu contraseña!</h2>
												<h4>Ingresa tu correo para recuperarla</h4>
												<form action="#" onSubmit={onSubmitHandler}>
													<div className="form-group">
														<label>Correo electronico</label> 
                          <input onChange={(e)=>onChangeEmail(e)} className="form-control" placeholder="Ingresa tu correo electronico" type="text" value={email}/>
													</div>

                          { (sended) &&  <div className="alert alert-solid-success" role="alert">
                          <button aria-label="Close" className="close" data-dismiss="alert" type="button">
                          <span aria-hidden="true">&times;</span></button>
                          <strong>Revisa tu correo! </strong> <br/>
                          Enviamos un enlace a tu correo electronico, usalo para cambiar tu clave
                        </div>}

													<button className="btn btn-main-primary btn-block">Enviame un correo</button>
												</form>
											</div>
											<div className="main-signup-footer mg-t-20">
                      <p>Olvídalo, <Link to="/login">envíame de vuelta</Link> a la pantalla de inicio de sesión.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  
    )
}


export default Index