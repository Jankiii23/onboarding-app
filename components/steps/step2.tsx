import { useForm } from 'react-hook-form';
import { useAppDispatch,useAppSelector } from '@/redux/hooks';
import { updateData, setStep } from '@/redux/onboardingSlice';

const Step2 = () => {
  const dispatch = useAppDispatch();
  const defaultValues = useAppSelector((state) => state.onboarding.data);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
    email: defaultValues.email || '',
    mobileNo : defaultValues.mobileNo || '',
  },
});
  

  const onSubmit = (data: any) => {
    dispatch(updateData({
      email:data.email,
      mobileNo:data.mobileNo
    }));
    dispatch(setStep(3));
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          className="border px-2 py-1 w-full"
        />
        {errors.email?.message && (
          <p className="text-red-500 text-sm">{String(errors.email.message)}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Phone Number</label>
        <input
          type="tel"
          {...register('mobileNo', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10,}$/,
              message: 'Phone number must be at least 10 digits',
            },
          })}
          className="border px-2 py-1 w-full"
        />
        {errors.mobileNo?.message && (
          <p className="text-red-500 text-sm">{String(errors.mobileNo.message)}</p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => dispatch(setStep(1))}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;
