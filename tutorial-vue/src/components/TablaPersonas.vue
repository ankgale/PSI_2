<!-- src/components/TablaPersonas.vue -->
<template>
    <div id="tabla-personas">
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                </tr>
            </thead>
       
        <tbody>
            <tr v-for="persona in ppersonas" :key="persona_id">
                <td>
                  {{ persona.nombre }}  
                </td>
                <td>{{ persona.apellido }}</td>
                <td>{{ persona.email }}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>



<script setup>
    defineOptions({name: 'tabla-personas',})
</script>

<style scoped>

</style>