import { useEffect, useRef } from "react";
import { ContainerScene } from "./Scene.elements";
import { cleanUpScene, initScene } from "./Script";

const Scene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    initScene(mountRef);

    return () => {
      cleanUpScene();
    };
  }, []);

  return (
    <ContainerScene className='SceneContainer' ref={mountRef}></ContainerScene>
  );
};

export default Scene;
