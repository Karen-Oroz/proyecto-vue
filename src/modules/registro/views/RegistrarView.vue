<template>
    <div class="container">
        <div class="form-container">
            <h2>Formulario de Registro</h2>
            <Form :validation-schema="schema" @submit="onSubmit">
                <div class="form">
                    <label for="nombre">Nombre:</label>
                    <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
                    <ErrorMessage name="nombre"></ErrorMessage>
                </div>
                <div class="form">
                    <label for="correo">Correo:</label>
                    <Field  v-model="email" type="email" name="email" id="correo" placeholder="Ingrese su email" />
                    <ErrorMessage name="email"></ErrorMessage>
                </div>
                <div class="form">
                    <button type="submit">Registrar</button>
                </div>
            </Form>
        </div>
    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';
import { useRegistrarStore } from '../stores/registrarStore';
import { ref } from 'vue';

const registrarStore = useRegistrarStore();
const nombre = ref('');
const email = ref('');


const onSubmit = () => {
    registrarStore.guardarRegistro(nombre.value, email.value);
    console.log('Se ha enviado el formulario');
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    background-color: #f5f5f5; 
}

.form-container {
    width: 350px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.form {
    margin-bottom: 15px;
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
