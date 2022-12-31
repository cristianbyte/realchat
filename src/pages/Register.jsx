import logo from '../assets/logo.png'
import addImge from '../assets/addImage.png'

export default function Register(){
    return (
        <section className="register" >

            <div className="register__slogan">
                <img src={logo} alt='logo realchat' />
                <p>Join the RealChat community and start chatting now!</p>
            </div>

            <div className="formContainer">
                    <form >
                        <h3>Register</h3>
                        <input type="text" placeholder='name' required />
                        <input type="email" placeholder='email' required />
                        <input type="password" placeholder='password' required />
                        <input type="file" id='file' required />
                        <label htmlFor="file" className='register__avatar' >
                            <img src={addImge} alt="avatar for profile" />
                            <p>Add an avatar</p>
                        </label>
                        <button className='register__button' >Sing up</button>
                    </form>
                    <p>Do you have an account? Login</p>
            </div>
        </section>

    )
}