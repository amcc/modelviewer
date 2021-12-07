// import logo from "./logo.svg";
import "./App.css";
import "@google/model-viewer";

function App() {
  return (
    <div className="App">
      {/* 
      This is a very big slow model
      <model-viewer
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="/models/NeilArmstrong.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="/models/moon_1k.hdr"
        poster="/models/NeilArmstrong.webp"
        seamless-poster
        shadow-intensity="1"
        camera-controls
      ></model-viewer> */}

      <model-viewer
        src="/models/Astronaut.glb"
        ios-src=""
        poster="/models/astronaut.png"
        alt="A 3D model of an astronaut"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
        ar-modes="webxr scene-viewer quick-look"
      ></model-viewer>
    </div>
  );
}

export default App;
