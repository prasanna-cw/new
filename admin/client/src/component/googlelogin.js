import react from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "510232580984-61c9emssljjjhl751ht6jnvfo2fe1be6.apps.googleusercontent.com";

function firstLogin (){

    const onSuccess = (res) => {
        console.log("success")
    }

    const onFailure = (res) => {
        console.log("Failure")
    }
    return(

        <div id="signinbutton">
        <GoogleLogin
        clientId ={clientId}
        buttonText='Sign in with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </div>

    )
    
}
export default firstLogin;