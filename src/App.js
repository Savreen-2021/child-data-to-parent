import React, { useEffect ,useState} from 'react';
import './App.css'
import Users from './Users';
const App = () =>{
  useEffect(()=>{
   
  },[]);

   const handleApiData=(data)=>{
    saveUserData(data);
 }

 const [ allUserData , saveUserData ] = useState([]);

  return(
    <div>
      <Users onSendData={(data)=>handleApiData(data)}/>
  
      <div>
      {
                allUserData.map((object,index)=>{
                 return(
                  <div >
                     <p>{object.name} , {object.email}</p>
                     </div>
               
                 )
                })
            }
      </div>
      
    </div>
  )
}
export default App;

