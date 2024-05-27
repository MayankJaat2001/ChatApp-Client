import { Box } from "@mui/material"
import Header from "./Header";
import Conversations from "./Conversations";
import {  useState } from "react";
import Search from "./Search";

const Menu=()=>{
    const [text,setText]=useState('');
    return(
        <Box>
            <Header/>
            <Search setText={setText}/>

            <Conversations text={text}/>
        </Box>
    )
}
export default Menu;