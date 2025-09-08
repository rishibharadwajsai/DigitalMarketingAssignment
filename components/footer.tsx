import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h3 className="text-2xl font-bold text-primary">Kunti</h3>
              <Badge variant="secondary" className="ml-2 text-xs">
                Fresh & Fast
              </Badge>
            </div>
            <p className="text-muted-foreground text-pretty">
              Bringing authentic Indian flavors to your doorstep with fresh ingredients and traditional recipes.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">Delhi NCR, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">hello@kunti.com</span>
              </li>
            </ul>
          </div>

          {/* Delivery Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Delivery Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <div className="text-sm">
                  <div className="text-card-foreground font-medium">Mon - Sun</div>
                  <div className="text-muted-foreground">11:00 AM - 11:00 PM</div>
                </div>
              </li>
            </ul>
            <div className="bg-primary/10 p-3 rounded-lg">
              <p className="text-sm text-primary font-medium">🚚 Free delivery on orders above ₹299</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Kunti Food Delivery. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  )
}
