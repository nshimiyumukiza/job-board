import { Card } from 'antd';
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone,} from '@ant-design/icons';
const Login = () => {
  return (
    <div className='bg-sky-700 h-screen py-44'>
    <div className='mt-34 flex justify-center items-center'>
        <Card className='w-[500px]'>
            <div>
                <h1 className='text-3xl text-center font-bold'>Job Board</h1>
            </div>
            <div className='w-[300px] py-3'>
                <h1 className='text-md'>Enter name</h1>
                <Input placeholder="Enter User Name" />
            </div>
            <div className='w-[300px] py-3'>
              <h1 className='text-md'>Enter Pssword</h1>
            <Input.Password placeholder="Enter Password" />
            </div>
            <div>
<button className=' border rounded-md px-3 bg-sky-800 text-white'>Log in</button>
<a className='text-sky-700 underline px-32' href="">Forget Password</a>
            </div>
        </Card>
    </div>
    <div className='py-4'>
            <h1 className='text-center text-lg text-white'>{new Date().getFullYear()}  Job Board All rights reserved.</h1>
        </div>
    </div>
  )
}

export default Login