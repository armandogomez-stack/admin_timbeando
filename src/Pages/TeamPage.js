import React, {useEffect, useState, useContext} from 'react'
import LoaderPage from './LoaderPage'
import Page from '../Components/Page'
import UserContext from '../Contexts/UserContext'
import axios from 'axios'
import Env from '../Env'

function Index(props) {

	const user = useContext(UserContext);
	const [ users , setUsers ] = useState([])
	const [ loading , setLoading ] = useState(false)
	const { default_avatar, cdn, api_uri } = Env


	useEffect(()=>{
		setLoading( true )
		const getUsers = async ()=>{
			try {
				const { data } = await axios.get(`${api_uri}/api/team`)
				setUsers( data )
				setLoading( false )
				
			} catch (error) {
				console.log(error)
				setLoading( false )
			}
		}
		getUsers()

	}, [api_uri])


	const Content = ()=>{
		return (
			<div className="row row-sm">
				{ users.map((item, key)=>{
					return (<div className="col-sm-2 col-lg-2 col-xl-2" key={key}>
					<div className="card">
						<img className="card-img-top w-100" src={(item.avatar) ? `${cdn}/image/${item.avatar}/150/150` : default_avatar } alt="" />
						<div className="card-body">
							<div className="users-profile">
							<span>{item.firstName}</span>
							</div>
						</div>
					</div>
				</div>)
			})
				}

			</div>
		)
	}

	if ( !user.access_token ) {
		return (<LoaderPage />);
	}

	

	return (
		<Page>
			{ (loading) ? <LoaderPage /> : <Content />} 
		</Page>
	)
}


export default Index