<template>
  <div class="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div class="max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
      <hgroup class="mb-6 text-center">
        <h1 class="text-4xl font-bold mb-2 text-yellow-400">Turn of Warcraft</h1>
        <p class="text-gray-300">Bienvenue dans Turn of WarCraft</p>
      </hgroup>

      <p class="mb-4">
        Deux joueurs s'affrontent sur une carte de 10x10 cases. Votre objectif est de récupérer une arme et de combattre votre adversaire. Une phase de combat démarre alors. Vous pouvez attaquer ou défendre.
      </p>

      <p class="mb-4">
        <b>Attaque:</b> Vous retirez un montant égal à votre attaque au joueur adverse.<br />
        <b>Défense:</b> Vous n'attaquez pas à ce tour mais votre adversaire ne vous inflige que la moitié des dégâts de son arme.
      </p>

      <!-- Formulaire pour les pseudos des joueurs -->
      <form @submit.prevent="startGame" class="space-y-4">
        <div>
          <label for="player1" class="block font-bold mb-2 text-yellow-400">Pseudo du Joueur 1</label>
          <input
              v-model="player1"
              id="player1"
              type="text"
              placeholder="Joueur 1"
              class="w-full border border-gray-600 bg-gray-700 text-white rounded-lg py-2 px-4"
          />
        </div>

        <div>
          <label for="player2" class="block font-bold mb-2 text-yellow-400">Pseudo du Joueur 2</label>
          <input
              v-model="player2"
              id="player2"
              type="text"
              placeholder="Joueur 2"
              class="w-full border border-gray-600 bg-gray-700 text-white rounded-lg py-2 px-4"
          />
        </div>

        <button
            type="submit"
            class="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          Démarrer la partie
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Variables pour les pseudos des joueurs
const player1 = ref('Joueur 1')
const player2 = ref('Joueur 2')

// Utilisation du router pour rediriger vers la page du jeu
const router = useRouter()

// Fonction pour démarrer la partie
const startGame = () => {
  // Rediriger vers la page de jeu avec les pseudos en paramètre
  router.push({
    name: 'game',
    query: {
      player1: player1.value || 'Joueur 1',
      player2: player2.value || 'Joueur 2',
    },
  })
}
</script>

<style scoped>
</style>