import { Link } from "react-scroll";
import Toggle from "./Toggle";

const Navbar = () => {
  const navItems = [
    { label: "Home", to: "navbar" },
    { label: "Services", to: "services" },
    { label: "Experience", to: "experience" },
    { label: "Portfolio", to: "portfolio" },
    // { label: "Testimonial", to: "testimonial" },
  ];

  return (
    <div
      id="navbar"
      className="
        sticky top-0 h-[10vh] flex justify-between items-center
        bg-base-100
        text-base-content
        shadow-md dark:shadow-lg
        z-10
        px-6
      "
    >
      {/* left side */}
      <div className="flex-1 flex items-center justify-start gap-8">
        <Toggle />
      </div>

      {/* right side */}
      <div className="flex-1 flex items-center justify-end font-normal">
        <div className="flex flex-grow gap-8 mr-16 max-[480px]:hidden">
          <ul className="flex gap-8">
            {navItems.map(({ label, to }) => (
              <li
                key={to}
                className="
                  cursor-pointer
                  hover:text-orange-500 dark:hover:text-orange-400
                  transition-colors
                "
              >
                <Link activeClass="active" to={to} spy={true} smooth={true}>
                  {label}
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
