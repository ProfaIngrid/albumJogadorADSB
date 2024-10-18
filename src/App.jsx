import Jogador from "./Jogador";
import Pedro from "./img/pedro.webp";
import Vini from "./img/vini.jpg";
import './App.css';

function App() {
  return (
    <div className="div-principal-jog">
      <Jogador nome="Pedro" posicao="Atacante" camisa='9' time="Flamengo" imagem={Pedro}/>
      <Jogador nome="Vini Jr."  posicao="Meio campo" camisa='18' time="Real Madrid" imagem={Vini}/>
    </div>
  )
}

export default App
