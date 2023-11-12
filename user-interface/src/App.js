import './App.css';
import { useEffect,useState } from 'react';
import RowComponent from './RowComponent';


function App() {

  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("http://34.125.250.172:5000/jobApps",{
      method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userId": "123",
      "emailId": "test@gmail.com",
      "skip": 0,
      "limit": 10,
      "sortfields": {
      "createdDate": -1
      }
      })}).then(jsonData => jsonData.json())
      .then(data => setData(data))
    document.title = 'Job Tracker';
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Job Tracker Table
        </h1>
      </header>
      <table className = 'table'>
        <thead>
          <tr className='first'>
            <th scope ="col" className = 'th'>Email Id</th>
            <th scope ="col" className = 'th'>Company</th>
            <th scope ="col" className = 'th'>Website</th>
            <th scope ="col" className = 'th'>Position</th>
            <th scope ="col" className = 'th'>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>(<RowComponent key={index} rowData={item}/>))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
