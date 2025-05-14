// import { useForm } from 'react-hook-form';
// import { useAppDispatch } from '@/redux/hooks';
// import { updateData, setStep } from '@/redux/onboardingSlice';

// const Step1 = () => {
//   const dispatch = useAppDispatch();
//   const { register, handleSubmit, formState: { errors } } = useForm();


//   const onSubmit = (data: any) => {
//   dispatch(updateData({ fullName: data.fullName }));
//   dispatch(setStep(2));
// };


//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <div>
//         <label className="block mb-1">Full Name</label>
//         <input 
//           {...register('fullName', { required: 'Full Name is required' })}
//           className="border px-2 py-1 w-full"
//         />
       

//    {errors.fullName?.message && (
//   <p className="text-red-500 text-sm">{String(errors.fullName.message)}</p>
// )}

//       </div>

//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//         Next
//       </button>
//     </form>
//   );
// };



import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateData, setStep } from '@/redux/onboardingSlice';

const Step1 = () => {
  const dispatch = useAppDispatch();
  const defaultValues = useAppSelector((state) => state.onboarding.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
     defaultValues:{
      fullName: defaultValues.fullName || '',
     },
     });

  const onSubmit = (data: any) => {
    dispatch(updateData({ fullName: data.fullName }));
    dispatch(setStep(2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <label>Full Name</label>
      <input
        {...register('fullName', { required: 'Full Name is required' })}
        className="border p-2 w-full"
      />
      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Next</button>
    </form>
  );
};

export default Step1;






