import './SearchBar.css';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { getSpecialty, searchBusiness } from '../Services/BusinessService';
import { business } from './BusinessCard';
import { SearchCard } from './SearchCard';
import { Paper, InputBase, IconButton, Card, Button } from '@mui/material';
import RoofingIcon from '@mui/icons-material/Roofing';
import SearchIcon from "@mui/icons-material/Search";
import PlumbingIcon from '@mui/icons-material/Plumbing';
import BoltIcon from '@mui/icons-material/Bolt';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import GrassIcon from '@mui/icons-material/Grass';
import HandymanIcon from '@mui/icons-material/Handyman';
import { ConstructionOutlined } from '@mui/icons-material';
const HomePage = () => {
    const [businessData, setBusinessData] = useState<business[]>([])
    const [searchString, setSearchString] = useState<string>("")
    const [errorState, setErrorState] = useState<boolean>(false)
    const [searchState, setSearchState] = useState<boolean>(false)
    const [errorMssg, setErrorMssg] = useState<string>('')
    const search = () => {
        setErrorState(false)
        searchBusiness(searchString)
            .then((res) => {
                const business: business[] = res.data
                business && setBusinessData(business)
            })
            .catch(() => {
                setErrorState(true)
                setErrorMssg('No results found for "' + searchString + '".')
            })
    }

    const SearchSpecialty = (props: string) => {
        setErrorState(false)
        getSpecialty(props)
            .then((res) => {
                const business: business[] = res.data
                business && setBusinessData(business)
            })
            .catch(() => {
                setErrorState(true)
                setErrorMssg('No results found for "' + props + '".')
            })

    }

    return (
        <div>
            <h1>Home</h1>
            <Paper
                component="form"
                sx={{
                    ml: 30, p: "2px 4px", display: "flex", alignItems: "center", width: 620,
                }}

            >
                <InputBase
                    onChange={(e) => setSearchString(e.target.value)}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Business"

                    type="text"
                    onKeyDown={(e) => {
                        e.key === "Enter" && search()
                    }}

                />
                <IconButton onClick={search} sx={{ p: "10px" }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <div>
                <Button onClick={() => SearchSpecialty("Roofing")} sx={{ ml: 30, mt: 10 }} variant="outlined" >
                    <RoofingIcon style={{ fontSize: 150 }}></RoofingIcon>
                </Button>
                <Button onClick={() => SearchSpecialty("Plumbing")} sx={{ ml: 5, mt: 10 }} variant="outlined" >
                    <PlumbingIcon style={{ fontSize: 150 }}></PlumbingIcon>
                </Button>
                <Button onClick={() => SearchSpecialty("Electric")} sx={{ ml: 5, mt: 10 }} variant="outlined" >
                    <BoltIcon style={{ fontSize: 150 }}></BoltIcon>
                </Button>
            </div>

            <div>

                <Button onClick={() => SearchSpecialty("Carpenter")} sx={{ ml: 30, mt: 10 }} variant="outlined" >
                    <CarpenterIcon style={{ fontSize: 150 }}></CarpenterIcon>
                </Button>
                <Button onClick={() => SearchSpecialty("Lawncare")} sx={{ ml: 5, mt: 10 }} variant="outlined" >
                    <GrassIcon style={{ fontSize: 150 }}></GrassIcon>
                </Button>
                <Button onClick={() => SearchSpecialty("Handyman")} sx={{ ml: 5, mt: 10 }} variant="outlined" >
                    <HandymanIcon style={{ fontSize: 150 }}></HandymanIcon>
                </Button>
            </div>

            {errorState ? (
                <>
                    {errorMssg}
                </>
            ) : (
                <Paper sx={{ mt: 10 }}>
                    {businessData.map((business: business) => (
                        <SearchCard Business={business} />
                    ))}
                </Paper>

            )}
        </div>
    );
}

export default HomePage;