import React, { useState } from "react";

type RadioProps = {
	label: string;
	text: string;
	value: string;
	checked: boolean;
	disabled: boolean;
	tag?: string;
};

const RadioButtonAI: React.FC<RadioProps> = ({ label, value, text, checked, tag, disabled }) => {
	const [radioCheck, setRadioCheck] = useState(checked);

	const handleChange = () => {
		setRadioCheck((prev) => !prev);
	};

	return (
		<label className={`border border-[#00000014] rounded-md p-2 py-4 inline-flex flex-col items-start gap-2 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
			<div className="flex items-center gap-2 w-full">
				<div className="min-w-[25px]">
					<input
						type="radio"
						value={value}
						checked={radioCheck}
						onChange={handleChange}
						className="appearance-none h-[17px] w-[17px] checked:ml-1 checked:h-3 checked:w-3 rounded-full border border-[#C8C9C866] checked:ring-1 checked:ring-offset-2  checked:bg-[#28F2A1] checked:ring-[#28F2A1] transition-all"
					/>
				</div>
				<div className={`flex flex-col gap-3 w-full`}>
					<div className="flex items-center gap-2 justify-between w-full">
						<span className={`text-sm text-[#000F09] font-bold ${tag ? 'mt-0' : 'mt-[2px]'}`}>{label}</span>
						{tag && <div className="bg-[#F5F5F5] py-1 px-4 rounded-xl text-[#475467] text-sm">{tag}</div>}
					</div>
					<div className="text-sm text-[#475467]">{text}</div>
				</div>
			</div>
		</label>
	);
};

export default RadioButtonAI;
