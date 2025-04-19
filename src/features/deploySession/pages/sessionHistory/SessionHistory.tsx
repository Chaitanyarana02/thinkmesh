import { useEffect, useState } from "react";
import ConnectWallet from "../../../../components/layout/ConnectWallet";
export const Icon = ({ iconName }: { iconName: string }) => {
  if (iconName == "setting") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2945 9.01453C11.679 8.95374 11.0597 9.08469 10.5215 9.38945C9.98329 9.69421 9.55241 10.1579 9.28789 10.717C9.02336 11.2761 8.93811 11.9033 9.04382 12.5127C9.14952 13.1221 9.441 13.684 9.87836 14.1213C10.3157 14.5587 10.8776 14.8502 11.487 14.9559C12.0964 15.0616 12.7236 14.9763 13.2827 14.7118C13.8418 14.4473 14.3055 14.0164 14.6102 13.4782C14.915 12.94 15.0459 12.3207 14.9852 11.7052C14.9159 11.0151 14.6101 10.3703 14.1197 9.87995C13.6294 9.38958 12.9845 9.08384 12.2945 9.01453ZM19.518 12C19.5161 12.3261 19.4921 12.6517 19.4463 12.9745L21.5655 14.6367C21.6578 14.7132 21.7199 14.8199 21.741 14.9379C21.762 15.056 21.7405 15.1776 21.6803 15.2812L19.6755 18.75C19.6146 18.8527 19.5194 18.9305 19.4067 18.9699C19.2941 19.0093 19.1711 19.0076 19.0595 18.9652L16.9548 18.1177C16.8388 18.0714 16.7131 18.0547 16.589 18.0691C16.4649 18.0834 16.3462 18.1283 16.2438 18.1997C15.9225 18.4209 15.585 18.6174 15.2341 18.7875C15.1237 18.8411 15.0283 18.9211 14.9562 19.0203C14.8841 19.1196 14.8375 19.2351 14.8206 19.3566L14.5052 21.6014C14.4844 21.72 14.4232 21.8276 14.3319 21.906C14.2406 21.9844 14.1249 22.0287 14.0045 22.0312H9.99485C9.87651 22.0292 9.76239 21.9869 9.67131 21.9113C9.58022 21.8357 9.5176 21.7314 9.49375 21.6155L9.17875 19.3739C9.16106 19.2511 9.11329 19.1345 9.03969 19.0346C8.96609 18.9346 8.86894 18.8544 8.75688 18.8011C8.40632 18.6319 8.06993 18.4349 7.75094 18.2119C7.6488 18.1408 7.53058 18.0963 7.40693 18.0823C7.28328 18.0683 7.1581 18.0853 7.04266 18.1317L4.93844 18.9788C4.82693 19.0212 4.70401 19.023 4.59133 18.9837C4.47866 18.9444 4.38346 18.8666 4.3225 18.7641L2.31766 15.2953C2.25738 15.1917 2.23584 15.07 2.25687 14.952C2.27791 14.834 2.34014 14.7272 2.4325 14.6508L4.2236 13.2445C4.32172 13.1666 4.39884 13.0655 4.44796 12.9502C4.49707 12.835 4.51663 12.7093 4.50485 12.5845C4.48797 12.3891 4.47766 12.1941 4.47766 11.9986C4.47766 11.8031 4.4875 11.6109 4.50485 11.4197C4.51534 11.2957 4.49483 11.1711 4.44516 11.057C4.39549 10.9429 4.31822 10.843 4.22031 10.7662L2.43016 9.36C2.3393 9.28317 2.27837 9.17681 2.25806 9.05957C2.23775 8.94232 2.25934 8.82167 2.31906 8.71875L4.32391 5.25C4.38479 5.14734 4.47996 5.06946 4.59264 5.0301C4.70532 4.99074 4.82828 4.99242 4.93985 5.03484L7.04453 5.88234C7.1606 5.92856 7.28631 5.94525 7.41042 5.93094C7.53452 5.91662 7.65313 5.87174 7.75563 5.80031C8.07684 5.57912 8.41437 5.38262 8.76531 5.2125C8.87565 5.15887 8.97108 5.07891 9.04318 4.97966C9.11529 4.88042 9.16185 4.76494 9.17875 4.64344L9.49422 2.39859C9.51494 2.28004 9.57619 2.17236 9.6675 2.09396C9.75881 2.01555 9.87452 1.9713 9.99485 1.96875H14.0045C14.1229 1.9708 14.237 2.01309 14.3281 2.08867C14.4192 2.16425 14.4818 2.2686 14.5056 2.38453L14.8206 4.62609C14.8383 4.74894 14.8861 4.86551 14.9597 4.96544C15.0333 5.06537 15.1304 5.14557 15.2425 5.19891C15.5931 5.36805 15.9295 5.56509 16.2484 5.78813C16.3506 5.85919 16.4688 5.90373 16.5924 5.91772C16.7161 5.93172 16.8413 5.91473 16.9567 5.86828L19.0609 5.02125C19.1725 4.97879 19.2954 4.97704 19.408 5.01631C19.5207 5.05558 19.6159 5.13336 19.6769 5.23594L21.6817 8.70469C21.742 8.80832 21.7635 8.92999 21.7425 9.04802C21.7215 9.16604 21.6592 9.27278 21.5669 9.34922L19.7758 10.7555C19.6772 10.8331 19.5997 10.9342 19.5501 11.0494C19.5006 11.1647 19.4807 11.2905 19.4922 11.4155C19.5077 11.6095 19.518 11.8045 19.518 12Z" stroke="#475467" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    );
  }
  if (iconName == "wallet") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0033 5.83333H17.5033C17.7243 5.83333 17.9362 5.92113 18.0925 6.07741C18.2488 6.23369 18.3366 6.44565 18.3366 6.66667V16.6667C18.3366 16.8877 18.2488 17.0996 18.0925 17.2559C17.9362 17.4122 17.7243 17.5 17.5033 17.5H2.50326C2.28224 17.5 2.07028 17.4122 1.914 17.2559C1.75772 17.0996 1.66992 16.8877 1.66992 16.6667V3.33333C1.66992 3.11232 1.75772 2.90036 1.914 2.74408C2.07028 2.5878 2.28224 2.5 2.50326 2.5H15.0033V5.83333ZM3.33659 7.5V15.8333H16.6699V7.5H3.33659ZM3.33659 4.16667V5.83333H13.3366V4.16667H3.33659ZM12.5033 10.8333H15.0033V12.5H12.5033V10.8333Z" fill="#28F2A1" />
      </svg>
    );
  }
}

