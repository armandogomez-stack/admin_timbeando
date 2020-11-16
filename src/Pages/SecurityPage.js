import React, { useEffect, useState, useContext } from 'react'
import LoaderPage from './LoaderPage'
import UserContext from '../Contexts/UserContext'
import Env from '../Env'
import axios from 'axios'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import PasswordEdit from '../Components/PasswordEdit'
import { Link } from 'react-router-dom'


function Index( props ){

	const user = useContext(UserContext);
	const {api_uri} = Env
	const [ balance , setBalance ] = useState('0.00')
	const [seconds, setSeconds] = useState(0)
		

	useEffect(() => {
	  const interval = setInterval( async () => {

		console.log(user)
		if( user.access_token ){
			try {
	
				const { data }	= await axios.post(`${api_uri}/Stats` , {
					"Login" : user.Login,
					"Password" : user.random_password
				})

				setBalance(data.balance)
				setSeconds(seconds => seconds + 5);
	
			} catch (error) {
				
				console.log(error)
	
			}

		}

	  }, 5000);
	  return () => clearInterval(interval);
	}, [user]);


	if( !user.access_token ) {
			return (<LoaderPage/>);
	}


	return (
		<div className="App">

			<div className="menu">
				<div className="left">
				<span className='text-light'>{seconds} Segundos de tu conexión.</span>
				</div>
				<div className="right">
					<span className="balance">
						Saldo : <b>{ balance } ARS </b>
					</span>
					<span>Bienvenido : Leonardo Tapia</span>
					<Link to="/" >Home</Link>
					<Link to="/security" >Seguridad</Link>
					<a href={'./logout'}>Salir</a>
				</div>
			</div>

			<div className='container'>
				<div className='container pt-5'>
					<img src="https://www.timbeando.com/imagenes/iSO_LOGO_TIM.png" width="300px" />
				</div>
			</div>

			<div className='container'>
				<div className='container pt-5'>
		
				  <Accordion>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
							<span className="accordion-label">
								Cambiar Clave
							  </span>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<PasswordEdit Login={user.Login}/>
							</AccordionItemPanel>
					</AccordionItem>
				</Accordion>
		
				</div>
			  </div>
			  
			
			</div>

		)
}


export default Index