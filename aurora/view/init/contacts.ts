const Contacts = (Link: {
  facebook: string
  messenger: string
  instagram: string
  youtube: string
  mail: string
  github: string
  twitter: string
  discord: string
}) => ({
  facebook: {
    name: 'Facebook',
    icon: 'fab fa-facebook-f',
    link: 'https://www.facebook.com/' + Link.facebook,
  },
  messenger: {
    name: 'Messenger',
    icon: 'fa fa-comment',
    link: 'https://m.me/' + Link.messenger,
  },
  instagram: {
    name: 'Instagram',
    icon: 'fab fa-instagram',
    link: 'https://www.instagram.com/' + Link.instagram,
  },
  youtube: {
    name: 'Youtube',
    icon: 'fab fa-youtube',
    link: 'https://www.youtube.com/' + Link.youtube,
  },
  mail: {
    name: 'Mail',
    icon: 'fa fa-envelope',
    link: 'mailto:' + Link.mail,
  },
  github: {
    name: 'Github',
    icon: 'fab fa-github',
    link: 'https://github.com/' + Link.github,
  },
  twitter: {
    name: 'Twitter',
    icon: 'fab fa-twitter',
    link: 'https://twitter.com/' + Link.twitter,
  },
  discord: {
    name: 'Discord',
    icon: 'fab fa-discord',
    link: 'https://discord.gg/' + Link.discord,
  },
})

export type tContact = {
  name: string
  icon: string
  link: string
}

export default Contacts
