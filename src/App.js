
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';


import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';

function App(props) {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
setAlert({
  msg: message,
  tp:type
})
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Hs Been Enabled", "success")
      document.title = 'Textutils - Dark Mode';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Hs Been Enabled", "success" )
      document.title = 'Textutils - Light Mode';

    }
  }
  return (
<>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* <Route exact path="/About" element={}/> */}
            
          {/* <About mode={mode} /> */}
          <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          {/* <Route exact path="/" element={}/> */}
            
          
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </> 
  );
}

export default App;
