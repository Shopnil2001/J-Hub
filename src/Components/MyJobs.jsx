import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { GrDocumentUpdate } from 'react-icons/gr';
import {  RiDeleteBin6Line } from 'react-icons/ri';

const MyJobs = () => {
    const {user,loading} = useContext(AuthContext)
    const [MyJobs, setMyJobs] =useState([])
    
    useEffect(()=>{
        fetch(`https://assignment-11-server-mu-six.vercel.app/jobs?loggedInUserEmail=${user?.email}`,{credentials:'include'})
        .then(res => res.json())
        .then(data => {setMyJobs(data);
            
        })
    },[user?.email])
    if(loading){
        return <div className='text-center  text-red-500'><h1>loading...</h1></div>
    }
    if(MyJobs.length<1){
        return <div className='text-center text-2xl font-bold text-red-500'><h1>No job Posted yet</h1></div>
    }
    const handleDelete= _id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "this post will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`https://assignment-11-server-mu-six.vercel.app/jobs/${_id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Job post has been deleted.",
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
                    data-aos-easing="ease-in-sine" key={job._id} className='card w-5/6 glass mx-auto '>
                    <figure><img className='w-full' src={job.pictureUrl} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Job:{job.jobTitle}</h2>
                        <p>Category:{job.jobCategory}</p>
                        <p>Application Deadline:{job.applicationDeadline}</p>
                        <p>Applicants:{job.jobApplicantsNumber}</p>
                        

                        <div className="card-actions justify-end">
                           <button  onClick={()=>handleDelete(job._id)} className="btn tooltip " data-tip="delete"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                            <Link to={`/Update/${job._id}`}><button className="btn  tooltip" data-tip="Update"><GrDocumentUpdate></GrDocumentUpdate></button></Link>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MyJobs;