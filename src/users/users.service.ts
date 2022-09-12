import { Inject, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'
@Injectable()
export class UsersService {
  constructor(
    @Inject('BASEUSER_REPOSITORY')
    private baseUserRepository: Repository<User>
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  async findAll() {
    const users = await this.baseUserRepository.find({})
    return users[0]
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
