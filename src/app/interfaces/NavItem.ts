export interface NavItem {
  id?: number;
  title: string;
  route: string;
}

export const NavItems: NavItem[] = [
  {
    id: 1,
    title: 'Strona główna',
    route: ''
  },
  {
    id: 2,
    title: 'Galeria',
    route: 'galeria'
  },
  {
    id: 3,
    title: 'Biografia',
    route: 'biografia'
  },
  {
    id: 4,
    title: 'Kontakt',
    route: 'kontakt'
  },
]
