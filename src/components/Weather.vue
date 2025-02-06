<template>
    {{ weatherStore.temperatura }}
</template>

<script setup>
import { onMounted } from 'vue';
import { useWeatherStore } from '@/modules/registro/stores/wheatherStore';  // Asegúrate de que el nombre del archivo sea correcto

const weatherStore = useWeatherStore();

onMounted(() => {
    useWeather(); 
});
</script>
