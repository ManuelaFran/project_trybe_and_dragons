import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  public energyType: EnergyType;
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.incrementArchetypeInstances();
  }

  static incrementArchetypeInstances() {
    this.numberOfInstances += 1;
  }

  static createdArchetypeInstances() {
    return this.numberOfInstances;
  }
}