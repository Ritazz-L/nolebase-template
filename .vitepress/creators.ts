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

const getAvatarUrl = (username: string): string =>
  `https://avatars.githubusercontent.com/u/${username}`

export const creators: Creator[] = [
  {
    name: 'ZZBaoa',
    avatar: '/img/my-avator.jpg',
    username: 'ZZBaoa',
    title: 'ZZBaoa 随机爱好匹配中',
    desc: '代码小白爱好者，日常写作，插件分享等',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Ritazz-L' },
      { type: 'discord', icon: 'discord', link: 'https://discord.gg/fArZxf8p' },
    ],
    nameAliases: ['ZZBaoa', '人间臻宝', '龙景茶'],
    emailAliases: ['kranchen@foxmail.com'],
  },

].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
