import type { App } from 'vue';
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";
import { h } from 'vue'

import {
  InjectionKey as NolebaseEnhancedReadabilitiesInjectionKey,
  LayoutMode as NolebaseEnhancedReadabilitiesLayoutMode,
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import {
  NolebaseInlineLinkPreviewPlugin,
} from '@nolebase/vitepress-plugin-inline-link-preview/client'

import {
  NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'

import {
   InjectionKey as NolebaseGitChangelogInjectionKey,
   NolebaseGitChangelogPlugin,
 } from '@nolebase/vitepress-plugin-git-changelog/client'

import {
  NolebasePagePropertiesPlugin,
} from '@nolebase/vitepress-plugin-page-properties/client'

import {
  NolebaseUnlazyImg,
} from '@nolebase/vitepress-plugin-thumbnail-hash/client'

import { creators } from '../creators'// ✅ 正确路径
// 或者使用别名
// import ToolCard from '/@components/ToolCard.vue'
import AppContainer from './components/AppContainer.vue'
import DocFooter from './components/DocFooter.vue'
import HomePage from './components/HomePage.vue'
import Share from './components/Share.vue'
import TocList from './components/TocList.vue'
import ToolCard from './components/ToolCard.vue'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'
import '@nolebase/vitepress-plugin-thumbnail-hash/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

import 'virtual:uno.css'
import '../styles/main.css'
import '../styles/vars.css'

import('@nolebase/vitepress-plugin-inline-link-preview/client')

const ExtendedTheme = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-top': () => [h(NolebaseHighlightTargetedHeading)],
      'doc-footer-before': () => [
        h(DocFooter),
      ],
      'nav-bar-content-after': () => [
        h(NolebaseEnhancedReadabilitiesMenu),
        h(Share),
      ],
      'nav-screen-content-after': () => [
        h(NolebaseEnhancedReadabilitiesScreenMenu),
      ],
    })
  },
  enhanceApp({ app }: { app: App }) {
    // 注册全局组件
    app.component('HomePage', HomePage)
    app.component('DocFooter', DocFooter)
    app.component('Share', Share)
    app.component('TocList', TocList)
    app.component('ToolCard', ToolCard)
    app.component('AppContainer', AppContainer)
    app.component('NolebaseUnlazyImg', NolebaseUnlazyImg)

    // 增强阅读体验插件
    app.provide(NolebaseEnhancedReadabilitiesInjectionKey, {
      layoutSwitch: {
        defaultMode: NolebaseEnhancedReadabilitiesLayoutMode.SidebarWidthAdjustableOnly,
      },
      spotlight: {
        defaultToggle: true,
        hoverBlockColor: 'rgb(240 197 52 / 7%)',
      },
    })

    // 映射贡献者
    app.provide(NolebaseGitChangelogInjectionKey, {
      mapContributors: creators,
    })

    // 使用插件
    app.use(NolebaseInlineLinkPreviewPlugin)
    app.use(NolebaseGitChangelogPlugin) // 只保留 Git 数据注入（如 lastUpdated）
    app.use(NolebasePagePropertiesPlugin<{
      tags: string[]
      progress: number
    }>(), {
      properties: {
        'zh-CN': [
          {
            key: 'tags',
            type: 'tags',
            title: '标签',
          },
          {
            key: 'progress',
            type: 'progress',
            title: '完成进度',
          },
          {
            key: 'wordCount',
            type: 'dynamic',
            title: '字数',
            options: {
              type: 'wordsCount',
            },
          },
          {
            key: 'readingTime',
            type: 'dynamic',
            title: '阅读时间',
            options: {
              type: 'readingTime',
              dateFnsLocaleName: 'zhCN',
            },
          },
        ],
      },
    })
  },
  setup() {
    const { frontmatter } = toRefs(useData())
    const route = useRoute()

    // Obtain configuration from: https://giscus.app/
    giscusTalk({
      repo: 'Ritazz-L/nolebase-template',         // 你的仓库地址
      repoId: 'R_kgDOOxGZ7g',                     // 你的仓库 ID（来自查询）
      category: 'General',                         // 推荐使用 General 分类（或你喜欢的其他分类名）
      categoryId: 'DIC_kwDOL5WHss4CfTYt',          // 与上面 category 对应的 ID
      mapping: 'pathname',                         // 推荐使用 pathname 映射方式
      inputPosition: 'top',                        // 评论框位置
      lang: 'zh-CN',                              // 默认语言
      locales: {
        'zh-Hans': 'zh-CN',
        'en-US': 'en'
      },
      homePageShowComment: false,                  // 首页不显示评论
      lightTheme: 'light',
      darkTheme: 'transparent_dark',
    }, {
      frontmatter, route
    }, true)

  }
}

export default ExtendedTheme
