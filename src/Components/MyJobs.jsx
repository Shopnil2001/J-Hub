import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const MyJobs = () => {
    const {user} = useContext(AuthContext)
    const [MyJobs, setMyJobs] =useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?loggedInUserEmail=${user?.email}`)
        .then(res => res.json())
        .then(data => {setMyJobs(data);
            
        })
    },[user?.email])
    if(MyJobs.length<1){
        return <div className='text-center text-2xl font-bold text-red-500'><h1>No job Posted yet</h1></div>
    }
    const handleDelete= _id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/jobs/${_id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      const updated = MyJobs.filter(job=>job._id!=_id)
                      setMyJobs(updated);

                }
            })
            

            }
          });
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3'>
            <Helmet>
                <title>J-Hub|MyJob</title>
            </Helmet>
            {
                MyJobs?.map(job=><div  
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" key={job._id} className='card w-96 glass mx-auto '>
                    <figure><img className='w-full' src={job.pictureUrl} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Job:{job.jobTitle}</h2>
                        <p>Category:{job.jobCategory}</p>
                        <p>Application Deadline:{job.applicationDeadline}</p>
                        <p>Applicants:{job.jobApplicantsNumber}</p>
                        

                        <div className="card-actions justify-end">
                           <button onClick={()=>handleDelete(job._id)} className="btn ">Delete</button>
                            <Link to={`/Update/${job._id}`}><button className="btn btn-error">Update</button></Link>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MyJobs;