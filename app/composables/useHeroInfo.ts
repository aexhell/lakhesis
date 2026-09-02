export interface HeroInfo {
  title: string
  description: string,
  front_page: boolean
}

export const defaultHero = {
  title: 'Web Developer & UX Designer',
  description: 'Weaving the virtual tapestry of the Internet, developing immersive online experiences',
  front_page: true
}

export const useHeroInfo = () => useState<HeroInfo>('hero-info', () => ({ ...defaultHero }))