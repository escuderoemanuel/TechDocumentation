// Tipo para usar dentro de otros tipos
type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

type HeroBasicInfo = {
  name: string
  age: number
}

// Optional Properties
type HeroProperties = {
  readonly id?: HeroId // La prop 'id' es sólo de lectura 'readonly y opcional '?' 
  isActive?: boolean,
  powerScale?: HeroPowerScale
}

type Hero = HeroBasicInfo & HeroProperties

function createHero(input: HeroBasicInfo): Hero {
  const { name, age } = input
  return {
    // id: 'hero0001', -> Da error porque el id es de tipo 'HeroId'
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
} // -> Lo que returne es de tipo Hero

const thor = createHero({ name: 'Thor', age: 1500 }); // -> Es de tipo Hero
thor.powerScale = 'planetary'
const cap = createHero({ name: 'Capitan America', age: 90 }); // -> Es de tipo Hero
const ironman = createHero({ name: 'Ironman', age: 45 }); // -> Es de tipo Hero
ironman.isActive = false

console.log('ironman', ironman)
