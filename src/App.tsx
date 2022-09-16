import React, {useState, useEffect} from 'react';
import './App.css';
import DonutChart from 'react-donut-chart';
import donut_data from './components/donut_data.json'
import table_data from './components/table_data.json'

function App() {
  
  const [value,setValue] = useState("");
  const [result,setResult] = useState([{
    case_status : "", 
    case_id : 0
  }]);

  useEffect(() => {
    if(value=="")
    setResult([...table_data]);
    else{
      const filtered = table_data.filter(case_status => {
        return case_status.case_status === value;
      });
      setResult([...filtered]);
    }
  },[value]);

  return (
    <div className="App">

      <DonutChart
        data={donut_data}
        onClick={(item, toggled) =>          
          toggled
            ? setValue(item.label)
            : setValue("")           
        }
      />
      <table>
        <tr>
          <th>
            Case Status
          </th>
          <th>
            Case Id
          </th>
        </tr>
        {result.map(filteredName => (
          <>
            <tr>
              <td>
              {filteredName.case_status}
              </td>
              <td>
              {filteredName.case_id}
              </td>
            </tr>
          </>
          
        ))
        }
      </table>
        
    </div>
  );
}

export default App;
