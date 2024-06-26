import { Module } from '@nestjs/common';
import { FileModule } from './fileee/file.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [ 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Fircxa@18',
    database: 'F2R0C0X5',
    autoLoadEntities: true,
    synchronize:false,
  }),
  FileModule
  ],
})
export class AppModule {}
