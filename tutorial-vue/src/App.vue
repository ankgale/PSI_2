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
    <p>Count is {{ store.count }}</p>
  </div>
</template>
<script setup>
import TablaPersonas from '@/components/TablaPersonas.vue'
import FormularioPersona from '@/components/FormularioPersona.vue'
import { ref, onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter';
defineOptions({
  name: 'App',
});
const store = useCounterStore();

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

const listadoPersonas = async () => {
// Metodo para obtener un listado de personas
try{const response = await fetch('http://localhost:8001/api/v1/personas/');
}catch (error){
  console.error(error);
}
};

const agregarPersona = async (persona) => {
  /*if (personas.value.length > 0) {
    persona.id = personas.value[personas.value.length - 1].id + 1;
  }
  personas.value = [...personas.value, persona];
*/
try {
const response = await fetch('http://localhost:8001/api/v1/personas/', {
method: 'POST',
body: JSON.stringify(persona),
headers: { 'Content-type': 'application/json; charset=UTF-8' },
});
const personaCreada = await response.json();
personas.value = [...personas.value, personaCreada];
store.increment();
} catch (error) {
console.error(error);
}

};

const eliminarPersona = async (id) => {
  /*try {
    personas.value = personas.value.filter(
      u => u.id !== id
    );
  }
  catch(error){
    console.error(error);
  }*/
  try {
await fetch('http://localhost:8001/api/v1/personas'+id+'/', {
method: "DELETE"
});
personas.value= personas.value.filter(u => u.id !== id);
} catch (error) {
console.error(error);
}

};

const actualizarPersona = async (id, personaActualizada) => {
  /*try {
    personas.value = personas.value.map(persona =>
    persona.id === id ? personaActualizada : persona);
  }
  catch(error){
    console.error(error);
  }*/
  try {
const response = await fetch('http://localhost:8001/api/v1/personas'+personaActualizada.id+'/', {
method: 'PUT',
body: JSON.stringify(personaActualizada),
headers: { 'Content-type': 'application/json; charset=UTF-8' },
});
const personaActualizadaJS = await response.json();
personas.value = personas.value.map(u => (u.id ===id? personaActualizadaJS : u));
} catch (error) {
console.error(error);
}


};

onMounted(()=> {
listadoPersonas();
});
</script>
<style>
button {
  background: #009435;
  border: 1px solid #009435;
}
</style>