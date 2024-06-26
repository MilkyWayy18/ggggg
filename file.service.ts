import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './entity/file.entity';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
  ) {}

  async saveFile(filename: string,filepath:string, data: Buffer, mimetype: string, type: string) {
    const file = this.fileRepository.create({ filename, filepath,data, mimetype, type });
    return await this.fileRepository.save(file);
  }

  async findAll(): Promise<File[]> {
    return await this.fileRepository.find();
  }
}
