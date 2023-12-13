import * as mongoose from 'mongoose';
import { User, UserSchema } from 'src/user/user.model';

export const EntrepriseSchema = new mongoose.Schema({
  user: { type: UserSchema, required: false },
  localisation: { type: String, required: true },
  secteur: { type: String, required: true },
  linkedin: { type: String, required: false },
  siteWeb: { type: String, required: false },
});
export interface Entreprise extends mongoose.Document {
  id: string;
  user: User;
  localisation: string;
  secteur: string;
  linkedin: string;
  siteWeb: string;

}