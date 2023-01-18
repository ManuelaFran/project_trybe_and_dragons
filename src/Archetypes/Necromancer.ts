import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  public energyType: EnergyType;
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.incrementArchetypeInstances();
  }

  static incrementArchetypeInstances() {
    this.numberOfInstances += 1;
  }

  static createdArchetypeInstances() {
    return this.numberOfInstances;
  }
}