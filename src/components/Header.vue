<template>
    <div class="header">
      <div class="mensaje">{{ mensajeRecibido }}</div>
      <h3 class="temperatura">🌡️ La temperatura actual es: {{ weatherStore.temperatura }}°C</h3>
    </div>
  </template>
  
  <script setup>
  import { useWeatherStore } from "@/modules/registro/stores/wheatherStore"; 
  import { onMounted, ref, watch, defineProps } from "vue";
  
  const props = defineProps(["mensaje"]);
  const mensajeRecibido = ref(props.mensaje);
  
  watch(() => props.mensaje, (newValue) => {
    mensajeRecibido.value = newValue;
  });
  
  const weatherStore = useWeatherStore();
  
  onMounted(() => {
    weatherStore.setTemperatura();
  });
  </script>
  
  <style scoped>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    width: 100%;
    background: linear-gradient(135deg, #2a2a72, #009ffd);
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
  
  .header:hover {
    transform: scale(1.02);
  }
  
  .mensaje {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .temperatura {
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  </style>
  