import styled from "@emotion/styled";
import { Box, Typography ,Divider } from "@mui/material"

const Component=styled(Box)`
    background-color:#f8f9fa;
    padding:30px 0;
    text-align:center;
    height:87vh;
`;

const Container=styled(Box)`
    padding:0 200px;
`;

const Image=styled('img')({
    width:400,
    marginTop:55,
});

const Title=styled(Typography)`
    font-size:34px;
    margin:25 0 10 0;
    font-family:inherit;
    font-weight:300;
    color:#41525d
`;

const SubTitle=styled(Typography)`
    font-size:14px;
    color:#667781;
    font-weight:400;
    font-family:inherit;
`;

const StyledDivider=styled(Divider)`
    opacity:0.4;
`

const EmptyChat=()=>{
    const url='https://png.pngtree.com/png-clipart/20220620/original/pngtree-laptop-chat-bubble-user-icon-messages-on-computer-online-vector-illustration-png-image_8134268.png';
    return(
        <Component>
            <Container>
                <Image src={url} alt="Chat Image"/>
                <Title>New Chat</Title>
                <SubTitle>Now Send and Receive messages without keeping your phone online.</SubTitle>
                <StyledDivider/>
            </Container>
        </Component>
    )
}

export default EmptyChat;