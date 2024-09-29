import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { AnimalsService } from '../../services/animals/animals.service';
import { AnimalModel } from '../../model/Animal';

@Controller('animals')
export class AnimalsController {
    constructor(private animalsService: AnimalsService){}

    @Post()
    newAnimal(@Body() animal : AnimalModel,@Req() req){
        return this.animalsService.createAnimal({
            ...animal,
            dateOfBirth : new Date(req.body.dateOfBirth)
        })
    }

    @Get()
    getPersons() {
        return this.animalsService.findAnimals()
    }

    @Get(':id')
    getOneById(
        @Param('id') id: number,
    ){
        return this.animalsService.findOneById(id)
    }
    
    @Delete(':id')
    deleteOneById(
        @Param('id') id: number
    ){
        return this.animalsService.deleteOneById(id)
    }

    @Put(':id')
    updateOneById(
        @Param('id') id : number, @Body() animal : AnimalModel){
        return this.animalsService.updateOneById(id, animal)
    }

}
