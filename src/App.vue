<script setup></script>

<template>
  <div id="app" class="bg-white min-h-screen">
    <header
      class="h-14 shadow-xl border-b-2 w-full flex items-center justify-center"
    >
      <a>
        <img class="h-8" src="" alt="logo" />
      </a>
    </header>

    <main class="pt-2">
      <router-view />
    </main>
  </div>
</template>
