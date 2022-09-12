import { Inject, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { CreateValueDto } from './dto/create-value.dto'
import { UpdateValueDto } from './dto/update-value.dto'
import { Value } from './entities/value.entity'
@Injectable()
export class ValuesService {
  constructor(
    @Inject('BASEVALUE_REPOSITORY')
    private baseValueRepository: Repository<Value>
  ) {}
  create(createValueDto: CreateValueDto) {
    return 'This action adds a new value'
  }

  findAll() {
    return `This action returns all values`
  }

  findOne(id: number) {
    return `This action returns a #${id} value`
  }

  update(id: number, updateValueDto: UpdateValueDto) {
    return `This action updates a #${id} value`
  }

  remove(id: number) {
    return `This action removes a #${id} value`
  }
}
