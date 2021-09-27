import './App.css';
//hook
import {FetchDataHook} from './hook.js'
//components
import Weather from './components/weather';

function App() {

  const {data}=FetchDataHook();

  return (
    <div className="App">
        {(typeof data.main !='undefined') ? (<Weather weatherData={data}/>)
        : (<div>Something went wrong...</div>)
        }
    </div>
  );
}

export default App;
