import { useEffect, useState } from "react";
import UserProfileIcon from '../../assets/Images/contact.svg';
import LogoutIcon from '../../assets/Images/logout.svg';

const Icon = ({ iconName }: { iconName: string }) => {
  if (iconName == 'wallet') {
    return (<>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0042 5.83333H17.5042C17.7252 5.83333 17.9372 5.92113 18.0935 6.07741C18.2498 6.23369 18.3376 6.44565 18.3376 6.66667V16.6667C18.3376 16.8877 18.2498 17.0996 18.0935 17.2559C17.9372 17.4122 17.7252 17.5 17.5042 17.5H2.50423C2.28322 17.5 2.07126 17.4122 1.91498 17.2559C1.7587 17.0996 1.6709 16.8877 1.6709 16.6667V3.33333C1.6709 3.11232 1.7587 2.90036 1.91498 2.74408C2.07126 2.5878 2.28322 2.5 2.50423 2.5H15.0042V5.83333ZM3.33757 7.5V15.8333H16.6709V7.5H3.33757ZM3.33757 4.16667V5.83333H13.3376V4.16667H3.33757ZM12.5042 10.8333H15.0042V12.5H12.5042V10.8333Z" fill="#000F09" />
      </svg>
    </>)
  }
  if (iconName == 'walletWhite') {
    return (<>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0042 5.83333H17.5042C17.7252 5.83333 17.9372 5.92113 18.0935 6.07741C18.2498 6.23369 18.3376 6.44565 18.3376 6.66667V16.6667C18.3376 16.8877 18.2498 17.0996 18.0935 17.2559C17.9372 17.4122 17.7252 17.5 17.5042 17.5H2.50423C2.28322 17.5 2.07126 17.4122 1.91498 17.2559C1.7587 17.0996 1.6709 16.8877 1.6709 16.6667V3.33333C1.6709 3.11232 1.7587 2.90036 1.91498 2.74408C2.07126 2.5878 2.28322 2.5 2.50423 2.5H15.0042V5.83333ZM3.33757 7.5V15.8333H16.6709V7.5H3.33757ZM3.33757 4.16667V5.83333H13.3376V4.16667H3.33757ZM12.5042 10.8333H15.0042V12.5H12.5042V10.8333Z" fill="#28F2A1" />
      </svg>
    </>)
  }
}
export default function ConnectWallet({ type, noText }: { type: string, noText: boolean }) {
  const [enable, setEnable] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setEnable(true);
    }, 2000);
  }, []);
  return (
    <>
      {enable && type === 'logo' && (
        <div className="relative hidden md:block">
          <div className="cursor-pointer text-white border border-[#28F2A1] bg-[#B04FF5] rounded-full font-sans w-11 h-11 flex items-center justify-center leading-[1.5] font-semibold text-sm" onClick={() => setShowMenu(!showMenu)}>
            JG
          </div>
          {
            showMenu && (
              <div className="border border-[#C8C9C866] rounded-xl rounded-tr-none p-4 bg-[#FFFFFF] absolute top-full right-[30px] w-[215px] z-10">
                <div className="text-base text-[#000F09] mb-1 font-medium">@User</div>
                <div className="text-sm text-[#000F0966] pb-4 mb-4 border-b border-[#D9D9D9]">
                  0x71C7...976EF356FGF
                </div>
                <div className="text-[#000F09] text-base flex items-center gap-2 mb-2 cursor-pointer"><img src={UserProfileIcon} /> My Profile</div>
                <div className="text-[#000F09] text-base flex items-center gap-2 cursor-pointer"><img src={LogoutIcon} /> Disconnect</div>
              </div>
            )
          }
        </div>
      )}
      {enable && type == 'address' ? (<>
        <div className="text-sm text-[#000F09] mt-6">
          <p className="mb-2 font-semibold">Wallet connected</p>
          <p className="text-[#475467] font-mono flex gap-2"><span><Icon iconName="walletWhite" /></span><span>0x71C7...976EF356FGF</span></p>
        </div>
      </>) : ""}
      {enable && type == 'addressOnly' ? (<>
        <div className="text-sm text-[#000F09]">
          <p className="text-[#475467] font-mono flex gap-2"><span><Icon iconName="walletWhite" /></span><span>0x71C7...976EF356FGF</span></p>
        </div>
      </>) : ""}
      {!enable && !noText ? (<div>
        <p className="hidden md:block mb-2 font-semibold">Wallet not connected</p>

        <button className="flex items-center gap-2 bg-[#28F2A1] text-black px-6 py-2.5 rounded-tr-[12px] rounded-bl-[12px] shadow-sm font-sans border-custom">
          <span>
            <Icon iconName="wallet" />
          </span>
          <span className="font-[600] text-sm  font-sans">Connect Wallet</span>
        </button>
      </div>) : ""}
      {!enable && noText ? (<>
        <button className="flex items-center gap-2 bg-[#28F2A1] text-black px-6 py-2.5 rounded-tr-[12px] rounded-bl-[12px] shadow-sm font-sans border-custom">
          <span>
            <Icon iconName="wallet" />
          </span>
          <span className="font-[600] text-sm  font-sans">Connect Wallet</span>
        </button>
      </>) : ""}
    </>
  );
}
