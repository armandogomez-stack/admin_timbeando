import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router'
import Env from '../Env'

function Index(props){
  
  const [ loading , setLoading ] = useState( false )
  const [ activated , setActivated ] = useState( false )
  const [ wrown , setWrown ] = useState( false )
  const [ requested, setRequested ] = useState( false )
  const { match : { params : { refferer_code, verification_code }} } =  props
  const { api_uri, base_url } = Env

  useEffect(()=>{
	  if(refferer_code){
		const activate = async () => {

			setLoading( true )
	
			let result = {}
			try {
				result = await axios.get(base_url(api_uri , `api/auth/activate/${refferer_code}/${verification_code}` ))
			}
			catch(e){
				console.log(e)        
				setWrown(true)
			}
	
				if( result && result.status === 201 ){
					setLoading( false ) 
					setActivated( true )
					setRequested( true )
				}
		}
		activate()

	  }
  },[ refferer_code, base_url, api_uri, verification_code ])


	




	if( wrown )
		return (
			<div className="main-error-wrapper page page-h" style={{ background : '#187fca' }}>
				<h1 className="text-white">Error</h1>
				<h2 className="tx-white-8">Ocurrio un error durante la activacion.</h2>
				<h6 className="tx-white-6">Puede que el codigo de validacion no sea valido...</h6>
			</div>)



	if( activated )
		return (
			<div className="main-error-wrapper page page-h" style={{background : '#3265f6'}}>
				<h1 className="text-white">Cuenta activada</h1>
				<h2 className="tx-white-8">Operacion exitosa.</h2>
				<image src={'https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif'} />
				<h6 className="tx-white-6">Tu cuenta ha sido activada, ahora puedes disfrutar de todos nuestros beneficios</h6>
				<Link className="btn btn-success" to="/">Volver a la pagina principal</Link>
			</div>)



	if( loading )
		return (
			<div className="main-error-wrapper page page-h"  style={{
				background : 'white',
				backgroundImage : 'url("https://pixelpapa.com/wp-content/uploads/2018/11/1.gif")',
				backgroundSize : '100%'
				}}>
				<h1 className="text-black">Verificando</h1>
				<h2 className="text-black">Estamos verificando tu cuenta.</h2>
				<h6 className="text-black">No cierres esta ventana...</h6>
			</div>)



	if( !requested )
  		return (
    			<div className="main-error-wrapper page page-h" style={{background : '#187fca'}}>
				<h1 className="text-white">. . .</h1>
			</div>)

  

  
}


export default withRouter(Index)