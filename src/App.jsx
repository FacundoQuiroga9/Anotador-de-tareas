import './styles/App.css';
import Logo from './componentes/Logo'
import Lista from './componentes/Lista.jsx';


function App() {
  return (
    <div className="aplicacion-tareas">
     <Logo/>
     <div className="tareas-lista-principal">
      <h1>Mis tareas</h1>
      <Lista/>
     </div>
    </div>
  );
}

export default App;
