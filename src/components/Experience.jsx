const Experience = () => {
  return (
    <div
      id="experience"
      className="transform scale-100 max-[480px]:scale-75 flex items-center justify-center gap-20 h-[70vh] mb-32 text-black"
    >
      {[
        { number: "1+", label: "years", title: "Experience" },
        { number: "4+", label: "completed", title: "Projects" },
        { number: "1+", label: "companies", title: "Work" },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="p-[8px] rounded-full bg-gradient-to-b from-[#87e6fb] to-[#ffc05c] shadow-[var(--boxShadow)]">
            <div className="bg-white w-30 h-30 flex items-center justify-center rounded-full text-4xl font-bold">
              {item.number}
            </div>
          </div>
          <span className="text-amber-500 text-base font-medium">
            {item.label}
          </span>
          <span className="text-base font-medium">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Experience;

