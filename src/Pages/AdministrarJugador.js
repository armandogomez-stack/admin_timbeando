import React, { useState, useContext, useEffect } from 'react'
import LoaderPage from './LoaderPage'
import UserContext from '../Contexts/UserContext'
import { Link } from 'react-router-dom'
import Menu from '../Components/Menu'
import Logo from '../Components/Logo'
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CreateCashier from '../Components/CreateCashier/Index'
import SetBalance from '../Components/SetBalance/Index'

function Index(props) {

	const user = useContext(UserContext);
	const [loading] = useState(false)
	const [ activeCashier , setActiveCashier ] = useState({})
	const [ usersList, setUsersList ] = useState([])
	const [ playerBilling , setPlayerBilling ] = useState([])
	const [ chargedUsers, setChargedUsers ] = useState(false)
	useEffect(() => {

		const getData = async () => {
			try {
				const { data } = await axios.get(`https://callback.route86services.com/admin/get/cashiers`)
				console.log( data )
				setChargedUsers(true)
				setUsersList( data )
			} catch (error) {
				console.log(error)
			}
		}

		if(user.access_token){
			if(chargedUsers === false)
				getData()
		}

	}, [ user, chargedUsers ] )

	const loadPlayerBilling = async () => {

			const request = 'https://callback.route86services.com/admin/billing'
			const params = {
				player_id : activeCashier._id
			}

			
			console.log( request )
			console.log( params )

			try {
				const { data } = await axios.post( request , params )
				setPlayerBilling( data )
			} catch (error) {
				console.log(error)
			}
	}


	

	const initActiveCashier = async ( cashier_id ) => {
		
		try {

			let body = {
				cashier_id
			}

			const { data } = await axios.post( `https://callback.route86services.com/admin/get/cashier`, body )

			setActiveCashier({...data})

			console.log( data )

		} catch (error) {
			console.log(error)
		}
		
	}


	const lockUnlockPlayer = async () => {
		try {

			let body = {
				 player_id : activeCashier._id
			}

			const { data } = await axios.post( `https://callback.route86services.com/cashier/lock_unlock_player`, body )

			setActiveCashier({...data})

			console.log( data )

		} catch (error) {
			console.log(error)
		}

	}


	const requestPlayerBalance = async () => {
		
		const player_id  =  activeCashier._id 
		console.log('Requesting player local balance', player_id )

		try {

			let body = {
				 player_id
			}

			const { data } = await axios.post( `https://callback.route86services.com/admin/get/player`, body )

			setActiveCashier({...data})

			console.log( data )

		} catch (error) {
			console.log(error)
		}
		
	}




	if (!user.access_token) {
		return (<LoaderPage />);
	}



	if (loading) {
		return (<LoaderPage />);
	}

	return (
		<div className="App">
			<div className='container p-0'>
				<Logo />
				<Menu />

				<div className='container p-0'>
					<div className='container pt-0 pl-0 pr-0'>

						<div className='row'>
							<div className='col-lg-12 pt-1'>
								<Link to={`/`} className={'btn btn-primary'} style={{ color: 'white', fontWeight: 'bolder' }}>Volver atras</Link>
							</div>
							<div className='col-lg-4 pt-1'>
								<table class="table table-dark">
									<thead>
										<tr>
											<th scope="col">Cajeros</th>
										</tr>
									</thead>
									<tbody>

										{ usersList.map((item, key) => {
											return (
												<tr
													style={{ cursor: 'pointer' }}
													onClick={ () => initActiveCashier(item._id) }
													key={ key }>
													<td>{ item.Login }</td>
												</tr>)
										})}



									</tbody>
								</table>
							</div>

							<div className='col-lg-8 pt-1'>
								<div style={{ backgroundColor: 'white', padding: '1em' }}>
									{(!activeCashier) && <h3>Presiona sobre un cajero</h3>}

									{(activeCashier._id) && <div>
										<p><b>Cajero : {activeCashier.Name}  {activeCashier.LastName}</b></p>

										<Tabs>
											<TabList>
												<Tab>Datos personales</Tab>
												<Tab>
													<span onClick={()=>loadPlayerBilling() }>
														Cargas y descargas

													</span>
												</Tab>
												<Tab>Saldo</Tab>
											</TabList>
											<TabPanel>
												<CreateCashier />
											</TabPanel>
											<TabPanel>
											<table class="table table-dark">
													<thead>
														<tr>
														<th scope="col">Fecha</th>
															<th scope="col">Operacion</th>
															<th scope="col">Monto</th>
															<th scope="col">Saldo anterior</th>
															<th scope="col">Saldo actual</th>
														</tr>
													</thead>
													<tbody>

														{ playerBilling.map((item, key) => {
															return (
																<tr key={key}>
																	<td>{item.dateAdded}</td>
																	<td style={{ color : (item.operation === 'carga') ? 'green' :'red' }}>{item.operation}</td>
																	<td>
																		{(item.operation === 'carga') ? '+' :'-' }
																		{item.sended_balance}
																		</td>
																	<td>{item.old_balance}</td>
																	<td>{item.current_balance}</td>
																	
																</tr>)
														})}



													</tbody>
												</table>	
											</TabPanel>
											<TabPanel>
												<div className='container p-0'>
													<div className='container pt-0 pl-0 pr-0'>
														<div className='row'>

															<div className='col-lg-12 pt-1'>
																<div class="card" style={{ width: '100%' }}>
																	<div class="card-body">
																		<div className={'form-group'}>


																			{/* { ( activeCashier.is_locked === false ) && <button className='btn btn-success' 
																			onClick={ ()=>lockUnlockPlayer() }
																			>
																				Bloquear jugador
																			</button>} */}

																			{/* {(activeCashier.is_locked === true ) && <button className='btn btn-danger'
																			onClick={ ()=>lockUnlockPlayer() }
																			>
																				Desbloquear jugador
																			</button>} */}
																			
																			<hr/>
																			<span>
																				<b>Saldo actual</b>
																			</span>
																			<h1>{activeCashier.Balance}</h1>
																		</div>
																	</div>
																</div>
															</div>
														

															<div className='col-lg-6 pt-1'>
																<div class="card" style={{ width: '100%' }}>
																	<SetBalance
																		operation='positive'
																		setBalanceCallBack={ requestPlayerBalance }
																		title={'Monto a recargar'}
																		player_id={ activeCashier._id}
																		buttonText={'Recargar saldo'}
																	/>
																</div>
															</div>

															<div className='col-lg-6 pt-1'>
																<div class="card" style={{ width: '100%' }}>
																	<SetBalance
																		operation='negative'
																		setBalanceCallBack={ requestPlayerBalance }
																		title={'Monto a descargar'}
																		player_id={ activeCashier._id }
																		buttonText={'Descargar saldo'}
																	/>
																</div>
															</div>



														</div>
													</div>

												</div>

											</TabPanel>
										</Tabs>
									</div>
									}



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