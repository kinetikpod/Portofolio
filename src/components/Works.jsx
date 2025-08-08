// import Upwork from "../img/Upwork.png";
// import Fiverr from "../img/fiverr.png";
// import Amazon from "../img/amazon.png";
// import Shopify from "../img/Shopify.png";
// import Facebook from "../img/Facebook.png";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";

// const Works = () => {
//   return (
//     <div
//       id="works"
//       className="px-12 border-2 border-red-500 flex items-center justify-between h-[90vh] mt-16 max-[480px]:flex-col max-[480px]:h-[55rem] max-[480px]:p-0 max-[480px]:gap-20"
//     >
//       {/* left side */}
//       <div className="flex-1 flex flex-col relative">
//         <span className="text-[40px] font-bold text-[var(--black)]">
//           Works for All these
//         </span>
//         <span className="text-[40px] font-bold text-[var(--orange)]">
//           Brands & Clients
//         </span>
//         <span className="text-[14px] text-[var(--gray)] mt-4">
//           Lorem ispum is simpley dummy text of printing of printing Lorem
//           <br /> ispum is simpley dummy text of printingLorem ispum is simpley
//           dummy text
//           <br /> y dummy text of printingLorem
//           <br /> ispum is simpley dummy text of printing
//         </span>
//         <Link to="contact" smooth={true} spy={true}>
//           <button className="mt-16 w-32 h-8 bg-[var(--orange)] text-white font-medium rounded">
//             Hire Me
//           </button>
//         </Link>
//         <div
//           className="absolute w-40 h-40 rounded-full blur-xl"
//           style={{ background: "#ABF1FF94" }}
//         />
//       </div>

//       {/* right side */}
//       <div className="flex-1 flex items-center justify-center relative max-[480px]:items-start max-[480px]:justify-start max-[480px]:scale-75">
//         <motion.div
//           initial={{ rotate: 45 }}
//           whileInView={{ rotate: 0 }}
//           viewport={{ margin: "-40px" }}
//           transition={{ duration: 3.5, type: "spring" }}
//           className="relative w-[18rem] h-[18rem] rounded-full bg-white shadow-[var(--smboxShadow)] top-8 z-20 max-[480px]:static"
//         >
//           {[
//             { src: Upwork, style: { top: "-3rem", left: "6rem" } },
//             { src: Fiverr, style: { left: "-3rem", top: "5rem" } },
//             { src: Amazon, style: { left: "6rem", top: "5rem" } },
//             { src: Shopify, style: { left: "15rem", top: "5rem" } },
//             { src: Facebook, style: { left: "6rem", top: "13rem" } },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="absolute w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-[var(--smboxShadow)] border-[5px] border-[#ebebeb]"
//               style={item.style}
//             >
//               <img
//                 src={item.src}
//                 alt=""
//                 className="transform scale-[0.6]"
//               />
//             </div>
//           ))}
//         </motion.div>
//         {/* background Circles */}
//         <div
//           className="absolute w-[13rem] h-[13rem] rounded-full z-10 bg-[#1949b8]"
//           style={{ left: "18rem", top: 0 }}
//         />
//         <div
//           className="absolute w-[13rem] h-[13rem] rounded-full z-10 bg-[#f5c32c] max-[480px]:left-[8rem]"
//           style={{ left: "18rem", top: "8rem" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Works;

