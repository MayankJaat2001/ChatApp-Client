import { Box, Drawer, Typography } from '@mui/material';
import zIndex from '@mui/material';
import { ArrowBack } from '@mui/icons-material'
import styled from '@emotion/styled';
import Profile from './Profile';

const Header = styled(Box)`
        background-color:#aa5b2f;
        height:108px;
        color:#FFFFFF;
        display:flex;
        &>svg,&>p{
            margin-top:auto;
            padding:15px;
            font-weight:600;
        }
`;

const Component=styled(Box)`
        background:#ededed;
        height:85%;
`

const drawerstyle={
    left:'65.5%',
    top:15,
    height:'96%',
    width:'33%',
    boxShadow:'none'
}

const InfoDrawer =({open,setOpen})=>{
    const handleClose=()=>{
        setOpen(false)
    }
    return(
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{sx:drawerstyle}}
            style={{zIndex:1500}}
        >
            <Header>
                <ArrowBack onClick={()=>{setOpen(false)}}/>
                <Typography style={{fontSize:'18px'}}>Profile</Typography>
            </Header>
            <Component>
                <Profile/>
            </Component>
            </Drawer>
    )
}
export default InfoDrawer;