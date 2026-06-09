
export const fetchRefreshToken = async()=>{
    const refresh = localStorage.getItem("refresh")

     const response = await fetch('http://127.0.0.1:8000/refresh/token/',{

        method : "POST",
        headers : {
           "Content-Type":"application/json"

        },
        body:JSON.stringify({
            refresh:refresh
        })
    })
    const data = await response.json()

    if (response.ok){

        localStorage.setItem("access",data.access)
        return data.access
    }else{
        console.log("Token expired")
        localStorage.clear()
        return null
    }
}