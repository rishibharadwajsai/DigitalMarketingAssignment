import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star } from "lucide-react";

const categories = [
  {
    id: "rolls",
    name: "Rolls",
    description: "Delicious and flavorful rolls to satisfy your cravings",
    items: [
      {
        id: 1,
        name: "Paneer Roll",
        description:
          "Soft flatbread wrapped around spicy grilled paneer cubes and fresh veggies",
        price: 89,
        image:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/02/paneer-kathi-roll-recipe.jpg",
        rating: 4.6,
        isVeg: true,
        isSpicy: true,
      },
      {
        id: 2,
        name: "Egg Roll",
        description:
          "Egg cooked with aromatic spices, rolled in a flaky paratha",
        price: 249,
        image:
          "https://www.bigbasket.com/media/uploads/recipe/w-l/3684_1_1.jpg",
        rating: 4.8,
        isVeg: false,
        isSpicy: true,
      },
      {
        id: 3,
        name: "Veg Roll",
        description:
          "Crunchy mixed vegetable filling with a hint of curry leaves in a soft roll",
        price: 299,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUl8cnys9_rcMWVNgLJcUSjBM82xYM_o5dw&s",
        rating: 4.7,
        isVeg: true,
        isSpicy: true,
      },
      {
        id: 4,
        name: "Chicken Tikka Roll",
        description:
          "Juicy chicken tikka pieces rolled with onions and tangy chutney",
        price: 320,
        image:
          "https://bakewithzoha.com/wp-content/uploads/2024/03/chicken-tikka-paratha-rolls-featured.jpg",
        rating: 4.9,
        isVeg: false,
        isSpicy: true,
      },
      {
        id: 5,
        name: "Mushroom Roll",
        description:
          "Sautéed mushrooms with herbs and cheese wrapped in warm flatbread",
        price: 280,
        image:
          "https://i.ytimg.com/vi/Xh9Oejq19og/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBhkJxV7QbDP7025aCmdjLwBYuSvg",
        rating: 4.5,
        isVeg: true,
        isSpicy: false,
      },
      {
        id: 6,
        name: "Paneer Tikka Roll",
        description:
          "Marinated paneer cubes grilled and wrapped with onions and peppers",
        price: 310,
        image:
          "https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg",
        rating: 4.8,
        isVeg: true,
        isSpicy: true,
      },
      {
        id: 7,
        name: "Chicken Seekh Roll",
        description:
          "Spiced minced chicken skewers wrapped with onions and green chutney",
        price: 330,
        image:
          "https://i.pinimg.com/736x/c8/29/6f/c8296f9e011f3e8dbd72a768e4b539fe.jpg",
        rating: 4.7,
        isVeg: false,
        isSpicy: true,
      },
      {
        id: 8,
        name: "Aloo Roll",
        description:
          "Mashed spicy potatoes with herbs rolled in a flaky paratha",
        price: 99,
        image: "https://recipesblob.oetker.in/assets/4f0f9ff30dd840a9a35b45ebc6634b1b/1272x764/tandoori-aloo-wrap.jpg",
        rating: 4.4,
        isVeg: true,
        isSpicy: true,
      },
      {
        id: 9,
        name: "Paneer Bhurji Roll",
        description:
          "Scrambled spicy paneer cooked with peppers and onions in a soft wrap",
        price: 300,
        image:
          "https://www.chefkunalkapur.com/wp-content/uploads/2022/03/paneer-kulcha-roll-scaled.jpg?v=1647833164",
        rating: 4.7,
        isVeg: true,
        isSpicy: true,
      },
      {
        id: 10,
        name: "Mutton Roll",
        description:
          "Slow-cooked spicy mutton chunks wrapped in hot paratha with chutney",
        price: 350,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQT4ZBIQ2zo7Z0VbDoddW0l-2Jh_wUPI8Mg&s",
        rating: 4.9,
        isVeg: false,
        isSpicy: true,
      },
    ],
  },

  // {
  //   id: "mains",
  //   name: "Main Courses",
  //   description: "Hearty and flavorful main dishes",
  //   items: [
  //     {
  //       id: 4,
  //       name: "Butter Chicken",
  //       description: "Tender chicken in rich tomato and cream gravy",
  //       price: 349,
  //       image: "/placeholder-zmfed.png",
  //       rating: 4.9,
  //       isVeg: false,
  //       isSpicy: false,
  //     },
  //     {
  //       id: 5,
  //       name: "Dal Makhani",
  //       description: "Slow-cooked black lentils in butter and cream",
  //       price: 229,
  //       image: "/placeholder-lr10y.png",
  //       rating: 4.7,
  //       isVeg: true,
  //       isSpicy: false,
  //     },
  //     {
  //       id: 6,
  //       name: "Biryani (Chicken)",
  //       description: "Fragrant basmati rice with tender chicken and spices",
  //       price: 399,
  //       image: "/placeholder-e6f88.png",
  //       rating: 4.8,
  //       isVeg: false,
  //       isSpicy: true,
  //     },
  //   ],
  // },
  // {
  //   id: "desserts",
  //   name: "Desserts",
  //   description: "Sweet endings to your perfect meal",
  //   items: [
  //     {
  //       id: 7,
  //       name: "Gulab Jamun (2 pcs)",
  //       description: "Soft milk dumplings in cardamom-flavored sugar syrup",
  //       price: 129,
  //       image: "/placeholder-cx2fz.png",
  //       rating: 4.6,
  //       isVeg: true,
  //       isSpicy: false,
  //     },
  //     {
  //       id: 8,
  //       name: "Kulfi",
  //       description: "Traditional Indian ice cream with cardamom and pistachios",
  //       price: 149,
  //       image: "/placeholder-dzxgp.png",
  //       rating: 4.5,
  //       isVeg: true,
  //       isSpicy: false,
  //     },
  //   ],
  // },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🍽️ Our Menu
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            Discover Our <span className="text-primary">Delicious Menu</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            From appetizers to desserts, every dish is prepared with authentic
            spices and fresh ingredients
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id} className="space-y-8">
              {/* Category Header */}
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Card
                    key={item.id}
                    className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {item.isVeg && (
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800 border-green-200"
                          >
                            🌱 Veg
                          </Badge>
                        )}
                        {item.isSpicy && (
                          <Badge
                            variant="secondary"
                            className="bg-red-100 text-red-800 border-red-200"
                          >
                            🌶️ Spicy
                          </Badge>
                        )}
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium">
                            {item.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-lg text-card-foreground">
                            {item.name}
                          </h4>
                          <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-xl font-bold text-primary">
                            ₹{item.price}
                          </div>
                          <Button size="sm" className="gap-2">
                            <Plus className="h-4 w-4" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-transparent"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
