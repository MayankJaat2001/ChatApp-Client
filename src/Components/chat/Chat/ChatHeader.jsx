import { Typography , Box , styled } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";


const Header=styled(Box)`
    height:44px;
    background-color:#ededed;
    padding:8px 16px;
    display:flex;
    align-items:center;
`;

const Image=styled('img')({
    height:'40px',
    width:'40px',
    objectFit:'cover',
    borderRadius:'50%'
});

const Name = styled(Typography)`
    margin-left:12px !important;
`;
const Status = styled(Typography)`
    margin-left:12px !important;
    font-size:14px;
    color:rgba(0,0,0,0.6);
`;

const RightContainer=styled(Box)`
    margin-left:auto;
    padding:8px;
    font-size:22px;
    color:#000;
`

const ChatHeader=({person})=>{
    const {activeUsers}=useContext(AccountContext);
    return(
        <Header>
            <Image src={person.picture} alt="userdp"/>
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user=>user.sub===person.sub)?'online':'offline'}</Status>
            </Box>
            <RightContainer>

            <Search/>
            </RightContainer>
        </Header>
    )
}
export default ChatHeader;