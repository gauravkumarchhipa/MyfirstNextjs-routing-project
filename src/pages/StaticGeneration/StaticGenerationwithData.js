import { useEffect } from "react";
import User from "../../components/user";

function UserList({users}) {

    // const handleFetchData = async () => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    //     const data = await response.json();
    //     console.log(data);
    // }
    
    // useEffect(() => {
    //     handleFetchData();
    // },[])

    // console.log(users.email);
    console.log(users);
    return (
        <>
            <h1>User List</h1>
            {
                users.map((user) => {
                    return(
                        <div key={user.id}>
                            {/* <p>{user.name}</p> 
                            <p>{user.email}</p> */}
                            <User user={user}/>

                        </div>
                    )
                })
            }

        </>
    );
}

export default UserList;

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    return {
        props :{
            users : data
        }
    }
}