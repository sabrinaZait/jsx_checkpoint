import logo from './logo.svg';
import './App.css';
import img from './img.jpg';
import myVideo from "./myVideo.mp4";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>

        <h1 class="title red">ZAIT Sabrina</h1>
        <h2 class="title red">Welcome to Diagonalley !!</h2>
        <button>Buy your sorcer's fournitures </button>
        <br />
        <img src={img} />
     </div>

     
     <video width="320" height="240" controls>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
          );
}

          export default App;
