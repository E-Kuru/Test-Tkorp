import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsModule } from './TypeORM/persons/persons.module';
import { Person } from './entities/Person';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './TypeORM/animals/animals.module';
import { Animal } from './entities/Animal';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test-technique-tkorp',
      entities : [Person, Animal],
      synchronize: true
    }),
    PersonsModule,
    AnimalsModule
  ],
  controllers : [AppController],
  providers : [AppService]
})
export class AppModule {}