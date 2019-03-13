// @flow
export type MonsterSize = 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge' | 'Gargantuan';
export type MonsterCR = '0' | '1/8' | '1/4' | '1/2' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30';
export type MonsterType = 'aberration' | 'beast' | 'celestial' | 'construct' | 'dragon' | 'elemental' | 'fey' | 'fiend' | 'giant' | 'humanoid' | 'monstrosity' | 'ooze' | 'plant' | 'undead' | 'swarm' | 'titan';
export type MonsterState = Array<{
  label: string,
  value: string
}>
export type MonsterAction = {
  name: string,
  desc: string
};
export type MonsterActions = MonsterAction[];

export type MonsterRequestBase = {
  name: string,
  slug: string,
  type: MonsterType,
  challenge_rating: MonsterCR,
  size: MonsterSize,
  hit_points: number
}
export type MonstersRequestBase = MonsterRequestBase[];

export type MonsterBase = { id: string } & $Diff<MonsterRequestBase, { slug: string }>;
export type MonstersBase = MonsterBase[];

export type MonsterRequest = {
  ...$Exact<MonsterRequestBase>,
  ...$Exact<{
    subtype: string,
    alignment: string,
    armor_class: number,
    armor_desc: string,
    hit_dice: string,
    speed: string,
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
    strength_save: number,
    dexterity_save: number,
    constitution_save: number,
    intelligence_save: number,
    wisdom_save: number,
    charisma_save: number,
    perception: number,
    senses: string,
    languages: string,
    acrobatics: number,
    animal_handling: number,
    arcana: number,
    athletics: number,
    deception: number,
    history: number,
    insight: number,
    intimidation: number,
    investigation: number,
    medicine: number,
    nature: number,
    perception: number,
    performance: number,
    persuasion: number,
    religion: number,
    sleight_of_hand: number,
    stealth: number,
    survival: number,
    special_abilities: MonsterActions,
    actions: MonsterActions,
    legendary_actions: MonsterActions
  }>
}
export type MonstersRequest = MonsterRequest[];

export type Monster = { id: string } & $Diff<MonsterRequest, { slug: string }>;
export type Monsters = Monster[];

export type BattleMonsterRow = {
  rowID: string,
  monster: Monster & {
    initiative: number,
    state: MonsterState
  }
};
export type BattleMonsterRows = BattleMonsterRow[]
