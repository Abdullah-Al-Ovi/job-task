
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();

    const axiosPublic = useAxiosPublic()
    const {user} = useContext(authContext)

    const onSubmit = (data) => {
        const year = data.deadlineDate.getFullYear();
        const month = (data.deadlineDate.getMonth() + 1).toString().padStart(2, '0');
        const day = data.deadlineDate.getDate().toString().padStart(2, '0');
        const title = data?.title
        const description = data?.description
        const deadlineDate = `${year}-${month}-${day} `;
        const deadlineTime = data?.deadlineTime
        const priority = data?.priority
        const taskInfo ={
            title,description,deadlineDate,deadlineTime,priority,type : 'To-Do',userEmail:user?.email
        }

        axiosPublic.post('/addNewTask',taskInfo)
        .then((res) => {
            if (res.data?.insertedId) {
                reset()
              toast.success("Task added successfully!");

            
            } else {
              toast.error("Failed to add task. Please try again.");
            }
          })
          .catch((error) => {
            console.error('Error adding new task:', error);
            toast.error("An error occurred. Please try again later.");
          });
        

    };

    return (
        <div className='w-[90%] mx-auto mt-20'>
            <div className="mt-10 text-center font-bold text-3xl">
                <h1>Add New Task</h1>
            </div>

            <section className="flex justify-center items-center shadow-xl rounded-xl p-3 mx-auto bg-slate-100 mt-10">
                <div className='w-full md:w-[80%]'>
                    <div className="mt-10 ">
                        <form className='w-full p-5' onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col md:flex-col gap-6">
                                <div className='section-1'>
                                    <div className="form-control">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            {...register('title')}
                                            placeholder="Title"
                                            className="input mt-2 w-[250px] md:w-[330px] "
                                        />
                                    </div>
                                </div>

                                <div className='flex justify-start lg:flex-row flex-col lg:space-x-3 space-y-3 lg:space-y-0'>   

                                        <div className="form-control">
                                        <label>Deadline(Date)</label>
                                            <Controller
                                                control={control}
                                                name="deadlineDate"
                                                render={({ field }) => (
                                                    <DatePicker
                                                        selected={field.value}
                                                        onChange={(date) => field.onChange(date)}
                                                        className="input mt-2 w-[250px] md:w-[170px] "
                                                    />
                                                )}
                                            />
                                        </div>
                                        <div className="form-control">
                                        <label>Deadline(Time)</label>
                                            <Controller
                                                control={control}
                                                name="deadlineTime"
                                                render={({ field }) => (
                                                    <TimePicker
                                                        onChange={(time) => field.onChange(time)}
                                                        value={field.value}
                                                        className="input mt-2
                                                        w-[250px] md:w-[190px] "
                                                    />
                                                )}
                                            />
                                        </div>

                                    
                                    <div className="form-control mb-4">
                                        <label>Priority</label>
                                        <select
                                            {...register('priority')}
                                            className="input mt-2 w-[250px] md:w-[180px] "
                                        >
                                            <option value="">Select Priority</option>
                                            <option value="Low">Low</option>
                                            <option value="Moderate">Moderate</option>
                                            <option value="High">High</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                                    <div className="form-control ">
                                        <label>Task Description</label>
                                        <textarea
                                            {...register('description')}
                                            className="textarea textarea-bordered mt-2  w-[250px] md:w-[390px] "
                                            placeholder="Description"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>



                            <button className="mt-8 mb-6 w-full px-5 py-2 text-white font-bold rounded-md bg-[#B68C5A] hover:bg-[#111827] flex justify-center items-center gap-2">
                                Add Task
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddTask;
