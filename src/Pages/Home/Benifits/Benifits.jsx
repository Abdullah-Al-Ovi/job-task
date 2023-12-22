import {  useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const Benifits = () => {
    const [tabIndex, setTabIndex] = useState(0);
   
    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="text-center  my-3">
                <TabList >
                    <Tab>Developers</Tab>
                    <Tab>Bankers</Tab>
                    <Tab>Students</Tab>
                </TabList>
                </div>
                <TabPanel>
                    {/* <Benefit benefit={developer}></Benefit> */}
                    <div>
                        <h1>Software developers and programmers who need an organized way to manage their coding tasks and project deadlines.</h1>
                        <ul>
                            <li>Efficient tracking of coding tasks</li>
                            <li>Prioritization of development activities</li>
                            <li>Collaboration on team projects</li>
                        </ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h1>Banking professionals who need to manage financial tasks, projects, and deadlines in an efficient and organized manner.</h1>
                        <ul>
                            <li>Effective management of financial tasks</li>
                            <li>Secure and centralized task tracking</li>
                            <li>Priority setting for critical deadlines</li>
                        </ul>
                    </div>
                </TabPanel>
                <TabPanel>
                <div>
                        <h1>Students seeking a platform to organize and manage academic tasks, assignments, and project deadlines.</h1>
                        <ul>
                            <li>Task organization for academic assignments</li>
                            <li>Deadline management for projects</li>
                            <li>Collaboration on group projects</li>
                        </ul>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Benifits;