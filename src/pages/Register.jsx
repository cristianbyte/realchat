import logo from '../assets/logo.png'
import addImge from '../assets/addImage.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
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

        const storageRef = ref(storage, name);

        const metadata = {
            contentType: 'image/jpeg',
            property: name,
        };

        const res = await createUserWithEmailAndPassword(auth, email, password)

        console.log(res)
        
        // Upload the file and metadata
        uploadBytes(storageRef, file, metadata).then(
            ()=>{
                console.log('upload success')
                getDownloadURL(ref(storage, name))
                .then((url) => {
                    updateProfile(res.user, {
                        name: name, photoURL: url
                        }).then(() => {
                        console.log( 'success' )
                        setDoc(doc(db,'users', res.user.uid),{
                            uid:res.user.uid,
                            name,
                            email,
                            photoURL:res.user.photoURL,
                        })
                    })
                })
                .catch((error) => {
                    setError(true)
                    console.log(error)
                })
            }
        )
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