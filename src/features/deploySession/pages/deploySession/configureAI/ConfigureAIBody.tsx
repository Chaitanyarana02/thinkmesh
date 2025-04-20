import { Search } from "lucide-react";
import { useState } from "react";
import CheckBox from "../../../../checkbox/CheckBox";
import RadioButtonAI from "../../../../radioButton/RadioButtonAI";
import AccordionSection from "../../../../accordion/AccordionSection";

const CheckboxList1 = () => {
  const dummyCheckboxes = [
    { id: "1", label: "Vision Language Models", count: 19 },
    { id: "2", label: "Segmentation", count: 19 },
    { id: "3", label: "Object Detection", count: 19 },
    { id: "4", label: "Monocular Depth", count: 19 },
    { id: "5", label: "Tracking", count: 19 },
    { id: "6", label: "Visual Odometry / SLAM", count: 19 },
    { id: "7", label: "Safety", count: 19 },
    { id: "8", label: "Vision Language Action Models", count: 19 },
    { id: "9", label: "Matching", count: 19 },
    { id: "10", label: "Optical Flow", count: 19 },
  ];

  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col gap-3">
      {
        dummyCheckboxes.map((checkbox) => (
          <div className="flex items-start" key={checkbox.id}>
            <CheckBox id={checkbox.id} label={checkbox.label} checked={checkedItems.includes(Number(checkbox.id))} onChange={() => handleCheckboxChange(Number(checkbox.id))} />
            <div className="ml-auto text-[#000F09] text-xs font-semibold bg-[#F3F3F3] px-2 rounded-xl py-1">{checkbox.count}</div>
          </div>
        ))
      }
    </div>
  );
};

const CheckboxList2 = () => {
  const dummyCheckboxes = [
    { id: "11", label: "Text Recognition", count: 1 },
    { id: "12", label: "Visual Servoing", count: 1 },
  ];

  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col gap-3">
      {
        dummyCheckboxes.map((checkbox) => (
          <div className="flex items-start" key={checkbox.id}>
            <CheckBox id={checkbox.id} label={checkbox.label} checked={checkedItems.includes(Number(checkbox.id))} onChange={() => handleCheckboxChange(Number(checkbox.id))} />
            <div className="ml-auto text-[#000F09] text-xs font-semibold bg-[#F3F3F3] px-2 rounded-xl py-1">{checkbox.count}</div>
          </div>
        ))
      }
    </div>
  );
};

const CheckboxList3 = () => {
  const dummyCheckboxes = [
    { id: "14", label: "Image", count: 1 },
  ];

  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col gap-3">
      {
        dummyCheckboxes.map((checkbox) => (
          <div className="flex items-start" key={checkbox.id}>
            <CheckBox id={checkbox.id} label={checkbox.label} checked={checkedItems.includes(Number(checkbox.id))} onChange={() => handleCheckboxChange(Number(checkbox.id))} />
            <div className="ml-auto text-[#000F09] text-xs font-semibold bg-[#F3F3F3] px-2 rounded-xl py-1">{checkbox.count}</div>
          </div>
        ))
      }
    </div>
  );
};

