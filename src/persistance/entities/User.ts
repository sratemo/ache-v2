import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public firstname: string;

  @Column()
  public lastName: string;

  @Column()
  public emailAddress?: string;

}
