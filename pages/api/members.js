import prisma from "/lib/prisma";

export default async function handler(req, res) {
  const result = await prisma.Member.findMany();
  res.status(200).json(result);
}
