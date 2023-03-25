import {Button, Box, TextField} from "@mui/material";
import {useState} from "react";
import AtmList from "./AtmList";

let Header = (props) =>{
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [data, setData] = useState([]);

    let sendRequest = () =>{
        let url = 'http://api.nessieisreal.com/atms?lat='+ latitude + '&lng=' + longitude + '&rad='+ 100 + '&key=' + "";
        fetch(url)
        .then((response) => response.json())
        .then((theData) => setData(theData["data"][0]));
    }

    return <>
        <Box sx={{flexDirection: "column", display: "flex", alignItems: "center"}}>
            <h1>ATM Finder</h1>
            <Box>
                <TextField onChange={(e)=> setLatitude(e.target.value)} id="Latitude" label="Latitude" variant="outlined" sx={{paddingRight: "3px"}}/>
                <TextField onChange={(e)=> setLongitude(e.target.value)} id="Longitude" label="Longitude" variant="outlined" />
            </Box>
            <Button onClick={sendRequest} variant="contained" sx={{maxWidth:"300px", marginTop:"16px", marginBottom:"32px"}}>Find ATM</Button>
            <Box>
                {data.length ? <img src="Pig.png" height={500} sx={{marginTop:"32px"}}/> : <AtmList data={data} />}
            </Box>
        </Box>
        
    </>
}

export default Header;