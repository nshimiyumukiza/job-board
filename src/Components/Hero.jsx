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
        <div className='grid grid-cols-1 md:grid-cols-2 bg-slate-300 '>
            <div className='bg-sky-700 text-white md:px-16 md:py-10 px-6 py-8 w-full'>
                <h1 className='md:text-5xl font-bol
 d text-center md:pt-10 pb-8 text-3xl pt-6'>Job Board</h1>
                <p className='md:px-6 md:text-3xl text-lg px-2 md:pb-12 pb-8'>have a good tomorrow, find a good job, find a good and competent employee</p>
                <p className='text-lg md:text-3xl '>
                View our featured listings, below, or visit our Career Centre where you can search for 
                or post global opportunities for business analysis professionals.</p>
                <div className='text-center md:mt-12 mt-8'>
                    <button className='bg-sky-800 text-white rounded-md
                 border border-1 hover:bg-white hover:text-black py-1 font-bold uppercase px-4'>Appaly Now</button>
                 </div>
            </div>

            <div>
                <Carousel autoplay={true} autoplaySpeed={6000} dots={false} speed={1500}>
                    <img className='w-full h-64 md:h-full object-cover' src="/images/bluiding.png" alt="" />
                    <img className='w-full h-64 md:h-full object-cover' src="/images/coder.png" alt="" />
                <img className='w-full h-64 md:h-full object-cover' src="/images/ask job.png" alt="" />
                </Carousel>
            </div>
        </div>
        <div>
                <h2 className='text-2xl md:text-4xl font-bold text-center md:pt-16 md:pb-8 pt-8 pb-4'>why you should work with us</h2>
                <p className='text-center sm:text-2xl md:mt-6 pb-12 mt-4 text-lg'>We facilitate both fines, employees to find a job, and even employers to find qualified employees.</p>
            </div> 
            <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto space-x-10 boarder rounded-md border-sky-700 bg-gray-100 pt-4 px-2 py-4'>
                {datas.map((data,index)=>(
                    <Card className='sm:pt-4 sm:px-2 sm:py-4 pt-2 px-4 py-2' key={index}> 
                        <img className='w-full object-cover rounded-md' src={data.img} alt="image" />
                        <p className='text-3xl text-center text-sky-700 pt-8'>{data.head}</p>
                        <p className='text-lg px-12 pt-14'>{data.todos.map(todo =>(
                            <div className='flex space-x-4'>
                                <GoDotFill />
                               <li className='hover:text-sky-600 text-lg'>{todo}</li>
                          
                            </div>
                          
                        ))}</p>
                        
                        <div className='p-5 flex justify-start items-center pl-36 mt-5'>
                            <Link to="sign" className='border rounded-md px-3 bg-sky-600 text-white py-2 md:text-lg text-base'>Create Account</Link>
                        </div>
                    </Card>
                ))}

            </div>
            <div className='md:py-16 md:pb-8  sm:pb-6 py-8 pb-4'>
              <h1 className='text-center md:text-4xl sm:text-3xl text-2xl font-bold md:py-10 sm:8 py-6 text-sky-900'>Partner Feedback</h1>
            <div className='pt-4 sm:pt-6 md:pt-8 grid grid-cols-2 md:grid-cols-4 border-2 rounded-md mt-16 px-16 w-11/12 mx-auto space-x-5 bg-gray-100 pb-16'>
                {workers.map(Worker =>(
                    <Card className="sm:pt-2 md:pt-4 px-4 md:px-8 py-4 md:hover:scale-110
                     hover:transition-transform hover:duration-100 "
> 
                        <img className='' src={Worker.img} alt="work" />
                        <h1 className='text-center font-bold pt-4 pb-6 text-xl sm:text-2xl text-sky-600'>{Worker.name}</h1>
                        <p className='text-lg'>{Worker.p}</p>
                        
                    </Card>
                ))}
            </div>
            </div>
    </div>
  )
}
 