import RadioIcon from '../../../../../assets/Images/charm_robot.svg';
import EnvironmentIcon from '../../../../../assets/Images/material-symbols_map-outline.svg';
import SensorsIcon from '../../../../../assets/Images/ic_round-sensors.svg';
import AIModelIcon from '../../../../../assets/Images/mingcute_chip-line.svg';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Tabs from '../../../../tabs/Tabs';
import Modal from './model/Model';
import { useState } from 'react';

const CodeSnippet = () => {
  const codeString = `
    // Imports
    import mongoose, { Schema } from 'untitled'

    // Collection name
    export const collection = 'Design'|

    // Schema
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },

      description: {
        type: String
      }
    }, {timestamps: true})

    // Model
    export default untitled.model(collection)
  `;

  return (
    <SyntaxHighlighter language="javascript" style={oneLight} customStyle={{
      fontSize: '12px',
      padding: '0px',
      margin: '0',
      borderRadius: '6px',
    }}>
      {codeString}
    </SyntaxHighlighter>
  );
};


const tabData = [
  {
    label: <div className="flex justify-center md:justify-start items-center gap-2 font-medium">Telemetry</div>,
    content: <div className='h-[403px]'></div>,
  },
  {
    label: <div className="flex justify-center md:justify-start items-center gap-2 font-medium">Copilot</div>,
    content: <div className='h-[403px]'></div>,
  },
  {
    label: <div className="flex justify-center md:justify-start items-center gap-2 font-medium">Storage</div>,
    content: <div className='h-[403px]'></div>,
  },
];