const ConfigureAIBody = ({ onNext, onBack }: { onNext: () => void, onBack: () => void }) => {
  return (
    <div>
      <div className="w-full">
        <div className="flex gap-2 xl:gap-10 flex-col xl:flex-row">
          <div className="w-full xl:w-[323px] h-auto xl:h-[calc(100vh-216px)]">
            <div className="relative w-full md:max-w-xs mt-0 xl:mt-3 h-[40px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999F9D] w-4 h-4" />
              <input
                type="text"
                placeholder="Search AI models..."
                className="w-full h-full pl-10 pr-3 py-1.5 text-sm border border-[#C8C9C866] rounded-md 
          focus:outline-none focus:ring-1 focus:ring-gray-400 
          placeholder:text-[#000F0966]"
              />
            </div>

            <div className="border border-[#C8C9C866] rounded-md mt-3 xl:mt-8 p-4 h-[180px] xl:h-[calc(100%-90px)] overflow-y-auto">
              <AccordionSection title="Perception">
                <CheckboxList1 />
              </AccordionSection>

              <AccordionSection title="Navigation">
                <CheckboxList2 />
              </AccordionSection>

              <AccordionSection title="Generation" className="mb-0">
                <CheckboxList3 />
              </AccordionSection>
            </div>
          </div>
          <div className="w-full xl:w-[calc(100%-363px)] h-auto xl:h-[calc(100vh-233px)] overflow-auto mt-3">
            <div className="border border-[#C8C9C866] rounded-md mt-0 p-4">
              <div className="text-lg text-[#000F09] font-bold mb-3">Perception</div>
              <div className="text-[#475467] text-sm mb-5">Vision Language Models</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="Molmo"
                  value="molmo"
                  text="General purpose vision-language model"
                  disabled={false}
                  checked={false}
                />
                <RadioButtonAI
                  label="MiniCPM v2.6"
                  value="MiniCPM"
                  text="Compact and efficient vision-language model"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="Moondream"
                  value="Moondream"
                  text="Specialized for lunar and space imagery"
                  disabled={false}
                  checked={false}
                />
                <RadioButtonAI
                  label="LLaVA"
                  value="LLaVA"
                  text="Compact and efficient vision-language model"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="Video LLaVA"
                  value="Moondream"
                  text="Vision-language model specialized for video analysis"
                  disabled={false}
                  checked={false}
                />
                <RadioButtonAI
                  label="LLaVANeXT"
                  value="LLaVA"
                  text="Advanced version of LLaVA with enhanced capabilities"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
              </div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Segmentation</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="Segment Anything 2"
                  value="molmo"
                  text="Advanced zero-shot image segmentation"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="GroundedSAM"
                  value="MiniCPM"
                  text="Graunded segment anything model"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="OWLSAM"
                  value="Moondream"
                  text="Open-world segmentation model"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="CLIPSeg"
                  value="LLaVA"
                  text="CLIP-based segmentation model"
                  disabled={false}
                  checked={false}
                />
                <RadioButtonAI
                  label="OpenSEED"
                  value="LLaVA"
                  text="Open-sourse segmentation model"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="OneFormer"
                  value="Moondream"
                  text="Universal image segmentation model"
                  disabled={false}
                  checked={false}
                />
                <RadioButtonAI
                  label="LSeg"
                  value="LLaVA"
                  text="Language-driven semantic segmantation"
                  disabled={false}
                  checked={false}
                />
                <RadioButtonAI
                  label="Grounded Segment Anything 2"
                  value="Moondream"
                  text="Improved grounded segment anything model"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
              </div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Object Detection</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="GroundingDINO"
                  value="molmo"
                  text="Grounded detection transformer"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="OWLv2"
                  value="MiniCPM"
                  text="Open-world object detection"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="RT-DETR"
                  value="Moondream"
                  text="Real-time detection transformer"
                  disabled={false}
                  checked={false}
                />
              </div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Monocular Depth</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="Marigold-E2E-FT"
                  value="molmo"
                  text="End-to-end fine-tuned depth estimation"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="MiDaS"
                  value="MiniCPM"
                  text="Robust monocular depth estimation"
                  disabled={false}
                  checked={false}
                />
                <RadioButtonAI
                  label="Depth Anything"
                  value="Moondream"
                  text="Zero-shot depth estimation model"
                  disabled={false}
                  checked={false}
                />
                <RadioButtonAI
                  label="Depth Anything V2"
                  value="Moondream"
                  text="Improved zero-shot depth estimation"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="Metric 3D"
                  value="Moondream"
                  text="Metric-scale 3D perception"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="ZoeDepth"
                  value="Moondream"
                  text="Zero-shot depth estimation"
                  disabled={false}
                  checked={false}
                />
              </div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Tracking</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="MFT"
                  value="molmo"
                  text="Multi-feature tracking"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="CoTracker"
                  value="MiniCPM"
                  text="Multi-object tracking model"
                  disabled={false}
                  checked={false}
                />
              </div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Visual Odometry / SLAM</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="DPV-SLAM"
                  value="molmo"
                  text="Dense point-cloud visual SLAM"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
                <RadioButtonAI
                  label="DPVO"
                  value="MiniCPM"
                  text="Deep visual odometry"
                  disabled={false}
                  checked={false}
                />
              </div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Safety</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="Time to Collision"
                  value="MiniCPM"
                  text="Collision prediction model"
                  disabled={false}
                  checked={false}
                />
              </div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Visual Odometry / SLAM</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="OpenVLA"
                  value="MiniCPM"
                  text="Open-source vision-language action model"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
              </div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Matching</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="LightGlue"
                  value="MiniCPM"
                  text="Lightweight feature matching"
                  disabled={false}
                  checked={false}
                />
              </div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Optical Flow</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="UniMatch"
                  value="MiniCPM"
                  text="Unified matching for optical flow"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
              </div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Text Recognition</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="MGP-STR"
                  value="MiniCPM"
                  text="Multi-granularity prediction for scene text recognition"
                  disabled={false}
                  checked={false}
                />
              </div>
            </div>
            <div className="border border-[#C8C9C866] rounded-md mt-6 p-4">
              <div className="text-lg text-[#000F09] font-bold mb-3">Navigation</div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Visual Servoing</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="Visual Servoing"
                  value="MiniCPM"
                  text="Camera-based control for robot manipulation"
                  disabled={false}
                  checked={false}
                />
              </div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Inspection</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="Inspection"
                  value="MiniCPM"
                  text="Visual inspection model for defect detection"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
              </div>
            </div>
            <div className="border border-[#C8C9C866] rounded-md mt-6 p-4">
              <div className="text-lg text-[#000F09] font-bold mb-3">Generation</div>
              <div className="text-[#475467] text-sm mb-5 mt-6">Image</div>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                <RadioButtonAI
                  label="Stable Diffusion"
                  value="MiniCPM"
                  text="Text-to-image generation model"
                  tag="Premium"
                  disabled={true}
                  checked={false}
                />
              </div>
            </div>
          </div>
        </div>
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
          Launch
        </button>
      </div>
    </div>
  );
};

export default ConfigureAIBody;
