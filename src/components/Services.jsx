import {
  Code,
  Cpu,
  Server,
  GraduationCap,
} from "lucide-react";

const ServicesLeft = () => {
  return (
    <div className="flex flex-1 flex-col gap-6 pr-8">
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">What I Do</h2>
        <div className="h-1 w-12 bg-purple-500 rounded"></div>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed">
        I craft fullstack web applications and deploy intelligent systems —
        blending development and MLOps to build software that's clean,
        scalable, and production-ready.
      </p>
      <p className="text-gray-500 text-base">
        From intuitive interfaces to powerful backends and automated ML pipelines,
        I focus on solutions that deliver real value.
      </p>
    </div>
  );
};


const ServicesRight = () => {
  const services = [
    {
      icon: <Code size={32} className="text-purple-600" />,
      title: "Fullstack Web Development",
      description:
        "I build complete web applications using modern tools like React, FastAPI, PostgreSQL, and Tailwind. From frontend to backend.",
      gradient: "from-purple-50 to-white",
      ring: "ring-purple-200",
    },
    {
      icon: <Cpu size={32} className="text-teal-600" />,
      title: "MLOps & Deployment",
      description:
        "I create end-to-end ML pipelines, from model training to deployment with Docker, FastAPI, and CI/CD.",
      gradient: "from-teal-50 to-white",
      ring: "ring-teal-200",
    },
    {
      icon: <Server size={32} className="text-indigo-600" />,
      title: "Backend API Development",
      description:
        "Designing clean, secure, and scalable REST API or gRPC with database integration and caching.",
      gradient: "from-indigo-50 to-white",
      ring: "ring-indigo-200",
    },
    {
      icon: <GraduationCap size={32} className="text-yellow-600" />,
      title: "Coding Instructor",
      description:
        "Teaching programming, algorithms, math, and physics with clarity and real-world application examples.",
      gradient: "from-yellow-50 to-white",
      ring: "ring-yellow-200",
    },
  ];

  return (
    <div className="flex flex-1 flex-wrap gap-6">
      {services.map((s, i) => (
        <div
          key={i}
          className={`flex-1 min-w-[250px] max-w-[calc(50%-12px)]
            bg-gradient-to-br ${s.gradient}
            rounded-2xl p-6 border border-white ring-1 ${s.ring}
            shadow-md hover:shadow-lg hover:-translate-y-1
            transition-all duration-300 ease-in-out`}
        >
          <div className= "flex justify-end">
            <div className="mb-4">{s.icon}</div>

          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 tracking-tight">
            {s.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {s.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <div id="services" className="flex items-center mt-20 mb-20">
      <ServicesLeft />
      <ServicesRight />
    </div>

  )
}

export default Services

