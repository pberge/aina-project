import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'

@Entity()
export class Text {
  @PrimaryGeneratedColumn({
    name: 'id'
  })
  public id!: string

  @IsNotEmpty()
  @Column({
    name: 'text'
  })
  public text!: string

  @Column({
    name: 'autor'
  })
  public autor!: string

}
   