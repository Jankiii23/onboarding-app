

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// // import { state } from 'form';
// interface onboardingData{
//   [key: string]: any;
// }

// interface OnboardingState {
//   step: number;
//   data: onboardingData;
// }
// const initialState: OnboardingState={
//   step: 1,
//   data: {},
// };

// const onboardingSlice=createSlice({
//   name: 'onboarding',
//   initialState,
//   reducers:{
//     setStep:(state,action: PayloadAction<number>)=>{
//       state.step=action.payload;
//     },
//     updatedata:(state,action: PayloadAction<Partial<onboardingData>>)=>{
//       state.data={...state.data,
//         ...action.payload,
//       };
//     },
//     resetOnboarding:()=>initialState,
//     },
  
// });
// export const {setStep,updatedata,resetOnboarding}=onboardingSlice.actions;
// export default onboardingSlice.reducer;



import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OnboardingData {
  fullName: string;
  email: string;
  mobileNo: string;
  addressLine1: string;
  city: string;
  postalCode: string;
  dob: string;
  gender: string;
}

interface OnboardingState {
  step: number;
  data: Partial<OnboardingData>; 
}

const initialState: OnboardingState = {
  step: 1,
  data: {}, 
};

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    updateData: (state, action: PayloadAction<Partial<OnboardingData>>) => {
      state.data = { ...state.data, ...action.payload };
    },
    resetOnboarding: () => initialState,
  },
});

export const { setStep, updateData, resetOnboarding } = onboardingSlice.actions;
export default onboardingSlice.reducer;





  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  




