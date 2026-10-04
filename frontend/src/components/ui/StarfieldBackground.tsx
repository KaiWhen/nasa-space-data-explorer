import { memo } from "react";
import StarfieldModule from "react-starfield";

const StarfieldComponent =
  (StarfieldModule as { default?: typeof StarfieldModule }).default ??
  StarfieldModule;

const StarfieldBackground = memo(() => (
  <div className="fixed inset-0 -z-10">
    <StarfieldComponent
      starCount={2000}
      starColor={[255, 255, 255]}
      speedFactor={0.05}
      backgroundColor="black"
    />
  </div>
));

export default StarfieldBackground;
