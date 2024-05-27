import Messenger from "./Components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";
function App() {
  const clientId='577546843302-o1a7o5jv2rjr2lflvargjvj3qfcvf5t9.apps.googleusercontent.com'

  return (

    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider><Messenger/></AccountProvider>
       
    </GoogleOAuthProvider>
   
  )
}

export default App;
