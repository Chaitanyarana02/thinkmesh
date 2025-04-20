import { useRef, useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionSection = ({ title, children, className }: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className={`mb-4 ${className}`}>
      <div
        className="flex items-center justify-between cursor-pointer border-b border-[#D9D9D9] pb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-lg text-[#000F09] font-bold">{title}</div>
        <div className="text-gray-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default AccordionSection;
