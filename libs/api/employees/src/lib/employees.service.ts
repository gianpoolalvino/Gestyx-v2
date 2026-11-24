import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EmployeeEntity } from "./employee.entity";
import { CreateEmployeeDto } from "./dto/create-employee.dto";

@Injectable()
export class EmployeesService{
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly repo: Repository<EmployeeEntity>,
  ){}
}
