
export default function CameraTab() {
  return (
    <div>
      <div className="text-lg md:text-xl font-semibold text-[#000000] uppercase mb-3 flex items-center justify-between">Camera
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
          <path d="M18.3333 9.99984C18.3333 14.6023 14.6025 18.3332 10 18.3332C5.3975 18.3332 1.66666 14.6023 1.66666 9.99984C1.66666 5.39734 5.3975 1.6665 10 1.6665V3.33317C8.40377 3.33335 6.8606 3.90625 5.65096 4.94774C4.44132 5.98923 3.64551 7.43017 3.40819 9.00865C3.17086 10.5871 3.50778 12.1984 4.35769 13.5495C5.2076 14.9007 6.51409 15.902 8.03969 16.3715C9.56529 16.8411 11.2087 16.7477 12.6713 16.1083C14.1338 15.4688 15.3184 14.3259 16.0098 12.8871C16.7011 11.4484 16.8532 9.80933 16.4385 8.26792C16.0238 6.7265 15.0699 5.38503 13.75 4.48734V6.6665H12.0833V1.6665H17.0833V3.33317H15C16.0354 4.10895 16.8758 5.11539 17.4544 6.27262C18.0331 7.42985 18.334 8.70601 18.3333 9.99984Z" fill="#000F09" fill-opacity="0.4" />
        </svg>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <label className="text-[#000F09] text-[15px] font-medium">Width</label>
          <input type="text" name="" id="" placeholder="256" className="w-full mt-1 px-3 py-2 border rounded-md placeholder:text-[#000F0966] focus:outline-none focus:border-gray-400 border-[#C8C9C866]" />
        </div>
        <div>
          <label className="text-[#000F09] text-[15px] font-medium">Height</label>
          <input type="text" name="" id="" placeholder="256" className="w-full mt-1 px-3 py-2 border rounded-md placeholder:text-[#000F0966] focus:outline-none focus:border-gray-400 border-[#C8C9C866]" />
        </div>
        <div>
          <label className="text-[#000F09] text-[15px] font-medium">Field of View (deg)</label>
          <input type="text" name="" id="" placeholder="90" className="w-full mt-1 px-3 py-2 border rounded-md placeholder:text-[#000F0966] focus:outline-none focus:border-gray-400 border-[#C8C9C866]" />
        </div>
      </div>
    </div>
  )
}
