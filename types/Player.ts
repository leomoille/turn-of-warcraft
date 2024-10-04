import type { Weapon } from "./Weapon";

export type Player = {
  name: string;
  avatar: string;
  health: number;
  weapon: Weapon | null;
};
