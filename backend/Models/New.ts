import { Column, Entity, PrimaryColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'

@Entity()
export class New {
  @PrimaryColumn({
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
}
   