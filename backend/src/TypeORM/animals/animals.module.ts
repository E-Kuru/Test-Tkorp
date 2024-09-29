import { Module } from '@nestjs/common';
import { AnimalsController } from './controller/animals/animals.controller';
import { AnimalsService } from './services/animals/animals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from 'src/entities/Animal';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  controllers: [AnimalsController],
  providers: [AnimalsService]
})
export class AnimalsModule {}
