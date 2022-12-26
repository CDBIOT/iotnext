
export async function getStaticProps() {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        const todos = await data.json()
        console.log(todos)
        return{
        props:{todos}
        }
        }

export default function Users({ todos }){
    
    return (
    <>
    <h1>Users</h1>
     
    { todos.map((user,index)=>( 
    <div>
    <h1>("Novo usuario" {user.title}  ")</h1>
    <table >
        <tbody>
 	        <tr>
            <h2 id = "user"></h2>	
            <td>${user.id}</td>
            <td>${user.title}</td>
            </tr>
        </tbody>
    </table>
    </div>
     ))
    }
    </>
    
    )
}
 
    
    
    