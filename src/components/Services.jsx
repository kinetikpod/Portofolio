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
        <h2 className="text-4xl font-bold text-primary mb-2">What I Do</h2>
        <div className="h-1 w-12 bg-primary rounded"></div>
      </div>
      <p className="text-lg text-base-content leading-relaxed">
        I craft fullstack web applications and deploy intelligent systems —
        blending development and MLOps to build software that's clean,
        scalable, and production-ready.
      </p>
      <p className="text-base-content">
        From intuitive interfaces to powerful backends and automated ML pipelines,
        I focus on solutions that deliver real value.
      </p>
    </div>
  );
};


const ServicesRight = () => {
  const services = [
    {
      icon: <Code size={32} className="text-primary" />,
      title: "Fullstack Web Development",
      description:
        "I build complete web applications using modern tools like React, FastAPI, PostgreSQL, and Tailwind. From frontend to backend.",
      gradient: "from-primary/20 to-primary/10",
      ring: "ring-primary/40",
    },
    {
      icon: <Cpu size={32} className="text-secondary" />,
      title: "MLOps & Deployment",
      description:
        "I create end-to-end ML pipelines, from model training to deployment with Docker, FastAPI, and CI/CD.",
      gradient: "from-secondary/20 to-secondary/10",
      ring: "ring-secondary/40",
    },
    {
      icon: <Server size={32} className="text-accent" />,
      title: "Backend API Development",
      description:
        "Designing clean, secure, and scalable REST API or gRPC with database integration and caching.",
      gradient: "from-accent/20 to-accent/10",
      ring: "ring-accent/40",
    },
    {
      icon: <GraduationCap size={32} className="text-info" />,
      title: "Coding Instructor",
      description:
        "Teaching programming, algorithms, math, and physics with clarity and real-world application examples.",
      gradient: "from-info/20 to-info/10",
      ring: "ring-info/40",
    },
  ];

  return (
    <div className="flex flex-1 flex-wrap gap-6">
      {services.map((s, i) => (
        <div
          key={i}
          className={`
            flex-1 min-w-[250px] max-w-[calc(50%-12px)]
            bg-gradient-to-br ${s.gradient}
            rounded-2xl p-6 border border-base-300 ring-1 ${s.ring}
            shadow-md hover:shadow-lg hover:-translate-y-1
            transition-all duration-300 ease-in-out
          `}
        >
          <div className="flex justify-end mb-4">{s.icon}</div>
          <h3 className="text-xl font-semibold text-base-content mb-2 tracking-tight">
            {s.title}
          </h3>
          <p className="text-base-content/70 text-sm leading-relaxed">
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

