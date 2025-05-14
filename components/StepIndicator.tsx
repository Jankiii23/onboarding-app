import { useAppSelector, useAppDispatch } from '@/redux/hooks';
 import { setStep } from '@/redux/onboardingSlice';
import { use } from 'react';



const StepIndicator = () => {
  // const current = useAppSelector(state => state.onboarding.step);
   const dispatch = useAppDispatch();
   const {step,data} = useAppSelector((state) => state.onboarding);
   const canAccessStep = (stepNumber: number):boolean=>{
    switch(stepNumber){
      case 1:
        return true;
      case 2:
        return !!data.fullName?.trim();
      case 3:
        return !!data.email?.trim() && !!data.mobileNo?.trim();
      case 4:
        return !!data.addressLine1?.trim() && !!data.city?.trim() && !!data.postalCode?.trim();
      case 5:
        return !!data.gender?.trim() && !!data.dob?.trim();
        default:
          return false;
    }
   }
  // const onboardingData=useAppSelector((state)=>state.onboarding.data);
  // const fullName = onboardingData.fullName;

  const steps = [
  {id:1,label:'Profile'},
  {id:2,label:'Contact'},
  {id:3,label: 'Company'}, 
  {id:4,label:'Availability'}, 
  {id:5,label:'Confirm'},
];

  return (
    <div className="flex justify-center gap-4 my-4">
      {steps.map((step) => {
        const isDisabled = !canAccessStep(step.id);
        // const isDisabled = step.id !==1 && !fullName?.trim();
        
        return(
          <button
          key={step.id}
          onClick={()=>!isDisabled && dispatch(setStep(step.id))}
          disabled={isDisabled}
          className={`px-4 py-2 rounded border ${
            step.id===1
              ? 'bg-blue-600 text-white'
              : isDisabled
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-white text-black'
            }`}
            >
            {step.label}
          </button>
        );
          })}
           </div>
  );
};
        
        // disabled={current === i + 1}
        //   key={i}
        //   onClick={() => dispatch(setStep(i + 1))}
        //   className={`px-3 py-2 rounded border ${
        //     current === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
        //   }`}
        // >
        //   {label}
        // </button>
       
 ;

export default StepIndicator;





