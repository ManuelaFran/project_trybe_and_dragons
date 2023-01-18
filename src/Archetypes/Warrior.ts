import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  public energyType: EnergyType;
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.incrementArchetypeInstances();
  }

  static incrementArchetypeInstances() {
    this.numberOfInstances += 1;
  }

  static createdArchetypeInstances() {
    return this.numberOfInstances;
  }
}