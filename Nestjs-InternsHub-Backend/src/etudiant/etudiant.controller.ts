import {
  Body,
  Controller,
  Res,
  HttpStatus,
  Headers,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,

} from '@nestjs/common';
import * as path from 'path'
import { EtudiantService } from './etudiant.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { User } from 'src/user/user.model';
import { AuthService } from 'src/auth/auth.service';
import { LocalStrategy } from 'src/auth/local.auth';
import { Response } from 'express';



@Controller('etudiant')
export class EtudiantController {
  constructor(
    private readonly etudiantService: EtudiantService,
    private localStrategy: LocalStrategy,
    private authService: AuthService,
  ) {}
  @Post()
  /*@UseInterceptors(
    FileInterceptor('Resume', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )*/
  async addEtudiant(
    @Body('competences') competences: Array<string>,
    @Body('localisation') localisation: string,
    @Body('user') user: User,
    //@UploadedFile() file: Express.Multer.File,
  ) {
    const generatedId = await this.etudiantService.insertEtudiant(
      competences,
      localisation,
      user,
      //file.path,
    );
    const token = await this.authService.signIn(user.email, user.password);

    return { id: generatedId, /*filePath: file.path*/ token};
  }
  /*@Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async uploadFile(@Res() res: Response,) {
    return res.status(HttpStatus.OK).json({ Resultat: "Sucess" });
  }*/
  @Get()
  async getAllEtudiants(
    @Res() res: Response,
    @Headers('authorization') authHeader: string,
  ) {
    if (!authHeader) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Unauthorized tester' });
    }

    let token = authHeader.split(' ')[1];
    let userFound = await this.localStrategy.validateUser(token);

    if (!userFound) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Unauthorized' });
    }
    const etudiants = await this.etudiantService.getEtudiants();
    return res.status(HttpStatus.OK).json({ etudiants });
  }
 
  @Get(':id')
  async getEtudiant(
    @Param('id') id: string,
    @Res() res: Response,
    @Headers('authorization') authHeader: string,
  ) {
    if (!authHeader) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Unauthorized tester' });
    }

    let token = authHeader.split(' ')[1];
    let userFound = await this.localStrategy.validateUser(token);

    if (!userFound) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Unauthorized' });
    }

    const students = await this.etudiantService.getSingleEtudiant(id);
    return res.status(HttpStatus.OK).json({ students });
  }
  @Delete(':id')
  async removeEtudiant(
    @Param('id') Id: string,
    @Res() res: Response,
    @Headers('authorization') authHeader: string,
  ) {
    if (!authHeader) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Unauthorized tester' });
    }

    let token = authHeader.split(' ')[1];
    let userFound = await this.localStrategy.validateUser(token);

    if (!userFound) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Unauthorized' });
    }

    await this.etudiantService.deleteEtudiant(Id);
    return res
      .status(HttpStatus.ACCEPTED)
      .json({ message: 'Deleted Successfully' });
  }

  @Patch(':id')
  /*@UseInterceptors(
    FileInterceptor('Resume', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )*/
  async updateEtudiant(
    @Param('id') id: string,
    @Body('competences') competences: Array<string>,
    @Body('localisation') localisation: string,
    //@UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
    @Headers('authorization') authHeader: string,
  ) {
    if (!authHeader) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Unauthorized tester' });
    }

    let token = authHeader.split(' ')[1];
    let userFound = await this.localStrategy.validateUser(token);

    if (!userFound) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Unauthorized' });
    }

    const updatedEtudiant = await this.etudiantService.updateEtudiant(
      id,
      competences,
      localisation,
      //file.path,
    );
    return res.status(HttpStatus.ACCEPTED).json({ updatedEtudiant });
  }
}
