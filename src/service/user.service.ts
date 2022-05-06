import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { Repository } from 'typeorm';
import { Address } from 'src/entities/address.entity';
import { CreateAddressDto } from 'src/dto/createAddress.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ){}

// create user
  createUser(user:CreateUserDto, address:Address) {
    const newUser= this.userRepository.create({
      ...user,
    address:address}) 
    this.userRepository.save(newUser)
    return newUser
  }

// create address
  async createAddress(address: Object, user: Object){
    const newAddress = await this.addressRepository.create({
      ...address,
      user: user
    })
    console.log('asdasd', address)
    await this.addressRepository.save(newAddress)
    console.log(newAddress)
    return newAddress
}

// getAllAddressesWithUsers() {
//   return this.addressRepository.find({ relations: ['user'] });
// }


}
