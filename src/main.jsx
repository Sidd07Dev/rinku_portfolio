import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  CircleDot,
  ClipboardCheck,
  Cog,
  Download,
  Factory,
  Gauge,
  GraduationCap,
  Languages,
  Mail,
  Menu,
  MapPin,
  PenTool,
  Phone,
  Ruler,
  Settings,
  Sparkles,
  Target,
  Wrench,
  Zap,
  X
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Rashmi Ranjan Nayak",
  role: "Mechanical Engineering Graduate",
  location: "Dhenkanal, Odisha",
  email: "nayakrashmiranjan436@gmail.com",
  phone: "9861720125",
  linkedin: "https://www.linkedin.com/in/rashmi-ranjan-nayak-058332283",
  cv: "/assets/rashmi-ranjan-nayak-cv.pdf",
  photo: "/assets/profile.jpeg"
};

const stats = [
  ["B.Tech", "Mechanical Engineering"],
  ["7.06", "Current CGPA"],
  ["2", "Industrial Internships"],
  ["2026", "Graduation Year"]
];

const internships = [
  {
    company: "SAIL, Rourkela Steel Plant",
    place: "Rourkela, Odisha",
    date: "25 May 2024 - 24 June 2024",
    text:
      "Gained exposure to integrated steel manufacturing, plant operations, mechanical maintenance, production systems, and hybrid training modules in one of India's major steel plants."
  },
  {
    company: "NTPC Limited, Kaniha",
    place: "Talcher, Odisha",
    date: "5 May 2025 - 4 June 2025",
    text:
      "Worked through industrial training in a coal-based thermal power plant, learning the practical flow of thermal power generation and large-scale plant systems."
  }
];

const projects = [
  {
    title: "Design and Development of Solar Powered Electric Tricycle",
    year: "2026",
    tag: "Sustainable Mobility",
    problem: "Affordable last-mile mobility needs a cleaner power source and a practical lightweight vehicle layout.",
    approach: "Conceptualized a solar-assisted electric tricycle with attention to energy use, structure, packaging, and mechanical feasibility.",
    outcome: "Built a project direction around eco-friendly transportation and practical design decision-making.",
    tools: ["Mechanical Design", "Energy Efficiency", "Sustainable Mobility"],
    text:
      "A solar-powered electric tricycle concept focused on eco-friendly, energy-efficient transportation with practical mechanical design thinking."
  },
  {
    title: "Turbine System in Power Plant",
    year: "2025",
    tag: "Power Generation",
    problem: "Power plants rely on efficient energy conversion from pressurized steam or gas to mechanical shaft power.",
    approach: "Studied turbine flow, generator drive logic, thermal plant systems, and the relationship between mechanical energy and electrical output.",
    outcome: "Improved understanding of large-scale rotating equipment and power-generation process flow.",
    tools: ["Thermal Systems", "Rotating Equipment", "Plant Operations"],
    text:
      "A study of turbine systems that convert high-pressure steam or gas into mechanical energy to drive generators for electricity production."
  }
];

const designTools = [
  {
    title: "3D Modelling",
    text: "Part modelling fundamentals, shape planning, and geometry-first thinking for manufacturable components."
  },
  {
    title: "Assembly Basics",
    text: "Understanding fit, movement, alignment, and component relationships in mechanical assemblies."
  },
  {
    title: "Drafting",
    text: "Mechanical drawing interpretation, views, dimensions, and documentation-ready design communication."
  },
  {
    title: "Plant Systems",
    text: "Exposure to maintenance, production flow, thermal power generation, and industrial operating environments."
  }
];

const processSteps = [
  "Observe plant layout",
  "Map mechanical systems",
  "Understand maintenance flow",
  "Study production process",
  "Document learning outcomes"
];

const readiness = [
  "Graduate Engineer Trainee",
  "Mechanical Design Trainee",
  "Plant Operations Trainee",
  "Maintenance Trainee"
];

const skills = [
  "CATIA V5",
  "MS Word",
  "MS Excel",
  "PowerPoint",
  "Mechanical Maintenance",
  "Plant Operations",
  "Production Systems",
  "Problem Solving",
  "Team Work",
  "Leadership",
  "Time Management",
  "Good Listener"
];

