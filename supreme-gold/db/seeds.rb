# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding messages..."
Product.destroy_all
User.destroy_all



# User.create(first_name: "Admin", last_name: "Admin", username: "Admin", email: "Admin@admin.com", password: "testing1")
# User.create(first_name: "Hector", last_name: "Pulido", username: "hepulido", email: "hectore@gmail.com", password: "testing1")

# p1 = Price.create(product_price:600)
# p2 = Price.create(product_price:800)
# p3 = Price.create(product_price:900)
# p4 = Price.create(product_price:600)
# p5 = Price.create(product_price:700)

# @price = [p1, p2, p3, p4, p5]


# Product.create(title:"White gold 18K", desc: "Code in object-oriented programming is organized around objects.", img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png")
# Product.create(title:"White gold 18K", desc: "Code in object-oriented programming is organized around objects.", img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png")
# Product.create(title:"White gold 18K", desc: "Code in object-oriented programming is organized around objects.", img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png")
# Product.create(title:"White gold 18K", desc: "Code in object-oriented programming is organized around objects.", img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png")
# Product.create(title:"White gold 18K", desc: "Code in object-oriented programming is organized around objects.", img: "https://e7.pngegg.com/pngimages/231/285/png-clipart-jewelry-jewelry-thumbnail.png")


products =[
{
    title:"The Keiki Top Open Ring",
    desc: "These classic Diamond Ring In 18Kt Yellow Gold (2.26 gram) with Diamonds (0.0720 Ct).",
    img: "https://i.pinimg.com/736x/6d/e9/3d/6de93dba299788b4ed4884edfb6a5b75.jpg",
    price: 6000,
    likes: 0
},
{
    title:"Bacchus Wedding Ring",
    desc: " 18K Italian Gold (3.20 gram).",
    img: "https://image.dhgate.com/0x0/f2/albu/g18/M01/D2/93/rBVapGIY1smAZz1bAAUPtvMtqjQ502.jpg",
    price:8000,
    likes: 0

},
{
    title:"Smoke and a Pancake",
    desc: "14k yellow solid cigar band with a sweet, petite little pear shaped diamond set on top, and just slightly hovering over the edge.",
    img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663866425-fewerfiner-smokeandapancake-product-lores-5000x-1663866395.png",
    price:9000,
    likes: 0
},
{
    title:"Sun and Snow Together",
    desc: "Saudi Arabia Gold Wedding Ring Price Fashion 2 Gram Gold Ring For Women.",
    img: "https://sc01.alicdn.com/kf/HTB1vS_HekZmBKNjSZPiq6xFNVXae/222455467/HTB1vS_HekZmBKNjSZPiq6xFNVXae.jpg",
    price:5000,
    likes: 0
},
{
    title:"The Tiffany Setting Engagement Ring ",
    desc: "A true design masterpiece, Diamond Ring 18k Yellow Gold.",
    img: "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/the-tiffany-setting-engagement-ring-in-18k-yellow-gold-29965838_995646_ED_M.jpg",
    price:6700,
    likes: 0
},
{
    title:"Golden ring isolated on white gold jewelry",
    desc: "Ring In 18Kt Yellow Gold (3.64 gram) with Diamonds (0.1810 Ct).",
    img: "https://img.freepik.com/premium-photo/fashion-2022-golden-ring-isolated-white-background-jewelry-fashion-2022_308547-4353.jpg",
    price:4700,
    likes: 0
},
{
    title:"Hoop Gold Earring",
    desc: "Diamond Earrings In 18Kt Yellow Gold (2.05 gram) with Diamonds (0.0600 Ct).",
    img: "https://5.imimg.com/data5/BU/SN/MY-9605550/22-kt-yellow-gold-hoop-earring-32-500x500.jpg",
    price:3000,
    likes: 0
},
{
    title:"The Harper Ring",
    desc: "Diamond Ring In 18Kt Yellow Gold (3.39 gram) with Diamonds (0.1850 Ct).",
    img: "https://sc01.alicdn.com/kf/HTB150U2KVXXXXckXFXXq6xXFXXXx/2015-latest-gold-rings-design-for-women.jpg",
    price:8500,
    likes: 0
},

]


 products.each do |products_hash|
   product = Product.create(products_hash)
  end



  puts "TY"



  