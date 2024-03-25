export interface Note {
  id: number;
  title: string;
  text: string;
}
export const NOTES: Note[] = [
  {
    id: 1,
    title: 'Finir le projet de programmation',
    text: 'Faire le server socket + la base de données en fichier texte',
  },
  {
    id: 2,
    title: 'Trouver un stage',
    text: 'Avril Septembre',
  },
  {
    id: 3,
    title: 'Trouver un appartement',
    text: 'Lyon 8',
  },
  {
    id: 4,
    title: 'Récupérer tous les documents',
    text: 'ID, Permi, bail etc.',
  },
];
