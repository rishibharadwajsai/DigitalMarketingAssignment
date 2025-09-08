import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Truck } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-background to-card py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                🔥 Now Delivering in Delhi NCR
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Authentic Indian
                <span className="text-primary block">Flavors Delivered</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-lg">
                Experience the rich taste of traditional Indian cuisine made with fresh ingredients and authentic
                spices. Order now and get it delivered hot to your doorstep.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">30 min delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Star className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">4.8★ rated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Truck className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Free delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Order Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Menu
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://www.indianhealthyrecipes.com/wp-content/uploads/2024/02/chicken-kathi-roll-chicken-frankie.jpg"
                alt="Delicious Indian Chicken Rolls - Traditional meal with multiple curries, roti, and chicken"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Price Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <img
                  src="https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_2132499279-750x750.jpg"
                  alt="Butter Chicken Roll"
                  className="w-15 h-15 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-card-foreground">Butter Chicken</h3>
                  <p className="text-primary font-bold">₹299</p>
                </div>
              </div>
            </div>

            {/* Floating Rating Card */}
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-card-foreground">4.8</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">2,847 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
