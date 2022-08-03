import './SearchBar.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { searchBusiness } from '../Services/BusinessService';
import { business } from './BusinessCard';
import { SearchCard } from './SearchCard';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
const HomePage = () => {
    const [businessData, setBusinessData] = useState<business[]>([])
    const [searchString, setSearchString] = useState<string>("")
    const [errorState, setErrorState] = useState<boolean>(false)
    const search = () => {
        setErrorState(false)
        console.log(searchString)
        searchBusiness(searchString)
            .then((res) => {
                const business: business[] = res.data
                business && setBusinessData(business)
            })
            .catch(() => {
                setErrorState(true)
            })
    }

    return (
        <div>
            <h1>Home</h1>
            <Paper
                component="form"
                sx={{
                    p: "2px 4px", display: "flex", alignItems: "center", width: 400,
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
            {errorState ? (
                <>
                    <p>Error Finding Data For: {searchString}</p>
                </>
            ) : (
                <div>
                    {businessData.map((business: business) => (
                        <SearchCard Business={business} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default HomePage;