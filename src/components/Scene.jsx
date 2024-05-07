import {  OrbitControls } from "@react-three/drei"
import Women from "./Model"

const Scene = () => {
    
    return (
        <>

        <ambientLight />
        <directionalLight 
            position={[-5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            />

        {/* <spotLight 
            position={[5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />
        
        <spotLight 
            position={[-5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        /> */}
        
        <OrbitControls enableZoom={false}  />
        
        <group position={[0,-1,0]}>

            <Women/>
        </group>
            <mesh
                rotation={[-0.5 * Math.PI, 0, 0]}
                position={[0, -1, 0]}
                receiveShadow
            >
                <planeGeometry args={[10,10,1, 1]}/>
                <shadowMaterial transparent opacity={0.2} />
            </mesh>

        </>
    )
}

export default Scene
