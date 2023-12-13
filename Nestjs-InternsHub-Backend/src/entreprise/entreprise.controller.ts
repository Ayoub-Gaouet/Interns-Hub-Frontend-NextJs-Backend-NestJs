import { Body, Controller, Delete, Get, Param, Patch, Post, Headers, Res, HttpStatus } from '@nestjs/common';
import * as path from 'path';
import { Response } from 'express';
import { EntrepriseService } from './entreprise.service';
import { Entreprise } from './entreprise.model';
import { User } from 'src/user/user.model';
import { LocalStrategy } from 'src/auth/local.auth';
import { AuthService } from 'src/auth/auth.service';

@Controller('entreprise')
export class EntrepriseController {
    constructor(private readonly entrepriseService: EntrepriseService, private localStrategy : LocalStrategy, private authService : AuthService) { }
    @Post()
    async addEntreprise(
        @Body('user') user: User,
        @Body('localisation') localisation: string,
        @Body('secteur') secteur: string,
        @Body('linkedin') linkedin: string,
        @Body('siteWeb') siteWeb: string,
    ) {
        const generatedId = await this.entrepriseService.insertEntreprise(user,localisation, secteur, linkedin, siteWeb);
        const token = await this.authService.signIn( user.email, user.password);
        return { id: generatedId , token};
    }
    @Get()
    async getAllEntreprises(@Res() res: Response, @Headers('authorization') authHeader: string
    ) {
        if (!authHeader) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized tester" });
        }
    
        let token = authHeader.split(' ')[1];
        let userFound = await this.localStrategy.validateUser(token);
        console.log("test");
    
        if (!userFound) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        }
        console.log("heloooooooooooooooooooooooooooooooooooooooooooooo");
        
        const entreprises = await this.entrepriseService.getEntreprises();
        console.log(entreprises)
        return res.status(HttpStatus.ACCEPTED).json({ entreprises });
    }
    @Get(':id')
    async getEntreprise(@Param('id') id: string/*,@Res() res: Response,
    @Headers('authorization') authHeader: string*/) {
        /*let token = authHeader.split(' ')[1];
      let userFound = await this.localStrategy.validateUser(token);
      if (!userFound) return res.status(HttpStatus.UNAUTHORIZED).json({message: "Unauthorized"});*/
        return this.entrepriseService.getSingleEntreprise(id);
    }
    @Patch(':id')
    async updateEntreprise(
        @Res() res: Response,
        @Headers('authorization') authHeader: string,
        @Param('id') id: string,
        @Body('localisation') localisation: string,
        @Body('secteur') secteur: string,
    ) {
        let token = authHeader.split(' ')[1];
      let userFound = await this.localStrategy.validateUser(token);
      if (!userFound) return res.status(HttpStatus.UNAUTHORIZED).json({message: "Unauthorized"});
        await this.entrepriseService.updateEntreprise(id, localisation, secteur);
        return "Updated Successfully";
    }
    @Delete(':id')
    async removeEntreprise(
        @Param('id') Id: string,
        @Res() res: Response,
    @Headers('authorization') authHeader: string) 
    {
        
        let token = authHeader.split(' ')[1];
        let userFound = await this.localStrategy.validateUser(token);
    
        if (!userFound) {
          return res
            .status(HttpStatus.UNAUTHORIZED)
            .json({ message: 'Unauthorized' });
        }

        await this.entrepriseService.deleteEntreprise(Id);
        return res
      .status(HttpStatus.ACCEPTED)
      .json({ message: 'Deleted Successfully' });
    }
    


}