import { socialLinks } from "./socialLinks";

function SocialIcons() {
  return (
    <div className="w-fit">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative">
        <div className="absolute inset-0 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />

        <div className="relative flex items-end gap-x-8 p-2">
          {socialLinks.map(({href, color, border, icon }, i) => (
            <div className="relative" key={i}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <div
                  style={{ clipPath: "url(#squircleClip)" }}
                  className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg ${border} cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {icon}
                  </svg>
                </div>


              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialIcons
