import { Controller, Get, Param, Delete, Body, Put,Post } from '@nestjs/common';
import { PersonsService } from 'src/TypeORM/persons/services/persons/persons.service';
import { PersonModel } from '../../model/Person';

@Controller('persons')
export class PersonsController {
    constructor(private personServices: PersonsService){}

    @Post()
    newPerson(@Body() person : PersonModel){
        return this.personServices.createPerson(person)
    }

    @Get()
    getPersons() {
        return this.personServices.findPersons()
    }

    @Get(':id')
    getOneById(
        @Param('id') id: number,
    ){
        return this.personServices.findOneById(id)
    }

    @Delete(':id')
    deleteOneById(
        @Param('id') id: number
    ){
        return this.personServices.deleteOneById(id)
    }

    @Put(':id')
    updateOneById(
        @Param('id') id : number, @Body() person : PersonModel){
        return this.personServices.updateOneById(id, person)
    }

}
