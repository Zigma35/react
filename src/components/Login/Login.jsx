import Form from 'react-bootstrap/Form';
import {useState} from "react";
import Button from "react-bootstrap/Button";


function Login({onSubmitForm}) {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] =useState("");
    const [isDisabled, setIsDisabled] = useState("true");
    const correoVal = "a@a.cl";
    const passwordVal= "123";


    const handlerOnSubmit =(e)=>{
      e.preventDefault();
      if(correo === correoVal && password === passwordVal){
        onSubmitForm(true);
      }
      return onSubmitForm(false);
    };

    const handlerInputs = (e) => {
        setPassword(e.target.value);
        
        if (correo !=="" && password !==""){
            setIsDisabled(false);
        }
    };

    
    return (
    <form onSubmit={handlerOnSubmit}>
      <Form.Label>Email</Form.Label>
      <Form.Control
       type="text"
       id="email"
       autoComplete='off'
       onChange={(e) => setCorreo(e.target.value)}
       />
      <Form.Label>Password</Form.Label>
      <Form.Control 
      type="password" 
      id="password"
      autoComplete='off'
      onChange={(e) => handlerInputs(e)}
      />
      <br />
      <Button type="submit" variant="outline-dark" disabled={isDisabled}>
        Enviar
        </Button>
    </form>
  );
  
}

export default Login;
