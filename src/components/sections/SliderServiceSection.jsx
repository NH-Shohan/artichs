"use client";

import { SliderService } from "../ui/slider-service";

const SliderServiceSection = () => {
  return (
    <div>
      <div className="overflow-hidden h-80 grid place-content-center -mt-48">
        <SliderService items={testimonials} direction="right" speed="slow" />
      </div>
    </div>
  );
};

export default SliderServiceSection;

const testimonials = [
  "Because life's too short for boring designs",
  "Because life's too short for boring designs",
  "Because life's too short for boring designs",
  "Because life's too short for boring designs",
  "Because life's too short for boring designs",
  "Because life's too short for boring designs",
  "Because life's too short for boring designs",
  "Because life's too short for boring designs",
];
