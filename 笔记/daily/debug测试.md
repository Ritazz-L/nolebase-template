---
layout: page
title: 调试页面
---

<script setup>
import { useData } from 'vitepress'
const { page } = useData()
console.log('当前页面 Git 数据:', page.value.git)
</script>

<p><strong>Git 数据：</strong></p>
<pre>{{ page.value.git }}</pre>
