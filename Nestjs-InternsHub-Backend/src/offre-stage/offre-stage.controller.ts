import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OffreStageService } from './offre-stage.service';
import { Etudiant } from 'src/etudiant/etudiant.model';
import { Entreprise } from 'src/entreprise/entreprise.model';
import { OffreStage } from './offre-stage.model';

@Controller('offre-stage')
export class OffreStageController {
    constructor(private readonly offreStageService: OffreStageService) { }

    @Post()
    async addOffreStage(@Body() body: OffreStage) {
        const generatedId = await this.offreStageService.insertOffreStage(body);
        return { id: generatedId };
    }

    @Get()
    async getAllOffresStage() {
        const offresStage = await this.offreStageService.getOffresStage();
        return offresStage;
    }

    @Get(':id')
    getOffreStage(@Param('id') id: string) {
        return this.offreStageService.getSingleOffreStage(id);
    }

    @Patch(':id')
    async updateOffreStage(@Param('id') id: string, @Body() body: OffreStage) {
        await this.offreStageService.updateOffreStage(id, body);
        return "Updated Successfully";
    }

    @Delete(':id')
    async removeOffreStage(@Param('id') Id: string) {
        await this.offreStageService.deleteOffreStage(Id);
        return "Deleted Successfully";
    }
}