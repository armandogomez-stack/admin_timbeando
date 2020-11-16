import React , { useState , useContext, useEffect } from 'react'
import { merchants } from '../proveedores.json';
import LoaderPage from './LoaderPage'
import UserContext from '../Contexts/UserContext'
import GamesRender from '../Components/GamesRender/index'
import axios from 'axios'
import Env from '../Env'
import { withRouter, Link } from "react-router-dom";
import Menu from '../Components/Menu'
import Logo from '../Components/Logo'

function Index(props) {

    const { api_uri } = Env
    const user = useContext(UserContext)
    const [ loading ] = useState( false )
    const [gameList , setGameList] = useState([])
    const { match : { params : { _idprovider  }} } =  props
    

    useEffect(()=>{

		const FullList = async ()=>{
			try {
				const { data }	= await axios.get( `${api_uri}/FullList` )
                
                setGameList(data.games)
                
			} catch (error) {
				console.log(error)	
			}
		}

		FullList()
    },[])
    

    if (!user.access_token) {
        return ( <LoaderPage /> )
    }


    if (loading) {
        return ( <LoaderPage /> )
    }


    const ProviderName = ()=>{
        
        let result = '';
        merchants[0].providers.map((item, key) => {
            if( item.code === _idprovider )
                result  = `${merchants[0].category} / ${item.name}`
        })

        if(result)
            return result

        merchants[1].providers.map((item, key) => {
            if( item.code === _idprovider )
                result  = `${merchants[1].category} / ${item.name}`
        })

        if(result)
            return result

            merchants[2].providers.map((item, key) => {
                if( item.code === _idprovider )
                    result  = `${merchants[2].category} / ${item.name}`
            })
    
            if(result)
                return result

    }

    return (<div className="App">
        <div className='container'>
            
            <Logo />

                <Menu />

                <div className={'d-flex justify-content-between pt-3'}>
                    <h5 className={'text-light'}>{ ProviderName() }</h5>
                    <Link to='/dashboard' className={'btn btn-primary'} style={{color : 'white', fontWeight : 'bolder'}}>Volver atras</Link>
                </div>

                {(gameList.length < 1) && <div className='col-lg-12 pt-5' style={{backgroundColor : '#0e1e2f', minHeight : 600, justifyContent : 'center', alignItems : 'center' }}>
                    <center>
                        <h5 className='text-light mt-3'>Cargando la lista de juegos, por favor espera.</h5>
                        <img src='https://i.pinimg.com/originals/e9/29/1e/e9291eaddacd460280a34a151dcc5cc4.gif' />
                    </center>
                </div> }


            <GamesRender gameList={ gameList } activeProvider={ _idprovider } />
            
        </div>
    </div>)
}


export default withRouter(Index)