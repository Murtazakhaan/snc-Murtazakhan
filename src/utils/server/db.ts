import { Person } from "@/utils/common/person";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getPersonFromDB = async (person: Person) => {
  return await prisma.user.findFirst({ where : { name : person}});
};
