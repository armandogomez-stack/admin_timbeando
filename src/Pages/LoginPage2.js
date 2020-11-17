import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import { store } from 'react-notifications-component'
import axios from 'axios'
import UserContext from '../Contexts/UserContext'
import Env from '../Env'


function Index( props ){

  const { api_uri, base_url } = Env
  const [ email, setEmail ] = React.useState('')
  const [ password, setPassword ] = React.useState('')
  const user = useContext(UserContext)

  const onChangeEmail  = ( e )=>{
    setEmail(e.target.value.toLowerCase())
  }

  const onChangePassword  = ( e )=>{    
    setPassword(e.target.value)
  }


  const onSubmitHandler = async ( e ) => {

    e.preventDefault()
    if( !email || !password){
      return false
    }

    const data = {
      Login : email,
      Password : password
    }

    let result
    try {
	   result = await login(data)
	   
	   if( result.data.user_type !== 'admin' ) {

		store.addNotification({
			title: "Acceso no permitido!",
			message: `Esta cuenta no es administrador`,
			type: "danger",
			insert: "top",
			container: "top-right",
			animationIn: [ "animated", "fadeIn" ],
			animationOut: [ "animated", "fadeOut" ],
			dismiss: {
			  duration: 5000,
			  onScreen: true
			}
		  });
		return false
	}

	if( result && result.data  ){

		store.addNotification({
		  title: "Bienvenido!",
		  message: `${result.data.Name}`,
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
  
		axios.defaults.headers.common['access-token'] = result.data.token
		 localStorage.setItem( 'user' , JSON.stringify({
		   access_token : result.data.token,
		   ...result.data,
		   toggleMenu : false
		 }))
		 
		 
	  }
	



    } catch (e) {
      

      if( e && e.response && e.response.status === 403){
        store.addNotification({
          title: "Acceso no permitido!",
          message: `Usuario o clave invalida, verifica tu informacion`,
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
	


   

    
  }

  const login = async ( data ) =>  await axios.post(base_url( api_uri , 'Login' ) , data )
  

  if( user.access_token )
    return <Redirect to={'/dashboard'}/>


  return (
    
    <div className="container-fluid">
    <div className="row no-gutter">
      <div className="col-md-6 col-lg-6 col-xl-7 d-none d-md-flex bg-image">
        <div className="row">
          <div className="col-md-10 col-lg-10 col-xl-10 my-auto mx-auto">
            <div>
              <div className="mb-4 d-flex pt-5">
              <img src="https://www.timbeando.com/imagenes/iSO_LOGO_TIM.png" alt="logo" width={'400px'} />
                </div>
                  <p className="text-white" style={{fontSize : '1.6em'}} >Sistema de apuestas de alto rendimiento al alcance de todos.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-6 col-xl-5">
        <div className="login d-flex align-items-center py-2">

          <div className="container pt-5">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-xl-9 mx-auto">
                <div className="card-sigin">
                  <div className="main-signup-header">
                     <h2 className='text-light'>Bienvenido!</h2>
                    <h5 className="font-weight-semibold mb-4 text-light">Por favor inicia sesion para continuar.</h5>
                    <form action="#" onSubmit={onSubmitHandler}>
                      <div className="form-group">
                        <input onChange={(e)=>onChangeEmail(e)} className="form-control" type="text" value={email} placeholder='admin'/>
                      </div>
                      <div className="form-group">
                        <input onChange={(e)=>onChangePassword(e)} className="form-control" placeholder="Ingresa tu clave aqui" type="password" value={password}/>
                      </div>
                      
                    {(email && password) ? <button className="btn btn-primary btn-block">Entrar</button> : <button className="btn btn-primary btn-block" disabled>Entrar</button>}
                      
                      
                      <div className="row row-xs">
                        <div className="col-sm-6">
                          {/* <button className="btn btn-block"><i className="fab fa-facebook-f"></i> Signup with Facebook</button> */}
                        </div>
                        <div className="col-sm-6 mg-t-10 mg-sm-t-0">
                          {/* <button className="btn btn-danger  btn-block"><i className="fab fa-google"></i> Signup with Google</button> */}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="main-signin-footer mt-5">
                    {/* <p><Link to="/forgot">Olvidaste tu contraseña?</Link> </p>
                      <p>No tienes una cuenta? <Link to="/register">Crea una cuenta</Link>
                    </p> */}
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