import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import styled from 'styled-components';

const PrimaryButton = styled.div`
    position: absolute;
    width: 106px;
    height: 34px;
    left: 1297px;
    top: 7px;
    `
const ButtonRectangle = styled.button`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;

    background: #FFD368;
    border-radius: 8px;
    `
const ButtonText = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    
    color: #393E46;
    `
const Home = () => {
    const { oktaAuth, authState } = useOktaAuth();
    const navigate = useNavigate();

    if (!authState) {
        return <div>Loading ...</div>;
    }

    const handleLogin = async () => navigate('/login');

    const handleLogout = async () => oktaAuth.signOut();

    return (
        <div>
            {
                authState.isAuthenticated
                    ? <PrimaryButton>  <ButtonRectangle id="login-button" type="button" onClick={handleLogout}>Logout</ButtonRectangle ></PrimaryButton>
                    : <PrimaryButton>  <ButtonRectangle id="login-button" type="button" onClick={handleLogin}>Login</ButtonRectangle></PrimaryButton>
            }
        </div>
    );
};

export default Home;
