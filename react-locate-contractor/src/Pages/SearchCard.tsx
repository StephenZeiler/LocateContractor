import { business } from "./BusinessCard"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Collapse, Divider, List, ListItemButton } from "@mui/material";
import WriteReview from "./WriteReview";
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
export const SearchCard = (props: { Business: business }) => {
    const navigate = useNavigate();
    const handleCreateReview = async () => navigate(`/Review/${props.Business.userEmailId}`);
    const handleAllReviews = async () => navigate(`/AllReview/${props.Business.userEmailId}`);

    const [openHours, setOpenHours] = React.useState(true);
    const handleClickHours = () => {
        setOpenHours(!openHours);
    };
    const [openAbout, setOpenAbout] = React.useState(true);
    const handleClickAbout = () => {
        setOpenAbout(!openAbout);
    };

    return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props && props.Business.specialty}
                </Typography>
                <Typography variant="h5" component="div">
                    {props && props.Business.businessName}
                </Typography>

                <Typography sx={{ mt: 1, ml: 2 }} >

                    {"Services Offered: "}{props.Business.services}
                </Typography>
                <Typography sx={{ ml: 2 }} variant="body2" color="text.secondary">
                    {"Phone: "}{props && props.Business.phoneContact}
                </Typography>
                <Typography sx={{ ml: 2 }} variant="body2" color="text.secondary">
                    {"Email: "}{props && props.Business.emailContact}
                </Typography>
                <ListItemButton onClick={handleClickHours}>
                    <Typography color="text.secondary" > Business hours: </Typography>
                    {openHours ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={!openHours} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Typography sx={{ ml: 3 }} variant="body2"> Monday: {props.Business.monday}</Typography>
                        <Typography sx={{ ml: 3 }} variant="body2"> Tuesday: {props.Business.tuesday} </Typography>
                        <Typography sx={{ ml: 3 }} variant="body2"> Wednesday: {props.Business.wednesday} </Typography>
                        <Typography sx={{ ml: 3 }} variant="body2"> Thursday: {props.Business.thursday}</Typography>
                        <Typography sx={{ ml: 3 }} variant="body2"> Friday: {props.Business.friday}</Typography>
                        <Typography sx={{ ml: 3 }} variant="body2"> Saturday: {props.Business.saturday}</Typography>
                        <Typography sx={{ ml: 3 }} variant="body2"> Sunday: {props.Business.sunday}</Typography>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleClickAbout}>
                    <Typography color="text.secondary" > More info: </Typography>
                    {openAbout ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={!openAbout} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Typography sx={{ ml: 3 }} variant="body2"> {props.Business.about}</Typography>
                    </List>
                </Collapse>
            </CardContent>
            <CardActions>
                {props && <Button onClick={handleAllReviews} size="small">See Reviews</Button>}
                {props && <Button onClick={handleCreateReview} size="small">Write Review</Button>}
            </CardActions>
            <Divider variant="middle" />
        </React.Fragment>
    );

}