const education = [
  {
    school: "Indira Gandhi Institute of Technology, Sarang",
    detail: "B.Tech in Mechanical Engineering",
    date: "Aug 2022 - May 2026",
    result: "CGPA: 7.06"
  },
  {
    school: "Parjang Higher Secondary School, Parjang",
    detail: "+2 Science",
    date: "Aug 2020 - Jul 2022",
    result: "Percentage: 76%"
  },
  {
    school: "R.J.U Bidyapitha, Lodhani",
    detail: "10th / Equivalent",
    date: "Jun 2018 - Jul 2020",
    result: "Percentage: 50.83%"
  }
];

const navItems = ["work", "projects", "skills", "contact"];

function SectionTitle({ icon: Icon, eyebrow, title }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-5">
      <div className="min-w-0">
        <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-teal-700">
          <Icon className="h-4 w-4" />
          {eyebrow}
        </div>
        <h2 className="text-balance font-display text-3xl font-semibold text-slate-950 md:text-4xl">{title}</h2>
      </div>
      <div className="hidden h-px flex-1 bg-slate-200 md:block" />
    </div>
  );
}

function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-grid" />
      <div className="loader-core">
        <div className="loader-ring" />
        <div className="loader-ring loader-ring-two" />
        <Factory className="relative z-10 h-10 w-10 text-teal-300" />
      </div>
      <div className="mt-8 text-center">
        <p className="font-display text-xl font-semibold text-white">Preparing Engineering Portfolio</p>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.28em] text-teal-200">Design | Plant | Systems</p>
      </div>
      <div className="loader-progress mt-8">
        <span />
      </div>
    </div>
  );
}

