import { useState } from "react";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

function UserForm( {appDB} ) {

    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [radioGender, setRadioGender] = useState('');
    const [taLikes, setTaLikes] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [likes, setLikes] = useState('');
    const [saved, setSaved] = useState(false);

    const db = getFirestore(appDB);

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

    const radioGenderChange = (event) => {
        setRadioGender(event.target.value);
        if(saved){
            setSaved(false);
        }
    }

    const taLikesChange = (event) => {
        setTaLikes(event.target.value);
        if(saved){
            setSaved(false);
        }
    }

    function saveButton() {
    //     try {
    //         const docRef = await addDoc(collection(db, "users"), {
    //           username: username,
    //           password: password,
    //           gender: gender,
    //           likes: likes
    //         });
    //         console.log("Document written with ID: ", docRef.id);
    //       } catch (e) {
    //         console.error("Error adding document: ", e);
    //       }
        setUsername(inputUsername);
        setPassword(inputPassword);
        setGender(radioGender);
        setLikes(taLikes.split(','));
        setSaved(true);
    }

    return (
        <div>
            {saved ? <h3>Saved!</h3> : <h3> Not saved.</h3> }
            <br/>
            <input type='username' placeholder='Username here' onChange={inputUsernameChange} value={inputUsername} id='inputUsername' name='inputUsername'/>
            <br/>
            <br/>
            <input type='password' placeholder='Password shhhh' onChange={inputPasswordChange} value={inputPassword} id='inputPassword' name='inputPassword'/>
            {/* <br/>
            <br/>
            <label>Gender:</label>
            <br/>
            <input type='radio' onChange={radioGenderChange} value={radioGender} id='radioGenderMale' name='radioGender'/>
            <label for='radioGender'>Male</label>
            <input type='radio' onChange={radioGenderChange} value={radioGender} id='radioGenderFemale' name='radioGender'/>
            <label for='radioGender'>Female</label>
            <input type='radio' onChange={radioGenderChange} value={radioGender} id='radioGenderPNS' name='radioGender'/>
            <label for='radioGender'>Prefer not to specify</label> */}
            <br/>
            <br/>
            <label>Likes (comma separated)</label>
            <br/>
            <textarea rows={5} cols={10} placeholder='Things, you, like' onChange={taLikesChange} value={taLikes} id='taLikes' name='taLikes'/>
            <br/>
            <button onClick={saveButton}>Save?</button>
            <br/>
            <br/>
            <br/>
            <h3>Username: {inputUsername + ' ' + username}</h3>
            <h3>Password: {inputPassword + ' ' + password}</h3>
            <h3>Gender: {radioGender + ' ' + gender}</h3>
            <h3>Likes: {taLikes + ' ' + likes}</h3>
        </div>
    )
}

export default UserForm;