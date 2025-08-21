import React from "react";

interface StepData {
  img: string;
  title: string;
  description: string;
}

interface PaymentStepsCardsProps {
  step: StepData;
}

const PaymentStepsCards: React.FC<PaymentStepsCardsProps> = ({ step }) => {
  return (
    <div className="flex flex-col gap-2 h-[400px] w-full">
      <div className="relative w-full h-full">
        <img
          src={step.img}
          alt={step.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-black/50 rounded-b-lg z-0"></div>
        <div className="absolute bottom-0 left-2 right-2 h-1/3 z-10 flex flex-col items-center">
          <h4 className="text-[#f5f5f5] font-semibold text-lg sm:text-xl">
            {step.title}
          </h4>
          <p className="text-[#f5f5f5] text-sm sm:text-base text-center line-clamp-3 mt-2">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentStepsCards;
