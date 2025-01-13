import React from 'react'
import { Carousel,Card } from "antd";
import { GoDotFill } from "react-icons/go";import { Link } from 'react-router';
;

const datas =[{
    
    img:"/images/worker.png",
    head:"Job Seekers",
    todos:["Post or edit your resume / professional profile","veiw job avarable","see what job you are eligible for"],
},
{
    img:"/images/boss.png",
    head:"Employers",
    todos:["post job","check your job applicants","bring your actions"]
}]
const workers=[
    {
        img:"/images/girl.png",
        name:"Bwiza Nadine",
        p:"I am very grateful to the owners of this site because they helped me find a good and well-paying job."
    },
    {
        img:"/images/boy.png ",
        name:"Eric Bravan",
        p:"After finishing high school, I lost my job and became unemployed. My friend came to me on a website called job board and I am looking for a job now."
    },
    {
        img:"/images/man.png",
        name:"kalisa kamali",
        p:"I am committed to work in the Gatsibo area,I have hired staff here I see them very easily and they do their job well It is a pleasure to work with you"
    },
    {
        img:"/images/woman.png",
        name:"Gihozo Alice",
        p:"I am thankful that I found a job through this site I now have a bright future because of the job I have"
    }
]
export const Hero = () => {


  return (
    <div className='mt-24'>
        <div className='grid grid-cols-2 bg-slate-300 '>
            <div className='bg-sky-700 text-white px-16 py-10'>
                <h1 className='text-5xl font-bol
 d text-center pt-10 pb-8'>Job Board</h1>
                <p className='p-6 text-3xl'>have a good tomorrow, find a good job, find a good and competent employee</p>
                <p className='text-3xl p-8'>
                View our featured listings, below, or visit our Career Centre where you can search for 
                or post global opportunities for business analysis professionals.</p>
                <div className='text-center p-12'>
                    <button className='bg-sky-800 text-white rounded-md
                 border border-1 hover:bg-white hover:text-black py-1 font-bold uppercase px-4'>Appaly Now</button>
                 </div>
            </div>

            <div>
                <Carousel autoplay={true} autoplaySpeed={6000} dots={false} speed={1500}>
                    <img src="/images/bluiding.png" alt="" />
                    <img src="/images/coder.png" alt="" />
                <img src="/images/ask job.png" alt="" />
                </Carousel>
            </div>
        </div>
        <div>
                <h2 className='text-4xl font-bold text-center pt-16 pb-8'>why you should work with us</h2>
                <p className='text-center text-2xl pt-6 pb-12'>We facilitate both fines, employees to find a job, and even employers to find qualified employees.</p>
            </div> 
            <div className='grid grid-cols-2 w-11/12 mx-auto space-x-10 boarder rounded-md border-sky-700 bg-gray-100 pt-4 px-8 py-4'>
                {datas.map((data,index)=>(
                    <Card className='pt-4 px-8 py-4' key={index}> 
                        <img className='w-full' src={data.img} alt="image" />
                        <p className='text-3xl text-center text-sky-700 pt-8'>{data.head}</p>
                        <p className='text-lg px-12 pt-14'>{data.todos.map(todo =>(
                            <div className='flex space-x-4'>
                                <GoDotFill />
                               <li className='hover:text-sky-600 text-lg'>{todo}</li>
                          
                            </div>
                          
                        ))}</p>
                        
                        <div className='p-5 flex justify-start items-center pl-36 mt-5'>
                            <Link to="sign" className='border rounded-md px-3 bg-sky-600 text-white py-2 text-lg'>Create Account</Link>
                        </div>
                    </Card>
                ))}

            </div>
            <div className='py-16 pb-8'>
              <h1 className='text-center text-4xl font-bold py-10 text-sky-900'>Partner Feedback</h1>
            <div className='pt-8 grid grid-cols-4 border-2 rounded-md mt-16 px-16 w-11/12 mx-auto space-x-5 bg-gray-100 pb-16'>
                {workers.map(Worker =>(
                    <Card className="pt-4 px-8 py-4 hover:scale-110 hover:transition-transform hover:duration-100"
> 
                        <img className='' src={Worker.img} alt="work" />
                        <h1 className='text-center font-bold pt-4 pb-6 text-2xl text-sky-600'>{Worker.name}</h1>
                        <p className='text-lg'>{Worker.p}</p>
                        
                    </Card>
                ))}
            </div>
            </div>
    </div>
  )
}
 