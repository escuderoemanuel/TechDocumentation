// Methods

let cars = ['Audi', 'BMW', 'Ferrari', 'Dodge', 'Chevrolet', 'Alfa Romeo', 'Nissan']
console.log('Original Cars:', cars)

let carsWithCharacter = cars.filter(car => car.includes(' '))
console.log('carsWithCharacter:', carsWithCharacter)

let watches = ['Casio', 'Rolex']
console.log('watches:', watches)

let brand = cars.concat(watches)
console.log('brand:', brand)

let reversedBrand = brand.reverse()
console.log('reversedBrand:', reversedBrand)

let orderedBrand = brand.sort()
console.log('orderedBrand:', orderedBrand)
