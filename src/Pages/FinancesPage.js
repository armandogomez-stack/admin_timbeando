import React, { useEffect, useState } from 'react'
import LoaderPage from './LoaderPage'
import Page from '../Components/Page'
import UserContext from '../Contexts/UserContext'
import axios from 'axios'
import Env from '../Env'

function Index(props) {

	const user = React.useContext(UserContext)
	const { base_url, api_uri } = Env
	const [ loading, setLoading ] = useState(false)
	const [ items, setItems ] = useState([])


	useEffect(() => {

		const getFinancesItem = async () => {
			setLoading(true)
			try {
				const { data } = await axios.get(base_url(api_uri, `api/finances/list`))
				setItems(data)

				setLoading(false)
			}
			catch (error) {
				console.log(error)
				setLoading(false)
			}
		}

		if(user.access_token)
			getFinancesItem()

	}, [api_uri,base_url, user])


	if (!user.access_token) {
		return (<LoaderPage />);
	}

	const Content = () => {

		return (<div className="row row-sm">
				<div className="col-sm-12 col-lg-12 col-xl-12">
					<div className="card">
						<div className="card-header border-bottom">
							<div className="row">
								<div className="col-lg-4 ">
									<h4 className="card-title mt-3 float-left">Finanzas</h4>
								</div>

							</div>
						</div>
						<div className="card-body">
							<div className="table-wrapper border contact-table" id="contactTable">
								<div className="table-responsive">
									<table className="table mg-b-0 text-md-nowrap text-nowrap">
										<thead>
											<tr className="search-tr" >
												<th>Concepto</th>
												<th>Estado</th>
												<th>Monto</th>
												<th>Fecha</th>
											</tr>
										</thead>
										<tbody id="contact-table">
											
											{items.map((item, key) => {
												return (<tr className="search-tr" key={`row_${key}`} >
												<td><b>{item.concept}</b></td>
												<td>{item.status}</td>
												<td>{item.amount} USD</td>
												<td>{item.created_at}</td>
											</tr>)
											})}


										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>)
	}

	return (
		<Page>
			{ ( loading ) ? <LoaderPage /> : <Content />} 
		</Page>
	)
}


export default Index