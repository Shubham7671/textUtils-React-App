import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert1 from './components/Alert1';
import { useState } from 'react';






function App() {

  const [mode, setMode] = useState(false)
  const [alert, setalert] = useState(null)

  function capitalize(word) {
    let temp = word.charAt(0).toUpperCase() + word.slice(1)
    return temp;
  }


  function showAlert(type, content) {
    
    setalert({
      type: type,
      content: capitalize(content)
    })
    setTimeout(() => {
      setalert(null)
    }, 1500)
  }



  function checkModeStatus(e) {
    setMode(e.target.checked);
    if (e.target.checked) {
      showAlert("success", "enabled Dark Mode")
    } else {
      showAlert("success", "Disaabled Dark Mode")
    }
  }





  return (
    <>
      <Navbar logo="myText.in " Mode={mode} checkMode={checkModeStatus} />
      <Alert1 Alert={alert} capitalize={capitalize} />
      <Textarea Mode={mode} func={showAlert} />
    </>
  );
}

export default App;
