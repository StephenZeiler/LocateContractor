import './SearchBar.css';
import TextField from '@mui/material/TextField';
const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>

            <TextField placeholder='Search for a business...' className="Search-Bar">
                <p>SEARCH:</p>
                <input />
            </TextField>

        </div>
    );
}

export default HomePage;