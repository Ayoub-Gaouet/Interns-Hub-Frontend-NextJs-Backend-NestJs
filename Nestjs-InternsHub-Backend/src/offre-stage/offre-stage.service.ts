import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OffreStage } from './offre-stage.model';

@Injectable()
export class OffreStageService {
    constructor(@InjectModel('OffreStage') private readonly offreStageModel: Model<OffreStage>) { }

    async insertOffreStage(body: OffreStage) {
        const newOffreStage = new this.offreStageModel(body);
        const result = await newOffreStage.save();
        console.log(result);
        return result.id;
    }

    async getOffresStage() {
        try {
            const offresStage = await this.offreStageModel.find()/*.populate("entreprise").exec();*/
            return offresStage;
        } catch (error) {
            console.error(error);
            throw new Error('Error fetching offresStage');
        }
    }

    async getSingleOffreStage(Id: string) {
        const offreStage = await this.findOffreStage(Id);
        return {
            id: offreStage.id,
            titre: offreStage.titre,
            description: offreStage.description,
            domaine: offreStage.domaine,
            candidatures: offreStage.candidatures,
            localisation: offreStage.localisation,
            competences: offreStage.competences,
            duree: offreStage.duree,
        };
    }

    async updateOffreStage(Id: string, body: OffreStage) {
        const updatedOffreStage = await this.findOffreStage(Id);
        Object.assign(updatedOffreStage, body);
        await updatedOffreStage.save();
    }

    findOffreStage(Id: string): Promise<OffreStage> {
        return this.offreStageModel.findById(Id).exec();
    }

    async deleteOffreStage(Id: string) {
        const result = await this.offreStageModel.deleteOne({ _id: Id }).exec();
        if (result.deletedCount === 0) {
            throw new Error('Could not find offreStage.');
        }
    }
}