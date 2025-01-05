import { Card } from 'antd'
import { Input } from "antd";
const Post = () => {
  return (
    <div className='mt-32'>
        <div>
            <Card>
                <div className='flex justify-center'>
                    <div className='ml-14'>
            <h1 className='font-bold text-2xl'>Regester</h1>
            </div>
            <div className='p-8'>
            <div className='w-[300px] py-3'>
                <h1 className='text-md'>Full Name</h1>
                <Input placeholder="Enter full name" />
            </div>
            <div className='w-[300px] py-3'>
                <h1 className='text-md'>Email</h1>
                <Input type='email' placeholder="Enter email" />
            </div>
            <div className='w-[300px] py-3'>
              <h1 className='text-md'>Enter Pssword</h1>
            <Input.Password placeholder="Enter Password" />
            </div>
            <button className='border rounded-md px-2 text-white bg-sky-600'>Regester</button>
            </div>
            </div>
            </Card>
           
            
        </div>
    </div>
  )
}

export default Post