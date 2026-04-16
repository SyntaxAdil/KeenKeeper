import { Plus } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-16 pb-10 md:py-24 md:text-center px-4">
      
      <h1 className="text-[36px] md:text-5xl font-bold mb-4 animate-fade-up">
        Friends to keep close in your life
      </h1>

      <p className="text-slate-500 mb-8 max-w-xl mx-auto animate-fade-up animate-delay-100">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button
        className="inline-flex items-center gap-2 bg-[#244d3f] text-white px-5 py-2.5 rounded-lg
        shadow transition-all duration-200
        hover:-translate-y-1 hover:shadow-lg animate-fade-up animate-delay-200"
      >
        <Plus size={16} />
        Add a friend
      </button>

    </section>
  );
};

export default Hero;