import { AppBar , Box, Toolbar ,styled} from '@mui/material'
import LoginDialog from './account/LoginDialog';
import ChatDialog from './chat/ChatDialog';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import logo from './Logo.png'
const LoginHeader= styled(AppBar)`
    height: 220px;
    box-shadow: none;
     background:#c7815a;
`;
const Header= styled(AppBar)`
    height: 125px;
    box-shadow: none;
     background:#c7815a;
`;

const Component=styled(Box)`
    background:#b3aaaa;
    height:100vh;
`

const Messenger=()=>{
    const { account }=useContext(AccountContext);
    return(
        <Component>
            {
                
                account ? 
                <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <ChatDialog/>
                 </>
                
                :
                <>
                    <LoginHeader>
                        <Toolbar>
                        <img src={logo} alt='Logo' height={'92%'}/>

                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog/>
                 </>
            }
        </Component>
    )
}

export default Messenger;