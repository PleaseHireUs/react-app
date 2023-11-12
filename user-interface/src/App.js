import './App.css';
import { useEffect,useState } from 'react';
import RowComponent from './RowComponent';
function App() {
  const [data,setData] = useState([{"Email id":123123,"Company":"Bob","Website":"abc.com","Position":"SDE","Timestamp":"123123123"},
  {"Email id":32123123,"Company":"Basdfjalsdkfjalsdfj","Website":"abasdfjasdjfhc.com/asdfasdfasdf/asdfasdfasdf/asdfasdfasdfdf","Position":"SDE","Timestamp":"12312asdfasdf3123"},
  {"Email id":32123123,"Company":"Basdfjalsdkfjalsdfj","Website":"abasdfjasdjfhc.com/asdfasdfasdf/asdfasdfasdf/asdfasdfasdfdf","Position":"SDE","Timestamp":"12312asdfasdf3123"}]);
  useEffect(()=>{
    // apiCall.then(jsonData => setData(jsonData)) 
    document.title = 'Job Tracker';
  })
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
