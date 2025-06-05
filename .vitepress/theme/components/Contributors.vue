<template>
  <div v-if="lastUpdated || contributors.length" class="page-git-info">
    <div class="git-container">
      <div v-if="contributors.length" class="contributors">
        <span class="label">贡献者：</span>
        <div class="avatar-name-list">
          <a
            v-for="contributor in contributors"
            :key="contributor.email"
            :href="`https://github.com/${contributor.username}`"
            target="_blank"
            class="contributor"
            :title="contributor.name"
          >
            <img :src="contributor.avatar" alt="Avatar" class="avatar" />
            <span class="name">{{ contributor.name }}</span>
          </a>
        </div>
      </div>

      <div v-if="lastUpdated" class="last-updated">
        <span class="label">最后更新时间：</span>
        <span class="time">{{ formattedLastUpdated }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'

const { page } = useData()

const lastUpdated = page.value.git?.lastUpdated
const contributors = page.value.git?.contributors || []

const formattedLastUpdated = lastUpdated
  ? new Date(lastUpdated).toLocaleDateString()
  : ''
</script>

<style scoped>
.page-git-info {
  font-size: 0.8rem;
  color: #666;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.git-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.contributors {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1 1 50%;
  min-width: 200px;
}

.last-updated {
  text-align: right;
  flex: 1 1 50%;
  min-width: 200px;
}

.label {
  font-weight: bold;
  opacity: 0.7;
}

.avatar-name-list {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

.contributor {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;
  transition: transform 0.2s ease;
}

.contributor:hover {
  transform: scale(1.1);
}

.avatar {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  object-fit: cover;
  background-color: #eee;
}

.name {
  font-size: 0.8rem;
}
</style>
