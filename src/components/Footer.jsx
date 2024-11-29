import React from 'react'
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abhishek. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/twriabhishek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-tiwari-7232171b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:abhishek130199@gmail.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <MailIcon className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by Abhishek
          </p>
        </div>
      </div>
    </footer>
  )
}

