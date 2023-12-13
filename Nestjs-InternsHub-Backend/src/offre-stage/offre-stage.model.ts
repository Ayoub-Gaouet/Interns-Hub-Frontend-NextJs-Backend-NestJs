import * as mongoose from 'mongoose';
import { Entreprise } from 'src/entreprise/entreprise.model';
import { Etudiant } from 'src/etudiant/etudiant.model';


export const OffreStageSchema = new mongoose.Schema({
  titre: { type: String , required: true },
  description : { type: String , required: true },
  domaine : { type: String , required: true },
  candidatures: { type: Array, required: false },
  localisation: { type: String , required: true },
  competences: { type: String , required: true },
  duree: { type: String , required: true },
  linkedin: { type: String , required: true },
  siteWeb : { type: String , required: true },
  numtel : { type: String , required: true },
  paye : { type: Boolean , required: true },
  //entreprise: { type: mongoose.Schema.Types.ObjectId, ref: 'Entreprise', required: true },
 
});

export interface OffreStage extends mongoose.Document {
  id: string;
  titre: string;
  description: string;
  domaine: string;
  candidatures: Array<Etudiant>;
  localisation: string;
  competences: string
  duree: string;
  linkedin: string;
  siteWeb: string;
  numtel: string;
  paye: boolean;
  //entreprise: Entreprise;

}