const LastPremiumBody = () => {
  const [toggleSetting, setToggleSetting] = useState(false);

  return (
    <div className="w-full flex gap-4 flex-col xl:flex-row">
      <div className="w-full h-[300px] xl:h-auto xl:w-[270px] border border-[#C8C9C866] p-4 rounded-xl overflow-auto">
        <div className="text-[#000000] flex items-center text-base md:text-base font-bold mb-6 uppercase text-center mb-8">
          Robot Simulation
          <span className="ml-3 font-mono font-[500] text-sm px-2 py-0 md:py-1 rounded-full bg-[#B4FADE] text-[#027A48] capitalize">Running</span>
        </div>
        <div className='flex items-center gap-2'>
          <img src={RadioIcon} alt="" />
          <div className="text-[#000000] text-base font-bold">Robot</div>
        </div>
        <div className='border border-[#C8C9C866] p-3 rounded-xl mt-4 mb-4 flex items-center gap-3'>
          <img src="/assets/selectRobot/image.png" alt="robot" className='w-[68px] h-[68px] rounded-lg object-cover' />
          <div>
            <div className='text-[#000000] text-base font-bold'>AgileX Hunter</div>
            <div className='text-[#475467] text-xs font-bold mt-1'>ID: Agile__Hunter</div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <img src={EnvironmentIcon} alt="" />
          <div className="text-[#000000] text-base font-bold">Environment</div>
        </div>
        <div className='border border-[#C8C9C866] p-3 rounded-xl mt-4 mb-4 flex items-center gap-3'>
          <img src="/assets/selectRobot/image.png" alt="robot" className='w-[68px] h-[68px] rounded-lg object-cover' />
          <div>
            <div className='text-[#000000] text-base font-bold'>AgileX Hunter</div>
            <div className='text-[#475467] text-xs font-bold mt-1'>ID: Agile__Hunter</div>
          </div>
        </div>
        <div className='flex items-center gap-2 mb-6'>
          <img src={SensorsIcon} alt="" />
          <div className="text-[#000000] text-base font-bold">Sensors</div>
        </div>
        <div className='flex items-center gap-2'>
          <img src={AIModelIcon} alt="" />
          <div className="text-[#000000] text-base font-bold">AI Models</div>
        </div>
        <div className='mt-3 ml-6'>
          <div className='text-[#000F09] text-sm border border-[#C8C9C866] px-3 py-1 rounded-xl w-[90px] mb-3'>
            Iseg
          </div>
          <div className='text-[#000F09] text-sm border border-[#C8C9C866] px-3 py-1 rounded-xl w-[90px]'>
            Midas
          </div>
        </div>
      </div>
      <div className='w-full xl:w-[calc(100%-286px)]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='border border-[#C8C9C866] p-3 rounded-xl'>
            <div className='flex items-center gap-1 flex-nowrap overflow-x-auto'>
              <div className='text-[#000F09] text-xs border border-[#C8C9C866] font-medium px-3 py-3 rounded-lg min-w-fit w-fit'>
                Sample Notebooks
              </div>
              <div className='text-[#000F09] text-xs border border-[#C8C9C866] font-medium px-3 py-3 rounded-lg min-w-fit w-fit'>
                Interrupt
              </div>
              <div className='text-[#000F09] text-xs border border-[#C8C9C866] font-medium px-3 py-3 rounded-lg min-w-fit w-fit'>
                Download
              </div>
              <div className='text-[#fff] bg-[#FF4E4E] text-xs border border-[#FF4E4E] font-medium px-3 py-3 rounded-lg min-w-fit w-fit'>
                Terminate
              </div>
            </div>
            <div className='mt-5'>
              <CodeSnippet />
            </div>
          </div>
          <div className='border border-[#C8C9C866] p-4 py-3 rounded-xl'>
            <div className="text-[#000000] flex items-center justify-between text-base md:text-xl font-bold mb-6 uppercase text-center mb-8">
              Robot Simulation
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3537 9.35414C11.2598 9.44803 11.1324 9.50077 10.9997 9.50077C10.8669 9.50077 10.7395 9.44803 10.6457 9.35414C10.5518 9.26026 10.499 9.13292 10.499 9.00014C10.499 8.86737 10.5518 8.74003 10.6457 8.64614L14.6457 4.64614C14.6921 4.59966 14.7473 4.56278 14.8081 4.53762C14.8688 4.51246 14.9339 4.49951 14.9997 4.49951C15.0654 4.49951 15.1305 4.51246 15.1912 4.53762C15.252 4.56278 15.3072 4.59966 15.3537 4.64614C15.4001 4.69263 15.437 4.74782 15.4622 4.80856C15.4873 4.8693 15.5003 4.9344 15.5003 5.00014C15.5003 5.06589 15.4873 5.13099 15.4622 5.19173C15.437 5.25247 15.4001 5.30766 15.3537 5.35414L11.3537 9.35414ZM5.35366 15.3541C5.30717 15.4006 5.25198 15.4375 5.19124 15.4627C5.1305 15.4878 5.0654 15.5008 4.99966 15.5008C4.93391 15.5008 4.86881 15.4878 4.80807 15.4627C4.74733 15.4375 4.69214 15.4006 4.64566 15.3541C4.59917 15.3077 4.56229 15.2525 4.53713 15.1917C4.51197 15.131 4.49902 15.0659 4.49902 15.0001C4.49902 14.9344 4.51197 14.8693 4.53713 14.8086C4.56229 14.7478 4.59917 14.6926 4.64566 14.6461L8.64566 10.6461C8.73954 10.5523 8.86688 10.4995 8.99966 10.4995C9.13243 10.4995 9.25977 10.5523 9.35366 10.6461C9.44754 10.74 9.50029 10.8674 9.50029 11.0001C9.50029 11.1329 9.44754 11.2603 9.35366 11.3541L5.35366 15.3541Z" fill="#000F09" fill-opacity="0.4" />
                <path d="M5 15.5C4.86739 15.5 4.74021 15.4473 4.64645 15.3536C4.55268 15.2598 4.5 15.1326 4.5 15C4.5 14.8674 4.55268 14.7402 4.64645 14.6464C4.74021 14.5527 4.86739 14.5 5 14.5H9C9.13261 14.5 9.25979 14.5527 9.35355 14.6464C9.44732 14.7402 9.5 14.8674 9.5 15C9.5 15.1326 9.44732 15.2598 9.35355 15.3536C9.25979 15.4473 9.13261 15.5 9 15.5H5Z" fill="#000F09" fill-opacity="0.4" />
                <path d="M5.5 15C5.5 15.1326 5.44732 15.2598 5.35355 15.3536C5.25979 15.4473 5.13261 15.5 5 15.5C4.86739 15.5 4.74021 15.4473 4.64645 15.3536C4.55268 15.2598 4.5 15.1326 4.5 15V11C4.5 10.8674 4.55268 10.7402 4.64645 10.6464C4.74021 10.5527 4.86739 10.5 5 10.5C5.13261 10.5 5.25979 10.5527 5.35355 10.6464C5.44732 10.7402 5.5 10.8674 5.5 11V15ZM15.5 9C15.5 9.13261 15.4473 9.25979 15.3536 9.35355C15.2598 9.44732 15.1326 9.5 15 9.5C14.8674 9.5 14.7402 9.44732 14.6464 9.35355C14.5527 9.25979 14.5 9.13261 14.5 9V5C14.5 4.86739 14.5527 4.74021 14.6464 4.64645C14.7402 4.55268 14.8674 4.5 15 4.5C15.1326 4.5 15.2598 4.55268 15.3536 4.64645C15.4473 4.74021 15.5 4.86739 15.5 5V9Z" fill="#000F09" fill-opacity="0.4" />
                <path d="M11 5.5C10.8674 5.5 10.7402 5.44732 10.6464 5.35355C10.5527 5.25979 10.5 5.13261 10.5 5C10.5 4.86739 10.5527 4.74021 10.6464 4.64645C10.7402 4.55268 10.8674 4.5 11 4.5H15C15.1326 4.5 15.2598 4.55268 15.3536 4.64645C15.4473 4.74021 15.5 4.86739 15.5 5C15.5 5.13261 15.4473 5.25979 15.3536 5.35355C15.2598 5.44732 15.1326 5.5 15 5.5H11Z" fill="#000F09" fill-opacity="0.4" />
              </svg>
            </div>
            <div className="h-[calc(100%-66px)] flex">
              <div className='text-center w-fit h-fit m-auto'>
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className='mb-2 mx-auto'>
                  <path d="M9.66634 14.5H36.2497C38.908 14.5 41.083 16.675 41.083 19.3333V38.6667C41.083 41.325 38.908 43.5 36.2497 43.5H9.66634C7.00801 43.5 4.83301 41.325 4.83301 38.6667V19.3333C4.83301 16.675 7.00801 14.5 9.66634 14.5Z" fill="#475467" />
                  <path d="M53.1663 42.2918L41.083 35.0418V22.9585L53.1663 15.7085V42.2918Z" fill="#28F2A1" />
                  <path d="M3.04199 3.0415L48.9587 48.9582" stroke="#475467" stroke-width="3" stroke-miterlimit="10" stroke-linejoin="round" />
                </svg>
                <div className='text-[#475467] text-sm mb-2'>No Simulation Video</div>
                <button
                  type="button"
                  className="bg-[#28F2A1] text-black px-3 md:px-6 text-sm font-semibold rounded-md flex items-center gap-2 py-3"
                  onClick={() => { setToggleSetting(true) }}
                >
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5003 18.3332C15.1028 18.3332 18.8337 14.6023 18.8337 9.99984C18.8337 5.39734 15.1028 1.6665 10.5003 1.6665C5.89783 1.6665 2.16699 5.39734 2.16699 9.99984C2.16699 14.6023 5.89783 18.3332 10.5003 18.3332Z" stroke="black" stroke-width="1.66667" stroke-linejoin="round" />
                    <path d="M8.83398 9.99995V7.11328L11.334 8.55661L13.834 9.99995L11.334 11.4433L8.83398 12.8866V9.99995Z" stroke="black" stroke-width="1.66667" stroke-linejoin="round" />
                  </svg>
                  Start Simulation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <Tabs tabs={tabData} borderDisabled={true} />
        </div>
      </div>
      <Modal isOpen={toggleSetting} onClose={() => { setToggleSetting(false) }} />
    </div>
  );
};

export default LastPremiumBody;
