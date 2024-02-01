import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Course } from "./course";

@Entity({
  name: "LESSONS",
})
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seqNo: number;

  @Column()
  title: string;

  @ManyToOne(() => Course, (course) => course.lessons)
  course: Course;

  @Column()
  duration: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  lastUpdated: Date;
}
