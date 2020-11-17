import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../../Contexts/UserContext'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { store } from 'react-notifications-component'

function Index(props) {

	const [loading, setLoading] = useState( false )
	const { create , update } = props
	const [ userData , setUserData ] = useState({
		Login: '',
		Password: '',
		Name: '',

	})

	const onChangeHandler = (event) => {
		console.log(event.target.name, event.target.value)
		setUserData({
			...userData,
			[ event.target.name ] : event.target.value
		})
	}

	const sendData = async () => {
		
		console.log('enviando data')
		const request = 'https://callback.route86services.com/admin/create/cashier'
		
		if(!userData.Login || !userData.Password || !userData.Name ){	
				
			console.log('Faltan campos por rellenar')

				store.addNotification({
					title: "Respuesta del servidor!",
					message: 'Faltan campos por rellenar',
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

			try {
				
				const response  =  await axios.post( request , {
					...userData
				})

				store.addNotification({
					title: "Respuesta del servidor!",
					message: 'Usuario creado con exito',
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
				console.log( response.data )

			} catch (error) {
				console.log( error )

				store.addNotification({
					title: "Respuesta del servidor!",
					message: error.response.data.Message,
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


	return (
				<div className='container p-0'>
					<div className='container pt-0 pl-0 pr-0'>
						<div className='row'>
							
							<div className='col-lg-12 pt-1'>

								<div class="card" style={{ width: '100%' }}>
									<div class="card-body">
										
										<div className={'form-group'}>
											<label>Nombre del cajero</label>
											<input type='text' className='form-control' name='Name' onChange={(event) => onChangeHandler(event)} value={userData.Name}/>
										</div>
		
										<div className={'form-group'}>
											<label>Cajero Login</label>
											<input type='text' className='form-control' name='Login' onChange={(event) => onChangeHandler(event)} value={userData.Login}/>
										</div>


										<div className={'form-group'}>
											<label>Cajero Password</label>
											<input type='text' className='form-control' name='Password' onChange={(event) => onChangeHandler(event)} value={userData.Password}/>
										</div>


										<div className={'form-group'}>
											<button 
											onClick={ () => sendData() }
											className={'btn btn-primary'}>Guardar</button>
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