function TurbineVisual() {
  return (
    <div className="mechanical-visual" aria-hidden="true">
      <div className="dimension-line dimension-line-top" />
      <div className="dimension-line dimension-line-bottom" />
      <div className="gear-orbit">
        <Cog className="gear gear-large" />
        <Cog className="gear gear-small" />
        <div className="turbine-core">
          <CircleDot className="h-10 w-10 text-teal-200" />
        </div>
      </div>
      <div className="spec-tag spec-tag-one">RPM</div>
      <div className="spec-tag spec-tag-two">CAD</div>
      <div className="spec-tag spec-tag-three">LOAD</div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-slate-800">
      {isLoading && <Loader />}
      <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/15 bg-[#07111f]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 text-sm text-white md:px-8">
          <a href="#home" className="max-w-[190px] truncate font-display font-semibold tracking-wide sm:max-w-none">{profile.name}</a>
          <div className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/5 p-1 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="rounded px-4 py-2 capitalize text-slate-200 transition hover:bg-white/10 hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={profile.cv}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-[var(--accent)] px-3 font-semibold text-slate-950 shadow-[0_0_30px_rgba(45,212,191,0.35)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-soft)] sm:px-4"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/10 md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <div className={`mobile-menu md:hidden ${menuOpen ? "mobile-menu-open" : ""}`}>
          <div className="mx-5 mb-4 grid gap-2 rounded-lg border border-white/10 bg-slate-900/95 p-2 shadow-lift">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-semibold capitalize text-slate-100 transition hover:bg-white/10"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header id="home" className="relative overflow-hidden bg-[#07111f] pt-16 text-white">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(7,17,31,0)_0%,var(--page-bg)_100%)]" />
        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1fr_0.9fr] md:px-8 lg:gap-16">
          <div className="max-w-3xl">
            <div className="reveal mb-5 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-teal-100 shadow-lift backdrop-blur">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </div>
            <p className="reveal reveal-delay-1 text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
              Mechanical Engineer | CAD | Plant Operations
            </p>
            <h1 className="reveal reveal-delay-2 mt-4 text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-7xl">
              Designing reliable systems for real industrial work.
            </h1>
            <p className="reveal reveal-delay-3 mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-200 sm:text-lg md:text-xl">
              I am {profile.name}, a Mechanical Engineering graduate focused on practical design, plant operations, production systems, and sustainable mobility.
            </p>
            <div className="reveal reveal-delay-4 mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <a href="#projects" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-5 font-semibold text-slate-950 shadow-[0_16px_38px_rgba(20,184,166,0.26)] transition hover:-translate-y-1 hover:bg-[var(--accent-soft)]">
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>
            <a href="#work" className="reveal reveal-delay-4 mt-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white">
              Explore portfolio
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>

          <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[430px] md:mx-0 md:justify-self-end">
            <TurbineVisual />
            <div className="portrait-shell relative overflow-hidden rounded-lg border border-white/15 bg-white/10 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur">
              <div className="absolute left-6 top-6 z-10 rounded-md bg-slate-950/80 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-teal-200 backdrop-blur">
                Graduate Engineer
              </div>
              <img
                src={profile.photo}
                alt={profile.name}
                loading="eager"
                fetchPriority="high"
                className="h-[560px] w-full rounded-md object-cover object-[50%_38%] brightness-105 contrast-105 md:h-[640px]"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-b-md bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.9)_100%)] p-5 pt-20">
                <h2 className="font-display text-2xl font-semibold">{profile.name}</h2>
                <p className="mt-1 text-sm text-slate-200">{profile.role}</p>
              </div>
            </div>
            <div className="float-card absolute -left-3 top-28 hidden rounded-lg border border-white/15 bg-white/95 p-4 text-slate-950 shadow-lift sm:block">
              <Gauge className="mb-3 h-6 w-6 text-teal-700" />
              <p className="font-display text-2xl font-semibold">7.06</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">CGPA</p>
            </div>
            <div className="float-card float-card-delay absolute -right-2 bottom-24 hidden rounded-lg border border-white/15 bg-white/95 p-4 text-slate-950 shadow-lift sm:block">
              <Factory className="mb-3 h-6 w-6 text-amber-600" />
              <p className="font-display text-2xl font-semibold">2</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Internships</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto -mt-10 grid max-w-7xl gap-3 px-5 pb-12 md:grid-cols-4 md:px-8">
          {stats.map(([value, label], index) => (
            <div key={label} className="metric-card reveal p-5" style={{ animationDelay: `${0.08 * index + 0.35}s` }}>
              <div className="font-display text-3xl font-semibold text-slate-950">{value}</div>
              <div className="mt-1 text-sm font-medium text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="feature-card group reveal p-6 transition duration-300 hover:-translate-y-2">
            <span className="icon-chip mb-5">
              <Settings className="h-7 w-7 text-teal-700 transition duration-500 group-hover:rotate-90" />
            </span>
            <h3 className="font-display text-xl font-semibold text-slate-950">Design Mindset</h3>
            <p className="mt-3 leading-7 text-slate-600">Comfortable with CAD fundamentals and mechanical design workflows using CATIA V5.</p>
          </div>
          <div className="feature-card group reveal reveal-delay-1 p-6 transition duration-300 hover:-translate-y-2">
            <span className="icon-chip mb-5">
              <Factory className="h-7 w-7 text-teal-700" />
            </span>
            <h3 className="font-display text-xl font-semibold text-slate-950">Plant Exposure</h3>
            <p className="mt-3 leading-7 text-slate-600">Industrial training across steel production and thermal power generation environments.</p>
          </div>
          <div className="feature-card group reveal reveal-delay-2 p-6 transition duration-300 hover:-translate-y-2">
            <span className="icon-chip mb-5">
              <Gauge className="h-7 w-7 text-teal-700" />
            </span>
            <h3 className="font-display text-xl font-semibold text-slate-950">Execution Focus</h3>
            <p className="mt-3 leading-7 text-slate-600">Strong team work, time management, leadership, and problem-solving habits.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <div className="blueprint-panel reveal grid gap-8 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-teal-200">
              <Ruler className="h-4 w-4" />
              Mechanical Identity
            </div>
            <h2 className="text-balance font-display text-3xl font-semibold text-white md:text-4xl">
              CAD thinking, plant exposure, and system-level engineering judgement.
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              The portfolio is built around real mechanical signals: design tooling, manufacturing exposure, thermal power systems, maintenance flow, and project-based problem solving.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {designTools.map((tool, index) => (
              <div key={tool.title} className="blueprint-card p-4" style={{ animationDelay: `${index * 0.06}s` }}>
                <PenTool className="mb-3 h-5 w-5 text-teal-300" />
                <h3 className="font-display text-lg font-semibold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{tool.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="surface-band py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle icon={BriefcaseBusiness} eyebrow="Industrial Training" title="Real Plant Exposure" />
          <div className="process-rail reveal mb-8 grid gap-3 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="process-step p-4">
                <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-sm font-semibold text-slate-700">{step}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {internships.map((item) => (
              <article key={item.company} className="timeline-card reveal p-6 transition duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-balance font-display text-2xl font-semibold text-slate-950">{item.company}</h3>
                    <p className="mt-1 text-slate-500">{item.place}</p>
                  </div>
                  <Factory className="h-7 w-7 shrink-0 text-teal-700" />
                </div>
                <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-800 ring-1 ring-teal-100">
                  <CalendarDays className="h-4 w-4" />
                  {item.date}
                </div>
                <p className="mt-5 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionTitle icon={Wrench} eyebrow="Projects" title="Mechanical Engineering Work" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="project-card reveal group p-6 text-white shadow-lift transition duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-md bg-[var(--accent)] px-3 py-1 text-sm font-semibold text-slate-950">{project.tag}</span>
                <span className="font-display text-2xl font-semibold text-amber-200">{project.year}</span>
              </div>
              <h3 className="mt-8 text-balance font-display text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.text}</p>
              <div className="mt-6 grid gap-3">
                {[
                  ["Problem", project.problem, Target],
                  ["Approach", project.approach, Settings],
                  ["Outcome", project.outcome, ClipboardCheck]
                ].map(([label, copy, Icon]) => (
                  <div key={label} className="case-row">
                    <Icon className="mt-1 h-4 w-4 shrink-0 text-teal-300" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">{label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded bg-white/10 px-3 py-1 text-xs font-semibold text-teal-100 ring-1 ring-white/10">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-8 h-2 overflow-hidden rounded bg-white/10">
                <div className="h-full w-2/3 rounded bg-gradient-to-r from-teal-300 to-amber-300 transition-all duration-700 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="surface-band py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-8">
          <div>
            <SectionTitle icon={Sparkles} eyebrow="Capabilities" title="Skills and Certification" />
            <div className="cert-card reveal p-6">
              <div className="flex items-center gap-3">
                <span className="icon-chip">
                  <Award className="h-7 w-7 text-teal-700" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-slate-950">CATIA V5</h3>
                  <p className="text-slate-500">CTTC certification, 27 Oct - 24 Nov 2025</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="icon-chip">
                  <Languages className="h-7 w-7 text-teal-700" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-slate-950">Languages</h3>
                  <p className="text-slate-500">English, Hindi, Odia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {skills.map((skill, index) => (
              <span key={skill} className="skill-pill reveal px-4 py-3 font-semibold" style={{ animationDelay: `${0.035 * index}s` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionTitle icon={Gauge} eyebrow="Engineering Dashboard" title="Role Readiness Snapshot" />
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="dashboard-card reveal p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="gauge-card">
                <div className="gauge-ring" style={{ "--value": "76%" }}>
                  <span>76%</span>
                </div>
                <p className="mt-4 font-semibold text-slate-700">+2 Science</p>
              </div>
              <div className="gauge-card">
                <div className="gauge-ring" style={{ "--value": "70.6%" }}>
                  <span>7.06</span>
                </div>
                <p className="mt-4 font-semibold text-slate-700">B.Tech CGPA</p>
              </div>
            </div>
          </div>
          <div className="dashboard-card reveal reveal-delay-1 p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="icon-chip">
                <BookOpenCheck className="h-7 w-7 text-teal-700" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-slate-950">Recruiter Match</h3>
                <p className="text-slate-500">Best-fit entry-level mechanical roles.</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {readiness.map((role) => (
                <div key={role} className="role-chip">
                  <Zap className="h-4 w-4 text-amber-600" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionTitle icon={GraduationCap} eyebrow="Education" title="Academic Foundation" />
        <div className="grid gap-4">
          {education.map((item) => (
            <article key={item.school} className="education-card reveal grid gap-4 p-5 transition duration-300 hover:-translate-y-1 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-balance font-display text-xl font-semibold text-slate-950">{item.school}</h3>
                <p className="mt-1 text-slate-600">{item.detail}</p>
                <p className="mt-2 font-semibold text-teal-700">{item.result}</p>
              </div>
              <div className="rounded-md bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 ring-1 ring-amber-100">{item.date}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-band py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_auto] md:items-center md:px-8">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-wide text-teal-300">Open to opportunities</p>
            <h2 className="text-balance font-display text-4xl font-semibold md:text-5xl">Ready for GET, design, plant operations, and maintenance trainee roles.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Available for graduate engineering roles, trainee opportunities, mechanical design work, production systems learning, and plant operations exposure.
            </p>
          </div>
          <div className="grid gap-3">
            <a href={`mailto:${profile.email}`} className="contact-button-primary inline-flex min-h-12 items-center gap-3 break-all px-5 py-3 font-semibold sm:break-normal">
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="contact-button inline-flex min-h-12 items-center gap-3 px-5 py-3 font-semibold">
              <Phone className="h-4 w-4" />
              {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-button inline-flex min-h-12 items-center gap-3 px-5 py-3 font-semibold">
              <ArrowUpRight className="h-4 w-4" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
