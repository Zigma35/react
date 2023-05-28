import { useState } from 'react';
import './App.css';
import Alert from "./components/Alert/Alert";
import Login from "./components/Login/Login";
function App() {

    const [isValid, setIsValid] =useState ()
    const handlerSubmitResult = (e)=> {
    setIsValid(e);
  };

  console.log(isValid);
  return (
    <div className="App">
      <div className="App-header">Porfavor ingres sus credenciales para continuar</div>
      <h1>Inicio de sesion</h1>
      <Login onSubmitForm={(e) => handlerSubmitResult(e) }/>

      {isValid ? (
      <Alert 
      text={ isValid ? "Coincide" : "No Coinciden"}
      variant={isValid ? "Success" : "Danger"}
      />
    ) :null}
    </div>
  );
}


export default App;
