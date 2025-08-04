import Toggle from "./Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div id="navbar" className="sticky top-0 h-[10vh] flex justify-between items-center bg-white z-10">
      {/* left */}
      <div className="flex-1 flex items-center justify-start gap-8">
        <div className="text-xl font-bold">Andrew</div>
        <Toggle />
      </div>

      {/* right */}
      <div className="flex-1 flex items-center justify-end font-normal">
        <div className="flex flex-grow gap-8 mr-16 list-none max-[480px]:hidden">
          <ul className="flex gap-8">
            {[
              { label: "Home", to: "navbar" },
              { label: "Services", to: "services" },
              { label: "Experience", to: "experience" },
              { label: "Portfolio", to: "portfolio" },
             /*  { label: "Testimonial", to: "testimonial" }, */
            ].map((item) => (
              <li key={item.to} className="cursor-pointer hover:text-orange-500">
                <Link activeClass="active" to={item.to} spy={true} smooth={true}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

