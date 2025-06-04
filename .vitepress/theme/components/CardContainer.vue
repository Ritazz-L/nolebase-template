<template>
  <div class="card-container">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px;
}

.card-container > * {
  flex: 0 0 calc(33.333% - 16px);
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .card-container > * {
    flex: 0 0 calc(50% - 12px);
  }

  .card-container {
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .card-container > * {
    flex: 0 0 100%;
  }

  .card-container {
    gap: 8px;
  }
}
</style>
