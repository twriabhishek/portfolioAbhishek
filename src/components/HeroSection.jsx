import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { GithubIcon, LinkedinIcon, MailIcon, FileText } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I'm <span className="text-primary">ABHISHEK</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Software Developer
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ambitious problem-solver and tech enthusiast driving innovation in
              web development. Passionate about creating efficient, scalable,
              and user-friendly applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1AqpdTkznS3HKKP3a4KphyeS-ObHVMzIJ/view"
                target="_blank"
              >
                <Button as="a">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline">
                  <MailIcon className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </a>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="https://github.com/twriabhishek" target="_blank">
                <Button variant="ghost" size="icon" as="a">
                  <GithubIcon className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-tiwari-7232171b3/"
                target="_blank"
              >
                <Button variant="ghost" size="icon" as="a">
                  <LinkedinIcon className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a href="mailto:abhishek130199@gmail.com">
                <Button variant="ghost" size="icon">
                  <MailIcon className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative aspect-square w-full max-w-lg rounded-full border-2">
              <img
                src="/images/HeroSectionImage.jpeg"
                alt="John Doe"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 -z-10 bg-primary/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
