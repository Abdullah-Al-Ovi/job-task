import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
const TaskManagement = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="text-center  my-3">
                <TabList >
                    <Tab>To-Do</Tab>
                    <Tab>Ongoing</Tab>
                    <Tab>Completed</Tab>
                </TabList>
                </div>
                <TabPanel><h1>to</h1></TabPanel>
                <TabPanel><h1>on</h1></TabPanel>
                <TabPanel><h1>com</h1></TabPanel>
            </Tabs>
        </div>
    );
};

export default TaskManagement;