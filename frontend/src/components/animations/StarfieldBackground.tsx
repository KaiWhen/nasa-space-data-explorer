import { memo } from "react";
import Starfield from "react-starfield";

const StarfieldBackground = memo(() => (
  <div className="fixed inset-0 -z-10">
    <Starfield
      starCount={2000}
      starColor={[255, 255, 255]}
      speedFactor={0.05}
      backgroundColor="black"
    />
  </div>
));

export default StarfieldBackground;
