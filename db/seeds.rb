2000.times do |i|
  Product.create({
    name: Faker::Commerce.product_name, 
    price: Faker::Number.between(from: 1000, to: 100000),
    antibiotic: rand > 0.92 ? true : false,
    narcotic: rand > 0.85 ? true : false 
  })
end