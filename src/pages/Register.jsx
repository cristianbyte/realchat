import logo from '../assets/logo.png'
import addImge from '../assets/addImage.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from '../firebase'
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';


export default function Register(){

    const [error, setError] = useState(false)

    async function handleSubmit (e){
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]
    
        try{
            const res = createUserWithEmailAndPassword(auth, email, password)
            const idToken = await res.user.getIdToken();
            console.log(idToken)

            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);
            
            uploadTask.on(
                (error) => {
                    setError(true)
                }, 
                () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                        await updateProfile(res.user,{
                            name,
                            photoURL:downloadURL,
                        })
                        await setDoc(doc(db,'users', res.user.uid),{
                            uid:res.user.uid,
                            name,
                            email,
                            photoURL:downloadURL,
                        })
                    });
                }
            );


        }catch(err){
            setError(true)
        }
    }

    return (
        <section className="register" >

            <div className="register__slogan">
                <img src={logo} alt='logo realchat' />
                <p>Join the RealChat community and start chatting now!</p>
            </div>

            <div className="formContainer">
                    <form onSubmit={handleSubmit} >
                        <h3>Register</h3>
                        <input type="text" placeholder='name' required />
                        <input type="email" placeholder='email' required />
                        <input type="password" placeholder='password' required />
                        <input type="file" id='file' />
                        <label htmlFor="file" className='register__avatar' >
                            <img src={addImge} alt="avatar for profile" />
                            <p>Add an avatar</p>
                        </label>
                        <button className='register__button' type='submit' >Sign up</button>
                        {error && <span>Something went wrong. try later</span> }
                    </form>
                    <p>Do you have an account? Login</p>
            </div>
        </section>

    )
}