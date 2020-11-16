import React, { useEffect, useState, useContext } from 'react'
import LoaderPage from './LoaderPage'
import UserContext from '../Contexts/UserContext'
import Env from '../Env'
import axios from 'axios'
import { merchants } from '../proveedores.json';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

function Index( props ){

	const user = useContext(UserContext);
	const { web_frontend_url , base_url, api_uri } = Env
	const [ userStates , setUserStates ] = useState( null )
	const [ loading , setLoading ] = useState( true )
	// const [ users, setUsers ] = useState([])

  useEffect(()=>{

    if( user.access_token ){
		setLoading(true)

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

		//   const  getRefferers = async () => {


			
		// 	try {
			  
		// 	  const { data } = await axios.get(base_url( api_uri , `api/refferer/list/${ user.refferer_code }`))
		// 	 	if( data ) {
		// 			setUsers( data )
		// 		}
			  
		// 	} catch (error) {
			  
		// 	  console.log(error)
			  
		// 	} 
		//   }
	  

        // getRefferers()
        getStates()
    }

  },[ user, web_frontend_url , base_url, api_uri ])


  const  clipboard = () => {
    var copyText = document.getElementById("toCopyUri");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  } 


	if( !user.access_token ){
			return (<LoaderPage/>);
	}

  	if( loading ){
		return (<LoaderPage/>);
	}


	const IndexData = ({index})=>{


		return (<div className='container pt-5'>
		<div className='row'>
			  { 
			  merchants[index].providers.map((item, key) => {

					  return (<div className='col-lg-3 mb-5' key={key} style={{ display : 'flex' }}>
							<center>
								  <img 
								  width={'100%'} 
								  src={`https://www.timbeando.com/imagenes/${item.code}.png`} 
								  className={"provider-logo"}
								  />
							</center>
					  </div>)

				  })
			  }
		  </div>
		  </div>)
	}
 

	return (
		<div className="App">


		<div className='container'>
		  <div className='container pt-5'>
		
					<img 
					  src="https://www.timbeando.com/wp-content/uploads/2020/09/iSO_LOGO_TIM.png" 
					width="300px"
					/>
		  </div>
		</div>
		
		
			  <div className='container'>
				<div className='container pt-5'>
		
				  <Accordion>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
							<span className="accordion-label">
								{ merchants[0].category }
							  </span>
		
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<IndexData index={0}/>
						</AccordionItemPanel>
					</AccordionItem>
		
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
							<span className="accordion-label">
								{ merchants[1].category }
							  </span>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<IndexData index={1}/>
						</AccordionItemPanel>
					</AccordionItem>
		
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
							<span className="accordion-label">
								{ merchants[2].category }
							  </span>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<IndexData index={2}/>
						</AccordionItemPanel>
					</AccordionItem>
		
					
				</Accordion>
		
				</div>
			  </div>
			
			</div>

		)
}


export default Index