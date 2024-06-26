import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './file.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<any> {
    console.log(file)
    console.log(file.filename)

    const filepath = `./uploads/${file.originalname}`;
    const savedFile = await this.uploadService.saveFile(file.originalname,filepath, file.buffer, file.mimetype, 'photo'); 
    return savedFile;
  }

  @Get()
  async getAllFiles(): Promise<any> {
    return this.uploadService.findAll();
  }
}



