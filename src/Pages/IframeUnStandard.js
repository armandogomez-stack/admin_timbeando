import React, { useState, useEffect, useContext } from 'react'
import { withRouter, Link } from "react-router-dom";
import axios from 'axios'
import UserContext from '../Contexts/UserContext'
import parse from 'html-react-parser';
import LoadingOverlay from 'react-loading-overlay';
import Env from '../Env'
import LoaderPage from './LoaderPage'
import Menu from '../Components/Menu'
import Logo from '../Components/Logo'
import { merchants } from '../proveedores.json';

function Index(props){

    const user = useContext(UserContext);
    const { api_uri } = Env
    const [ Authtorization , setAuthtorization ] = useState( '' )
    const { match : { params : { _idprovider, pagecode  }} } =  props

    useEffect(()=>{

        if( user.access_token ){
            
            const  requestAuthorization = async () => {
                
                const params = {
                    "Login": user.Login,
                    "Password"  : user.random_password,
                    "System"    : _idprovider,
                    "PageCode"  : pagecode
                }
                

                let request  =  `${api_uri}/play`


                try {

                  const { data } = await axios.post( request, params )
    
                   var s1 = data.substring(2);
                   var doc = document.getElementById('frameid').contentWindow.document;
                   
                   doc.open();
                   doc.write(s1);
                   doc.close();

                    setAuthtorization(s1)

                } catch (error){
                  console.log(error)

                }
              }
              
            if(!Authtorization)
            requestAuthorization()
                
        }
    
      },[user])
    
    
    if( !user.access_token ){
        return (<LoaderPage/>);
    }

    const ProviderName = ()=>{
        
        let result = '';
        merchants[0].providers.map((item, key) => {
            if( item.code === _idprovider )
                result  = `${merchants[0].category} / ${item.name}`
        })

        return result

    }
    return (
        <div className="App">
            <div className='container pt-5'>

			    <Logo />
                <Menu />
                <div className={'d-flex justify-content-between pt-3'}>
                    <h5 className={'text-light'}>{ ProviderName() }</h5>
                        <Link to={`/provider/${_idprovider}`} className={'btn btn-primary'} style={{color : 'white', fontWeight : 'bolder'}}>Volver atras</Link>
                    </div>
                  
                  
                {(!Authtorization) && <div className='col-lg-12' style={{backgroundColor : '#0e1e2f', minHeight : 600, justifyContent : 'center', alignItems : 'center' }}>
                    <center>
                        <img src='https://i.pinimg.com/originals/e9/29/1e/e9291eaddacd460280a34a151dcc5cc4.gif' />
                    </center>
                </div> }
                
                <iframe src="" id='frameid' style={{width: '100%', height: '800px'}} frameBorder='0'></iframe>

            </div>
        </div>
    )


}


export default withRouter(Index)