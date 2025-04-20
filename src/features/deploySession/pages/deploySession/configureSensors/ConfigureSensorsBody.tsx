import Tabs from "../../../../tabs/Tabs";
import CameraTab from "./CameraTab";
import SensorsTab from "./SensorsTab";

const tabData = [
  {
    label: <div className="flex justify-center md:justify-start items-center gap-2 font-medium">
      <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 12.1875C9.96701 12.1875 11.1562 10.9983 11.1562 9.53125C11.1562 8.06424 9.96701 6.875 8.5 6.875C7.03299 6.875 5.84375 8.06424 5.84375 9.53125C5.84375 10.9983 7.03299 12.1875 8.5 12.1875Z" stroke="CurrentColor" stroke-width="1.0625" strokeMiterlimit="10" />
        <path d="M4.11719 5.74609V5.01562H3.32031V5.74609" stroke="CurrentColor" stroke-width="1.0625" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.639 5.43664L10.7552 4.04012C10.5689 3.82297 10.3136 3.6875 10.0273 3.6875H6.97266C6.68645 3.6875 6.43111 3.82297 6.24484 4.04012L5.36098 5.43664C5.17471 5.65412 4.93465 5.8125 4.64844 5.8125H2.65625C2.37446 5.8125 2.10421 5.92444 1.90495 6.1237C1.70569 6.32296 1.59375 6.59321 1.59375 6.875V13.25C1.59375 13.5318 1.70569 13.802 1.90495 14.0013C2.10421 14.2006 2.37446 14.3125 2.65625 14.3125H14.3438C14.6255 14.3125 14.8958 14.2006 15.0951 14.0013C15.2943 13.802 15.4062 13.5318 15.4062 13.25V6.875C15.4062 6.59321 15.2943 6.32296 15.0951 6.1237C14.8958 5.92444 14.6255 5.8125 14.3438 5.8125H12.3848C12.0976 5.8125 11.8253 5.65412 11.639 5.43664Z" stroke="CurrentColor" stroke-width="1.0625" stroke-linecap="round" stroke-linejoin="round" />
      </svg> Camera</div>,
    content: <CameraTab />,
  },
  {
    label: <div className="flex justify-center md:justify-start items-center gap-2 font-medium">
      <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.50044 1.78476e-05C5.51286 0.0046618 3.60809 0.747406 2.20266 2.06584C0.797217 3.38427 0.00545769 5.17112 0.000507265 7.03566C-0.0111677 7.96069 0.178798 8.8782 0.558744 9.73188C0.93869 10.5856 1.5006 11.3574 2.20999 12L3.25998 11.015C2.69968 10.4949 2.25658 9.8744 1.95703 9.19042C1.65747 8.50645 1.50757 7.77295 1.51624 7.03354C1.51386 5.54574 2.14154 4.11798 3.26125 3.0643C4.38095 2.01061 5.90096 1.41731 7.48694 1.41488H7.50044C9.08643 1.41302 10.6083 2.00221 11.7312 3.05285C12.8541 4.1035 13.4862 5.52956 13.4884 7.01736V7.03284C13.4688 8.51987 12.8451 9.94386 11.7447 11.0143L12.7909 11.9993C13.8433 11.0185 14.5612 9.7664 14.8534 8.40202C15.1456 7.03765 14.9989 5.62259 14.4319 4.33661C13.8649 3.05063 12.9033 1.95176 11.6691 1.17961C10.4349 0.407465 8.98391 -0.00311962 7.50044 1.78476e-05ZM5.98846 7.19959L7.26794 8.45404L10.9894 4.47257L10.2327 3.70921L5.98846 7.19959Z" fill="CurrentColor" />
      </svg>
      Sensors
    </div>,
    content: <SensorsTab />,
  },
];

const ConfigureSensorsBody = ({ onNext, onBack }: { onNext: () => void, onBack: () => void }) => {

  return (
    <div>
      <div className="w-full">
        <Tabs tabs={tabData} />
      </div>

      <div className="flex items-center justify-between w-full mt-6">
        <button
          type="button"
          className="bg-[#000F09] text-[#F5F5F5] px-3 md:px-6 py-3 text-sm font-semibold rounded-md"
          onClick={onBack}
        >
          Back
        </button>
        <button
          type="button"
          className="bg-[#28F2A1] text-black px-3 md:px-6 py-3 text-sm font-semibold rounded-md"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ConfigureSensorsBody;
