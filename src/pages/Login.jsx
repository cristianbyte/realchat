import logo from '../assets/logo.png'

export default function Login(){
    return (
        <section className="register" >

            <div className="register__slogan">
                <img src={logo} alt='logo realchat' />
                <p>Join the RealChat community and start chatting now!</p>
            </div>

            <div className="formContainer">
                        <h3>Welcome back 😝</h3>
                    <form >
                        <input type="email" placeholder='email' required />
                        <input type="password" placeholder='password' required />
                        <button className='register__button' >Sing in</button>
                    </form>
                    <p>Do you have an account? Login</p>
            </div>
        </section>

    )
}