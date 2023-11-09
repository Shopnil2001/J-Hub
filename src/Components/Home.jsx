import  { useEffect, useState } from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCards from './Cards/TabCards';

const Home = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [category, setCategory]= useState('')
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
                <h1>Jobs you may want to check:</h1>
            <Tabs selectedIndex={tabIndex}  onSelect={(index) => {setTabIndex(index);
             if(index===0){
                setCategory('')
            }
            else if(index===1){
                setCategory('On Site')
                
            }
            else if(index===2){
                setCategory('Remote')
                
            }
            else if(index===3){
                setCategory('Hybrid')
                
            }
            else if(index===4){
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
            </div>
        </div>
    );
};

export default Home;