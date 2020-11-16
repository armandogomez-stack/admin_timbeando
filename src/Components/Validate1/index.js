import React, { useCallback } from 'react'
import axios from 'axios'
import { store } from 'react-notifications-component'


function Index(props){

	const [ myFile , setMyFile ] = React.useState( null )
	const { 
			uploadUri,		// Uri to file server
			callbackUri, 	// Uri to trigger after upload was successfully
			placeholderImage,
			callBackSetState,
			uploader_id,
			label
		} = props

	
	const execCallBackUri = useCallback(( param )=>{
		return callbackUri(param)
	},[callbackUri])

	const execCallBackSetState = useCallback(( param )=>{
		callBackSetState(param)
	},[callBackSetState])

	


	const imageProfileHandler = async () => {
		document.getElementById( uploader_id ).click()
	}




	React.useEffect(()=>{

		if(myFile){ 

			const uploadPhoto = async ()=>{
				
				const formData = new FormData();
				
				formData.append('myFile',myFile)
				
				const config = {
					headers: {
						'content-type': 'multipart/form-data'
					}
				}
								
				try {

					const { data } = await axios.post( uploadUri, formData, config )

						try {

							await axios.get( execCallBackUri( data._id ) )
					
							  store.addNotification({
								title: "Foto actualizada!",
								message: `Tu foto de validacion fue actualizada con exito`,
								type: "success",
								insert: "top",
								container: "top-right",
								animationIn: ["animated", "fadeIn"],
								animationOut: ["animated", "fadeOut"],
								dismiss: {
								  duration: 5000,
								  onScreen: true
								}
							  })

							
							  	await execCallBackSetState(data._id)
								await setMyFile(null)

						} catch (error){
							console.log(error)
							

						}

					}
				

					
				 catch (error) {
					console.log( error )
				}
				
			}
			
			uploadPhoto()

		}

	},[ myFile, uploadUri, execCallBackUri, execCallBackSetState ])
	

  return(
	<div className="card">
		<div className="card-body">
			<div className="mb-4 main-content-label">{label}</div>

				<img 
				alt="Documento de identificacion"
				src={ placeholderImage }
				style={{cursor : 'pointer'}}
				onClick={ (e)=>imageProfileHandler(e) }
				width={'100%'}
				height={200} />

				<input 
				type="file"
				id={ uploader_id } 
				style={{ display: "none" }}
				onChange={({target}) => setMyFile(target.files[0])} />

		</div>
	</div>   

    )
}


export default Index