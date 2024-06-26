import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column({ nullable: true }) // Allow filepath to be nullable
  filepath: string;

  @Column()
  mimetype: string;

  @Column()
  type: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'longblob', nullable: true })
  data: Buffer; // Use 'longblob' for binary data in MySQL
}