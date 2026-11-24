import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EmployeeEntity } from './employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity])],
  exports: [TypeOrmModule],
})

export class EmployeesModule{}
