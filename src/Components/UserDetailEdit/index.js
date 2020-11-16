import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Env from '../../Env'
import { store } from 'react-notifications-component'
import PhoneInput from 'react-phone-number-input'
import UserContext from '../../Contexts/UserContext'

function Index(props) {


	const [ detail, setDetail ] = useState({})
	const user = React.useContext(UserContext);
	const [ phone, setPhone ] = useState('')
	const { api_uri } = Env


	useEffect(() => {

		if (user.refferer_code) {

			const getProfile = async () => {
				const { data } = await axios.get(`${api_uri}/api/profile/load/${user.refferer_code}`)
				setPhone(data.phone)
				console.log( data )
				setDetail(data)
			}

			getProfile()
		}

	}, [ user, api_uri ])


	const onSubmitHandler = async (event) => {

		event.preventDefault()


		try {

			await axios.post(`${api_uri}/api/auth/change/profile/${user.refferer_code}`,
			{ 
				phone 
			})


			store.addNotification({
				title: "Informacion actualizada!",
				message: `Tu informacion fue actualizada con exito`,
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

		} catch (error) {
			
			console.log(error)

			store.addNotification({
				title: "Error al cambiar la clave!",
				message: `Ocurrio un error`,
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

		<div className="card">
			<form className="form-horizontal" onSubmit={(event) => onSubmitHandler(event)}>
				<div className="card-body">

					<div className="mb-4 main-content-label">Informacion personal</div>
					<div className="form-group ">
						<div className="row">
							<div className="col-md-3">
								<label className="form-label">Nombre completo</label>
							</div>
							<div className="col-md-9">
							{ (detail.firstName !== undefined) ? `${ detail.firstName }` : "N/A" } 
							</div>
						</div>
					</div>
					<div className="form-group ">
						<div className="row">
							<div className="col-md-3">
								<label className="form-label">Codigo referido</label>
							</div>
							<div className="col-md-9">
								<input
									disabled
									placeholder={'0000000'}
									type="text"
									className="form-control"
									defaultValue={detail.refferer_code} />

							</div>
						</div>
					</div>

					<div className="form-group ">
						<div className="row">
							<div className="col-md-3">
								<label className="form-label">Correo electronico</label>
							</div>
							<div className="col-md-9">
								{ (detail.email !== undefined) ? `${ detail.email }` : "N/A" } 
							</div>
						</div>
					</div>

					<div className="form-group ">
						<div className="row">
							<div className="col-md-3">
								<label className="form-label">Dirección</label>
							</div>
							<div className="col-md-9">
								{ (detail.address !== undefined) ? `${ detail.address }` : "N/A" } 
							</div>
						</div>
					</div>


					<div className="form-group ">
						<div className="row">
							<div className="col-md-3">
								<label className="form-label">Sexo</label>
							</div>
							<div className="col-md-9">
								{ (detail.sex !== undefined) ? `${ detail.sex }` : "N/A" } 
							</div>
						</div>
					</div>


					<div className="form-group ">
						<div className="row">
							<div className="col-md-3">
								<label className="form-label">Pais</label>
							</div>
							<div className="col-md-9">
							{ ( detail.country !== undefined ) ? `${ detail.country }` : "N/A" } 
							</div>
						</div>
					</div>



					<div className="form-group ">
						<div className="row">
							<div className="col-md-3">
								<label className="form-label">Ciudad</label>
							</div>
							<div className="col-md-9">
								<span>
									{ (detail.city !== undefined) ? `${ detail.city }` : "N/A" } 
								</span>
							</div>
						</div>
					</div>


					<div className="form-group ">
						<div className="row">
							<div className="col-md-3">
								<label className="form-label">Documento</label>
							</div>
							<div className="col-md-9">
								<span>
									{ (detail.document_type !== undefined) ? `${ detail.document_type } ${detail.document_number}` : "N/A" } 
								</span>

							</div>
						</div>
					</div>

					<div className="form-group ">
						<div className="row">
							<div className="col-md-3">
								<label className="form-label">Telefono</label>
							</div>
							<div className="col-md-9">
								<PhoneInput placeholder="Enter phone number" value={phone} onChange={setPhone} />
							</div>
						</div>
					</div>
				</div>

				<div className="card-footer">
					<button type="submit" className="btn btn-primary waves-effect waves-light">
						Guardar cambios
					</button>
				</div>

			</form>
		</div>

	)
}


export default Index