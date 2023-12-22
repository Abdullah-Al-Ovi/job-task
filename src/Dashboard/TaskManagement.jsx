import React from 'react';
import useTaskCollection from '../Hooks/useTaskCollection';

const TaskManagement = () => {
    const [tasks, refetch] = useTaskCollection()
    console.log(tasks);
    return (
        <div className='my-9 p-7'>
            <div className='grid grid-cols-3 gap-6'>
                <div className='py-2 px-1 text-start bg-cyan-400 rounded-md'>
                    <h1 className='text-white font-medium'>To-Do</h1>
                </div>
                <div className='py-2 px-1 text-start bg-purple-400 rounded-md'>
                    <h1 className='text-white font-medium'>Ongoing</h1>
                </div>
                <div className='py-2 px-1 text-start bg-green-400 rounded-md'>
                    <h1 className='text-white font-medium'>Completed</h1>
                </div>
            </div>
        </div>
    );
};

export default TaskManagement;