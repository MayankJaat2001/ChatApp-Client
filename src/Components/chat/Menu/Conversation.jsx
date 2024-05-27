import { Box, Container, Typography,styled } from "@mui/material"
import { useContext , useEffect ,useState} from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation , getConversation} from "../../../Service/Api";
import { formatDate } from "../../../utils/common-utils";
const Component=styled(Box)`
    display:flex;
    height:45px;
    padding:13px 0;
    margin-left:12px;
    cursor:pointer;
`;

const Image=styled('img')({
    width:50,
    height:50,
    borderRadius:50,
    padding:'0 14px',
});

const Container1=styled(Box)`
    display:flex
`;

const Timestamp=styled(Typography)`
    font-size:12px;
    margin-left:auto;
    margin-right:20px;
    color:#00000099;
`;

const Text=styled(Typography)`
    font-size:14px;
    color:rgba(0,0,0,0.6);
`

const Conversation=({user})=>{
    const {setPerson,account , newMessageFlag} = useContext(AccountContext);
    const [message,setMessages]=useState({});
    useEffect(()=>{
        const getConversationDetails=async()=>{
            const data = await getConversation({senderId:account.sub,receiverId:user.sub});
            setMessages({text:data?.message,timestamp:data?.updatedAt})
        }
        getConversationDetails();
    },[newMessageFlag])
    const getUser=async()=>{
        setPerson(user);
        await setConversation({senderId: account.sub,receiverId:user.sub})
    }
    return(
        <Component onClick={()=>getUser()}>
            <Box style={{width:'100%'}}>
                <Container1>
                    <Typography>{user.name}</Typography>
                    {
                        message?.text && 
                        <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
                    }
                </Container1>
                <Box>
                    <Text>{message?.text?.includes('localhost')?'media':message.text} </Text>
                </Box>
            </Box>
            <Box sx={{marginLeft:'auto'}}>
                <Image src={user.picture} alt='dp' />
            </Box>
        </Component>
    )
}
export default Conversation;