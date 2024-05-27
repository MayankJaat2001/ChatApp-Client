import { useEffect , useState ,useContext} from 'react';
import { getUsers } from '../../../Service/Api';
import {AccountContext} from '../../../context/AccountProvider'
import { Box , styled, Divider } from '@mui/material';
import Conversation from './Conversation';

const Component=styled(Box)`
    height:81vh;
    overflow:overlay;
`;
const StyledDivider=styled(Divider)`
    margin:0 70px 0 0;
    background:#e9edef;
    opacity:0.6;
`

const Conversations=({text})=>{

    const [users,setUsers]=useState([]);
    const {account , socket , setActiveUsers}=useContext(AccountContext);

    useEffect(()=>{
        const fetchData=async()=>{
            let response = await getUsers();
            const filterData = response.filter(user=>   user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        }
        fetchData();
    },[text]);

    useEffect(()=>{
        socket.current.emit('addUsers',account)
        socket.current.on("getUsers",users=>{
            setActiveUsers(users);
        })
    },[account])

    return(
        <Component>
            {
                users.map(user=>(
                    user.sub!==account.sub &&
                    <>
                    <Conversation user={user}/>
                    <StyledDivider/>
                    </>
                ))
            }
        </Component>
    )
}
export default Conversations;