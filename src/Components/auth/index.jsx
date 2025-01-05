import { useState } from "react"
import {Login} from "./Login"
import {SignUp} from "./SignUp"

const Authantication=()=>{
    const [isLogin,setIsLogin]=useState(true)
    const [isSignup,setIsSignup]=useState(false)

    const handleLogin=()=>{
        setIsLogin(true)
        setIsSignup(false)
    }
    const handleSignup=()=>{
        setIsLogin(false)
        setIsSignup(true)
    }
    return (
        <>
        <div className='bg-sky-700 h-screen flex flex-col justify-center items-center'>
        {isLogin && (<Login onSignup={handleSignup}/>)}
        {isSignup && (<SignUp onLogin={handleLogin}/>)}
        </div>
        
        </>
    )
}
export default Authantication