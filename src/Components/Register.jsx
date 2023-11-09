
import { Link } from 'react-router-dom';

import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { AuthContext } from './AuthProvider';
import { Helmet } from 'react-helmet';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [erMessage, setErMessage] = useState('')
    const { CreateUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const PhotoUrl = e.target.PhotoUrl.value;

        const email = e.target.email.value;
        const password = e.target.password.value;
        setErMessage('')
        if (password.length < 6) {
            setErMessage('password cannot be less then 6 character')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setErMessage('password must have a upper case letter')

        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setErMessage('password must have a special character')
            return
        }




        CreateUser(email, password,name,PhotoUrl)
            .then(result => {
                
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: PhotoUrl
                })
                })
                // toast('Registration successful. Go to home/ please reload if user name and photo is not visible  ')
                
            .catch(error => {
                const errorMessage = error.message;
                setErMessage(errorMessage);
                toast('user already exists  ')


            })
    }
    return (
        <div>
             <Helmet>
                <title>J-Hub|Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" placeholder="PhotURL" name='PhotoUrl' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" placeholder='Register' />
                            </div>
                        </form>
                        {
                            erMessage && <p className='ml-3 text-red-700 mb-3' >{erMessage}</p>
                        }
                        <p className='ml-3 mb-3'>Already have account? <Link className='text-sky-600' to={'/Login'}>...login</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );


};
Register.propTypes = {
    createUser: PropTypes.func,
};
export default Register;