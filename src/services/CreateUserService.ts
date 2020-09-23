import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepositories = getRepository(User);

    const checkUserExist = await userRepositories.findOne({
      where: { email },
    });

    if (checkUserExist) {
      throw new Error('Email address already used');
    }

    const hashPassword = await hash(password, 8);

    const user = userRepositories.create({
      name,
      email,
      password: hashPassword,
    });

    await userRepositories.save(user);

    return user;
  }
}

export default CreateUserService;
