import {Button, Box, TextField} from "@mui/material";
import {useState} from "react";
import AtmList from "./AtmList";
import LatLongLink from "./LatLongLink";

let Header = (props) =>{
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [data, setData] = useState([]);
    const [hasClicked, setHasClicked] = useState(false);

    let apiKey = "";

    let sendRequest = () =>{
        let url = 'http://api.nessieisreal.com/atms?lat='+ latitude + '&lng=' + longitude + '&rad='+ 100 + '&key=' + apiKey;
        setHasClicked(true);
        fetch(url)
        .then((response) => response.json())
        .then((theData) => setData(theData["data"].length > 0 ? theData["data"][0] : []));
    }

    return <>
        <Box sx={{flexDirection: "column", display: "flex", alignItems: "center"}}>
            <h1>ATM Finder</h1>
            <LatLongLink />
            <br/>
            <Box>
                <TextField onChange={(e)=> setLatitude(e.target.value)} id="Latitude" label="Latitude" variant="outlined" sx={{paddingRight: "3px"}}/>
                <TextField onChange={(e)=> setLongitude(e.target.value)} id="Longitude" label="Longitude" variant="outlined" />
            </Box>
            <Button onClick={sendRequest} variant="contained" sx={{maxWidth:"300px", marginTop:"16px", marginBottom:"32px"}}>Find ATM</Button>
            <Box>
                {data.length === 0 ? hasClicked ? <Box><img src="https://www.clipartmax.com/png/full/330-3308894_clipart-document-not-found-clip-art.png" height={300}/><p>No atms near you</p></Box> : <img src="Pig.png" height={500} sx={{marginTop:"32px"}}/> : <AtmList data={data} />}
            </Box>
        </Box>
        
    </>
}

export default Header;