import React from "react";
import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { Typography, Box, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';


export function LoginIcon() {
    const { oktaAuth, authState } = useOktaAuth();
    const navigate = useNavigate();

    if (!authState) {
        return <div>Loading ...</div>;
    }

    const handleLogin = async () => navigate('/login');

    const handleLogout = async () => oktaAuth.signOut();

    return (
        authState.isAuthenticated
            ? <Button variant="contained" sx={{ ml: 20 }} id="login-button" type="button" onClick={handleLogout}>Logout</Button>
            : <Button variant="contained" sx={{ ml: 20 }} id="login-button" type="button" onClick={handleLogin}>Login</Button>
    );
};

export function BusinessIcon() {
    const navBusiness = useNavigate();
    const handleBusiness = async () => navBusiness('/business');
    return (
        <Button variant="contained" sx={{ ml: 20 }} onClick={handleBusiness}>Business</Button>
    );
}
export function HomeIcon() {
    const navHome = useNavigate();
    const handleHome = async () => navHome('/');
    return (
        <Button variant="contained" sx={{ ml: 15 }} onClick={handleHome}>Home</Button>
    );
}
export function PersonalIcon() {
    const navPersonal = useNavigate();
    const handlePersonal = async () => navPersonal('/personal');
    return (
        <Button variant="contained" sx={{ ml: 20 }} onClick={handlePersonal}><PersonalIcon></PersonalIcon>Personal</Button>
    );

}
export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
                    <HomeIcon />
                    <PersonalIcon />
                    <BusinessIcon />
                    <LoginIcon />
                </Toolbar>
            </AppBar>
        </Box>
    );
}