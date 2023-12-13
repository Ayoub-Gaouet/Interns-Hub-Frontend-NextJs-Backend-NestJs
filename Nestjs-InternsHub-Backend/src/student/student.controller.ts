
import { StudentService } from './student.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './students.model';
import { Response } from 'express';
import {
    Res, 
    HttpStatus,
    Headers,
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LocalStrategy } from 'src/auth/local.auth';
@Controller('student')
export class StudentController {
    constructor( private readonly studentService : StudentService, private localStrategy : LocalStrategy, private authService : AuthService){}
    @Post()
        async addStudent(
            @Body('name') name: string,
            @Res() res: Response
        ){
            const generatedId = await this.studentService.insertStudent(name);
            return res.status(HttpStatus.CREATED).json({ id: generatedId });
        }
    @Get()
        async getAllStudents(@Res() res: Response, @Headers('authorization') authHeader: string){
            if (!authHeader) {
                return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized tester" });
            }
        
            let token = authHeader.split(' ')[1];
            let userFound = await this.localStrategy.validateUser(token);
        
            if (!userFound) {
                return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
            }
        
            const students = await this.studentService.getStudents();
            return res.status(HttpStatus.ACCEPTED).json({ students });
        }
    @Get(':id')
        async getStudent(@Param('id') Id: string, @Res() res: Response, @Headers('authorization') authHeader: string) {
            if (!authHeader) {
                return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized tester" });
            }
        
            let token = authHeader.split(' ')[1];
            let userFound = await this.localStrategy.validateUser(token);
        
            if (!userFound) {
                return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
            }


          let student = await this.studentService.getSingleStudent(Id);
          return res.status(HttpStatus.ACCEPTED).json({ student });
            
        }
    @Patch(':id')
        async updateStudent(
            @Param('id') Id: string,
            @Body('name') name: string,
            @Res() res: Response,
            @Headers('authorization') authHeader: string
        ){
            if (!authHeader) {
                return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized tester" });
            }
        
            let token = authHeader.split(' ')[1];
            let userFound = await this.localStrategy.validateUser(token);
        
            if (!userFound) {
                return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
            }

            await this.studentService.updateStudent(Id, name);
            return res.status(HttpStatus.ACCEPTED).json({ message: "Updated Successfully" });
        }
    @Delete(':id')
        async removeStudent(@Param('id') Id: string, @Res() res: Response, @Headers('authorization') authHeader: string){
            if (!authHeader) {
                return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized tester" });
            }
        
            let token = authHeader.split(' ')[1];
            let userFound = await this.localStrategy.validateUser(token);
        
            if (!userFound) {
                return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
            }

            await this.studentService.deleteStudent(Id);
            return res.status(HttpStatus.ACCEPTED).json({ message: "Deleted Successfully" });
        }
    
}

