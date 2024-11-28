import React from 'react';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import LoginPage from './LoginPage';

const OKTO_CLIENT_API_KEY = "f144c56d-f768-426c-b123-f7ee71f8cee8";

function App() {
    return (
        <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
            <LoginPage/>
        </OktoProvider>
    );
}
export default App;