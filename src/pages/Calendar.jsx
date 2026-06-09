import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import AddTask from '../components/AddTask'
import {useState} from 'react'
import {useEffect} from 'react'

const Calendar = () =>{
    const [tasks,setTasks] = useState([])
    const [showform,setShowForm] = useState(false)

   useEffect(()=>{ const getTasks = async() =>{

       const response = await fetch("https://task-manager-4-c00l.onrender.com/tasks/",{

            headers : {
                "Authorization": `Bearer ${localStorage.getItem('access')}`
            }
        })
        const data = await response.json()
        setTasks(data)


    };getTasks()
     },[])

    const events = tasks.map(task => ({
    title: task.task,
    date: task.due_date
}));

    return (
       <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 border border-gray-200">

    <div className="flex items-center justify-between mb-6">
        <div>
            <h1 className="text-3xl font-bold text-gray-800">
                Task Calendar
            </h1>

            <p className="text-gray-500 mt-1">
                Manage your important tasks and deadlines
            </p>
        </div>

        <button onClick={()=>setShowForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition duration-200">
            + Add Task
        </button>
        {showform && (

                <div className="fixed z-10 inset-0 bg-black/40 flex items-center justify-center">

                    <div className="bg-white p-6 rounded-2xl shadow-xl w-[400px] relative">

                        {/* Close Button */}

                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-3 right-4 text-xl"
                        >
                            ×
                        </button>

                        <AddTask />

                    </div>

                </div>
            )}
    </div>

    <div className="
    bg-white
    dark:bg-gray-900

    text-black
    dark:text-white

    p-5
    rounded-2xl
">

    <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="80vh"
    />

</div>

</div>
    )
}
export default Calendar