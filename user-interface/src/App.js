import './App.css';
import { useEffect,useState } from 'react';
import RowComponent from './RowComponent';
function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    // apiCall.then(jsonData => setData(jsonData)) 
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Job Tracker Table
        </h1>
      </header>
      <table className = 'table'>
        <tr>
          <th scope ="col" className = 'th'>Email Id</th>
          <th scope ="col" className = 'th'>Company</th>
          <th scope ="col" className = 'th'>Website</th>
          <th scope ="col" className = 'th'>Position</th>
          <th scope ="col" className = 'th'>Timestamp</th>
        </tr>
      </table>
    </div>
  );
}

export default App;
