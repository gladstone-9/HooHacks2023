import { Box } from "@mui/material";

let AtmList = (props) =>{
    let data = props.data;

    return (<Box sx={{backgroundColor:"#E2E2E2", padding:"16px"}}>
        <h3>Your ATM</h3>
        <p>{"ATM Number " + data[0]["number"] + " at " + data[0]["address"]}</p>
    </Box>)
}

export default AtmList;