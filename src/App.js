import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import UserProvider from './Contexts/UserProvider'

import LoginPage from './Pages/LoginPage'
import LoginPage2 from './Pages/LoginPage2'
import HomeDashboard from './Pages/HomeDashboard'
import ProviderPage from './Pages/ProviderPage'
import IframeStandard from './Pages/IframeStandard'
import IframeUnStandard from './Pages/IframeUnStandard'
import CrearJugador from './Pages/CrearJugador'
import AdministrarJugador from './Pages/AdministrarJugador'
import SecurityPage from './Pages/SecurityPage'
// import Profile from './Pages/Profile'
import Logout from './Pages/Logout'

function App() {
  return (
    <BrowserRouter>
		<Switch>
			<UserProvider>
						<Route exact path='/' render={(props) => <LoginPage2 />}/>
            <Route exact path='/dashboard' render={(props) => <HomeDashboard />} />
            <Route exact path='/crear-jugador' render={(props) => <CrearJugador />} />
            <Route exact path='/administrar-jugador' render={(props) => <AdministrarJugador />} />
            <Route exact path='/provider/:_idprovider' render={(props) => <ProviderPage />}/>
            <Route exact path='/standardgame/:_idprovider/:pagecode' render={(props) => <IframeStandard />}/>
            <Route exact path='/unstandardgame/:_idprovider/:pagecode' render={(props) => <IframeUnStandard />}/>
            <Route exact path='/security' render={(props) => <SecurityPage />}/>
            <Route exact path='/login' render={(props) => <LoginPage2 />}/>
            <Route exact path='/logout' render={(props)=> <Logout />} />
		  </UserProvider>
		</Switch>
	</BrowserRouter>
  );
}

export default App;


