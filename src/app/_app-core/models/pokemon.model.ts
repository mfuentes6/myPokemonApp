

export class Pokemon {
  public static typeMap: Map<string, string> = new Map([
    ["electric", "bolt"],
    ["water", "water_drop"],
    ["fire", "local_fire_department"],
    ["normal", "radio_button_unchecked"],
    ["flying", "air"],
    ["bug", "bug_report"],
    ["dark", "nightlight_round"],
    ["fairy", "stars"],
    ["fighting", "sports_mma"],
    ["ghost", "balcony"],
  ]);
  abilities: (AbilitiesEntity)[] | null;
  base_experience: number;
  forms: (AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies)[] | null;
  game_indices: (GameIndicesEntity)[] | null;
  height: number;
  held_items: (HeldItemsEntity)[] | null;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: (MovesEntity)[] | null;
  name: string;
  order: number;
  past_types: (null)[] | null;
  species: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  sprites: Sprites;
  stats: (StatsEntity)[];
  types: (TypesEntity)[];
  weight: number;

  public get typeList(): string {
    const typeArray: string[] = [];
    this.types.forEach(o => typeArray.push(o.type.name));
    return typeArray.join('/');
  }
​
  public get startingGen(): string {
    return this.sprites.versions['generation-i']
    ? 'Gen 1'
    : this.sprites.versions['generation-ii']
    ? 'Gen 2'
    : this.sprites.versions['generation-iii']
    ? 'Gen 3'
    : this.sprites.versions['generation-iv']
    ? 'Gen 4'
    : this.sprites.versions['generation-v']
    ? 'Gen 5'
    : this.sprites.versions['generation-vi']
    ? 'Gen 6'
    : this.sprites.versions['generation-vii']
    ? 'Gen 7'
    : this.sprites.versions['generation-viii']
    ? 'Gen 8'
    : 'U/A';
  }
​
  public get isCurrentGen(): boolean {
    return this.sprites.versions['generation-viii'] ? true : false;
  }

  constructor(init: Partial<Pokemon>) {
    Object.assign(this, init);
  }
}
export interface AbilitiesEntity {
  ability: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  is_hidden: boolean;
  slot: number;
}
export interface AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies {
  name: string;
  url: string;
}
export interface GameIndicesEntity {
  game_index: number;
  version: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface HeldItemsEntity {
  item: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_details?: (VersionDetailsEntity)[] | null;
}
export interface VersionDetailsEntity {
  rarity: number;
  version: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface MovesEntity {
  move: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_group_details?: (VersionGroupDetailsEntity)[] | null;
}
export interface VersionGroupDetailsEntity {
  level_learned_at: number;
  move_learn_method: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_group: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface Sprites {
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
  other: any;
  versions: any;
}

export interface DreamWorldOrIcons {
  front_default: string;
  front_female?: null;
}







export interface Emerald {
  front_default: string;
  front_shiny: string;
}







export interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface TypesEntity {
  slot: number;
  type: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
