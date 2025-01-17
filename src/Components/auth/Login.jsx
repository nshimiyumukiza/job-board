import { Card } from 'antd';
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone,} from '@ant-design/icons';
import { MdLogin } from "react-icons/md";


export function Login({onSignup}){
  return (
    <>
     <div className='flex justify-center items-center'>
        <Card className='md:w-[500px] sm:w-[400px]'>
            <div>
                <h1 className='text-3xl text-center font-bold'>Job Board Sign In</h1>
            </div>
            <div className=' py-3'>
                <h1 className='text-md'>Enter name</h1>
                <Input placeholder="Enter User Name" />
            </div>
            <div className=' py-3'>
              <h1 className='text-md'>Enter Pssword</h1>
            <Input.Password placeholder="Enter Password" />
            </div>
            <div className='flex justify-between items-center py-2'>
             <div className='flex justify-start items-center border rounded-md px-3
              bg-sky-800 text-white font-bold text-lg gap-3'>
             <MdLogin />
             <button className=' '>Log in</button>
             </div>

<a className='text-sky-700 underline ' href="">Forget Password</a>
            </div>
            <div className='py-2'>
              <p>You don't have account  <span onClick={onSignup} className='text-sky-600 text-xl font-bold'>Sign up</span></p>
            </div>
        </Card>
    </div>
    <div className='py-4'>
            <h1 className='text-center text-lg text-white'>&copy;{new Date().getFullYear()}  Job Board All rights reserved.</h1>
        </div>
    </>
   
  
  )
}
