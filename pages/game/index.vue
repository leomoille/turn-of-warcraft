<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold mb-4">{{ playerOne.name }} (J1) ⚔️ {{ playerTwo.name }} (J2)</h1>
    <!-- Plateau de jeu et infos joueurs -->
    <div id="board" class="flex w-full max-w-5xl space-x-8">
      <!-- Plateau de jeu -->
      <GameBoard/>
      <!-- Infos joueurs -->
      <PlayersInfo
          :player-one="playerOne"
          :player-two="playerTwo"
          :getPlayerDamage="getPlayerDamage"
          :isPlayerOneTurn="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
// Components
import GameBoard from '~/components/GameBoard.vue'
import PlayersInfo from '~/components/PlayersInfo.vue'
// Assets
import playerOneAvatar from '@/assets/images/players/player1.png'
import playerTwoAvatar from '@/assets/images/players/player2.png'
import swordImage from 'assets/images/weapon/sword.png'
import nunchakuImage from 'assets/images/weapon/nunchaku.png'
import maceImage from 'assets/images/weapon/mace.png'
import katanaImage from 'assets/images/weapon/katana.png'
// Types
import type { Weapon } from '~/types/Weapon'
import type { Player } from '~/types/Player'

// Constants
const DEFAULT_DAMAGE = 10;
const DEFAULT_HEALTH = 100;

/**
 * Crée un nouvel objet joueur avec un nom, un avatar et des paramètres de santé et d'arme par défaut.
 *
 * @param name - Le nom du joueur
 * @param avatar - L'URL ou le chemin de l'avatar du joueur
 * @returns Un objet Player avec des points de vie par défaut et sans arme
 */
const createPlayer = (name: string, avatar: string): Player => ({
  name,
  avatar,
  health: DEFAULT_HEALTH,
  weapon: null
});

/**
 * Calcule les dégâts infligés par un joueur en fonction de son arme.
 * Si le joueur n'a pas d'arme, il inflige des dégâts par défaut.
 *
 * @param player - L'objet joueur, qui peut ou non posséder une arme
 * @returns Le nombre de dégâts infligés par le joueur
 */
const getPlayerDamage = (player: Player): number => player.weapon ? player.weapon.damage : DEFAULT_DAMAGE;

const route = useRoute();
const playerOneName = (route.query.player1 as string) || 'Joueur 1';
const playerTwoName = (route.query.player2 as string) || 'Joueur 2';

// Création des joueurs
const playerOne = createPlayer(playerOneName, playerOneAvatar);
const playerTwo = createPlayer(playerTwoName, playerTwoAvatar);

// Création des armes
const sword: Weapon = { name: 'Épée', image: swordImage, damage: 20 }
const nunchaku: Weapon = { name: 'Nunchaku', image: nunchakuImage, damage: 25 }
const mace: Weapon = { name: 'Masse', image: maceImage, damage: 30 }
const katana: Weapon = { name: 'Katana', image: katanaImage, damage: 35 }
</script>