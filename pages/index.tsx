import { useAppSelector } from '@/redux/hooks';
import StepIndicator from '@/components/StepIndicator';
import Step1 from  '@/components/steps/step1'
import Step2 from '@/components/steps/step2';
import Step3 from  '@/components/steps/step3';
import Step4 from '@/components/steps/step4';
import Step5 from '@/components/steps/step5';

export default function Home() {
  const step = useAppSelector(state => state.onboarding.step);

  const renderStep = () => {
    switch (step) {
      case 1: return <Step1 />;
      case 2: return <Step2 />;
      case 3: return <Step3 />;
      case 4: return <Step4 />;
      case 5: return <Step5 />;
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <StepIndicator />
      {renderStep()}
    </div>
  );
}


