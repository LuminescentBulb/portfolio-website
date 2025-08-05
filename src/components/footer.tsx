import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/50 bg-white/50 backdrop-blur-sm dark:border-slate-800/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-semibold text-lg text-slate-900 dark:text-white">Taemin</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
              Data Science Major at University of Michigan, passionate about building complex systems that bring data, policy, and human behavior into interactive environments.
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">Skills</h3>
            <ul className="space-y-2">
              <li className="text-sm text-slate-600 dark:text-slate-400">Full-Stack Development</li>
              <li className="text-sm text-slate-600 dark:text-slate-400">Data Visualization</li>
              <li className="text-sm text-slate-600 dark:text-slate-400">Simulation Modeling</li>
              <li className="text-sm text-slate-600 dark:text-slate-400">Policy Research</li>
              <li className="text-sm text-slate-600 dark:text-slate-400">Statistical Analysis</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">Ann Arbor, MI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">taemin@umich.edu</span>
              </div>
            </div>
            <div className="pt-2">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                Get in Touch
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2024 Taemin. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 