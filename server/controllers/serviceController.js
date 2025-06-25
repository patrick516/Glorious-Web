const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// GET /api/services
const getAllServices = async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
};

// POST /api/services
const createService = async (req, res) => {
  const { title, description, imageUrl } = req.body;
  try {
    const newService = await prisma.service.create({
      data: { title, description, imageUrl },
    });
    res.status(201).json(newService);
  } catch (err) {
    res.status(500).json({ error: "Failed to create service" });
  }
};

module.exports = {
  getAllServices,
  createService,
};
