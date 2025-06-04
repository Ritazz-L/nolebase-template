<template>
  <a :href="link" class="tool-card">
    <div class="tool-card-icon">
      <img :src="icon" :alt="title" />
    </div>
    <div class="tool-card-content">
      <span class="tool-card-title">{{ title }}</span>
      <p class="tool-card-desc">{{ description }}</p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  link: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.tool-card {
  background-color: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  flex: 0 0 calc(33.333% - 16px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #e0e0e0;
}

.tool-card:hover {
  background-color: #f5f5f5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tool-card:active {
  transform: scale(0.99);
}

.tool-card:focus-visible {
  outline: none;
}

.tool-card-icon {
  margin-right: 16px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.tool-card-icon img {
  width: 40px;
  height: 40px;
}

.tool-card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tool-card-content span,
.tool-card-content p {
  text-decoration: none !important;
  color: #333;
}

.tool-card-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
}

.tool-card-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}
</style>
