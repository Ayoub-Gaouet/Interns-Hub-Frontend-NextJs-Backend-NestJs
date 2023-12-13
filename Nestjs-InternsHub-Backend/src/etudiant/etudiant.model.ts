import * as mongoose from 'mongoose';
import { User, UserSchema } from '../user/user.model';

export const EtudiantSchema = new mongoose.Schema({
  user: { type: UserSchema, required: false },
  competences: { type: Array, required: true },
  //Resume: { type: String, required: true },
  localisation: { type: String, required: true },
});

export interface Etudiant extends mongoose.Document {
  id: string;
  user: User;
  competences: Array<string>;
  //Resume: string;
  localisation: string;

  getResume(): string;
}
