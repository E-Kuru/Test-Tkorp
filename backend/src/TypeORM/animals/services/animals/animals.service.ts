import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from 'src/entities/Animal';
import { Repository } from 'typeorm';
import { AnimalModel } from '../../model/Animal';

@Injectable()
export class AnimalsService {

    constructor(@InjectRepository(Animal) private animalRepository: Repository<Animal>){}

    createAnimal(animal : AnimalModel) {
        return this.animalRepository.save(animal)
    }

    findAnimals() {
        return this.animalRepository.find()
    }

    findOneById(id : number){
        return this.animalRepository.findBy({id})
    }

    deleteOneById(id: number){
        return this.animalRepository.delete({id})
    }

    updateOneById(id : number, animal : AnimalModel){
        return this.animalRepository.update(id, animal)
    }
}
