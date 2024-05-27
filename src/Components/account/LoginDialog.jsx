import { Box, Dialog, Typography , styled } from "@mui/material"
import {GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../Service/Api";

const dialogstyle={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overFlow:'hidden'
};

const Bar=styled('img')({
    margin:'8% 0% 5% 30%',
});

const Components=styled(Box)`
    margin-left:10%
`




const LoginDialog=()=>{

    const {setAccount} = useContext(AccountContext);
    const qrCodeImage = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';

    const onLoginSuccess=async(res)=>{
        const decoded= jwtDecode(res.credential);
        console.log(decoded);
        setAccount(decoded);
        await addUser(decoded);
    }
    const onLoginError=()=>{

    }

    return(
            <Dialog
                open={true}
                PaperProps={{sx:dialogstyle}}
                hideBackdrop={true}
            >
                <Box style={{position:'relative'}}>
                    <Bar src={qrCodeImage} alt="qrCode"/>
                    <Box style={{position:'absolute',top:'50%',left:'35%'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
                <Components>
                        <Typography style={{fontSize:28,color:'#525252', fontWeight:400,fontFamily:"inherit"}}>To Login to my Chat app:</Typography>
                        <Typography style={{fontSize:18,color:'#525252', fontWeight:400,fontFamily:"inherit"}}>1. Click on Sign in with Goggle</Typography>
                        <Typography style={{fontSize:18,color:'#525252', fontWeight:400,fontFamily:"inherit"}}>2. If more than One Account Select your desired Account</Typography>
                        <Typography style={{fontSize:18,color:'#525252', fontWeight:400,fontFamily:"inherit"}}>3.<Typography variant="span" style={{color:'green'}} > All Done!</Typography> You can Use Chat App Now</Typography>
                   
                    
                </Components>
                
            </Dialog>
    )
}

export default LoginDialog;