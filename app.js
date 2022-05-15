import fetch from "node-fetch"
import axios from "axios"

async function getData(user_id,post_id){
    const {data:users1} = await axios /*fetch*/("https://jsonplaceholder.typicode.com/users/"+user_id)
    const {data:post1} = await axios /*fetch*/("https://jsonplaceholder.typicode.com/posts?userId="+post_id)
    
    
    console.log("Users: ",users1)
    console.log("Post: ",post1)
    
}

export default getData