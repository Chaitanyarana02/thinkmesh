// src/components/layout/LayoutWrapper.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function LayoutWrapper() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <main className="relative flex-1 p-4 md:p-6 bg-white relative overflow-hidden ">
        <div className="absolute z-[-1] -left-[230px]  -top-10 hidden">
          <svg width="622" height="707" viewBox="0 0 622 707" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_52_132)">
              <path d="M212.601 331.947C212.601 229.193 46.6823 134.768 246.651 145.894C349.569 145.894 433 229.193 433 331.947C433 434.701 349.569 518 246.651 518C143.734 518 212.601 434.701 212.601 331.947Z" fill="url(#paint0_linear_52_132)" fill-opacity="0.3" />
            </g>
            <defs>
              <filter id="filter0_f_52_132" x="-40.2" y="-43.2" width="661.4" height="749.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="94.1" result="effect1_foregroundBlur_52_132" />
              </filter>
              <linearGradient id="paint0_linear_52_132" x1="416.284" y1="462.988" x2="148.714" y2="144.239" gradientUnits="userSpaceOnUse">
                <stop stop-color="#5BFFAA" />
                <stop offset="1" stop-color="#7ADEFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute -z-1 -right-[230px]  -bottom-0 hidden">
          <svg width="622" height="407" viewBox="0 0 622 707" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_52_132)">
              <path d="M212.601 331.947C212.601 229.193 46.6823 134.768 246.651 145.894C349.569 145.894 433 229.193 433 331.947C433 434.701 349.569 518 246.651 518C143.734 518 212.601 434.701 212.601 331.947Z" fill="url(#paint0_linear_52_132)" fill-opacity="0.3" />
            </g>
            <defs>
              <filter id="filter0_f_52_132" x="-40.2" y="-43.2" width="661.4" height="749.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="94.1" result="effect1_foregroundBlur_52_132" />
              </filter>
              <linearGradient id="paint0_linear_52_132" x1="416.284" y1="462.988" x2="148.714" y2="144.239" gradientUnits="userSpaceOnUse">
                <stop stop-color="#5BFFAA" />
                <stop offset="1" stop-color="#7ADEFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="z-50">
          <Outlet />

        </div>
      </main>
    </div>
  );
}