const SessionHistory = () => {
  const [enable, setEnable] = useState(false);
  const [activeTab, setActiveTab] = useState("active");
  const sessionData = [
    {
      name: "Urban Navigation",
      start: "15:10",
      end: "17:10",
      duration: "01:23:45",
      status: "Running",
      type: "active",
    },
    {
      name: "Urban Navigation",
      start: "15:10",
      end: "17:10",
      duration: "01:23:45",
      status: "Terminated",
      type: "past",
    },
    {
      name: "Urban Navigation",
      start: "15:10",
      end: "17:10",
      duration: "01:23:45",
      status: "Completed",
      type: "past",
    },
  ];

  const filteredSessions = sessionData.filter(
    (session) => session.type === activeTab
  );

  const getStatusStyle = (status: string) => {
    if (status === "Running") return "bg-green-100 text-green-600";
    if (status === "Terminated") return "bg-[#FEE4E4] text-red-500";
    return "bg-gray-100 text-gray-500";
  };
  useEffect(() => {
    setTimeout(() => {
      setEnable(true);
    }, 2000);
  }, []);
  return (
    <div className="block z-50">
      <div className="flex items-center justify-between mb-4 z-50">
        <div className="text-2xl font-bold font-sansBold uppercase ">Session History</div>
        <div className="hidden md:block"><ConnectWallet type="logo" noText={true} /> </div>
      </div>
      <div className="z-[999] my-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 flex-wrap w-full">
          <div className="z-[999] flex items-center border border-[#C8C9C866] px-4 py-2 rounded-md w-full max-w-sm">
            <svg
              className="w-4 h-4 text-[#999F9D] mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search sessions..."
              className="w-full text-sm placeholder:text-[#000F0966] bg-transparent text-black outline-none"
            />
          </div>
          <div className="z-50 flex rounded-md bg-[#EAEAEA] overflow-hidden p-1 w-full md:w-fit">
            <button
              onClick={() => setActiveTab("active")}
              className={`px-5 md:px-4 py-1 text-sm font-semibold rounded-md transition-all ${activeTab === "active"
                ? "bg-[#28F2A1] text-black"
                : "text-[#475467]"
                }`}
            >
              Active Sessions
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-5 md:px-4 py-1 text-sm font-semibold transition-all ${activeTab === "past"
                ? "bg-[#28F2A1] text-black rounded-md"
                : "text-[#475467]"
                }`}
            >
              Past Sessions
            </button>
          </div>
        </div>
      </div>
      <div className="z-50 flex gap-4 w-full">
        {!enable ? (<>
          <div className="mt-6 md:mt-0 flex flex-col gap-2 items-center  justify-center w-full h-[calc(100vh-430px)]  bg-[#F5F5F5] px-4 z-0">
            <p className="hidden md:block text-3xl font-mono font-semibold text-center uppercase">Connect your Wallet to view Sessions</p>
            <p className="md:hidden text-2xl font-mono font-semibold text-center ">Please connect <br className="md:hidden" />your wallet</p>
            <p className="text-sm md:text-lg text-[#475467] font-mono text-center  mt-1">You need to connect your wallet to view your Session history</p>
            <button className=" mt-6 flex items-center gap-2 bg-[#000F09] text-[#28F2A1] px-6 py-2.5 rounded-tr-[12px] rounded-bl-[12px] shadow-sm font-sans border-custom">
              <span>
                <Icon iconName="wallet" />
              </span>
              <span className="font-[600] text-sm  font-sans">Connect Wallet</span>
            </button>
          </div>
        </>) : (
          <div className="z-50 w-full">
            <div className="hidden md:block">
              <table className="w-full table-auto border-collapse rounded-xl overflow-hidden">
                <thead className="border bg-[#F5F5F5] text-left text-sm text-[#475467]">
                  <tr>
                    <th className="py-3 px-4">Session Name</th>
                    <th className="py-3 px-4">Launched</th>
                    <th className="py-3 px-4">Ended</th>
                    <th className="py-3 px-4">Duration</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {filteredSessions.map((item, i) => (
                    <tr key={i} className="border bg-white">
                      <td className="py-4 px-4 font-semibold text-black">
                        {item.name}
                      </td>
                      <td className="py-4 px-4">{item.start}</td>
                      <td className="py-4 px-4">{item.end}</td>
                      <td className="py-4 px-4">{item.duration}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 flex gap-2">
                        <button className="bg-gray-200 text-black text-sm px-4 py-1.5 rounded-md font-medium">
                          View Data
                        </button>
                        {activeTab == "active" ?
                          <button className="bg-red-500 text-white text-sm px-4 py-1.5 rounded-md font-medium">
                            Terminate
                          </button>
                          :
                          <button className="bg-[#28F2A1] text-[#000F09] text-sm px-4 py-1.5 rounded-md font-medium">
                            Resume
                          </button>
                        }

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="md:hidden bg-white z-50 space-y-4">
              {filteredSessions.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-md"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-md font-mono font-semibold text-black">
                      {item.name}
                    </p>
                    <span
                      className={`text-sm font-semibold px-2.5 py-0.5 rounded-full ${getStatusStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center text-sm text-[#475467] space-y-1">
                    <div className="flex w-1/2 flex-col items-start justify-between">
                      <span className="font-semibold">Started</span>
                      <span className="font-mono">{item.start}</span>
                    </div>
                    <div className="flex w-1/2 flex-col items-start justify-between">
                      <span className="font-semibold">Ended</span>
                      <span className="font-mono">{item.end}</span>
                    </div>
                    <div className="flex w-full flex-col items-start justify-between">
                      <span className="font-semibold">Duration</span>
                      <span className="font-mono">{item.duration}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="w-full bg-gray-100 text-black text-sm py-2 rounded-md font-medium">
                      View Data
                    </button>
                    {activeTab == "active" ?
                      <button className="w-full bg-red-500 text-white text-sm py-2 rounded-md font-medium">
                        Terminate
                      </button>
                      :
                      <button className="w-full bg-[#28F2A1] text-[#000F09] text-sm py-2 rounded-md font-medium">
                        Resume
                      </button>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionHistory;
