import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TabCards = (category) => {
    const [Jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?jobCategory=${category.category}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[category])
    if(Jobs.length==0){
        return <div><h1 >No job available</h1></div>
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3'>
            {
                Jobs?.map(job=><div  
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" key={job._id} className='card w-5/6  glass mx-auto '>
                    <figure><img className='w-full' src={job.pictureUrl} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Model:{job.jobTitle}</h2>
                        <p>Category:{job.jobCategory}</p>
                        <p>Application Deadline:{job.applicationDeadline}</p>
                        <p>Applicants:{job.jobApplicantsNumber}</p>
                        

                        <div className="card-actions justify-end">
                            <Link to={`/JobDetails/${job._id}`}><button className="btn ">Details</button></Link>
                         
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default TabCards;