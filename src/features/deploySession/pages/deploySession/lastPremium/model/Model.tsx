export const Icon = ({ iconName }: { iconName: string }) => {
    if (iconName == "user") {
        return (
            <svg className="w-4 h-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16699 16.6668V15.8335C4.16699 14.2864 4.78157 12.8027 5.87554 11.7087C6.9695 10.6147 8.45323 10.0002 10.0003 10.0002M10.0003 10.0002C11.5474 10.0002 13.0312 10.6147 14.1251 11.7087C15.2191 12.8027 15.8337 14.2864 15.8337 15.8335V16.6668M10.0003 10.0002C10.8844 10.0002 11.7322 9.64897 12.3573 9.02385C12.9825 8.39873 13.3337 7.55088 13.3337 6.66683C13.3337 5.78277 12.9825 4.93493 12.3573 4.30981C11.7322 3.68469 10.8844 3.3335 10.0003 3.3335C9.11627 3.3335 8.26842 3.68469 7.6433 4.30981C7.01818 4.93493 6.66699 5.78277 6.66699 6.66683C6.66699 7.55088 7.01818 8.39873 7.6433 9.02385C8.26842 9.64897 9.11627 10.0002 10.0003 10.0002Z" stroke="#000F09" stroke-opacity="0.4" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    }
    if (iconName == "mail")
        return (
            <svg className="w-4 h-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8337 3.3335H4.16699C3.50395 3.3335 2.86807 3.59689 2.39923 4.06573C1.93038 4.53457 1.66699 5.17045 1.66699 5.8335V14.1668C1.66699 14.8299 1.93038 15.4658 2.39923 15.9346C2.86807 16.4034 3.50395 16.6668 4.16699 16.6668H15.8337C16.4967 16.6668 17.1326 16.4034 17.6014 15.9346C18.0703 15.4658 18.3337 14.8299 18.3337 14.1668V5.8335C18.3337 5.17045 18.0703 4.53457 17.6014 4.06573C17.1326 3.59689 16.4967 3.3335 15.8337 3.3335ZM15.2753 5.00016L10.0003 8.9585L4.72533 5.00016H15.2753ZM15.8337 15.0002H4.16699C3.94598 15.0002 3.73402 14.9124 3.57774 14.7561C3.42146 14.5998 3.33366 14.3878 3.33366 14.1668V6.04183L9.50033 10.6668C9.64457 10.775 9.82002 10.8335 10.0003 10.8335C10.1806 10.8335 10.3561 10.775 10.5003 10.6668L16.667 6.04183V14.1668C16.667 14.3878 16.5792 14.5998 16.4229 14.7561C16.2666 14.9124 16.0547 15.0002 15.8337 15.0002Z" fill="#000F09" fill-opacity="0.4" />
            </svg>
        )
    if (iconName == "website")
        return (
            <svg className="w-4 h-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7087 9.99984C17.7087 7.95546 16.8965 5.99482 15.4509 4.54922C14.0053 3.10363 12.0447 2.2915 10.0003 2.2915M17.7087 9.99984H2.29199M17.7087 9.99984C17.7087 12.0442 16.8965 14.0049 15.4509 15.4505C14.0053 16.896 12.0447 17.7082 10.0003 17.7082M10.0003 2.2915C7.95595 2.2915 5.9953 3.10363 4.54971 4.54922C3.10412 5.99482 2.29199 7.95546 2.29199 9.99984M10.0003 2.2915C9.58366 2.2915 6.66699 5.74234 6.66699 9.99984C6.66699 14.2573 9.58366 17.7082 10.0003 17.7082M10.0003 2.2915C10.417 2.2915 13.3337 5.74234 13.3337 9.99984C13.3337 14.2573 10.417 17.7082 10.0003 17.7082M2.29199 9.99984C2.29199 12.0442 3.10412 14.0049 4.54971 15.4505C5.9953 16.896 7.95595 17.7082 10.0003 17.7082" stroke="#000F09" stroke-opacity="0.4" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    if (iconName == "upload")
        return (
            <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3.5" y="3" width="40" height="40" rx="20" fill="#F2F4F7" />
                <rect x="3.5" y="3" width="40" height="40" rx="20" stroke="#F9FAFB" stroke-width="6" />
                <path d="M20.167 26.3333L23.5003 23M23.5003 23L26.8337 26.3333M23.5003 23V30.5M30.167 26.9524C31.1849 26.1117 31.8337 24.8399 31.8337 23.4167C31.8337 20.8854 29.7816 18.8333 27.2503 18.8333C27.0682 18.8333 26.8979 18.7383 26.8054 18.5814C25.7187 16.7374 23.7124 15.5 21.417 15.5C17.9652 15.5 15.167 18.2982 15.167 21.75C15.167 23.4718 15.8632 25.0309 16.9894 26.1613" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
}
export default function Modal({ isOpen, onClose }: { isOpen: boolean, onClose: any }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D12109E]">
            <div className="relative z-50 bg-white rounded-xl p-5 w-[90%] max-w-md mx-auto shadow-xl">


                <div className="text-lg font-bold mb-4 flex items-center justify-between">Unlock Premium Features
                    <button onClick={onClose} className="text-gray-500 hover:text-black text-xl">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-3 h-3">
                            <path fillRule="evenodd" d="M10 8.586L15.657 2.93a1 1 0 111.414 1.414L11.414 10l5.657 5.657a1 1 0 01-1.414 1.414L10 11.414l-5.657 5.657a1 1 0 01-1.414-1.414L8.586 10 2.93 4.343a1 1 0 011.414-1.414L10 8.586z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div className="text-[#475467] text-sm mb-2">
                    Connect your wallet to pay with USDT and unlock all premium robots, scenes, sensors, and AI models.
                </div>
                <div className="text-[#000F09] text-sm mb-3 font-bold mt-3">
                    Plan Features:
                </div>
                <div className="text-[#475467] text-sm mb-2">
                    <div>— Access to all premium robots</div>
                    <div>— Unlock all environments and scenes</div>
                    <div>— Advanced sensors (LiDAR, depth cameras)</div>
                    <div>— Latest AI models for computer vision</div>
                    <div>— Higher resolution simulations</div>
                </div>

                <div className="text-base md:text-xl font-bold p-3 bg-[#F5F5F5] rounded-md mt-4">
                    <div className="flex justify-between items-center">
                        <div>Premium Plan</div>
                        <div>$49.99 / month</div>
                    </div>
                    <div className="text-[#000F0966] text-[15px] mt-2">Pay with USDT</div>
                </div>

                <div className="space-y-6 mt-6">
                    <div className="relative">
                        <label className="text-[#000F09] text-sm">Wallet Address:</label>
                        <input
                            type="text"
                            placeholder="Website"
                            className="w-full pl-3 pr-3 py-2 border rounded-md text-sm outline-none"
                        />
                    </div>
                    <button className="w-full font-sans bg-[#28F2A1] text-black font-bold py-2 rounded-md border-custom">
                        Save Info
                    </button>
                </div>
            </div>
        </div>
    );
}
