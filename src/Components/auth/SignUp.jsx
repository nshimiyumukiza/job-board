import { Card } from 'antd';
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone,} from '@ant-design/icons';
export function SignUp({onLogin}){
  return (
    <>
      <div className='flex justify-center items-center'>
        <Card className='w-[500px]'>
            <div>
                <h1 className='text-3xl text-center font-bold'>Job Board Regist</h1>
            </div>
            <div className=' py-3'>
               <label htmlFor="">First name
                 <Input placeholder="Enter first name" name=''/>
               </label> 
            </div>
            <div className=' py-3'>
              <label htmlFor="">Last name
              <Input placeholder="Enter last name" />
              </label>
                
            </div>
            <div className=' py-3'>
              <label htmlFor="">Email
              <Input placeholder="Enter your email" />
              </label>
            </div>
            <div className=' py-3'>
              <label htmlFor="">Password
              <Input.Password placeholder="Enter Password" />
              </label>
            </div>
            <div className=' py-3'>
              <label htmlFor="">Confrim Password
              <Input.Password placeholder="Enter confrim  Password" />
              </label>
            </div>
            <div>
           <button className=' border rounded-md px-3 bg-sky-800 text-white'>Sign up</button>
            <div className='py-2'>
               <p>You have allready account {""} <span onClick={onLogin} className='text-sky-600'>Login</span></p>
            </div>
            </div>
        </Card>
    </div>
    <div className='py-4'>
            <h1 className='text-center text-lg text-white'>{new Date().getFullYear()}  Job Board All rights reserved.</h1>
        </div>
    </>
   
  )
}
