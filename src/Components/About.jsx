
import { Card } from "antd";
const About = () => {
  return (
    
    <div className='mt-32 w-11/12 mx-auto'>
        <div>
        <h1 className="text-3xl font-bold pb-2"> Job Board Profile</h1>
        <Card className="w-1/2 bg-gray-100">
            <p className="text-lg"> Created in January 2025, by student developer who was study in Nyabiheke coding school 
                these are <span className="text-sky-600 underline font-bold">ERNESTE,GISELE </span>and <span className="text-sky-600 underline font-bold">EMMAUNUEL</span>. Job Board 
                is a private held company providing services in the area of online recruitment and advertisement.
            </p>
        </Card>
        </div>
        <div className="p-3">
            <h1 className="text-3xl font-bold">Mission</h1>
            <Card className="w-1/2 bg-gray-100">
                <p className="text-lg">Our main mission is to <i>"facilitate the communication between job seekers and employers operating in Rwanda usingonline technologies"</i></p>
            </Card>
        </div>
        <div>
            <h1 className="text-3xl font-bold">Services</h1>
            <Card className="w-1/2 bg-gray-100">
                <p className="text-lg"><i className="text-sky-600 underline">Job advertising:</i> Job Board website provides an easy and optimal way of adverting your job vacancies to have high quality of 
                applications and increase the chances to find the right candidate. </p>
                <p className="text-lg"><i className="text-sky-600 underline">Banner advertising:</i> Job Board website offers spaces for advertisement of your products and services. Your banner is displayed on our home 
                 and is viewed by more than 70,000 unique visitors / month. </p>
                 <p className="text-lg"><i className="text-sky-600 underline">Video Advertising:</i>You can also advertise your products and services just posting a short video on our
                  website in order to be viewed by thousands of visitors.</p>
            </Card>

        </div>
        
    </div>

  )
}

export default About