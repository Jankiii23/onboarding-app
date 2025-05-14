import { useForm } from 'react-hook-form';
import { useAppDispatch,useAppSelector } from '@/redux/hooks';
import { updateData, setStep } from '@/redux/onboardingSlice';

const Step3 = () => {
  const dispatch = useAppDispatch();
  const onboardingData=useAppSelector((state)=> state.onboarding.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      addressLine1: onboardingData.addressLine1 || '',
      city: onboardingData.city || '',
      postalCode: onboardingData.postalCode || '',
    },
  });

  const onSubmit = (data: any) => {
    dispatch(updateData({
        addressLine1: data.addressLine1,
        city: data.city,
        postalCode: data.postalCode
      
    }));
    dispatch(setStep(4));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-1">Address Line 1</label>
        <input
          {...register('addressLine1', { required: 'Address is required' })}
          className="border px-2 py-1 w-full"
        />
        {errors.addressLine1?.message && (
          <p className="text-red-500 text-sm">{String(errors.addressLine1.message)}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">City</label>
        <input
          {...register('city', { required: 'City is required' })}
          className="border px-2 py-1 w-full"
        />
        {errors.city?.message && (
          <p className="text-red-500 text-sm">{String(errors.city.message)}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Postal Code</label>
        <input
          {...register('postalCode', {
            required: 'Postal Code is required',
            pattern: {
              value: /^[0-9]{5,10}$/,
              message: 'Postal Code must be 5–10 digits',
            },
          })}
          className="border px-2 py-1 w-full"
        />
        {errors.postalCode?.message && (
          <p className="text-red-500 text-sm">{String(errors.postalCode.message)}</p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => dispatch(setStep(2))}
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

export default Step3;

