export interface SocialEntry {
  type: 'github' | 'Discord' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

function getAvatarUrl(username: string): string {
  // 假设你本地有对应用户名的 .png 文件
  return `/avatars/${username}.jpg`
}

export const creators: Creator[] = [
  {
    name: 'ZZBaoa',
    avatar: 'my-avator.jpg',
    username: 'Ritazz-L',
    title: '随机爱好匹配中',
    desc: '代码小白爱好者，日常写作，插件分享，设计建模等',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Ritazz-L' },
      { type: 'discord', icon: 'discord', link: 'https://discord.gg/fArZxf8p' },
    ],
    nameAliases: ['ZZBaoa', 'Ritazz-L', '龙景茶'],
    emailAliases: ['kranchen@foxmail.com'],
  },

].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
