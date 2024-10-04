<template>
  <div class="flex flex-col space-y-8 w-1/3">
    <!-- Infos Joueur 1 -->
    <PlayerInfo
        :player="playerOne"
        :getPlayerDamage="getPlayerDamage"
        :isTurn="isPlayerOneTurn"
        borderColor="border-red-500"
    />

    <!-- Infos Joueur 2 -->
    <PlayerInfo
        :player="playerTwo"
        :getPlayerDamage="getPlayerDamage"
        :isTurn="!isPlayerOneTurn"
        borderColor="border-blue-500"
    />
  </div>
</template>

<script setup lang="ts">
// Components
import PlayerInfo from '@/components/PlayerInfo.vue'
// Types
import type { Player } from '~/types/Player';

// Utiliser defineProps avec les types Player
const props = defineProps<{
  playerOne: Player;        // Typage de playerOne avec Player
  playerTwo: Player;        // Typage de playerTwo avec Player
  getPlayerDamage: (player: Player) => number; // Typage de la fonction pour calculer les dégâts
  isPlayerOneTurn: boolean; // Typage de isPlayerOneTurn comme booléen
}>();
</script>

<style scoped>
</style>