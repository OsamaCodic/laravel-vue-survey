<template>
  <PageComponent title="Dashboard">
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          <!-- Page title here -->
          Dashboard
        </h1>
      </div>
    </template>
  </PageComponent>
</template>

<script setup>
  import PageComponent from '../components/PageComponent.vue';
</script>