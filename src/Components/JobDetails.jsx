
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const JobDetails = () => {
    const job = useLoaderData()
    const { user } = useContext(AuthContext)
    const handleApply = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const resume = form.resume.value
        const currentTimestamp = Date.now();
        const deadLine = new Date(`${job.applicationDeadline}`);
        const timestamp = deadLine.getTime();
        if (timestamp < currentTimestamp) {
            return toast('deadline is over for this job')
        }
        const jobTitle = job.jobTitle;
        const pictureUrl = job.pictureUrl;
        const salaryRange = job.salaryRange;
        const jobDescription = job.jobDescription;
        const jobCategory = job.jobCategory;
        const loggedInUserEmail = job.loggedInUserEmail;
        const applicationDeadline = job.applicationDeadline;
        

        const jobPostingDate  = job.jobPostingDate;
        const Applicant = { email, name, resume,jobPostingDate,jobTitle,pictureUrl,salaryRange,jobDescription,jobCategory,loggedInUserEmail,applicationDeadline }
        console.log(Applicant);
        fetch(' https://assignment-11-server-mu-six.vercel.app/apply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Applicant)
        })
            .then(res => res.json())
            .then(data => {toast('apply successful');

           if(data.acknowledged){
            
            const jobTitle = job.jobTitle;
            const pictureUrl = job.pictureUrl;
            const salaryRange = job.salaryRange;
            const jobDescription = job.jobDescription;
            const jobCategory = job.jobCategory;
            const loggedInUserEmail = job.loggedInUserEmail;
            const applicationDeadline = job.applicationDeadline;
            
    
            const jobPostingDate  = job.jobPostingDate;
            const jobApplicantsNumber= parseInt(job.jobApplicantsNumber)+1;
            
            const updated = {jobTitle, pictureUrl,salaryRange,jobDescription,jobCategory,loggedInUserEmail,applicationDeadline,jobPostingDate,jobApplicantsNumber }

            fetch(`https://assignment-11-server-mu-six.vercel.app/jobs/${job._id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
           
        })
           }
        })



    }

    return (
        <div className='w-4/5 mx-auto border-stone-700'>
            <Helmet>
                <title>J-Hub|JobDetails</title>
            </Helmet>
            <div className='text-center mx-auto mb-5'>
                <img className='mx-auto' src={job.pictureUrl} alt="" />
                <h1 className='text-3xl font-bold'>{job.jobTitle}</h1>
            </div>
            <div className=' mx-auto mb-5 w-1/2 border rounded-xl text-center px-10 border-zinc-700'>
                <h1 className='text-2xl font-bold text-center'>Description:</h1>
                <hr className='w-44 border mx-auto' />
                <p className='text-xl font-semibold text-left mt-5 '>
                    {
                        job.jobDescription
                    }
                </p>
                <hr className=' border-solid border-black mx-auto mb-6' />

                <p className='text-lg text-left font-medium '>
                    salary : {job.salaryRange}
                </p>
                <p className='text-lg font-medium text-left '>
                    Deadline : {job.applicationDeadline}
                </p>
                <p className='text-lg font-medium text-left '>Applicants:{job.jobApplicantsNumber}</p>
                <p className='text-lg font-medium text-left mb-5 w-full '>
                    Posted by : {job.loggedInUserEmail}
                </p>

                <button onClick={() => document.getElementById('my_modal_3').showModal()} className={user?.email == job.loggedInUserEmail ? 'hidden' : 'btn text-center  btn-outline btn-primary mb-5'}>Apply</button>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">

                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={ handleApply}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" defaultValue={user?.email} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' defaultValue={user?.displayName} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume</span>
                            </label>
                            <input type="text" placeholder="Resume-Link" name='resume' className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" placeholder='Apply' value='Apply' />
                        </div>
                    </form>
                </div>
            </dialog>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;