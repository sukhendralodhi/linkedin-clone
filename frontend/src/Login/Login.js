import { useState } from 'react';
import '../Login/Login.css';
const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');

    // const handleLoginApp = (e) => {
    //     e.preventDefault();

    // }
    const handleRegister = () => {
        if (!name) {
            return alert('Please Enter a full name!');
        }
    }
    return (
        <div
            className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
                alt="logo" />

            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder='Full name ( required if registering ) ' />
                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    type="text"
                    placeholder='Profile pic URL ( optional )' />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder='Email' />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" placeholder='Password' />
                <button onClick={handleLogin}>Sign In</button>
            </form>
            <p>Not a member?{" "} <span className='login_register' onClick={handleRegister}>Register Now</span></p>
        </div>
    );
}

export default Login;