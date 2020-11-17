import React, { useState, useContext } from 'react'
import LoaderPage from './LoaderPage'
import UserContext from '../Contexts/UserContext'
import { merchants } from '../proveedores.json';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Link } from 'react-router-dom'
import Menu from '../Components/Menu'
import Logo from '../Components/Logo'



function Index( props ){

	const user = useContext(UserContext);
	const [ loading , setLoading ] = useState( false )

	
	if( !user.access_token ){
			return (<LoaderPage/>);
	}



  	if( loading ){
		return (<LoaderPage/>);
	}


	



// item.PageCode
const gameRouter = (provider)=>{

	if( provider === '987' || provider === '957' || provider === '970' ){
		return 'unstandardgame'
	}
	
	return 'standardgame'
	
}


	const FavoriteGames = ()=>{

		const data = [
			{ provider : 976 , PageCode: 'SGTabernaDeLosMuertos', ImageFullPath : 'https://static.egamings.com/games/habanero/taberna_de_los_muertos.jpg' },
			{ provider : 976 , PageCode: 'SGHappyApe' , ImageFullPath : 'https://static.egamings.com/games/habanero/happy_ape.jpg'},
			{ provider : 976 , PageCode: 'SGJellyfishFlow', ImageFullPath : 'https://static.egamings.com/games/habanero/jellyfish_flow.jpg'},
			{ provider : 976 , PageCode: 'SGZeus', ImageFullPath : 'https://static.egamings.com/games/habanero/zeus_2.jpg' },
			{ provider : 945 , PageCode: 'baccarat::243', ImageFullPath : 'https://static.egamings.com/games/vivogaming/vivo_aladdin_baccarat.jpg' },
			{ provider : 976 , PageCode: 'lobby' , ImageFullPath : 'https://static.egamings.com/games/vivogaming/vg_lobby.jpg'},
			{ provider : 980 , PageCode: 'AutoRoulette:11:5df39a41b34f567f9a064cd5', ImageFullPath : 'https://static.egamings.com/games/luckystreak/auto_roulette_1.jpg'},
			{ provider : 942 , PageCode: 'Blackjack', ImageFullPath : 'https://static.egamings.com/games/xprogaming/blackjack.jpg' },
			{ provider : 989 , PageCode: 'hotfruits27', ImageFullPath : 'https://static.egamings.com/games/amatic/hot_fruits_27.jpg' },
			{ provider : 952 , PageCode: 'VFWC' , ImageFullPath : 'https://static.egamings.com/games/betradarvs/betradar_virtual_football_world_cup.jpg'},
			{ provider : 943 , PageCode: 'vikings_fortune', ImageFullPath : 'https://static.egamings.com/games/playsondirect/vikings_fortune.jpg'},
			{ provider : 979 , PageCode: '847:10357', ImageFullPath : 'https://static.egamings.com/games/worldmatch/super_creeps.jpg' },
		]

		return(<div class='row mt-1'>

			{data.map((item, key) => {
				return (
					<div className='col-lg-1' key={key} style={{ display: 'flex' }}>
							<center>
								<Link to={`/${gameRouter(item.provider)}/${ item.provider }/${ item.PageCode }`} >
									<img width={'100%'} src={item.ImageFullPath} style={{borderRadius : 5, marginTop : 10, marginBottom : 10}} className='provider-mini-thumbnail' />
								</Link>
							</center>
					</div>)
			})}

		</div>)
	}


	return (
	<div className="App">
			<div className='container p-0'>
			<Logo />
			<Menu />
			
				<div className='container p-0'>
					<div className='container pt-0 pl-0 pr-0' style={{
						minHeight : '600px',
						backgroundImage : 'url(https://i2.wp.com/altadensidad.com/wp-content/uploads/2017/10/Ruleta-casino.jpg?resize=620%2C465&ssl=1)',
						backgroundRepeat : 'no-repeat',
						backgroundSize :'cover',
					}}>
						<div className='row'>

						<div className='col-lg-3 pt-5'>
							<Link 
							to={`/crear-jugador`} 
							className={'btn btn-primary'} 
							style={{color : 'white', fontWeight : 'bolder'}}>
								Crear cajero
							</Link>
						</div>

						<div className='col-lg-3 pt-5'>
							<Link 
								to={`/administrar-jugador`} 
								className={'btn btn-primary'} 
								style={{color : 'white', fontWeight : 'bolder'}}>
								Administrar cajero
							</Link>
						</div>
							  
					</div>
				</div>
			  </div>
			  
			  </div>
			</div>

		)
}


export default Index