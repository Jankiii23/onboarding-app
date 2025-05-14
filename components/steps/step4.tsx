import { useForm } from 'react-hook-form';
import { useAppDispatch,useAppSelector } from '@/redux/hooks';
import { updateData, setStep } from '@/redux/onboardingSlice';

const Step4 = () => {
  const dispatch = useAppDispatch();
  const defaultValues= useAppSelector((state) => state.onboarding.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
      gender:defaultValues.gender || '',
      dob:defaultValues.dob || '',

    }

  });

  const onSubmit = (data: any) => {
    dispatch(updateData({
      gender: data.gender,
      dob: data.dob
    }));
    dispatch(setStep(5));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-1">Gender</label>
        <select
          {...register('gender', { required: 'Gender is required' })}
          className="border px-2 py-1 w-full"
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender?.message && (
          <p className="text-red-500 text-sm">{String(errors.gender.message)}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Date of Birth</label>
        <input
          type="date"
          {...register('dob', { required: 'Date of Birth is required' })}
          className="border px-2 py-1 w-full"
        />
        {errors.dob?.message && (
          <p className="text-red-500 text-sm">{String(errors.dob.message)}</p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => dispatch(setStep(3))}
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

export default Step4;
