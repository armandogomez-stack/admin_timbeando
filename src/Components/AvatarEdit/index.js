import React, {useEffect} from 'react'
import Env from '../../Env'
import axios from 'axios'
import { store } from 'react-notifications-component'
import UserContext from '../../Contexts/UserContext'

function Index( props ){

	const [ myFile , setMyFile ] = React.useState( null )
	const { default_avatar, api_uri, cdn } = Env
	const user = React.useContext(UserContext);
	const { setUserDetails } = React.useContext(UserContext);

	const imageProfileHandler = async () => {
		document.getElementById('file').click()
	}

	const setDetail = React.useCallback((data)=>{
		
		setUserDetails(data)

	},[setUserDetails])

	useEffect(()=>{

		if(myFile){ 

			const uploadPhoto = async ()=>{

				let url = `${cdn}/api/upload`;
				
				const formData = new FormData();
				
				formData.append('myFile',myFile)
				
				const config = {
					headers: {
						'content-type': 'multipart/form-data'
					}
				}
				
				let response = { }
				
				try {

					response = await axios.post( url, formData, config )
					if(response.status === 200){


						try {
							let url = `${api_uri}/api/profile/set/avatar/${ user.refferer_code }/${response.data._id}`

							await axios.get( url )
							
							await setMyFile('')
							
							setDetail({
								...user,
								avatar : response.data._id
							})

							localStorage.setItem( 'user' , JSON.stringify({
								...user,
								avatar : response.data._id
							  }))


							  store.addNotification({
								title: "Foto actualizada!",
								message: `Tu foto de perfil fue actualizada con exito`,
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

							  

						} catch (error){
							console.log(error)
							

						}

					}


					
				} catch (error) {
					console.log( error )
				}
				
			}

			uploadPhoto()

		}

	},[ user, myFile, default_avatar, api_uri, cdn, setDetail ])


  return (
        <div className="widget-user-image">
            <img 
                alt="User Avatar"
                className="rounded-circle" 
                src={ ( user.avatar ) ? 
                `${cdn}/image/${user.avatar}/120/120` : default_avatar }
                style={{cursor : 'pointer'}}
                onClick={(e)=>imageProfileHandler(e)}
                width={90}
                height={90}
                />

            <input type="file" id="file" style={{display: "none"}} onChange={({target})=>setMyFile(target.files[0])} />
        </div>                             
    )
}


export default Index