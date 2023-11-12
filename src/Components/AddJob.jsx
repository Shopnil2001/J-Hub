import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const AddJob = () => {
    const {user}= useContext(AuthContext)
    const handleAddProduct = e => {
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
        const jobApplicantsNumber= 0;
        
        const newJob = {jobTitle, pictureUrl,salaryRange,jobDescription,jobCategory,loggedInUserEmail,applicationDeadline,jobPostingDate,jobApplicantsNumber }
        fetch('https://assignment-11-server-mu-six.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {console.log(data);
                toast('Job posted successfully')
            })

    }
    return (
        <div className='w-4/6 mx-auto h-2/3 border border-stone-950 rounded-xl'>
            <Helmet>
                <title>Carrier-Hub|AddJob</title>
            </Helmet>
            <h1 className='mb-3 text-center font-bold'>Add Product</h1>
            <hr className='mb-3 w-1/2 mx-auto' />
            <form onSubmit={handleAddProduct} className='md:w-2/3 lg:w-1/2 w-full mx-auto  rounded-xl px-5 py-3' >
                <input type="text" placeholder='jobTitle' name='jobTitle' className='input bg-white input-bordered mt-4  mb-3 w-full' />
                <br />
                <input type="text" placeholder='photoURL' name="pictureUrl" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <input type="text" placeholder='email ' name='loggedInUserEmail' defaultValue={user?.email} className='input bg-white input-bordered  mb-3 w-full' />
                <br />
                <input type="text" placeholder='salary' name="salaryRange" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                {/* <input type="text" placeholder='Description' name='jobDescription' className='input bg-white input-bordered   mb-3 w-full' /> */}
                <textarea placeholder='Description' name='jobDescription' className='input textarea textarea-bordered bg-white   mb-3 w-full'></textarea>
                <br />
                <input type="text" placeholder='Category' name="jobCategory" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <input type="date" placeholder='deadline' name="applicationDeadline" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <div className='mx-auto  flex justify-center'>
                    <input type="submit" value="Add" className='btn btn-success mx-auto bg-white mb-3 ' />
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddJob;