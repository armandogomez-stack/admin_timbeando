import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router'
import { store } from 'react-notifications-component'
import Env from '../Env'

function Index(props){
  
  const [ loading , setLoading ]      = useState( false )
  const [ activated , setActivated ]  = useState( false )
  const [ wrown , setWrown ]          = useState( false )
  const { match : { params : { recovery_code , verification_code }} } =  props
  const [ sended, setSended ] = useState( false )
  const { api_uri, base_url } = Env
  const [ password , setPassword ] = useState('')
  const [ password2 , setPassword2 ] = useState('')

  useEffect(()=>{
    
    if( recovery_code && verification_code ){
      
      const verify = async () => {

        setLoading( true )
    
        let result  = {}
        let request = base_url( api_uri,'api/auth/recovery/validate' )
        let data = { recovery_code , verification_code }
    
        try{
          result = await axios.post( request, data )
        }
        catch(error){
          console.log(error)
          setWrown(true)
          
          if( error && error.response && error.response.status === 411){
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
        
        if(result){
          setActivated(true)
        }
      }

      verify()
    }


  },[ verification_code,recovery_code, api_uri, base_url ])

  const onchangePassword  = ( e )=>{
    setPassword(e.target.value)
  }

  const onchangePassword2  = ( e )=>{
    setPassword2(e.target.value)
  }


	
  
  const onSubmitHandler = async (e)=> {
    
    e.preventDefault()
      if( !password || !verification_code || !recovery_code)
        return false

    if(password !== password2){

      store.addNotification({
        title: "Las claves no coinciden!",
        message: `Verifica las claves`,
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
      return false 
    }
      let result = {}
      let request = base_url( api_uri,'api/auth/recovery/update_password' )
      let data = { recovery_code , verification_code, password }

    try {
      result = await axios.post(request, data )
      setSended( true )
    } catch (error) {
      console.log(error)
      if( e && e.response && e.response.status === 403){
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
        title: "Actualizacion exitosa!",
        message: `Tu clave se actualizo con exito`,
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




	if( wrown )
		return (
			<div className="main-error-wrapper page page-h" style={{ background : '#187fca' }}>
				<h1 className="text-white">Error</h1>
				<h2 className="tx-white-8">Ocurrio un error durante la activacion.</h2>
				<h6 className="tx-white-6">Puede que el codigo de validacion no sea valido...</h6>
			</div>)



	if( activated )
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
                <button type="button" className="btn btn-success">Descubra como</button>
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
												<h2>Recupera tu cuenta!</h2>
												<h4>Ingresa una nueva clave</h4>
												<form action="#" onSubmit={onSubmitHandler}>
													<div className="form-group">
														<label>Nueva clave</label> 
                          <input disabled={ (sended) ? true : false }
                            onChange={(e)=>onchangePassword(e)} 
                            className="form-control"
                            placeholder="" 
                            type="text" value={password}/>
													</div>

                          <div className="form-group">
														<label>Confirma la clave</label> 
                          <input disabled={ (sended) ? true : false }
                          onChange={(e)=>onchangePassword2(e)}
                          className="form-control"
                          placeholder=""
                          type="text" value={password2} />
													</div>

                          { (sended) &&  <div className="alert alert-solid-success" role="alert">
                          <button aria-label="Close" className="close" data-dismiss="alert" type="button">
                          <span aria-hidden="true">&times;</span></button>
                          <strong>Tu clave se actualizo con exito! </strong> <br/>
                          Ya puedes iniciar sesion
                        </div>}

                          { ( !sended)	&& <button className="btn btn-main-primary btn-block">Actualizar clave</button> }

                          { ( sended )	&& <Link to={'/'} className="btn btn-main-primary btn-block">Ir a la seccion de acceso</Link> }

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
		</div>)



	if( loading )
		return (
			<div className="main-error-wrapper page page-h"  style={{
				background : 'white',
				backgroundImage : 'url("https://pixelpapa.com/wp-content/uploads/2018/11/1.gif")',
				backgroundSize : '100%'
				}}>
				<h1 className="text-black">Verificando</h1>
				<h2 className="text-black">Estamos verificando el enlace.</h2>
				<h6 className="text-black">No cierres esta ventana...</h6>
			</div>)




  		return (
    			<div className="main-error-wrapper page page-h" style={{background : '#187fca'}}>
				<h1 className="text-white">. . .</h1>
			</div>)

  

  
}


export default withRouter(Index)