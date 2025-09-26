import React from "react";
import PaymentStepsCards from "../Cards/PaymentStepsCard";
import { stepsData } from "@/lib/data";
import MobilePaymentStepsSlider from "../SliderGsap/MobilPaymentStepsSlider";

interface StepData {
  img: string;
  title: string;
  description: string;
}

const PaymentStepsSection: React.FC = () => {
  return (
    <section className="mx-auto pb-16">
      <div className="container mx-auto md:p-0">
        <div className="flex flex-col gap-4 h-full justify-center px-2">
          <h3 className="md:text-4xl text-2xl max-w-3xl ml-2 font-bold text-[#1A1A2E] md:leading-snug">
            4 Adımda Sahneni Kur!
          </h3>
          <p className="text-[#1A1A2E] text-sm md:text-base max-w-xl ml-2">
            En iyi sanatçıları bul, güvenli şekilde rezerve et ve sahneyi
            hazırla! Etkinliğin için her şey birkaç tık uzağında.
          </p>
        </div>
        {/* Geniş ekranlarda (lg ve üstü) PaymentStepsCards görünecek */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-4">
          {stepsData.map((step, index) => (
            <PaymentStepsCards key={index} step={step} />
          ))}
        </div>
        {/* Mobil ekranlarda (lg altı) MobileStepsCards görünecek */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
          <MobilePaymentStepsSlider stepsData={stepsData} />
        </div>
      </div>
    </section>
  );
};

export default PaymentStepsSection;
