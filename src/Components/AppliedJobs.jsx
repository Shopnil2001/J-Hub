import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Pdf from "./PDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FaFileDownload} from 'react-icons/fa';


const AppliedJobs = () => {
    const {user ,loading} = useContext(AuthContext)
    const [Applies, setApply] = useState([]);
    const [category,setCategory]= useState('')

   const url =`https://assignment-11-server-mu-six.vercel.app/apply?email=${user?.email}&jobCategory=${category}` 
    useEffect(()=>{
        fetch(url,{credentials:'include'})
        .then(res => res.json())
        .then(data => {setApply(data);
            
            
        })
    },[url])
    
    if(loading){
        return <h1> loading</h1>
      }
    const handleFilter = e =>{
        e.preventDefault();
        
        setCategory(e.target.value);
       
        
  
    }
    
    
  
   

    return (
        <div>
    
          <div className="flex justify-center mb-20">
          <h1 className=" mr-4 text-lg font-medium">Filter job by category: </h1>
            <select  onChange={handleFilter} className="" name="" id="">
                <option value=''>All Jobs</option>
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Part-Time">Part-Time</option>
            </select>
          </div>
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
                                <th>PDF</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                Applies?.map(apply => <tr className='border-y-slate-800 shad' key={apply._id}>
                                    <th>{apply.loggedInUserEmail}</th>
                                    <td>{apply.jobTitle}</td>
                                    <td>{apply.jobCategory}</td>
                                    <td>{apply.salaryRange}</td>
                                    <td>{apply.jobPostingDate}</td>
                                    <td>{apply.applicationDeadline}</td>
                                    <td >
                                        
                                        <PDFDownloadLink  document={<Pdf loggedInUserEmail={apply.loggedInUserEmail}
                                        jobTitle={apply.jobTitle} jobCategory= {apply.jobCategory}
                                        salaryRange={apply.salaryRange} jobPostingDate={apply.jobPostingDate}
                                        applicationDeadline={apply.applicationDeadline}
                                        jobDescription={apply.jobDescription}
                                        pictureUrl={apply.pictureUrl}
                                        />} fileName="details"
                                        
                                        ><button data-tip="download pdf" className="btn tooltip "><FaFileDownload></FaFileDownload></button></PDFDownloadLink>
                                        </td>
                                    
                                </tr>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        
    );
};

export default AppliedJobs;