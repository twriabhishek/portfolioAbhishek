import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { TypewriterText } from "./TypewriterText";
import { GithubIcon, LinkedinIcon, MailIcon, FileText } from "lucide-react";
const highlights = [
  { value: "3.5+", label: "Years Experience" },
  { value: "MERN", label: "Stack Focus" },
  { value: "Noida, IN", label: "Location" },
];

export function HeroSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-muted-foreground">Open to new opportunities</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="inline-block min-w-[9.5ch] text-accent">
                <TypewriterText text="Abhishek" charDelay={130} />
              </span>
            </h1>
            <p className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
              Software Engineer
            </p>

            <p className="mt-6 max-w-xl text-lg prose-muted">
              MERN stack developer with 3+ years of experience designing and developing CPaaS platforms, IVR automation systems, event-driven microservices, and modern web applications. Experienced across the full stack, from React and Next.js frontends to NestJS, Kafka, Redis, and Asterisk-powered backend systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href="https://drive.google.com/file/d/1Ga8HmGqzd7U0clG9XSKU1fl0hGBusbM2/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">
                  <MailIcon />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/twriabhishek"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-accent/30 hover:text-foreground"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-tiwari-7232171b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-accent/30 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:abhishek130199@gmail.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-accent/30 hover:text-foreground"
                aria-label="Email"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {highlights.map((item) => (
                <div key={item.label}>
                  <dt className="text-lg font-semibold text-foreground sm:text-xl">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{item.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted shadow-elevated">
              <img
                src="/images/HeroImage1.jpeg"
                alt="Abhishek Tiwari"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
