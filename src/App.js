import './App.css';
import Header from "./components/header/Index";
import Card from "./components/card/Index";
import {image1, image2, image3} from "./assets/img";
import Footer from "./components/footer/Index";

function App() {
  
  return (
    <div className="App">
      < Header title={"Galeria de imagenes con react"} />
      < Card url= {image1} title="Foto 1" description="Techo muy bonito" />
      < Card url= {image2} title="Foto 2" description="Montaña nublada" />
      < Card url= {image3} title="Foto 3" description="Piedra oceanica" />
      <Footer text="Esto es una galeria de imagenes de paisajes con react" />
    </div>
  );
}


export default App;
