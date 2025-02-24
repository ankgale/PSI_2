<!-- FormularioPersona.vue -->
<template>
    <!-- Contenedor principal del componente -->
    <div id="formulario-persona">
        <!-- Formulario con campos para ingresar informacion de una persona -->
        <form @submit.prevent="enviarFormulario">
            <div class="container">
                <!-- Primera fila con campos de nombre, apellido y email -->
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <!-- Etiqueta y campo de entrada para el nombre -->
                            <label>Nombre</label>
                           <input v-model="persona.nombre" type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <!-- Etiqueta y campo de entrada para el apellido -->
                            <label>Apellido</label>
                            <input v-model="persona.apellido" type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <!-- Etiqueta y campo de entrada para el correo electronico -->
                            <label>Email</label>
                            <input v-model="persona.email" type="email" class="form-control" />
                        </div>
                    </div>
                </div>
                <!-- Segunda fila con un boton para agregar persona -->
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <!-- Boton para agnadir persona -->
                            <button class="btn btn-primary">Agnadir persona</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';

defineOptions({
    name: 'formulario-persona',
});
const persona = ref({
    nombre: '',
    apellido: '',
    email: '',
});

const emit = defineEmits(['add-persona']);
const enviarFormulario = () => {
console.log('Works!');
emit('add-persona', persona.value);
};

</script>
<style scoped>
form {
    margin-bottom: 2rem;
}
</style>