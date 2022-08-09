import React from "react";
import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { Typography, Box, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import RateReviewIcon from '@mui/icons-material/RateReview';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

export function LoginButton() {
    const { oktaAuth, authState } = useOktaAuth();
    const navigate = useNavigate();

    if (!authState) {
        return <div>Loading ...</div>;
    }

    const handleLogin = async () => navigate('/login');

    const handleLogout = async () => oktaAuth.signOut();

    return (
        authState.isAuthenticated
            ? <Button variant="contained" sx={{ ml: 20 }} id="login-button" type="button" onClick={handleLogout}><LogoutIcon />Logout</Button>
            : <Button variant="contained" sx={{ ml: 20 }} id="login-button" type="button" onClick={handleLogin}><LoginIcon />Login</Button>
    );
};

export function BusinessButton() {
    const navBusiness = useNavigate();
    const handleBusiness = async () => navBusiness('/business');
    return (
        <Button variant="contained" sx={{ ml: 20 }} onClick={handleBusiness}><StorefrontIcon />Business</Button>
    );
}
export function HomeButton() {
    const navHome = useNavigate();
    const handleHome = async () => navHome('/');
    return (
        <Button variant="contained" sx={{ ml: 10 }} onClick={handleHome}><HomeIcon />Home</Button>
    );
}
export function MyReviewsButton() {
    const navPersonal = useNavigate();
    const handlePersonal = async () => navPersonal('/personal');
    return (
        <Button variant="contained" sx={{ ml: 20 }} onClick={handlePersonal}><RateReviewIcon />My Reviews</Button>
    );

}
export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
                    <HomeButton />
                    <MyReviewsButton />
                    <BusinessButton />
                    <LoginButton />
                </Toolbar>
            </AppBar>
        </Box>
    );
}