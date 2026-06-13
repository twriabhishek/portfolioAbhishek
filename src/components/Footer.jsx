import React from "react";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/twriabhishek",
    label: "GitHub",
    icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/abhishek-tiwari-7232171b3/",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    href: "mailto:abhishek130199@gmail.com",
    label: "Email",
    icon: MailIcon,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-foreground">Abhishek Tiwari</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Software Engineer · Product Development · MERN Stack
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-accent/30 hover:text-foreground"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abhishek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
