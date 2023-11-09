import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';

const AllJobs = () => {
    const [Jobs, setJobs] = useState([])
    const jobs = useLoaderData()

    useEffect(() => {
        setJobs(jobs)
    }, [jobs])
    const handleSearch = e =>{
        e.preventDefault()
        const form = e.target;
        const Text = form.Text.value;
        const searched = Jobs.filter(job=>job?.jobTitle.toUpperCase().includes(Text.toUpperCase()))
        console.log(searched,Text,Jobs);
        if(searched){
            setJobs(searched)
        }
    }

    return (
        <>
        <Helmet>
                <title>J-Hub|AllJobs</title>
            </Helmet>
            <form onSubmit={handleSearch} className='flex' >
                <div className="join mx-auto my-10">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search jobs" name='Text' />
                        </div>
                    </div>
                   
                    <div className="indicator">
                        <input className="btn join-item" type="submit"  value='search' id="" />
                        
                    </div>
                </div>
            </form>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr >
                                <th>Posted by</th>
                                <th>Job</th>
                                <th>Category</th>
                                <th>Salary</th>
                                <th>Post date</th>
                                <th>Deadline</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Jobs?.map(job => <tr className='border-y-slate-800 shad' key={job._id}>
                                    <th>{job.loggedInUserEmail}</th>
                                    <td>{job.jobTitle}</td>
                                    <td>{job.jobCategory}</td>
                                    <td>{job.salaryRange}</td>
                                    <td>{job.jobPostingDate}</td>
                                    <td>{job.applicationDeadline}</td>
                                    <td>{<Link to={`/JobDetails/${job._id}`}><button className="btn ">Details</button></Link>}</td>
                                </tr>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </>
    );
};

export default AllJobs;