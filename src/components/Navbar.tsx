
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, CalendarDays, Menu, X } from 'lucide-react';
import BookingDialog from './BookingDialog';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Indoor Air Quality", href: "#air-quality" },
    { name: "Benefits", href: "#benefits" },
    { name: "Why Us?", href: "#why-us" },
    { name: "Promotions", href: "#promotions" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQs", href: "#faq" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      // Get the y-coordinate of the section
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      // Adjust to 80px offset
      const scrollPosition = sectionTop - 80;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="/" className="flex items-center">
            {/* Logo */}
            <img 
              src="https://sharkduct.com/wp-content/uploads/2023/10/shark-duct.png" 
              alt="Shark Duct Cleaning" 
              className="h-16 md:h-20 mr-3" 
            />
          </a>
        </motion.div>

        {/* Desktop Navigation - Only show on desktop */}
        <div className="hidden md:flex items-center">
          <NavigationMenu className="mr-4">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent cursor-pointer",
                      isScrolled 
                        ? "hover:text-shark-blue text-shark-darkBlue" 
                        : "text-white hover:text-gray-200"
                    )}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTAs */}
        <div className="flex items-center space-x-2">
          <BookingDialog>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className={`${isScrolled ? 'bg-shark-accent text-white' : 'bg-white text-shark-blue'} hover:bg-shark-darkBlue hover:text-white shadow-lg transition-all duration-300`}>
                <CalendarDays className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Book Free Inspection</span>
                <span className="sm:hidden">Book</span>
              </Button>
            </motion.div>
          </BookingDialog>
          <a href="tel:8778888431">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className={`${isScrolled ? 'bg-shark-blue' : 'bg-white/20 backdrop-blur-sm'} hover:bg-shark-darkBlue hover:text-white shadow-lg transition-all duration-300 ${!isScrolled && 'text-white border border-white/30'}`}>
                <Phone className="mr-2 h-4 w-4" />
                <span className="inline">877-888-8431</span>
              </Button>
            </motion.div>
          </a>

          {/* Mobile Navigation Trigger - changed to only show mobile menu button, without the menu content */}
          <div className="md:hidden ml-2">
            <Button 
              variant="outline" 
              size="icon" 
              className={`border-none shadow-none ${!isScrolled && 'text-white'}`}
              onClick={() => console.log("Menu button clicked - Navigation removed from mobile view")}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
