<!-- App.vue -->
<template>
  <div id="app" class="container">
  <div class="row">
  <div class="col-md-12">
  <h1>Personas</h1>
  </div>
  </div>
  <div class="row">
  <div class="col-md-12">
  <tabla-personas />
  </div>
  </div>
  </div>
  </template>
  <script setup>
  import TablaPersonas from '@/components/TablaPersonas.vue'
  defineOptions({
  name: 'app',
  });
  </script>
  <style>
  button {
  background: #009435;
  border: 1px solid #009435;
  }
  </style>