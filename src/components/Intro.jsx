import { Link } from "react-scroll";
import myPhoto from "../img/iqbal-nobg.png"

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div
      id="Intro"
      className="flex flex-col items-center mt-5 gap-10 px-4 text-center"
    >
      {/* Foto Profil */}
      <div className="rounded-full w-52 aspect-square overflow-hidden border-4 border-base-300 bg-base-100 shadow">
        <img src={myPhoto} alt="My Photo" className="w-full h-full object-cover" />
      </div>



      {/* Teks dan Aksi */}
      <div className="max-w-2xl flex flex-col items-center gap-6">

        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-4xl font-bold">
          <span>I’m Iqbal Fikri,</span>
          <span className="text-orange-500">Fullstack Developer & AI Enthusiast</span>
        </div>

<p className="text-lg text-gray-500 max-w-xl">
  I write code that actually works (most of the time) 🧑‍💻. Web stuff, backend brains, and a bit of ML magic ✨.
</p>


        <Link to="contact" smooth={true} spy={true}>
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Hire me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
