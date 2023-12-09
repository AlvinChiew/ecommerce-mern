import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Root Admin',
    email: 'root@email.com',
    password: bcrypt.hashSync('123123123', 11),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john.doe@email.com',
    password: bcrypt.hashSync('123123123', 11),
  },
  {
    name: 'Jane Doe',
    email: 'jane.doe@email.com',
    password: bcrypt.hashSync('123123123', 11),
  },
];

export default users;
