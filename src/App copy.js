import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Env from './Env'
import { merchants } from './proveedores.json';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

function App() {

  const [ games , setGames ]    = useState([])
  const { CASINO_SERVER_IP }  = Env



  useEffect(()=>{

    const getGames =  async () => {

      	try {

        	const request = `${ CASINO_SERVER_IP }/FullList`
        	const { data } = await axios.get( request )
			setGames( data.merchants )

      	} catch ( error ) {

      console.log( error )
      
	      }
    }

	getGames()
	
  },[])

	const onPressGame = () => {
		window.open( 'https://solucionesinformaticasbarinas.com' , 'hola mundo' )
	}


	const IndexData = ({index})=>{


		return (<div className='container pt-5'>
		<div className='row'>
			  { 
			  merchants[index].providers.map((item, key) => {

					  return (<div className='col-lg-3 mb-5' key={key} style={{ display : 'flex' }}>
						  <span style={{cursor : "pointer" , color : "white"}}>
							  {item.name}
						  </span>

						  {/* <img onClick={()=>onPressGame()} width={'100%'} src={item.ImageFullPath} style={{borderRadius : 5, cursor : 'pointer'}} /> */}
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
  );
}

export default App;
