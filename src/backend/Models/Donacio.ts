import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'

@Entity()
export class Donacio {
  @PrimaryGeneratedColumn({
    name: 'id'
  })
  public id!: string

  @IsNotEmpty()
  @Column({
    name: 'descripcio'
  })
  public descripcio!: string

  @Column({
    name: 'img'
  })
  public img!: string

  @Column({
    name: 'imgColaborador'
  })
  public imgColaborador!: string

  @Column({
    name: 'nomColaborador'
  })
  public nomColaborador!: boolean

  @Column({
    name: 'esportColaborador'
  })
  public esportColaborador!: boolean
}
   