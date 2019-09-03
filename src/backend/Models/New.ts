import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'

@Entity()
export class New {
  @PrimaryGeneratedColumn({
    name: 'id'
  })
  public id!: string

  @IsNotEmpty()
  @Column({
    name: 'title'
  })
  public title!: string

  @IsNotEmpty()
  @Column({
    name: 'text'
  })
  public text!: string

  @Column({
    name: 'img'
  })
  public img!: string

  @Column({
    name: 'creationDate'
  })
  public creationDate!: string

  @Column({
    name: 'published'
  })
  public published!: boolean
}
   