import HomePage from './Pages/HomePage';
import BusinessPage from './Pages/BusinessPage';
import PersonalPage from './Pages/PersonalPage';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import PersonalIcon from './NavBar/PersonalIcon';
import BusinessIcon from './NavBar/BusinessIcon';
import HomeIcon from './NavBar/HomeIcon';
import LoginIcon from './NavBar/LoginIcon';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Login from './Pages/Login';
import config from './config';



const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  var history: any;

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '', window.location.origin));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Locate a Contractor</p>
        <BrowserRouter>
          <HomeIcon></HomeIcon>
          <PersonalIcon></PersonalIcon>
          <BusinessIcon></BusinessIcon>
          <Security oktaAuth={oktaAuth} onAuthRequired={customAuthHandler} restoreOriginalUri={restoreOriginalUri}>
            <LoginIcon />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Business" element={<BusinessPage />} />
              <Route path="/Personal" element={<PersonalPage />} />
              <Route path="/login" element={<Login config={config} />} />
              <Route path="/login/callback" element={<LoginCallback />} />
            </Routes>
          </Security>
        </BrowserRouter>
      </header>
    </div>
  );
};
export default App;