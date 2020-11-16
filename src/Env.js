

const Enviroment = 'dev'

 const base_url = ( server , param ) => {
   return `${ server }/${ param }`
 }


 let exportEnv = {}

 	if( Enviroment === 'dev' ){
		exportEnv = {
            static_files: 'https://timbeando.com',
            api_uri : 'https://callback.route86services.com'
        }
 	}
	else {
     		exportEnv = {
                api_uri : 'https://callback.route86services.com',
                static_files: 'https://timbeando.com'
            }
		}

 export default {
    base_url,
    ...exportEnv
  }

