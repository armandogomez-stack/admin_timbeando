import React from 'react'
import Page from '../Components/Page'
import Env from '../Env'
import AvatarEdit from '../Components/AvatarEdit'
import PasswordEdit from '../Components/PasswordEdit'
import UserDetailEdit from '../Components/UserDetailEdit'
import Validate1 from '../Components/Validate1'
import LoaderPage from './LoaderPage'
import axios from 'axios'

import UserContext from '../Contexts/UserContext'

function Index(props) {

	const { cdn, api_uri, web_frontend_url } = Env
	const [ imagePlaceholder, setImagePlaceholder ] = React.useState(``)
	
	const user = React.useContext(UserContext);

	React.useEffect(() => {

		if (user.refferer_code) {

			const getProfile = async () => {
				const { data } = await axios.get(`${api_uri}/api/profile/load/${user.refferer_code}`)
				setImagePlaceholder((data.validation1) ? `${cdn}/image/${data.validation1}/380/200` : ``)

			}

			getProfile()
		}

	}, [user, cdn, api_uri, web_frontend_url ])


	if (!user.access_token) {
		return (<LoaderPage />);
	}

	return (
		<Page>
			<div className="row">
				<div className="col-md-12 col-lg-12 col-xl-4 col-xs-12 col-md-pull-2">
					<div className="card box-widget widget-user">
						<div className="widget-user-header testbgpattern1"></div>
						<AvatarEdit />
						<div className="card-body text-center">
							<div className="item-user pro-user">
								<h4 className="pro-user-username tx-15 pt-2 mt-4 mb-1">{user.firstName}</h4>
							</div>
						</div>
					</div>
					<Validate1
						label={'Cedula de identidad'}
						placeholderImage={( imagePlaceholder !=='' ) ? imagePlaceholder : '/assets/img/ic_woman.png'}
						uploadUri={`${cdn}/api/upload`}
						callbackUri={(_id) => `${api_uri}/api/profile/set/validation1/${user.refferer_code}/${_id}`}
						callBackSetState={(_id) => setImagePlaceholder(`${cdn}/image/${_id}/380/160`)}
						uploader_id={'card1_uploader'} />
					<PasswordEdit />
				</div>
				<div className="col-md-12 col-lg-8 col-xl-8 col-xs-12 col-md-pull-2">
					<div className="row">
						<div className="col-md-12 col-lg-12 col-xl-12 col-xs-12 col-md-pull-2">
							<UserDetailEdit />
						</div>
					</div>
				</div>

			</div>
		</Page>
	)
}


export default Index