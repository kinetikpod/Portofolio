import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Violin from "../img/violin.png";
import Infer from "../img/infer.png";
import FormWithResult from "../img/formWithResult.png";
import { Link } from "react-scroll";

const Portfolio = () => {
  const projects = [
    {
      img: Violin,
      githubUrl: "https://github.com/kinetikpod",
    },
    {
      img: Infer,
      githubUrl: "https://github.com/kinetikpod",
    },
    {
      img: FormWithResult,
      githubUrl: "https://github.com/kinetikpod",
    },
  ];


  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-center h-[75vh]"
    >
      {/* heading */}
      <span className="text-[40px] font-bold text-[var(--black)]">
        Recent Projects
      </span>
      <span className="text-[var(--orange)] text-3xl font-bold">
        Portfolio
      </span>

      {/* keterangan status proyek */}
      <p className="mt-4 text-center text-sm text-orange-500 max-w-xl">
        Note: Projects shown here are not yet deployed online but have been dockerized.
        You can run them locally by following instructions in my GitHub README.
      </p>

      {/* slider */}
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        grabCursor={true}
        className="mt-12 w-full overflow-visible"
      >
        {projects.map(({ img, githubUrl }, idx) => (
          <SwiperSlide key={idx} className="flex items-center h-[15rem]">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-full h-full block" >
              <img
                src={img}
                alt={`Project ${idx + 1}`}
                className="w-[24rem] rounded-[19px]"
                style={{ filter: "drop-shadow(-12px 15px 13px rgba(0,0,0,0.25))" }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;

