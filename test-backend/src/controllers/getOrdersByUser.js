const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getOrdersByUser = async (req, res) => {
  try {
    const clients = await prisma.client.findMany({
      include: { orders: true },
    });

    if (!clients.length) {
      return res.status(404).json({ error: "Users not found" });
    }

    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: "Failed to get data" });
  }
};

module.exports = { getOrdersByUser };