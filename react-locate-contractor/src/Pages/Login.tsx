import SignInWidget from '../SignInWidget';
import { useOktaAuth } from '@okta/okta-react';
import { Navigate, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';

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
        <div >
            <Alert severity="info" sx={{ mt: 3, mb: 3, ml: 42, width: 450 }} >
                <AlertTitle>Hint</AlertTitle>
                <div>
                    <strong>Guest User: zeiler.11@osu.edu</strong>
                </div>
                <div>
                    <strong>Guest Password: Testtest123!</strong>
                </div>
            </Alert>
            <SignInWidget config={config} onSuccess={onSuccess} onError={onError} />
        </div>;
};

export default Login;