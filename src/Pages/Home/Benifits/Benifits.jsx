import {  useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Container from "../../../Components/Container/Container";


const Benifits = () => {
    const [tabIndex, setTabIndex] = useState(0);
   
    return (
        <div>
        <div>
          <Container>
          <div className="mb-10">
           <div className="divider divider-neutral"><h1 className="text-4xl font-bold text-center">Who Gets Benefits</h1></div>
          </div>  
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <div className="text-center font-bold my-3">
                <TabList>
                  <Tab>Developers</Tab>
                  <Tab>Bankers</Tab>
                  <Tab>Students</Tab>
                </TabList>
              </div>
  
              <div className="mt-4">
                <TabPanel>
                  <div className="card lg:w-[800px] mx-auto shadow-lg">
                    <div className="card-body">
                      <h2 className="card-title">
                        Software developers and programmers who need an organized
                        way to manage their coding tasks and project deadlines.
                      </h2>
  
                      <ul className="list-disc ml-6">
                        <li>Efficient tracking of coding tasks</li>
                        <li>Prioritization of development activities</li>
                        <li>Collaboration on team projects</li>
                      </ul>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="card lg:w-[800px] mx-auto shadow-lg">
                    <div className="card-body">
                      <h2 className="card-title">
                        Banking professionals who need to manage financial tasks,
                        projects, and deadlines in an efficient and organized
                        manner.
                      </h2>
  
                      <ul className="list-disc ml-6">
                        <li>Effective management of financial tasks</li>
                        <li>Secure and centralized task tracking</li>
                        <li>Priority setting for critical deadlines</li>
                      </ul>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="card lg:w-[800px] mx-auto shadow-lg">
                    <div className="card-body">
                      <h2 className="card-title">
                        Students seeking a platform to organize and manage
                        academic tasks, assignments, and project deadlines.
                      </h2>
  
                      <ul className="list-disc ml-6">
                        <li>Task organization for academic assignments</li>
                        <li>Deadline management for projects</li>
                        <li>Collaboration on group projects</li>
                      </ul>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </Container>
        </div>
      </div>
    );
};

export default Benifits;