// Object property shorthand

const name = 'Jim'
const userAge = 18

const user = {
  name,
  age: userAge,
  location: 'Toronto'
}

console.log(user)


// Object destructuring

const product = {
  label: 'Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}

// const label = product.label

// const {label:productLabel, stock, rating = 5} = product //rating = 5 only used if rating doesn't exist in product

// console.log(productLabel)
// console.log(rating)

const transaction = (type, { label, price }) => {
  console.log(label, price)
}

transaction('order', product)