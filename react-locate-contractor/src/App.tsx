import HomePage from './Pages/HomePage';
import BusinessPage from './Pages/BusinessPage';
import PersonalPage from './Pages/PersonalPage';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { LoginCallback, Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Login from './Pages/Login';
import config from './config';
import Container from '@mui/material/Container';
<<<<<<< HEAD
import EditBusinessData from './Services/EditBusiness';
import WriteReview from './Pages/WriteReview';
=======
import ButtonAppBar from './NavBar/NavBar';

>>>>>>> main

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  var history: any;

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history = (toRelativeUrl(originalUri, window.location.origin));
  }


  return (
    <Container >
      <header className="App-header">
        <BrowserRouter>
          <Security oktaAuth={oktaAuth} onAuthRequired={customAuthHandler} restoreOriginalUri={restoreOriginalUri}>
            <ButtonAppBar></ButtonAppBar>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Business" element={<BusinessPage />} />
              <Route path="/Personal" element={<PersonalPage />} />
              <Route path="/login" element={<Login config={config} />} />
              <Route path="/login/callback" element={<LoginCallback />} />
              <Route path="/Review/:businessId" element={<WriteReview />} />
            </Routes>
          </Security>
        </BrowserRouter>
      </header>
    </Container >
  );
};
export default App;