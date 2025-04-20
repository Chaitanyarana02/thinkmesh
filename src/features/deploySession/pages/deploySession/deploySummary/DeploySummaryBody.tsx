import EditIcon from '../../../../../assets/Images/edit.svg';

const DeploySummaryBody = ({ onNext }: { onNext: () => void }) => {
  return (
    <div>
      <div className="w-full">
        <div className="border border-[#C8C9C866] rounded-md mt-6 p-4">
          <div className="text-[#000F09] text-lg font-bold mb-6 uppercase">
            Configuration Summary
          </div>
          <div className='flex justify-between items-center mb-4 pb-4 border-b border-[#C8C9C866]'>
            <div>
              <div className='text-[#475467] text-[15px] font-bold mb-1'>Robot</div>
              <div className='text-[#000F09] text-base font-bold'>AgileX Hunter</div>
            </div>
            <div className='flex gap-2 mr-0 md:mr-6'>
              <img src={EditIcon} alt="edit" />
              <div className='text-[#475467] text-base font-bold'>Modify</div>
            </div>
          </div>
          <div className='flex justify-between items-center mb-4 pb-4 border-b border-[#C8C9C866]'>
            <div>
              <div className='text-[#475467] text-[15px] font-bold mb-1'>Scene</div>
              <div className='text-[#000F09] text-base font-bold'>Adricultural Farm</div>
            </div>
            <div className='flex gap-2 mr-0 md:mr-6'>
              <img src={EditIcon} alt="edit" />
              <div className='text-[#475467] text-base font-bold'>Modify</div>
            </div>
          </div>
          <div className='flex justify-between items-center mb-4 pb-4 border-b border-[#C8C9C866] opacity-50 cursor-not-allowed'>
            <div>
              <div className='text-[#475467] text-[15px] font-bold mb-1'>Sensors</div>
              <div className='text-[#000F09] text-base font-bold'><i>None selectes</i></div>
            </div>
            <div className='flex gap-2 mr-0 md:mr-6'>
              <img src={EditIcon} alt="edit" />
              <div className='text-[#475467] text-base font-bold'>Modify</div>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div>
              <div className='text-[#475467] text-[15px] font-bold mb-1'>AI Models</div>
              <div className='text-[#000F09] text-base font-bold'>1 model selected</div>
            </div>
            <div className='flex gap-2 mr-0 md:mr-6'>
              <img src={EditIcon} alt="edit" />
              <div className='text-[#475467] text-base font-bold'>Modify</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-6">
        <button
          type="button"
          className="bg-[#28F2A1] text-black w-full md:w-fit px-3 md:px-20 py-3 text-sm font-semibold rounded-md"
          onClick={onNext}
        >
          Launch Deployment
        </button>
      </div>
    </div>
  );
};

export default DeploySummaryBody;
