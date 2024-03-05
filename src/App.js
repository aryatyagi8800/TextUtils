import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setmode]=useState("light");

  const[alert,setalert]=useState(null);

  const showAlert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="#0f1730"
      showAlert("Dark mode has been Enabled","success");
      // document.title="TextUtils-Dark Mode";
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been Enabled","success");
      // document.title="TextUtils-Light Mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} >
          </Route>
        </Routes>
        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        <About/> */}
       
      </div>
      </Router>
    </>
  );
}

export default App;
