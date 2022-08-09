import SignInWidget from '../SignInWidget';
import { useOktaAuth } from '@okta/okta-react';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = ({ config }: any) => {
    const { oktaAuth, authState } = useOktaAuth();
    const onSuccess = (tokens: any) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err: any) => {
        console.log('Sign in error:', err);
    };

    if (!authState) {
        return <div>Loading ... </div>;
    }

    return authState.isAuthenticated ?
        <Navigate to={{ pathname: '/' }} /> :
        <SignInWidget config={config} onSuccess={onSuccess} onError={onError} />;

};

export default Login;