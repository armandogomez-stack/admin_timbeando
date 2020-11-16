import React, { useContext, useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../Contexts/UserContext'
import { store } from 'react-notifications-component'
import NoReffered from './NoReffered'
import Env from '../Env'
import Select from 'react-select';
import PhoneInput from 'react-phone-number-input'
import countryList from 'react-select-country-list'
import 'react-phone-number-input/style.css'



function Index(props) {

	const { match: { params: { refferer_code } } } = props
	const { cdn, api_uri, base_url } = Env

	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')

	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
	const [firstName, setFirstName] = useState('')
	const [profile, setProfile] = useState({})
	const user = useContext(UserContext)


	const [selectedCountry, setSelectedCountry] = useState(null)
	const [city, setCity] = useState('')
	const countries = countryList().getData()
	const [selectedOption, setSelectedOption] = useState(null)
	const [idocument, setIdocument] = useState('')
	const [selectedSex, setSelectedSex] = useState(null)
	const [address, setAddress] = useState('')



	const options = [
		{ value: 'Cedula', label: 'Cedula' },
		{ value: 'Pasaporte', label: 'Pasaporte' },
		{ value: 'PEP', label: 'PEP' },
	];

	const sexOptions = [
		{ value: 'Masculino', label: 'Masculino' },
		{ value: 'Femenino', label: 'Femenino' },
	];



	useEffect(() => {

		async function getInfoRefferer() {

			let result
			try {
				result = await axios.get(base_url(api_uri, `api/refferer/${refferer_code}`))
	
			} catch (error) {
				console.log(error)
			}
	
			if (result) {
				console.log(result)
				setProfile(result.data)
			}
		}

		getInfoRefferer()


	}, [ refferer_code, api_uri, base_url ]);

	

	const onChangeEmail = (e) => {
		setEmail(e.target.value.toLowerCase().split(' ').join(''))
	}

	const onChangePassword = (e) => {
		setPassword(e.target.value)
	}

	const onChangePassword2 = (e) => {
		setPassword2(e.target.value)
	}

	const onChangeFirstName = (e) => {
		setFirstName(e.target.value)
	}

	const onChangeCity = (e) => {
		setCity(e.target.value)
	}

	const onChangeAddress = (e) => {
		setAddress(e.target.value)
	}



	const onChangeIdocument = (e) => {
		setIdocument(e.target.value)
	}

	const register = (data) => axios.post(base_url(api_uri, 'api/auth/register'), data)


	const onSubmitHandler = async (e) => {
		e.preventDefault()


		if (!email || !password || !firstName || !profile.refferer_code) {

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

		if (!idocument || !selectedOption) {

			store.addNotification({
				title: "Verifica tus datos!",
				message: `El campo tipo documento y numero de documento son requeridos`,
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

		if (password !== password2) {

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

		console.log({ document_type: selectedOption.value, document_number: idocument })

		try {
			result = await register({
				email,
				password,
				firstName,
				refferer_code: profile.refferer_code,
				frontend: 'affiliate', phone,
				document_type: selectedOption.value,
				document_number: idocument,
				selectedOption,
				country: selectedCountry.value ,
				address ,
				sex : selectedSex.value ,
				city,
			})
		} catch (e) {

			if (e.response.status === 401) {

			}

			if (e.response.status === 411) {

			}

		}



		if (result && result.status) {

			store.addNotification({
				title: "Bienvenido!",
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

			axios.defaults.headers.common['access-token'] = result.data.token
			localStorage.setItem('user', JSON.stringify({
				access_token: result.data.token,
				...result.data
			}))


		}


	}



	if (user.access_token)
		return <Redirect to={'/dashboard'} />

	if (profile.refferer_code === null)
		return <NoReffered />

	const ReffererCard = (data) => {

		return (<div className="col-md-12 col-lg-12 col-xl-12 col-xs-12 col-md-pull2">
			<div className="box-widget widget-user">
				<div className="widget-user-header testbgpattern1"></div>
				<div className="widget-user-image">
				<img 
				alt="Avatar"
				className="rounded-circle"
				src={ `${cdn}/image/${profile.avatar}/100/100` } />

				</div>
				<div className="card-body text-center">
					<div className="item-user pro-user">
						<h4 className="pro-user-username tx-15 pt-2 mt-4 mb-1">{profile.firstName}</h4>
						<h6 className="pro-user-desc tx-13 mb-3 font-weight-normal text-muted">Investor</h6>
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
								<p className="text-white" style={{ fontSize: '1.6em' }} >Sistema de alto rendimiento al alcance de todos. Obtendrás rendimientos de Cripto-Fiat y Surbet, de la mano de expertos.</p>
								<p className="text-white" style={{ fontSize: '1.6em' }} >Work Money. Tu mejor aliado del crecimiento de tus finanzas</p>
								<Link className="btn btn-success" to={'/'}>Descubra como</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-6 col-lg-6 col-xl-5 bg-white">
					<div className="login d-flex align-items-center py-2">

						<div className="container p-0">
							<div className="row">


								{(profile.refferer_code) ? <ReffererCard /> : ''}


								<div className="col-md-10 col-lg-10 col-xl-9 mx-auto">
									<div className="card-sigin">
										<div className="main-signup-header">
											<h2 className="text-primary">Comenzar ahora!</h2>
											<h5 className="font-weight-normal mb-4">Es gratis y solo te tomara unos minutos</h5>






											<form action="#" onSubmit={onSubmitHandler}>
												<div className="form-group">
													<label>Primer nombre y apellido</label>
													<input onChange={(e) => onChangeFirstName(e)} className="form-control" placeholder="Ingresa tu nombre y apellido" type="text" value={firstName} disabled={(!profile.refferer_code) ? true : false} />
												</div>

												<div className="form-group">
													<label>Correo electronico</label>
													<input onChange={(e) => onChangeEmail(e)} className="form-control" placeholder="Ingresa tu correo electronico aqui" type="text" value={email} disabled={(!profile.refferer_code) ? true : false} />
												</div>

												<div className="form-group">
													<div className="container p-0">
														<div className="row">

															<div className="col-md-6 col-xl-6 col-xs-6 col-sm-6">
																<label>Sexo</label>
																<Select
																	options={sexOptions}
																	value={selectedSex}
																	onChange={(value) => setSelectedSex(value)}
																	isDisabled={(!profile.refferer_code) ? true : false}
																/>
															</div>

															<div className="col-md-6 col-xl-6 col-xs-6 col-sm-6">
																<label>Pais</label>
																<Select
																	options={countries}
																	value={selectedCountry}
																	onChange={(value) => setSelectedCountry(value)}
																	isDisabled={(!profile.refferer_code) ? true : false}
																/>
															</div>

															<div className="col-md-6 col-xl-6 col-xs-6 col-sm-6">
																<label>Ciudad</label>
																<input
																	onChange={(e) => onChangeCity(e)}
																	className="form-control"
																	type="text" value={city}
																	disabled={(!profile.refferer_code) ? true : false} />
															</div>



															<div className="col-md-6 col-xl-6 col-xs-6 col-sm-6">
																<label>Documento</label>
																<Select
																	value={selectedOption}
																	onChange={(value) => setSelectedOption(value)}
																	options={options}
																	isDisabled={(!profile.refferer_code) ? true : false} />
															</div>

															<div className="col-md-6 col-xl-6 col-xs-6 col-sm-6">
																<label>Numero de documento</label>
																<input
																	onChange={(e) => onChangeIdocument(e)}
																	className="form-control"
																	type="text" value={idocument}
																	disabled={(!profile.refferer_code) ? true : false} />
															</div>

															<div className="col-md-6 col-xl-6 col-xs-12 col-sm-12">
															</div>

															<div className="col-md-6 col-xl-6 col-xs-12 col-sm-12">
																<label>Tu clave de acceso</label>
																<input onChange={(e) => onChangePassword(e)} className="form-control" placeholder="Ingresa tu clave aqui" type="password" value={password} disabled={(!profile.refferer_code) ? true : false} />
															</div>

															<div className="col-md-6 col-xl-6 col-xs-12 col-sm-12">
																<label>Confirma la clave</label>
																<input onChange={(e) => onChangePassword2(e)} className="form-control" placeholder="Confirma tu clave" type="password" value={password2} disabled={(!profile.refferer_code) ? true : false} />
															</div>



														</div>
													</div>
												</div>



												<div className="form-group">
													<label>Telefono</label>
													<PhoneInput placeholder="Enter phone number" value={phone} onChange={setPhone} />
												</div>

												<div className="form-group">
													<label>Dirección</label>
													<input
														onChange={(e) => onChangeAddress(e)}
														className="form-control"
														type="text" value={address}
														disabled={(!profile.refferer_code) ? true : false} />
												</div>


												<button className="btn btn-main-primary btn-block" disabled={(!profile.refferer_code) ? true : false}>Crear cuenta</button>




												<div className="row row-xs">
													<div className="col-sm-6">
														{/* <button className="btn btn-block"><i className="fab fa-facebook-f"></i> Registrarte con facebook</button> */}
													</div>
													<div className="col-sm-6 mg-t-10 mg-sm-t-0">
														{/* <button className="btn btn-danger  btn-block"><i className="fab fa-google"></i> Registrarte con google</button> */}
													</div>
												</div>
											</form>
										</div>
										<div className="main-signup-footer mt-5">
											<p>Ya tienes una cuenta? <Link to="/login">Inicia sesion</Link></p>
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