import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UploadController } from "./file.controller";
import { UploadService} from "./file.service";
import { File } from "./entity/file.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([File])
  ],
  controllers: [UploadController],
  providers: [UploadService]
})
export class FileModule {}
  