
type State = [string, (newName: string) => void]

// Ejemplo de tupla, porque siempre tiene 2 posiciones, la primera cuando se inicializa y la segunda una función
const [hero, setHero]: State = useState('thor')

type RGB = [number, number, number]
const text_primary: RGB = [255, 0, 0]
const text_secondary: RGB = [255, 0, 0, 5]
const bg_primary: RGB = ['255', 0, 0]