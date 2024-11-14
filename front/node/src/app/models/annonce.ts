export class Annonce {
  idAnn?: any;
    nom?: string;
    description?: string;
    prix?: number;
    numtel?: string;
    adresse?: string;
    idUser?: string; // Assuming this is a string in your Angular model
    image?: {
      url: string;
      publicId: string | null;
    };
}
