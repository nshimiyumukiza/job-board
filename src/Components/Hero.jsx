import React from 'react'
import { Carousel,Card } from "antd";
const datas =[{
    
    img:"src/images/worker.png",
    head:"Job Seekers",
    todos:["Post or edit your resume / professional profile","veiw job avarable","see what job you are eligible for","who asked you to work for them"],
},
{
    img:"src/images/boss.png",
    head:"Employers",
    todos:["post job","check your job applicants","bring your actions"]
}]
export const Hero = () => {


  return (
    <div>
        <div className='grid grid-cols-2 bg-slate-300'>
            <div className='bg-sky-700 text-white px-16 py-10'>
                <h1 className='text-5xl font-bol
 d text-center pt-24'>Job Board</h1>
                <p className='p-6 text-3xl'>have a good tomorrow, find a good job, find a good and competent employee</p>
                <p className='text-3xl p-8'>
                View our featured listings, below, or visit our Career Centre where you can search for 
                or post global opportunities for business analysis professionals.</p>
                <div className='text-center p-12'><button className='bg-sky-800 text-lg text-white rounded-md border border-1 hover:bg-white hover:text-black w-1/2'>Appaly Now</button></div>
            </div>

            <div>
                <Carousel autoplay={true} autoplaySpeed={3000} dots={false}>
                    <img src="src/images/bluiding.png" alt="" />
                    <img src="src/images/coder.png" alt="" />
                <img src="src/images/ask job.png" alt="" />
                </Carousel>
            </div>
        </div>
        <div>
                <h2 className='text-4xl font-bold text-center pt-16 pb-8'>why you should work with us</h2>
                <p className='text-center text-2xl pt-6 pb-12'>We facilitate both fines, employees to find a job, and even employers to find qualified employees.</p>
            </div> 
            <div className='grid grid-cols-2 w-11/12 mx-auto space-x-10 boarder rounded-md border-sky-700'>
                {datas.map((data,index)=>(
                    <Card key={index}>
                        <img className='w-full' src={data.img} alt="image" />
                        <p className='text-3xl text-center text-sky-700 pt-8'>{data.head}</p>
                        <p className='text-lg px-12 pt-14'>{data.todos.map(todo =>(
                            <li>{todo}</li>
                        ))}</p>
                        
                        
                    </Card>
                ))}
            </div>
    </div>
  )
}
 