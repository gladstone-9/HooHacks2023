import { Box } from "@mui/material";

let AtmList = (props) =>{
    let data = props.data;
    console.log(data)

    return (data["data"] ? <Box sx={{backgroundColor:"#E2E2E2", padding:"16px"}}>
        <h3>Your ATM</h3>
        <p>{data["name"] + " at " + data["address"]["street_number"] + " " + data["address"]["street_name"] + ", " + data["address"]["city"] + ", " + data["address"]["state"] + ", " + data["address"]["zip"]}</p>
    </Box> : <p>No ATM found</p>)
}

export default AtmList;