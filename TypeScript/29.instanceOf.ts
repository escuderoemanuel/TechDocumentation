// Es mejor tener las interfaces separadas en un archivo 'types.d.ts' (d = definitions)
// export interface IAvenger...
// y donde lo uses lo importas
// import {type IAvenger} from './types.d.ts'
interface IAvenger {
  readonly name: string;
  powerScore: number;
  wonBattles: number;
  battle(enemy: Avenger, win: boolean): void;
}

class Avenger implements IAvenger {
  readonly name: string;
  powerScore: number;
  wonBattles: number;

  constructor(name: string, powerScore: number, wonBattles: number = 0) {
    this.name = name;
    this.powerScore = powerScore;
    this.wonBattles = wonBattles;
  }

  battle(enemy: Avenger, win: boolean): void {
    if (win) {
      this.wonBattles++;
      enemy.wonBattles--;
    } else {
      enemy.wonBattles++;
      this.wonBattles--;
      this.wonBattles--;
    }
  }

  get fullName() {
    return `${this.name}, with power ${this.powerScore}`
  }

  set power(newPower: number) {
    if (newPower <= 100) {

      this.powerScore = newPower;
    }
    throw new Error('Power score cannot be more than 100');
  }
}

const Hulk = new Avenger('Hulk', 95);

Hulk.wonBattles = 3;