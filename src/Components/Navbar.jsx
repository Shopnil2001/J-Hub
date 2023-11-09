
import { NavLink } from 'react-router-dom';
import '../App.css'
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Navbar = () => {
    const {user, LogOut} = useContext(AuthContext)
    const links = <>
        <li className="mr-2 "><NavLink to={'/'}  >Home</NavLink></li>
        <li><NavLink to={'/AllJob'}>All-job</NavLink></li>
        {
            user ? <>
            <li ><NavLink to={'/AddJob'}  >Add-job</NavLink></li>
            <li><NavLink to={'/MyJob'}>My-job</NavLink></li>
            <li><NavLink to={'/Applied'}>Applied-jobs</NavLink></li>
            </> : ''
        }
        <li><NavLink to={'/Blog'}>Blog</NavLink></li>

    </>
    
    const handleSignOut = () => {
        LogOut()
            .then()
            .catch()

    }
    return (
        <div className="navbar bg-zinc-400  mb-8  shadow-xl">
        <div className="navbar-start">
            <div className="dropdown ">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="mb-1  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        user ? <div className="flex items-center gap-2 mb-3">
                            <img className="rounded-full w-12" src={user.photoURL} alt="" />
                            <p className="font-medium text-rose-500">{user.displayName}</p>
                        </div>
                            :
                            <div></div>
                    }
                    {
                        links

                    }
                    {
                        user ? <button onClick={handleSignOut} className="btn   mt-3">SignOut</button>
                            :
                            <div>

                                <NavLink className={'btn btn-outline btn-error mt-3'} to={'/Login'} >Login</NavLink>
                            </div>
                    }
                </ul>
            </div>
            <div className=" px-2 mx-2 hidden lg:block md:block   ">
                        <div className='flex items-center '>
                        <img className='w-14 h-14 mr-4 rounded-full' src="https://i.ibb.co/rmFj2rX/360-F-513722905-Sgxi-Gdj-QZsdv-P4-ODm-ERs-QGg-W2b-Uwj1l-T.jpg" alt="" />
                        <h1 className='text-xl font-bold text-cyan-700'>J-Hub</h1>
                        </div>
                    </div>
            

        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-3 px-1 ">
                {
                    links
                }

            </ul>
        </div>
       
        <div className=" px-2 mx-2  lg:hidden md:hidden  ">
                        <div className='flex items-center '>
                        <img className='w-14 h-14 mr-4 rounded-full' src="https://i.ibb.co/rmFj2rX/360-F-513722905-Sgxi-Gdj-QZsdv-P4-ODm-ERs-QGg-W2b-Uwj1l-T.jpg" alt="" />
                        <h1 className='text-xl font-bold text-cyan-700'>J-Hub</h1>
                        </div>
                    </div>
        <div className="navbar-end">
            {
                user ? <div className="lg:flex hidden items-center gap-2">
                    <img className="rounded-full w-12" src={user.photoURL} alt="" />
                    <p>{user.displayName}</p>
                    <button onClick={handleSignOut} className="btn bg-zinc-400 hover:bg-stone-600 ">SignOut</button>
                </div>
                    :
                    <div className="lg:block hidden">

                        <NavLink className={'btn bg-zinc-400 hover:bg-cyan-300  '} to={'/Login'} >Login</NavLink>
                    </div>
            }
            


        </div>

        
    </div>
       
        //     <div className="drawer shadow-xl ">
        //     <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        //     <div className="drawer-content flex flex-col">
        //         {/* Navbar */}
        //         <div className="w-full navbar bg-base-300">
        //             <div className="flex-none lg:hidden">
        //                 <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
        //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        //                 </label>
        //             </div>
                    
        //             <div className="flex-none hidden lg:block ">
        //                 <ul className="flex gap-3 menu-horizontal ">
        //                     {/* Navbar menu content here */}
        //                     {
        //                         links
        //                     }
        //                     {
        //                 user ? <div className="lg:flex hidden items-center ml-20 gap-2">
        //                 <img className="rounded-full w-10" src={user.photoURL} alt="" />
        //                 <p>{user.displayName}</p>
        //                 <button onClick={handleSignOut} className="btn btn-outline btn-primary ">SignOut</button>
        //               </div>
        //                 :
        //                 <div className="lg:block hidden ml-20">

        //                     <NavLink className={'btn btn-outline btn-error  '} to={'/Login'} >Login</NavLink>
        //                 </div>
        //                 }
        //                 </ul>
                        
        //             </div>
        //         </div>
                
        //     </div>
        //     <div className="drawer-side ">
        //         <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay "></label>
        //         <ul className="menu p-4 w-80 min-h-full bg-base-200">
        //             {/* Sidebar content here */}
        //             {
        //                     user ? <div className="flex items-center gap-2 mb-3">
        //                         <img className="rounded-full w-10" src={user.photoURL} alt="" />
        //                         <p className="font-medium text-rose-500">{user.displayName}</p>
        //                     </div>
        //                         :
        //                         <div></div>
        //                 }
                    
                    
        //             {
        //                 links
        //             }
        //             {
        //                     user ? <button onClick={handleSignOut} className="btn btn-outline btn-primary mt-3">SignOut</button>
        //                         :
        //                         <div>

        //                             <NavLink className={'btn btn-outline btn-error mt-3'} to={'/Login'} >Login</NavLink>
        //                         </div>
        //                 }
        //         </ul>
        //     </div>
        // </div>
        
       
    );
};

export default Navbar;