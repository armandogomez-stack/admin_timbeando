import React from 'react'
import { Link } from 'react-router-dom'

function Index({ gameList , activeProvider }) {


    // item.PageCode
    const gameRouter = ()=>{

        if( activeProvider === '987' || activeProvider === '957' || activeProvider === '970' ){
            return 'unstandardgame'
        }
        
        return 'standardgame'
        
    }


        return (

            <div className='row'>
                {
                    gameList.map((item, key) => {
                        if (item.MerchantID == activeProvider) {
                            return (
                                <div className='col-lg-3 mb-1' key={key} style={{ display: 'flex' }}>
                                    <center>
                                        <Link to={`/${gameRouter()}/${ activeProvider }/${ item.PageCode }`}>
                                            <img width={'100%'} src={item.ImageFullPath} className={"provider-logo"} />
                                        </Link>
                                    </center>
                            </div>)
                        }
                    })
                }
        </div>)

}


export default Index