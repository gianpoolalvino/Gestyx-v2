import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from '@gestyx/shared-contracts';

@Entity('employees')
export class EmployeeEntity{
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar')
  firstName!: string;

  @Column('varchar')
  lastName!: string;

  @Column('varchar')
  position!: string;

  @Column('varchar')
  area!: string;

}
