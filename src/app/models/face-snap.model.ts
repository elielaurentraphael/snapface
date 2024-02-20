// localisation? signifie que les utilisateurs puissent choisir d'ajouter ou non la localisation de l'image
export class FaceSnap {
  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  location?: string;
}
