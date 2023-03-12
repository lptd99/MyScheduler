import { useState } from "react";
import ENV from ".env"

function UserForm() {

    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [saved, setSaved] = useState(false);

    const firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID
      };


    const inputUsernameChange = (event) => {
    setInputUsername(event.target.value);
    if(saved){
        setSaved(false);
    }
    }

    const inputPasswordChange = (event) => {
    setInputPassword(event.target.value);
    if(saved){
        setSaved(false);
    }
    }

    const saveButton = () => {
    setUsername(inputUsername);
    setPassword(inputPassword);
    setSaved(true);
    }

    return (
        <div>
            {saved ? <h3>Saved!</h3> : <h3> Not saved.</h3> }
            <input type='username' placeholder='Username here' onChange={inputUsernameChange} value={inputUsername} id='inputUsername' name='inputUsername'/>
            <br/>
            <input type='password' placeholder='Password shhhh' onChange={inputPasswordChange} value={inputPassword} id='inputPassword' name='inputPassword'/>
            <br/>
            <button onClick={saveButton}>Save?</button>
            <br/>
            <h3>Username: {username}</h3>
            <h3 color='white'>Password: {password}</h3>
        </div>
    )
}

export default UserForm;