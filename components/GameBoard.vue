<template>
  <table id="game" class="border border-gray-600 w-full h-96">
    <tbody>
    <!-- Générer les lignes et colonnes du tableau -->
    <tr v-for="row in boardSize" :key="row">
      <td
          v-for="col in boardSize"
          :key="col"
          class="border border-gray-500 w-16 h-16 bg-gray-700"
      ></td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const boardSize = 10; // Taille du plateau de jeu (10x10)
</script>

<style scoped>
/* Tu peux ajouter des styles spécifiques ici si nécessaire */
</style>