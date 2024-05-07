import { Canvas } from "@react-three/fiber";
import InterFace from "./components/InterFace";
import Scene from "./components/Scene";

function App() {

  return (
    <main style={{width : "98vw" , height :"100vh" , background : "white"}}>


      <InterFace/>
      <Canvas camera={{
                fov :50,
                position : [ 1 , 0, 3]
            }} 
            shadows
            >
          <Scene/>
      </Canvas>
    </main>
  )
}

export default App
