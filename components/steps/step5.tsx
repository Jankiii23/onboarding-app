// import { useAppSelector, useAppDispatch } from '@/redux/hooks';
// import { setStep } from '@/redux/onboardingSlice';

// const Step5 = () => {
//   const dispatch = useAppDispatch();
//   const data = useAppSelector((state) => state.onboarding.data);

//   const fieldLabels: { [key: string]: string } = {
//     fullName: 'Full Name',
//     email: 'Email Address',
//     mobileNo: 'Mobile Number',
//     address: 'Address',
//     dob: 'Date of Birth',
//     gender: 'Gender',
//   };

//   const handleSubmit = () => {
//     console.log('Submitting final data:', data);
//     alert('Onboarding submitted successfully!');
//     // You can send the `data` to your backend here.
//   };

//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-bold">Review Your Details</h2>

//       <div className="bg-gray-100 p-4 rounded-md space-y-2">
//         {Object.keys(fieldLabels).map((key) => (
//           <div key={key} className="flex justify-between">
//             <span className="font-semibold">{fieldLabels[key]}</span>
//             <span>{data[key]}</span>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between mt-6">
//         <button
//           className="bg-gray-500 text-white px-4 py-2 rounded"
//           onClick={() => dispatch(setStep(4))}
//         >
//           Back
//         </button>
//         <button
//           className="bg-green-600 text-white px-4 py-2 rounded"
//           onClick={handleSubmit}
//         >
//           Confirm & Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Step5;


// import { useAppSelector, useAppDispatch } from '@/redux/hooks';
// import { setStep } from '@/redux/onboardingSlice';

// const Step5 = () => {
//   const dispatch = useAppDispatch();
//   const data = useAppSelector((state) => state.onboarding.data);

//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-bold">Review Your Profile</h2>

//       <div className="bg-gray-100 p-4 rounded-md space-y-2">
//         <p><strong>Full Name:</strong> {data.fullName }</p>
//         <p><strong>Email Address:</strong> {data.email }</p>
//         <p><strong>Mobile Number:</strong> {data.mobileNo }</p>
//         <p><strong>Address:</strong> {data.addressLine1 }</p>
//         <p><strong>Date of Birth:</strong> {data.dob }</p>
//         <p><strong>Gender:</strong> {data.gender }</p>
//       </div>

//       <div className="flex justify-between mt-4">
//         <button onClick={() => dispatch(setStep(4))} className="bg-gray-500 text-white px-4 py-2">Back</button>
//         <button onClick={() => alert('Form submitted!')} className="bg-green-600 text-white px-4 py-2">Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Step5;

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setStep } from '@/redux/onboardingSlice';

const Step5 = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.onboarding.data);

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-semibold mb-4">Confirm Your Details</h2>

      <div className="space-y-2">
        <p><strong>Full Name:</strong> {data.fullName }</p>
        <p><strong>Email Address:</strong> {data.email }</p>
        <p><strong>Mobile Number:</strong> {data.mobileNo }</p>
        <p><strong>Address:</strong> {data.addressLine1 }</p>
        <p><strong>City:</strong> {data.city }</p>
        <p><strong>Postal Code:</strong> {data.postalCode }</p>
        <p><strong>Date of Birth:</strong> {data.dob }</p>
        <p><strong>Gender:</strong> {data.gender }</p>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={() => dispatch(setStep(4))}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={() => alert('Submitted!')}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
};

export default Step5;



