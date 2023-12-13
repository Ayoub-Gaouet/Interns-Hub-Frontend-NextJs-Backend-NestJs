import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Entreprise } from './entreprise.model';
import { User } from 'src/user/user.model';
@Injectable()
export class EntrepriseService {
    constructor( @InjectModel('Entreprise') private readonly entrepriseModel : Model<Entreprise>,) {}
    async insertEntreprise(user:User,localisation: string, secteur: string, linkedin: string, siteWeb: string){
        const newEntreprise = new this.entrepriseModel({
            user,
            localisation,
            secteur,
            linkedin,
            siteWeb,
        });
        const result = await newEntreprise.save();
        console.log(result);
        return result
    }
    async getEntreprises() {
      // get all enterprises from the database
      const enterprises = await this.entrepriseModel.find().exec();
      return enterprises;
    }

    async getSingleEntreprise(Id: string) {
        const entreprise = await this.findEntreprise(Id);
        return {
          id: entreprise.id,
          localisation: entreprise.localisation,
          secteur: entreprise.secteur,
          linkedin: entreprise.linkedin,
          siteWeb: entreprise.siteWeb,
          
        };
      }
      async findOne(id: string): Promise<Entreprise | undefined> {
        const entreprise = await this.entrepriseModel.findById(id).exec();
        return entreprise;
       
    }
    async findUser(username: string): Promise<Entreprise | undefined> {
      const entreprises = await this.entrepriseModel.find().populate('user').exec();
      const entreprise = entreprises.find(entreprise => entreprise.user.email === username);
      return entreprise;
     
  }

    
    async updateEntreprise(Id: string, localisation: string, secteur: string){
        const updatedEntreprise = await this.findEntreprise(Id);
        if (localisation) {
            updatedEntreprise.localisation = localisation;
          }
        if (secteur) {
            updatedEntreprise.secteur = secteur;
          }
        updatedEntreprise.save();
    }

    async findEntreprise(Id: string): Promise<Entreprise> {
        let entreprise;
        try {
          entreprise = this.entrepriseModel.findById(Id).exec();
        } catch (error) {
          throw new Error('Could not find entreprise.');
        }
        if (!entreprise) {
          throw new Error('Could not find entreprise.');
        }
        return entreprise;
        
    }
    async deleteEntreprise(Id: string){
        const result = await this.entrepriseModel.deleteOne({_id: Id}).exec();
        if (result.deletedCount === 0) {
            throw new Error('Could not find entreprise.');
          }
    }
}
