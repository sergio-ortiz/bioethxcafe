import prisma from "/lib/prisma";

export default async function handler(req, res) {
  const result = await prisma.Member.create({
    data: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
  });

  res.redirect(302, "/members");
}
