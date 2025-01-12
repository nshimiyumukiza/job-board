import {Card} from "antd"
import Link from "antd/es/typography/Link"
export const Dropdown = () =>{
    const Jobs=["Education","Industry","Driving","Software","Construction"]
    return (
      <Card className=" w-[400px]">
        <div className="">
            {Jobs.map(job=>(
            <div className="flex justify-between items-center">
                <h5 className=" hover:underline">{job} </h5>
                <Link to="">View job</Link>
            </div>
            ))}
           
        </div>
      </Card>
    )
}