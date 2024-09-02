import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
import { div } from "three/webgpu";

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className="navbar flex gap-5 py-10 absolute top-0 left-1/2 -translate-x-1/2">
        {["iphone", "ipad", "ios", "mac", "products", "services"].map((e) => (
          <a href="" className="text-white font-[500] text-md capitalize">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute text-white flex flex-col items-center top-40 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
        <h3 className="masked text-7xl  font-weight-[700]">macbook pro.</h3>
        <h5 className="text-xl">oh so pro !</h5>
        <p className="text-center w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ab
          sint beatae{" "}
        </p>
      </div>
      <Canvas camera={{ fov: 16.5, position: [0, -5, 220] }}>
        <OrbitControls />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
