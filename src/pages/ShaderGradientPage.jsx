import Navbar from "../components/Navbar";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

export default function ShaderGradientPage() {
  return (
    <>
      <Navbar />

      <div
        style={{
          height: "calc(100svh - 70px)",
          overflow: "hidden",
          zIndex: -1,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: 50,
            margin: 0,
            overflow: "hidden",

            height: "100%",
            width: "100%",
          }}
        >
          <h1
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              color: "white",
              fontSize: "8rem",
              fontWeight: "normal",
              textTransform: "uppercase",
            }}
          >
            Shader Gradient
          </h1>
        </div>
        <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          style={{
            top: 0,
            width: "100%",
          }}
        >
          <ShaderGradient brightness={3.6} uSpeed={0.2} />
        </ShaderGradientCanvas>
      </div>
    </>
  );
}
