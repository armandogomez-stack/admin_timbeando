import React, { useState, useContext } from 'react'
import UserContext from '../../Contexts/UserContext'
import axios from 'axios'
import { store } from 'react-notifications-component'

function IsNumeric(val) {
	return Number(parseFloat(val)) === val;
}



function Index(props) {
	const [ loading , setLoading ] = useState( false )
	const { player_id, operation } = props
	const [ amount , setAmount ] = useState('')


	const onChangeHandler = (event) => {
		setAmount( event.target.value )
	}

	if(!operation || operation !=='positive' && operation!=='negative')
		return <span>Please set operation [ positive || negative ]</span>



	const setBalance = async () => {

		if( !amount || amount === '' || amount == 0 || IsNumeric( amount ) || !operation ){
			return false
		}

		const request = 'https://callback.route86services.com/cashier/set/balance'

			try {
				
				const response = await axios.post(request , { amount, player_id, operation })

				if( response.status === 201 ){
					props.setBalanceCallBack( response.data )
					store.addNotification({
						title: "Respuesta del servidor!",
						message: 'The balance was set successfully',
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

					  setAmount('')
				}

			} catch ( error ) {

				if( error.response.status === 403 ){

					store.addNotification({
						title: "Respuesta del servidor!",
						message: error.response.data.Error,
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

					  setAmount('')
				}
				
			}

	}


	return ( 
		<div class="card-body">
			<div className={'form-group'}>
				<label>{props.title}</label>
				<input type='text' className='form-control'  onChange={( event ) => onChangeHandler( event )} value={amount} />
			</div>
			<div className={'form-group'}>
				<button 
				className={`btn ${(operation === 'positive')? 'btn-success' : 'btn-danger' }`} onClick={ ()=>setBalance() }
				disabled={( loading ) ? true : false }>
					{props.buttonText}
				</button>
			</div>
		</div>
		)
}


export default Index