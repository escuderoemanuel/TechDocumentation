/* // Tipo para usar dentro de otros tipos
type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// Optional Properties
type Hero = {
  readonly id?: HeroId // La prop 'id' es sólo de lectura 'readonly y opcional '?' 
  name: string
  age: number
  isActive?: boolean
} // Es un tipo propio personalizado

function createHero(hero: Hero): Hero {
  const { name, age } = hero
  return {
    // id: 'hero0001', -> Da error porque el id es de tipo 'HeroId'
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
} // -> Lo que returne es de tipo Hero

const thor = createHero({ name: 'Thor', age: 1500, isActive: true }); // -> Es de tipo Hero
const cap = createHero({ name: 'Capitan America', age: 90 }); // -> Es de tipo Hero
const ironman = createHero({ name: 'Ironman', age: 45, isActive: false }); // -> Es de tipo Hero

 */
/* Example */

// const enableAnimatinoDuration: boolean | number = true // -> después le puedo pasar los 200ms
const enableAnimatinoDuration: boolean | number = 200 // -> después le puedo pasar true y el 200ms se pasa por defecto
