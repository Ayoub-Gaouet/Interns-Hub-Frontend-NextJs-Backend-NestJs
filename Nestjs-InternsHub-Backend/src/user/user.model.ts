import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
  nom: { type: String , required: true },
  prenom: { type: String , required: true },
  email: { type: String , required: true },
  password: { type: String , required: true },

 
});

export interface User extends mongoose.Document  {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  
}