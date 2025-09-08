"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Menu, X, MapPin, Phone } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Kunti</h1>
            <Badge variant="secondary" className="ml-2 text-xs">
              Fresh & Fast
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">
                Menu
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Delhi NCR</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-1" />
              <span>+91 98765 43210</span>
            </div>
            <Button variant="outline" size="sm" className="relative bg-transparent">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                3
              </Badge>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground font-medium">
                Home
              </a>
              <a href="#menu" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Menu
              </a>
              <a href="#about" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Contact
              </a>
              <div className="px-3 py-2 border-t border-border mt-2">
                <Button variant="outline" size="sm" className="w-full relative bg-transparent">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart (3 items)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
