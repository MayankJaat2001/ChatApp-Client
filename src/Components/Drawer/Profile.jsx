import { Box, Typography } from "@mui/material";
import { useContext } from 'react';
import { AccountContext} from '../../context/AccountProvider';
import styled from "@emotion/styled";
import { Badge , AlternateEmail} from '@mui/icons-material'

const ImageContainer=styled(Box)`
        display:flex;
        justify-content:center;
`;

const Image=styled('img')({
    width:'100',
    height:'100',
    borderRadius:'50%',
    padding:'25px 0'
})

const Profile=()=>{
    const {account} = useContext(AccountContext);
    return(
        <>
        <ImageContainer>
            <Image src={account.picture} alt="dp"/>
        </ImageContainer>
        <Box style={{background:'#ffffff'}}>
            <Typography style={{display:'flex',justifyContent:'center',fontSize:'22px'}}><Badge style={{marginRight:'20px'}}/>{account.name}</Typography>
            <Typography style={{display:'flex',justifyContent:'center',fontSize:'22px',marginTop:'12px'}}><AlternateEmail style={{marginRight:'20px'}}/>{account.email}</Typography>

        </Box>
        <Box style={{marginTop:'32px',background:'#ffffff'}}>
            <Typography style={{margin:'0 0 12px 12px',fontSize:'18px',fontWeight:600,color:'#8696a0'}}>Bio:</Typography>
            <Typography style={{margin:'0 0 12px 52px',fontSize:'18px'}}>Busy!!✌️</Typography>
        </Box>
        
        </>
    )
}
export default Profile;