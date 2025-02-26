<!-- App.vue -->
<template>
  <div
    id="app"
    class="container"
  >
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <formulario-persona @add-persona="agregarPersona" />
        <tabla-personas
          :personas="personas"
          @delete-persona="eliminarPersona"
          @actualizar-persona="actualizarPersona"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import TablaPersonas from '@/components/TablaPersonas.vue'
import FormularioPersona from '@/components/FormularioPersona.vue'
import { ref } from 'vue';
defineOptions({
  name: 'App',
});
const personas = ref([
  {
    id: 1,
    nombre: 'Jon',
    apellido: 'Nieve',
    email: 'jon@email.com',
  },
  {
    id: 2,
    nombre: 'Tyrion',
    apellido: 'Lannister',
    email: 'tyrion@email.com',
  }, {
    id: 3,
    nombre: 'Daenerys',
    apellido: 'Targaryen',
    email: 'daenerys@email.com',

  },

]);

const agregarPersona = (persona) => {
  if (personas.value.length > 0) {
    persona.id = personas.value[personas.value.length - 1].id + 1;
  }
  personas.value = [...personas.value, persona];
};

const eliminarPersona = (id) => {
  try {
    personas.value = personas.value.filter(
      u => u.id !== id
    );
  }
  catch(error){
    console.error(error);
  }
};

const actualizarPersona = (id, personaActualizada) => {
  try {
    personas.value = personas.value.map(persona =>
    persona.id === id ? personaActualizada : persona);
  }
  catch(error){
    console.error(error);
  }
};
</script>
<style>
button {
  background: #009435;
  border: 1px solid #009435;
}
</style>