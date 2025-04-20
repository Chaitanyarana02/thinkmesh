import React, { useState } from "react";

type RadioProps = {
  label: string;
  value: string;
  checked: boolean;
};

const RadioButton: React.FC<RadioProps> = ({ label, value, checked }) => {
  const [radioCheck, setRadioCheck] = useState(checked);

  const handleChange = () => {
    setRadioCheck((prev) => !prev);
  };

  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        value={value}
        checked={radioCheck}
        onChange={handleChange}
        className="appearance-none h-[17px] w-[17px] checked:ml-1 checked:h-3 checked:w-3 rounded-full border border-[#C8C9C866] checked:ring-1 checked:ring-offset-2  checked:bg-[#28F2A1] checked:ring-[#28F2A1] transition-all"
      />
      <span className="text-sm text-[#000F09] text-[15px]">{label}</span>
    </label>
  );
};

export default RadioButton;
