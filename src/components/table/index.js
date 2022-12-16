import {useEffect, useState} from "react";
import axios from 'axios'

function EmployeeTable(){
    const [infos, setInfo] = useState([])

  useEffect(() => {
    axios.get('https://random-data-api.com/api/v2/users?size=10').then((res) => {
      if (res.status === 200) {
        setInfo(res.data)
        console.log(res.data)
      }
    })
  }, [])

    return <div>
        <div>
            <pre>{JSON.stringify(infos, null,2)}</pre>
        </div>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th colSpan={2}>Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Username</th>
                    <th>Employment</th>
                    <th>Addrress</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {infos.map(info=>{
                    return <tr>
                    <td><img src={info.avatar} width='30px'></img></td>
                    <td>{info.first_name}</td>
                    <td>{info.last_name}</td>
                    <td>{info.gender}</td>
                    <td>{info.date_of_birth}</td>
                    <td>{info.email}</td>
                    <td>{info.phone_number}</td>
                    <td>{info.username}</td>
                    <td>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span>{info.employment.title}</span>
                        <span style={{color: 'grey'}}>{info.employment.key_skill}</span>
                    </div></td>
                    <td>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span>{info.address.street_address}</span>
                        <span>{info.address.city}</span>
                        <span>{info.address.state}</span>
                    </div>
                    </td>
                    <td>
                        <div style={{display: 'flex'}}>
                        <button>edit</button>
                        <button>delete</button>
                        </div>
                    </td>
                </tr>
                })}
                
            </tbody>
        </table>
    </div>
}
export default EmployeeTable