const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOrderByUser = async (req, res) => {
  const { name, orders } = req.body;

  if (!name) {
    return res.status(400).json({
      error: "Name cannot be empty",
    });
  }

  try {
    const client = await prisma.client.create({
      data: {
        name: name,
        orders: {
          create: orders.map((order) => ({
            name: order.name,
          })),
        },
      },
      include: { orders: true },
    });

    return res.status(201).json(client);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to add data" });
  }
};

module.exports = { createOrderByUser };
