import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Userhome = () => {
    const { user } = useContext(authContext)
    return (
        <div className='space-y-3 text-center mt-20 w-[80%] mx-auto'>
            <div className='mb-8 space-y-2'>
            <img className='w-[100px] h-[100px] rounded-full mx-auto' src={user?.photoURL} alt="profile_picture" />
            <h1 className='text-lg font-medium'>{user?.displayName}</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                <div className="flex border-2 shadow-md flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                    <h3 >To-Do:0</h3>
                </div>
                <div className="flex border-2 shadow-md flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                    <h3 >Ongoing:0</h3>
                </div>
                <div className="flex border-2 shadow-md flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                    <h3 >Completed:0</h3>
                </div>
                
            </div>
        </div>
    );
};

export default Userhome;