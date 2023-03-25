import { Box } from "@mui/material";
import { useEffect } from "react";

let AtmList = (props) =>{
    let data = props.data;

    useEffect(()=>{
        console.log("DATA" + props.data);
    }, [])

    return (data["name"] ? <Box sx={{backgroundColor:"#E2E2E2", padding:"16px"}}>
        <h3>Your ATM</h3>
        <p>{data["name"] + " at " + data["address"]["street_number"] + " " + data["address"]["street_name"] + ", " + data["address"]["city"] + ", " + data["address"]["state"] + ", " + data["address"]["zip"]}</p>
    </Box> : <p>No ATM found</p>)
}

export default AtmList;