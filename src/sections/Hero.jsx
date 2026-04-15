import { Plus } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-15 pb-8 md:py-10 md:text-center px-4">
      <h1 className= "text-4xl  md:text-5xl font-bold mb-4" >Friends to keep close in your life</h1>

      <p className="text-[#64748b] mb-8 " >
        Your personal shelf of meaningful connections. Browse, tend, and nurture <br />
        the relationships that matter most.
      </p>
      
      <button className="btn bg-[#244d3f] text-white px-4 text-base transition-all duration-150 hover:-translate-y-1.5 hover:shadow-[#244d3f] shadow border-0 ">
        <Plus size={16} /> Add a friend
      </button>
    </section>
  );
};

export default Hero;
