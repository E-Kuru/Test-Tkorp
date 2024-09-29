import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/entities/Person';
import { Repository } from 'typeorm';
import { PersonModel } from '../../model/Person';

@Injectable()
export class PersonsService {

    constructor(@InjectRepository(Person) private personRepository: Repository<Person>){}

    createPerson(person : PersonModel) {
        return this.personRepository.save(person)
    }

    findPersons() {
        return this.personRepository.find()
    }

    findOneById(id : number){
        return this.personRepository.findBy({id})
    }
    
    deleteOneById(id: number){
        return this.personRepository.delete({id})
    }

    updateOneById(id : number, person : PersonModel){
        return this.personRepository.update(id, person)
    }

}
