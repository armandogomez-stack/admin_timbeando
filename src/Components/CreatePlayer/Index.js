import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../../Contexts/UserContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Index(props) {

	const [loading, setLoading] = useState( false )
	const { create , update } = props
	const [ userData , setUserData ] = useState({
		Login: '',
		Password: '',
		// Currency: 'ARS',
		// Language: 'ES',
		Gender: "Male",
		Country: 'AR',
		Dob: "",
		Nick: "",
		Timezone: "",
		Name: "",
		LastName: "",
		Phone: "",
		Altphone: "",
		City: "",
		Address: "",
		Email: "",
		Affiliateid: "",
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
		const request = 'https://callback.route86services.com/User/Add'
		
		if(!userData.Login ||
			!userData.Password ||
			!userData.Nick ||
			!userData.Name ||
			!userData.LastName ||
			!userData.Phone ||
			!userData.Email )
			{	
				console.log('Faltan campos por rellenar')
				return false
			}


			try {
				
				const response = await axios.post( request , {
					...userData
				})
				console.log( response.data )

			} catch (error) {
				console.log( error )
		}
	}


	return (
				<div className='container p-0'>
					<div className='container pt-0 pl-0 pr-0'>
						<div className='row'>
							
							<div className='col-lg-12 pt-1'>

								{/* <span style={{color : 'white'}}>{JSON.stringify(userData)}</span> */}

								<div class="card" style={{ width: '100%' }}>
									<div class="card-body">
										

										<div className={'form-group'}>
											<label>Habilitado</label>
											<select type='text' className='form-control' name='is_enabled' onChange={(event) => onChangeHandler(event)} value={userData.is_enabled} >
												<option value='Si'>Si</option>
												<option value='No'>No</option>
											</select>
										</div>

										<div className={'form-group'}>
											<label>Nombre</label>
											<input type='text' className='form-control' name='Name' onChange={(event) => onChangeHandler(event)} value={userData.Name}/>
										</div>
										<div className={'form-group'}>
												<label>Apellido</label>
												<input type='text' className='form-control' name='LastName' onChange={(event) => onChangeHandler(event)} value={userData.LastName}/>
											</div>
										<div className={'form-group'}>
											<label>Telefono</label>
											<input type='text' className='form-control' name='Phone' onChange={(event) => onChangeHandler(event)} value={userData.Phone}/>
										</div>

										<div className={'form-group'}>
											<label>Telefono alternativo</label>
											<input type='text' className='form-control' name='Altphone' onChange={(event) => onChangeHandler(event)} value={userData.Altphone}/>
										</div>

										<div className={'form-group'} >
											<label>Ciudad</label>
											<input type='text' className='form-control' name='City' onChange={(event) => onChangeHandler(event)} value={userData.City}/>
										</div>

										<div className={'form-group'}>
											<label>Direccion</label>
											<input type='text' className='form-control' name='Address' onChange={(event) => onChangeHandler(event)} value={userData.Address}/>
										</div>

										<div className={'form-group'}>
											<label>Correo electronico</label>
											<input type='text' className='form-control' name='Email' onChange={(event) => onChangeHandler(event)} value={userData.Email}/>
										</div>

										
										<div className={'form-group'}>
											<label>Genero</label>
											<select type='text' className='form-control' name='Gender' onChange={(event) => onChangeHandler(event)} value={userData.Gender}>
												<option value='M'>Masculino</option>
												<option value='F'>Femenino</option>
											</select>
										</div>

										
										<div className={'form-group'}>
											<label>Nick</label>
											<input type='text' className='form-control' name='Nick' onChange={(event) => onChangeHandler(event)} value={userData.Nick}/>
										</div>

		
										<div className={'form-group'}>
											<label>Player Login</label>
											<input type='text' className='form-control' name='Login' onChange={(event) => onChangeHandler(event)} value={userData.Login}/>
										</div>


										<div className={'form-group'}>
											<label>Player Password</label>
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