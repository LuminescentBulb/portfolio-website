import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/30 bg-white/30 backdrop-blur-sm dark:border-slate-800/30 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">taeminkm@umich.edu</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Portland, OR</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/LuminescentBulb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="http://linkedin.com/in/taemin-kim-010344235/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="mailto:taeminkm@umich.edu"
              aria-label="Email"
            >
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200/30 dark:border-slate-800/30">
          <div className="text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © 2024 Taemin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 