import React, { useState, useContext } from 'react'
import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage'
import { Link } from 'react-router-dom'
import Menu from '../Components/Menu'
import Logo from '../Components/Logo'
import CreatePlayer from '../Components/CreatePlayer/Index'


function Index(props) {

	const user = useContext(UserContext);
	const [ loading ] = useState(false)

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
							<h5 class="card-title">
								Crear jugador
							</h5>
							<CreatePlayer />
						</div>
					</div>
				</div>
			</div>
		</div>


	)
}


export default Index