
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const job = useLoaderData()
   const {_id}= job;
    const handleUpdateJob = e =>{
       
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobTitle.value;
        const pictureUrl = form.pictureUrl.value;
        const salaryRange = form.salaryRange.value;
        const jobDescription = form.jobDescription.value;
        const jobCategory = form.jobCategory.value;
        const loggedInUserEmail = form.loggedInUserEmail.value
        const applicationDeadline = form.applicationDeadline.value;
        const currentDate = new Date();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const year = String(currentDate.getFullYear());

        const jobPostingDate  = `${year}-${month}-${day}`;
        const jobApplicantsNumber= job.jobApplicantsNumber;
        
        const updated = {jobTitle, pictureUrl,salaryRange,jobDescription,jobCategory,loggedInUserEmail,applicationDeadline,jobPostingDate,jobApplicantsNumber }
        console.log(updated);
        fetch(`https://assignment-11-server-mu-six.vercel.app/jobs/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
        .then(res=> res.json())
        .then(data=> {
            if( data.modifiedCount ==1){
                toast('Update successful')
            }
        })
       
        form.reset()
    }
    return (
        <div className='w-4/6 mx-auto h-2/3 border border-stone-950 rounded-xl mt-5'>
            <Helmet><title>J-Hub|Update</title></Helmet>
            <h1 className='mb-3 text-center font-bold'>Update Product</h1>
            <hr className='mb-3 w-1/2 mx-auto'/>
            <form onSubmit={handleUpdateJob} className='md:w-2/3 lg:w-1/2 w-full mx-auto  rounded-xl px-5 py-3' >
                <input type="text" defaultValue={job.jobTitle} placeholder='jobTitle' name='jobTitle' className='input bg-white input-bordered mt-4  mb-3 w-full' />
                <br />
                <input type="text" placeholder='photoURL' defaultValue={job.pictureUrl} name="pictureUrl" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <input type="text" placeholder='email ' name='loggedInUserEmail' defaultValue={job.loggedInUserEmail} className='input bg-white input-bordered  mb-3 w-full' />
                <br />
                <input type="text" placeholder='salary'defaultValue={job.salaryRange} name="salaryRange" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                {/* <input type="text" placeholder='Description' name='jobDescription' className='input bg-white input-bordered   mb-3 w-full' /> */}
                <textarea placeholder='Description' name='jobDescription'defaultValue={job.jobDescription} className='input textarea textarea-bordered bg-white   mb-3 w-full'></textarea>
                <br />
                <input type="text" placeholder='Category' defaultValue={job.jobCategory} name="jobCategory" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <input type="date" placeholder='deadline'defaultValue={job.applicationDeadline} name="applicationDeadline" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <div className='mx-auto  flex justify-center'>
                    <input type="submit" value="Update" className='btn btn-success mx-auto bg-white mb-3 ' />
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Update;