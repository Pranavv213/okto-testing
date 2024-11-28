import React, { useState } from "react";
import { useOkto } from "okto-sdk-react";
import { GoogleLogin } from "@react-oauth/google";

function LoginPage() {
const { authenticate } = useOkto();
const [authToken, setAuthToken] = useState(null);
const { showWidgetModal, closeModal } = useOkto();
const { createWallet, getUserDetails, getPortfolio } = useOkto();
const { transferTokens } = useOkto();

const networkName = "POLYGON_TESTNET";
const tokenAddress = "x2f7b97837f2d14ba2ed3a4b2282e259126a9b848";
const quantity = "1";
const recipientAddress = "0x0FC096A53343C68c1086e626661A4bb31486A9e2";

const handleGoogleLogin = async (credentialResponse) => {
 const idToken = credentialResponse.credential;
  authenticate(idToken, (authResponse, error) => {
      if (authResponse) {
        setAuthToken(authResponse.auth_token);
        console.log("Authenticated successfully, auth token:", authResponse.auth_token);
      } else if (error) {
            console.error("Authentication error:", error);
        }
    });
 };

 return (
    <div>
        <h1>Login</h1>
        {!authToken ? (
        <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={(error) => console.error("Login Failed", error)}
        />
        ) : (
            <p>Authenticated</p>
        )}

        <button onClick={()=>{
            showWidgetModal();
        }}>click</button>
        <br></br>
        <button onClick={()=>{
           getUserDetails()
           .then((result) => {
               console.log(result)
           })
           .catch((error) => {
               console.error(`error:`, error);
           });
        }}>Get User Details</button>

        <button onClick={()=>{

                getPortfolio()
                .then((result) => {
                console.log(result)
                })
                .catch((error) => {
                console.error(`error:`, error);
                });

        }}>Get User Portfolio</button>

        <br></br>
        <button onClick={()=>{
            transferTokens({
                network_name: networkName,
                token_address: tokenAddress,
                recipient_address: recipientAddress,
                quantity: quantity
            })
                .then((result) => {
                    console.log('Transfer success', result);
                })
                .catch((error) => {
                    console.log('Transfer error', error);
                });
        }}>Transfer Funds</button>
    </div>
    );
}

export default LoginPage;