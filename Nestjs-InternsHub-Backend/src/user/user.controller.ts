import { Body, Controller, Delete, Get, Param, Patch, Post,Headers, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    authService: any;
    constructor( private readonly userService : UserService){}
    @Post()
        async addUser(
            @Res() res: Response,
            @Body('nom') nom: string,
            @Body('prenom') prenom: string,
            @Body('email') email: string,
            @Body('password') password: string,

        ){
            try {
                const generatedId = await this.userService.insertUser(nom,prenom, email, password);
                res.status(HttpStatus.CREATED).json({ id: generatedId });
            } catch (error) {
                console.error(error);
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
            }
        }
        
    @Get()
        async getAllUsers(){
            const users = await this.userService.getUsers();
            return users;
        }
    @Get(':id')
        getUser(@Param('id') id: string) {
          return this.userService.getSingleUser(id);
        }
    @Patch(':id')
        async updateUser(
            
            @Param('id') id: string,
            @Body('nom') nom: string,
            @Body('email') email: string,
            @Body('password') password: string,
        ){
            await this.userService.updateUser(id, nom, email, password);
            return "Updated Successfully";
        }
    @Delete(':id')
        async removeUser(@Param('id') Id: string){
            await this.userService.deleteUser(Id);
            return "Deleted Successfully";
        }
    

}
