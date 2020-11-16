import React, { useState, useEffect, useContext } from 'react'
import LoaderPage from './LoaderPage'
import Page from '../Components/Page'
import UserContext from '../Contexts/UserContext'
import Env from '../Env'
import axios from 'axios'
import FlatCard from '../Components/FlatCard/Index'
import RefferedList from '../Components/RefferedList/Index'
import CreateRefferer from '../Components/CreateRefferer/Index'
import NoData from '../Components/NoData/Index'

function Index(props) {

	const [ users, setUsers ] = useState([])
	const user = useContext(UserContext);
	const [ showCreateForm, setShowCreateForm ] = useState( false )
	const [ loading, setLoading ] = useState( true )
	const [ firstNameFilter, setFirstNameFilter ] = useState('')
	const [ userStates , setUserStates ] = useState(false)
	const { base_url, api_uri } = Env

	const onCreate = () => {
		setShowCreateForm(false)
		setLoading(false)
	}


	useEffect(() => {

		if (user.access_token) {

			const getRefferers = async () => {

				let request = ''

					request = base_url( api_uri, `api/refferer/list/${user.refferer_code}` )

					

				try {
					setLoading(true)
					const { data } = await axios.post(request)
					setUsers(data)
					setLoading(false)

				} catch (error) {
					console.log(error)
					setLoading(false)

				}
			}

			const  getStates = async ()=>{
			
				let request  =  base_url(api_uri , `api/refferer/states/${ user.refferer_code }`)
				
				try {
				  const {data} = await axios.get(request)
				  setUserStates( data )
				  setLoading( false )
				  
				} catch (error){
				  console.log(error)
				  setLoading( false )
				}
			  }

			getStates()
			getRefferers()
		}

	}, [user, base_url, api_uri])

	const onChangeInputHandler = ( event ) => {
		setFirstNameFilter( event.target.value )
		let element = document.getElementById('focusInput')
		element.focus();
	}

	const searchHandler = async ()=> {

		try {
			let request = base_url( api_uri, `api/refferer/list/${user.refferer_code}` )
			const {data} = await axios.post(request, { firstName : firstNameFilter })
			setUsers( data )
			setLoading( false )
			
		  } catch (error){
			console.log(error)
			setLoading( false )
		  }
	
	}

	const sumarTotalInversionReferidos = () => {

		let total = 0
		users.map( ( item ) => total += item.investment )
		return total
	}

	const ToggleButton = ({children})=>{
		if(!showCreateForm){
			return (<button onClick={()=> (showCreateForm) ? setShowCreateForm(false) : setShowCreateForm(true)}
					type="button" className="btn btn-primary ht-42 mt-3 mt-md-0 ml-md-3">
						<i className="fa fa-plus mr-2"></i>
					{children}
				</button>)
		}
		else{
			return (<button onClick={()=> (showCreateForm) ? setShowCreateForm(false) : setShowCreateForm(true)}
					type="button" className="btn btn-danger ht-42 mt-3 mt-md-0 ml-md-3">
					<i className="fa fa-window-close mr-2"></i>
						Cancelar
					</button>)
		}
	}

	if (!user.access_token) {

		return (<LoaderPage />)

	}

	

	if(!userStates)
		return <LoaderPage />

	return (
		<Page>
			<div className="row row-sm">

<div className="col-md-6 col-lg-6 col-xl-3">
	<FlatCard
		label={'Inversion total de referidos'}
		icon={'../assets/img/svgicons/checklist.svg'}
		value={sumarTotalInversionReferidos()} />
</div>

<div className="col-md-6 col-lg-6 col-xl-3">
	<FlatCard
		label={'Ganancias de los referidos'}
		icon={'../assets/img/svgicons/checklist.svg'}
		value={sumarTotalInversionReferidos() * 15 / 100} />
</div>

<div className="col-md-6 col-lg-6 col-xl-3">
	<FlatCard
		label={'Ganancias por mis referidos'}
		icon={'../assets/img/svgicons/checklist.svg'}
		value={userStates.refferer_bone} />
</div>

<div className="col-sm-12 col-lg-12 col-xl-12">
	<div className="card">
		<div className="card-header border-bottom">
			<div className="row">
				<div className="col-lg-4 ">
					<h4 className="card-title mt-3 float-left">Referidos</h4>
				</div>
				<div className="col-lg-8">
					<div className="d-md-flex d-sm-block">


				<div className="input-group wd-sm-100p wd-md-200 float-right my-auto ml-auto">
					<input 
					type="text" 
					className="form-control wd-100 border-right-0"
					placeholder="Buscar"
					value={firstNameFilter}
					onChange={ (e)=>onChangeInputHandler(e) }
					id='focusInput'
					/>
					<span className="input-group-btn">
						<button type="button" 
						className="btn btn-search btn-primary br-tl-0 br-bl-0"
						onClick={ ()=>searchHandler() }
						>
							<i className="fa fa-search"></i>
						</button>
					</span>
				</div>


						<ToggleButton>Agregar referidos</ToggleButton>
					</div>
				</div>
			</div>
		</div>
		<div className="card-body">
		
		
		{ 
			showCreateForm && <CreateRefferer />  
		}

		{
			(showCreateForm === false && users.length ) && <RefferedList users={users} />

		}

		{
			( showCreateForm === false && !users.length ) 
			&& 
			
			<NoData 
			label="No tienes referidos registrados aun"
			titleButton="Registrar nuevo referido"
			description="No te preocupes, puedes registrarlos haciendo click en el siguiente boton">
				
				<ToggleButton>Agregar referidos</ToggleButton>


				{ showCreateForm && <CreateRefferer onSuccess={()=> onCreate() }/>  }

			</NoData>

		}
			
		</div>
	</div>
</div>
</div>
		</Page>
	)
}


export default Index