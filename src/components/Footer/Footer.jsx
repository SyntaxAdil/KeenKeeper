import React from "react";
import SocialIcons from "@/components/ui/SocialIcons";
const Footer = () => {
  const FOOTER_LINKS = [
    { id: 1, icon: "github", href: "github.com" },
    { id: 2, icon: "facebook", href: "facebook.com" },
    { id: 3, icon: "x", href: "x.com" },
  ].map((link) => (
    <a
      href={link.href}
      key={link.id}
      data-tip={link.icon.toUpperCase()}
      className="tooltip tooltip-bottom  w-10 h-10 rounded-full bg-white   flex items-center justify-center text-black hover:bg-[#244d3f] hover:text-white border transition-all duration-100 cursor-pointer hover:border-white/30 hover:-translate-y-1"
    >
      <SocialIcons type={link.icon} />
    </a>
  ));
  return (
    <footer className="py-10 bg-[#244d3f] w-full text-center text-white">
      <h1 className=" md:pt-10 text-5xl font-medium">KeenKeeper</h1>
      <p className="text-white/80 my-4 max-w-3xl mx-auto px-4 md:px-0">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <div>
        <strong className="text-xm  font-medium">Social Links</strong>
        <div className="flex gap-4 items-center justify-center mt-6">
          {FOOTER_LINKS}
        </div>

        <div className="border-t  mx-auto border-[#225946] mt-10 pt-10 max-w-278 flex items-center justify-between flex-col md:flex-row gap-4">
          <p className="text-white/50 text-base">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((i) => (
              <li
                className="text-white/50 hover:underline cursor-pointer"
                key={i}
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
74;
