import {useState} from 'react'


const Forget = () =>{

    const [email,setEmail] = useState('')

    const sendRestLink = async() =>{

        const response = await fetch('https://task-manager-4-c00l.onrender.com/forget/',{

            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email
            })
        })
        const data = await response.json()
        console.log(data)
        if(response.ok){
            alert(data.message)
        }
    }

    return (
        <div className="
    min-h-screen

    bg-gradient-to-br
    from-indigo-100
    via-white
    to-purple-100

    dark:from-gray-950
    dark:via-gray-900
    dark:to-black

    flex
    items-center
    justify-center

    p-6
">

    <div className="
        w-full
        max-w-md

        bg-white
        dark:bg-gray-900

        rounded-3xl
        shadow-2xl

        border
        border-gray-200
        dark:border-gray-700

        p-10
    ">

        <h1 className="
            text-4xl
            font-extrabold

            text-indigo-700
            dark:text-indigo-400

            text-center
            mb-4
        ">
            Forgot Password
        </h1>

        <p className="
            text-gray-600
            dark:text-gray-300

            text-center
            mb-8
        ">
            Enter your email to receive reset link
        </p>

        <div className="space-y-5">

            <input

                type="email"

                placeholder="Enter your email"

                value={email}

                onChange={(e)=>
                    setEmail(e.target.value)
                }

                className="
                    w-full

                    p-4

                    rounded-xl

                    border
                    border-gray-300
                    dark:border-gray-700

                    bg-white
                    dark:bg-gray-800

                    text-black
                    dark:text-white

                    outline-none

                    focus:ring-2
                    focus:ring-indigo-500
                "
            />

            <button

                onClick={sendRestLink}

                disabled={!email}

                className="
                    w-full

                    bg-indigo-600
                    hover:bg-indigo-700

                    disabled:bg-gray-400
                    disabled:cursor-not-allowed

                    text-white
                    font-semibold

                    py-4

                    rounded-xl

                    transition
                    duration-300

                    active:scale-95
                "
            >
                Submit
            </button>

        </div>

    </div>

</div>
    )
}
export default Forget