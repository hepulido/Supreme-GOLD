# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding messages..."
Product.destroy_all
Price.destroy_all
User.destroy_all



# User.create(first_name: "Admin", last_name: "Admin", username: "Admin", email: "Admin@admin.com", password: "testing1")
# User.create(first_name: "Hector", last_name: "Pulido", username: "hepulido", email: "hectore@gmail.com", password: "testing1")

p1 = Price.create(product_price:600)
p2 = Price.create(product_price:800)
p3 = Price.create(product_price:900)
p4 = Price.create(product_price:600)
p5 = Price.create(product_price:700)

@price = [p1, p2, p3, p4, p5]


# Product.create(title:"White gold 18K", desc: "Code in object-oriented programming is organized around objects.", img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png")
# Product.create(title:"White gold 18K", desc: "Code in object-oriented programming is organized around objects.", img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png")
# Product.create(title:"White gold 18K", desc: "Code in object-oriented programming is organized around objects.", img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png")
# Product.create(title:"White gold 18K", desc: "Code in object-oriented programming is organized around objects.", img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png")
# Product.create(title:"White gold 18K", desc: "Code in object-oriented programming is organized around objects.", img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png")


products =[
{
    title:"White gold 18K",
    desc: "Code in object-oriented programming is organized around objects.",
    img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png",
    price_id:@price.sample.id
},
{
    title:"White gold 18K",
    desc: "Code in object-oriented programming is organized around objects.",
    img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png",
    price_id:@price.sample.id

},
{
    title:"White gold 18K",
    desc: "Code in object-oriented programming is organized around objects.",
    img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png",
    price_id:@price.sample.id
},
{
    title:"White gold 18K",
    desc: "Code in object-oriented programming is organized around objects.",
    img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png",
    price_id:@price.sample.id
},
{
    title:"White gold 18K",
    desc: "Code in object-oriented programming is organized around objects.",
    img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png",
    price_id:@price.sample.id 
},

]


 products.each do |products_hash|
   product = Product.create(products_hash)
  end

#   prices.each do |prices_hash|
#     Price.create(prices_hash)
#   end

  puts "TY"



  