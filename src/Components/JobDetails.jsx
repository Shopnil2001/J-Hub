
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
  
    return (
        <div>
            <h1>
            {
                job.jobCategory
            }
            </h1>
            
        </div>
    );
};

export default JobDetails;