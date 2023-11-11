import { useEffect, useState } from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCards from './Cards/TabCards';

const Home = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [category, setCategory] = useState('')
    // useEffect(()=>{

    //     console.log(tabIndex);
    // },[tabIndex, category])


    return (
        <div>
            <Helmet>
                <title>J-Hub|Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='w-2/3 mx-auto mt-20'>
                <h1 className='text-center font-bold text-2xl mb-10 border-b-slate-950 border-b'>Jobs you may want to check:</h1>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => {
                    setTabIndex(index);
                    if (index === 0) {
                        setCategory('')
                    }
                    else if (index === 1) {
                        setCategory('On Site')

                    }
                    else if (index === 2) {
                        setCategory('Remote')

                    }
                    else if (index === 3) {
                        setCategory('Hybrid')

                    }
                    else if (index === 4) {
                        setCategory('Part-Time')

                    }
                }}
                >
                    <TabList>
                        <Tab >All jobs</Tab>
                        <Tab >On Site</Tab>
                        <Tab >Remote</Tab>
                        <Tab >Hybrid</Tab>
                        <Tab >Part-Time</Tab>
                    </TabList>

                    <TabPanel>

                        <TabCards category={category}></TabCards>
                    </TabPanel>
                    <TabPanel>

                        <TabCards category={category}></TabCards>
                    </TabPanel>
                    <TabPanel>
                        <TabCards category={category}></TabCards>
                    </TabPanel>
                    <TabPanel>
                        <TabCards category={category}></TabCards>
                    </TabPanel>
                    <TabPanel>
                        <TabCards category={category}></TabCards>
                    </TabPanel>
                </Tabs>
                <div className='my-20'>
                    <h1 className='text-center text-2xl font-bold '>
                        User Review
                    </h1>
                    <hr className='w-1/2 border-b border-b-gray-950 mx-auto '/>
                <div className='lg:flex mt-5 justify-around'>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img src={'https://i.ibb.co/h1SkYqB/member1.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Matt</h2>
                    <p>Finding employee is easier now</p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img src={'https://i.ibb.co/12ZKQXS/member2.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Jenny</h2>
                    <p>this is one of the easiest platform to use </p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img src={'https://i.ibb.co/vd679Xr/member3.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Joshim</h2>
                    <p> My career journey started here </p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img src={'https://i.ibb.co/YcJqKkk/member4.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Jorina</h2>
                    <p> Still got no job </p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
                </div>


                <h1 className='text-center text-2xl font-bold my-10'>Company That uses our service:</h1>
                <div className="flex justify-center items-center">
                    
                    <div className="grid grid-cols-3  lg:gap-16 md:gap-16 gap-6 text-lg font-semibold ">
                        <div className="flex flex-col items-center">
                            {/* <img src="company1-logo.png" alt="Company 1" class="w-20 h-20"> */}
                               <img className='w-40 h-40' src="https://i.ibb.co/DkW07NG/google-logo-icon-134448.png" alt="" />
                                <h3 className="mt-2 text-center text-gray-800">Google</h3>
                        </div>

                        <div className="flex flex-col items-center">
                            {/* <img src="company2-logo.png" alt="Company 2" class="w-20 h-20"> */}
                            <img className='w-40 h-40' src="https://i.ibb.co/Gs5wXv8/8867-Microsoft-5-F00-Logo-2-D00-for-2-D00-screen.jpg" alt="" />
                                <h3 className="mt-2 text-center text-gray-800">Microsoft</h3>
                        </div>

                        <div className="flex flex-col items-center">
                            {/* <img src="company3-logo.png" alt="Company 3" class="w-20 h-20"> */}
                            <img className='w-40 h-40' src="https://i.ibb.co/t30947Z/download-2.jpg" alt="" />
                                <h3 className="mt-2 text-center text-gray-800">Tesla</h3>
                        </div>

                        <div className="flex flex-col items-center">
                            {/* <img src="company4-logo.png" alt="Company 4" class="w-20 h-20"> */}
                            <img className='w-40 h-40' src="https://i.ibb.co/cyDKS7g/1685279753620.png" alt="" />
                                <h3 className="mt-2 text-center text-gray-800">Apple</h3>
                        </div>

                        <div className="flex flex-col items-center">
                            {/* <img src="company5-logo.png" alt="Company 5" class="w-20 h-20"> */}
                            <img className='w-40 h-40' src="https://i.ibb.co/mCK62qx/desktop-wallpaper-nokia-logo-logo-brands-for-3d-connecting-people.jpg" alt="" />
                                <h3 className="mt-2 text-center text-gray-800">Nokia</h3>
                        </div>

                        <div className="flex flex-col items-center">
                            {/* <img src="company6-logo.png" alt="Company 6" class="w-20 h-20"> */}
                            <img className='w-40 h-40' src="https://i.ibb.co/B474gph/download-1.jpg" alt="" />
                                <h3 className="mt-2 text-center text-gray-800">PHero</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <footer className="footer p-10 bg-neutral text-neutral-content">
                    <aside>
                        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                        <p>J-Hub<br />Providing Jobs since 2020</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Social</header>
                        <div className="grid grid-flow-col gap-4">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Home;