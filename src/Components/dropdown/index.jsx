import {Card} from "antd"
import Link from "antd/es/typography/Link"
export const Dropdown = () =>{
    const Jobs=["Education","Industry","Driving","Software","Construction"]
    return (
      <Card className=" w-[400px]">
        <div className="">
            {Jobs.map(job=>(
            <div className="flex justify-between items-center">
                <h5>{job} </h5>
                <Link href="">View job</Link>
            </div>
            ))}
           
        </div>
      </Card>
    )
}