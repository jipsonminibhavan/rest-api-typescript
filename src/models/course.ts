import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Lesson } from "./lesson";

@Entity({
  name: "COURSES",
})
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seqNo: number;

  @Column()
  title: string;

  @OneToMany(() => Lesson, (lesson) => lesson.course)
  lessons: Lesson[];

  @Column()
  iconUrl: string;

  @Column()
  longDescription: string;

  @Column()
  category: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  lastUpdated: Date;
}
