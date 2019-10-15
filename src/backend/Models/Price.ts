import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'

@Entity()
export class Price {
  @PrimaryGeneratedColumn({
    name: 'id'
  })
  public id!: string

  @IsNotEmpty()
  @Column({
    name: 'name'
  })
  public name!: string

  @IsNotEmpty()
  @Column({
    name: 'sleep'
  })
  public sleep!: string

  @Column({
    name: 'bedandbreakfast'
  })
  public bedandbreakfast!: string

  @Column({
    name: 'halfpension'
  })
  public halfpension!: string

  @Column({
    name: 'fullboard'
  })
  public fullboard!: boolean
}
   