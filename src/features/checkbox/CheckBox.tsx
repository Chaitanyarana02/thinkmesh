export interface CheckboxProps {
  disabled?: boolean;
  defaultChecked?: boolean;
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (id: string, checked: boolean) => void;
}

const CheckBox = ({ id, label, checked, onChange, ...props }: CheckboxProps) => {
  return (
    <div className="w-fit flex gap-3 items-center cursor-pointer relative">
      <input
        className="
                    peer relative appearance-none shrink-0 w-4 h-4 border-2 border-[#00000014] rounded-sm mt-0 bg-white
                    focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
                    checked:bg-white checked:border-2 checked:border-[#000F09]
                    disabled:border-steel-400 disabled:bg-steel-400 p-2
                "
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange?.(id, e.target.checked)}
        {...props}
      />
      <svg
        className="absolute w-4 h-5 mt-0 ml-0 pl-1 pointer-events-none hidden peer-checked:block stroke-[#3F3F46] outline-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label htmlFor={id} className="text-sm text-[#000F09] font-bold cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;