"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/customui/lightdarktoggle";
import { Home, FolderOpen, User, Mail, GripVertical } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "About", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function FloatingMenu() {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load saved position from localStorage (desktop only)
  useEffect(() => {
    if (!isMobile) {
      const savedPosition = localStorage.getItem("floatingMenuPosition");
      if (savedPosition) {
        setPosition(JSON.parse(savedPosition));
      }
    }
  }, [isMobile]);

  // Save position to localStorage (desktop only)
  useEffect(() => {
    if (!isMobile) {
      localStorage.setItem("floatingMenuPosition", JSON.stringify(position));
    }
  }, [position, isMobile]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return; // Disable dragging on mobile
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || isMobile) return;

    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;

    // Keep menu within viewport bounds
    const maxX = window.innerWidth - 80; // Smaller width for icon-only
    const maxY = window.innerHeight - 300; // Smaller height for icon-only

    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging && !isMobile) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      };
    }
  }, [isDragging, dragOffset, isMobile]);

  return (
    <div
      className="fixed z-50 transition-transform duration-200 ease-out"
      style={{
        left: isMobile ? 16 : position.x,
        top: isMobile ? 16 : position.y,
        right: isMobile ? 16 : undefined,
        transform: isDragging ? "scale(1.05)" : "scale(1)",
      }}
    >
      <div className={cn(
        "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border border-white/20 dark:border-slate-700/50",
        isMobile 
          ? "rounded-full p-3" 
          : "rounded-2xl p-3"
      )}>
        <div className={cn(
          "flex",
          isMobile ? "flex-row space-x-2" : "flex-col space-y-2"
        )}>
          {/* Drag handle - desktop only */}
          {!isMobile && (
            <div
              className="flex justify-center pb-2 cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
            >
              <GripVertical className="h-4 w-4 text-slate-400 dark:text-slate-500" />
            </div>
          )}

          {/* Navigation buttons */}
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  size={isMobile ? "icon" : "sm"}
                  className={cn(
                    "transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800",
                    isMobile 
                      ? "h-10 w-10 rounded-full" 
                      : "w-full justify-start h-10 px-3 rounded-xl",
                    pathname === item.href
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                  )}
                  title={item.name}
                >
                  <Icon className="h-4 w-4" />
                </Button>
              </Link>
            );
          })}

          {/* Divider - desktop only */}
          {!isMobile && (
            <div className="h-px bg-slate-200 dark:bg-slate-700 my-1" />
          )}

          {/* Theme toggle */}
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
} 