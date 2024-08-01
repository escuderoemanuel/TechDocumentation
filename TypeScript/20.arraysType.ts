const games = []
games.push('Super Mario')
// Argument of type 'string' is not assignable to parameter of type 'never'.ts(2345) -> este error se produce porque le estamos diciendo que languages debe ser siempre un array vacío []

// const languages: string[] = [] // en languages vamos a tener un array de strings
// const languages: Array<string> = [] // otra sintaxis para lo mismo
// const languages: string[] | number[] = [] // array de string o de number -> esto está MAL
const languages: (string | number)[] = [] // array de string o de number -> esto está BIEN
languages.push('JavaScript')
languages.push('Python')
languages.push('C#')
languages.push(3)
languages.push(true)

/* Array de Arrays */

type CellValue = 'X' | 'O' | ''
// Crea el tablero como una tupla (array con límite fijado de longitud)
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

// Array de strings de array inicializado
const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', '', 'X']
]

gameBoard[0][0] = 'X'