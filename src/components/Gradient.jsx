// function Gradient() {
//   const { scene } = useThree();

//   useFrame(() => {
//     const mesh = scene.getObjectByName("shadergradient-mesh");

//     if (mesh.material.userData.uNoiseStrength) {
//       mesh.material.userData.uNoiseStrength.value = 10;
//     }
//   });

//   return (
//     <ShaderGradient
//       cDistance={32}
//       cPolarAngle={90}
//       color1="#ff5005"
//       color2="#dbba95"
//       color3="#d0bce1"
//       animate="on"
//       zoomOut
//       type="plane"
//       positionZ={-10}
//       positionX={0}
//       positionY={0}
//       rotationX={0}
//       rotationZ={90}
//     />
//   );
// }

// export default Gradient;
