import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="logo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className="font-extrabold">{company_name}</p>
                <div>
                    <button className="px-4 py-2 border rounded border-[#7E90FE] mr-4 text-[#7E90FE] font-extrabold">{remote_or_onsite}</button>
                    <button className="px-4 py-2 border rounded border-[#7E90FE] mr-4 text-[#7E90FE] font-extrabold">{job_type}</button>
                </div>
                <div className="mt-4 flex">
                <h2 className="flex text-2xl mr-4">
                <CiLocationOn className="mr-2"></CiLocationOn>{location}
                </h2>
                <h2 className="text-2xl flex"> 
                <CiDollar></CiDollar>{salary}</h2></div>
                <div className="card-actions">
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 ">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;