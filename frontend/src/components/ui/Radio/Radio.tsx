import React from "react";
import "./styles.css";

interface RadioProps {
  keys: string[];
  setSol: (sol: string) => void;
  selectedSol: string | null;
}

const Radio: React.FC<RadioProps> = ({ keys, setSol, selectedSol }) => {
  return (
    <div className="radio-inputs">
      {keys.map((key) => (
        <label key={key} className="radio">
          <input
            type="radio"
            name="radio"
            checked={selectedSol === key}
            onChange={() => {
              setSol(key);
            }}
          />
          <span className="name font-normal text-[13px]">{key}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
