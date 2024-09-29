import { Module } from '@nestjs/common';
import { PersonsController } from './controllers/persons/persons.controller';
import { PersonsService } from './services/persons/persons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/entities/Person';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonsController],
  providers: [PersonsService]
})
export class PersonsModule {}
