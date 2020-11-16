import React, {useContext, useState, useEffect} from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../../Contexts/UserContext'
import { store } from 'react-notifications-component'
import NoReffered from '../../Pages/NoReffered'
import Env from '../../Env'


function Index( props ){

  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ password2, setPassword2 ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ profile, setProfile ] = useState({})
  const user = useContext(UserContext)
  const { api_uri, base_url } = Env


useEffect(() => {
  getInfoRefferer()
  
  
  
  async function getInfoRefferer(){
      
      let result
      try {
          result = await axios.get(base_url(api_uri, `api/refferer/${user.refferer_code}`))
          setProfile(result.data)

        } catch (error) {
            console.log(error)
        }

    }
}, [ user , api_uri, base_url ]);

  const onChangeEmail  = ( e )=> {
    setEmail(e.target.value.toLowerCase().split(' ').join(''))
  }

  const onChangePassword  = ( e )=>{    
    setPassword(e.target.value)
  }

  const onChangePassword2  = ( e )=>{    
    setPassword2(e.target.value)
  }

  const onChangeFirstName  = ( e )=>{    
    setFirstName(e.target.value)
  }

  const onChangePhone  = ( e )=>{    
    setPhone(e.target.value)
  }


  const register = ( data ) => axios.post(base_url( api_uri, 'api/auth/register' ), data )


  const onSubmitHandler = async ( e ) => {
    e.preventDefault()

    if( !email || !password || !firstName || !profile.refferer_code){

      store.addNotification({
        title: "Verifica tus datos!",
        message: `Debes proporcionar todos los datos del formulario`,
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

    if( password !== password2){

      store.addNotification({
        title: "Confirma tu clave!",
        message: `Las claves que ingresaste no coinciden`,
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

    try
      {
        result = await register({ email, password, firstName, refferer_code : profile.refferer_code, frontend : 'affiliate', phone })
      } catch (e) {

      if( e.response.status === 401){

      }

      if( e.response.status === 411){

      }

  }


  
  if( result && result.status  ){

    store.addNotification({
      title: "Registrado exitosamente!",
      message: `${result.data.firstName}`,
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


  if(  profile.refferer_code === null )
    return <NoReffered />

  const ReffererCard = (data)=>{


    return ( <div className="col-md-12 col-lg-12 col-xl-12 col-xs-12 col-md-pull2">
    <div className="box-widget widget-user">
      <div className="widget-user-header testbgpattern1"></div>
      <div className="widget-user-image">
        <img alt="User Avatar" className="rounded-circle" src="../assets/img/faces/6.jpg" />
      </div>
      <div className="card-body text-center">
        <div className="item-user pro-user">
          <h4 className="pro-user-username tx-15 pt-2 mt-4 mb-1">{ profile.firstName }</h4>
          <div className="item-user-icons mt-2"> 
            <Link to={'/'} className="facebook-bg"><i className="bx bxl-facebook"></i></Link>
            <Link href="#" className="twitter-bg"><i className="bx bxl-twitter"></i></Link>
            <Link href="#" className="google-bg"><i className="bx bxl-google-plus"></i></Link>
            <Link href="#" className="dribbble-bg"><i className="bx bxl-dribbble"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </div>)
    
  }





  return(
    <div className="container-fluid">
    <div className="row no-gutter">

      <div className="col-md-6 col-lg-6 col-xl-5 bg-white">
        <div className="login d-flex align-items-center py-2">

          <div className="container p-0">
            <div className="row">

            
            { ( profile.refferer_code )  ? <ReffererCard/>  :  ''  }


              <div className="col-md-10 col-lg-10 col-xl-9 mx-auto">
                <div className="card-sigin">
                  <div className="main-signup-header">
                    <h2 className="text-primary">Comenzar ahora!</h2>
                    <h5 className="font-weight-normal mb-4">Es gratis y solo te tomara unos minutos</h5>


                   



                    <form action="#" onSubmit={onSubmitHandler}>
                      <div className="form-group">
                        <label>Primer nombre y apellido</label>
                        <input onChange={(e)=>onChangeFirstName(e)} className="form-control" placeholder="Ingresa tu nombre y apellido" type="text" value={firstName} disabled={(!profile.refferer_code) ? true : false } />
                      </div>
                      <div className="form-group">
                        <label>Correo electronico</label>
                        <input onChange={(e)=>onChangeEmail(e)} className="form-control" placeholder="Ingresa tu correo electronico aqui" type="text" value={email} disabled={(!profile.refferer_code) ? true : false }/>
                      </div>
                      <div className="form-group">
                        <label>Tu clave de acceso</label> 
                        <input onChange={(e)=>onChangePassword(e)} className="form-control" placeholder="Ingresa tu clave aqui" type="password" value={password} disabled={(!profile.refferer_code) ? true : false }/>
                      </div>

                      <div className="form-group">
                        <label>Confirma la clave</label> 
                        <input onChange={(e)=>onChangePassword2(e)} className="form-control" placeholder="Confirma tu clave" type="password" value={password2} disabled={(!profile.refferer_code) ? true : false }/>
                      </div>

                      <div className="form-group">
                        <label>Telefono</label> 
                        <input onChange={(e)=>onChangePhone(e)} className="form-control" placeholder="Numero telefonico" type="text" value={phone} disabled={(!profile.refferer_code) ? true : false }/>
                      </div>

                        <button className="btn btn-main-primary btn-block" disabled={(!profile.refferer_code) ? true : false }>Crear cuenta</button>



                    </form>
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


export default withRouter(Index)