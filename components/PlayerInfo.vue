<template>
  <div class="player text-center p-4 bg-gray-800 border-4 rounded-lg shadow-lg relative" :class="borderColor">
    <!-- Barre de santé -->
    <div class="absolute top-0 left-0 w-full h-2 bg-gray-600 rounded-sm overflow-hidden">
      <div :class="healthBarColor" class="h-full" :style="healthBarStyle"></div> <!-- Couleur dynamique -->
    </div>
    <!-- Avatar et nom -->
    <div class="flex justify-center items-center space-x-4 mt-6">
      <img class="playerAvatar w-16 h-16 rounded-full border-4 border-gold" :src="player.avatar"
           :alt="avatarAltText">
      <h2 class="text-3xl medieval-text" :class="borderColor">{{ player.name }}</h2>
    </div>
    <!-- Points de vie -->
    <p class="mt-4 text-gold">
      <b>Points de vie:</b><br>
      <span>{{ player.health }}/100</span> <!-- Affiche les points de vie -->
    </p>
    <!-- Informations sur l'arme -->
    <p class="mt-4 text-yellow-500">
      <b>Arme en main:</b><br>
      <span v-if="player.weapon">{{ player.weapon.name }}</span>
      <span v-else>À main nue</span>
    </p>
    <img class="w-12 h-12 mx-auto border-2 border-gold p-2 rounded-full bg-white"
         :src="weaponImage"
         :alt="weaponAltText"
    >
    <!-- Dégâts infligés -->
    <p class="mt-2 text-lg text-yellow-500">
      <b>Dégâts :</b><br>
      <span>{{ getPlayerDamage(player) }}</span>
    </p>
    <!-- Tour en cours -->
    <p v-if="isTurn" class="mt-4 text-yellow-500 medieval-text text-xl"><b>>> C'est votre tour <<</b></p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// Assets
import fistImage from '@/assets/images/weapon/fist.png'
// Types
import type { Player } from '~/types/Player';

const props = defineProps<{
  player: Player;           // Définir 'player' avec le type Player
  getPlayerDamage: (player: Player) => number; // Fonction pour calculer les dégâts
  isTurn: boolean;          // Définir si c'est le tour du joueur
  borderColor: string;      // Définir la couleur de bordure
}>();

const healthPercentage = computed(() => props.player.health)
const healthBarStyle = computed(() => ({ width: healthPercentage.value + '%' }))
const avatarAltText = computed(() => `Apparence de ${props.player.name}`)
const weaponImage = computed(() => props.player.weapon ? props.player.weapon.image : fistImage)
const weaponAltText = computed(() => `Icône de l'arme de ${props.player.name}`)

const healthBarColor = computed(() => {
  if (props.player.health > 75) {
    return 'bg-green-600'  // Vert sombre pour une santé élevée
  } else if (props.player.health > 50) {
    return 'bg-yellow-600' // Jaune doré pour une santé moyenne
  } else if (props.player.health > 25) {
    return 'bg-orange-600' // Orange terre pour une santé faible
  } else {
    return 'bg-red-700'    // Rouge foncé pour une santé très basse
  }
})
</script>

<style scoped>
.medieval-text {
  font-family: 'Uncial Antiqua', serif; /* Police inspirée du style médiéval */
  color: #f3d55b; /* Couleur dorée typique du style fantastique */
}

.player {
  background: url('/assets/images/wood-texture.png'); /* Exemple d'arrière-plan en bois */
  border-image: url('/assets/images/metal-border.png') 30 round; /* Exemple de bordure en métal */
}

.text-gold {
  color: #f3d55b; /* Couleur dorée */
}

.border-gold {
  border-color: #f3d55b; /* Bordures dorées */
}
</style>