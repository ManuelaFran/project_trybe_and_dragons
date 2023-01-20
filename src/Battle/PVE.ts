import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    public player: Fighter,
    public environment: Fighter[] | SimpleFighter[],
  ) {
    super(player);
  }

  private _battles(environment: Fighter | SimpleFighter) {
    while (this.player.lifePoints > 0 && environment.lifePoints > 0) {
      this.player.attack(environment);
      environment.attack(this.player);
    }
  }

  private _countBattles() {
    for (let i = 0; i < this.environment.length; i += 1) {
      this._battles(this.environment[i]);
    }
  }

  fight(): number {
    this._countBattles();

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}