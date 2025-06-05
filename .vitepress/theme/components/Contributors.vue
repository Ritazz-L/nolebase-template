<template>
  <div v-if="lastUpdated || contributors.length" class="page-git-info">
    <!-- 贡献者列表 -->
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

    <!-- 最后更新时间 -->
    <div v-if="lastUpdated" class="last-updated">
      <span class="label">最后更新时间：</span>
      <span class="time">{{ formattedLastUpdated }}</span>
    </div>
  </div>

  <!-- 当没有 Git 数据时显示提示 -->
  <div v-else class="debug no-git-data">
    暂无 Git 提交记录。请确保：
    <ul>
      <li>该文件已提交至 Git</li>
      <li>Git 日志中包含该文件（运行：git log --follow your-page.md）</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'

// 定义 Git 相关类型
interface GitContributor {
  name: string
  email: string
  username: string
  avatar: string
}

interface GitData {
  lastUpdated?: number
  contributors?: GitContributor[]
}

// 获取页面数据
const { page } = useData()

// 安全获取 Git 数据
const gitData = (page.value as any).git as GitData | undefined

const lastUpdated = gitData?.lastUpdated
const contributors = gitData?.contributors || []

// 格式化时间
const formattedLastUpdated = lastUpdated
  ? new Date(lastUpdated).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  : ''
</script>

<style scoped>
.page-git-info {
  font-size: 0.875rem;
  color: #666;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.no-git-data {
  font-size: 0.875rem;
  color: #999;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px dashed #ccc;
}

.no-git-data ul {
  margin-top: 0.5rem;
  padding-left: 1rem;
  line-height: 1.5;
}

.contributors {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
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

.last-updated {
  text-align: right;
  margin-top: 0.5rem;
}

.time {
  font-weight: 500;
}
</style>
