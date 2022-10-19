const users = require("../models/user.model");
const memories = require("../models/memory.model");
const { findByIdAndDelete, find } = require("../models/memory.model");

class MemoryController {
  async getMemory(req, res) {
    try {
      const listMemories = await memories.find({});
      res.json({ ok: true, data: listMemories });
    } catch (e) {
      res.json({ ok: false, message: "Coudln't get memories.." });
    }
  }

  async create(req, res) {
    const memory = req.body;
    console.log(memory);
    try {
      const newMem = await memories.create(memory);
      res.json({
        ok: true,
        message: "Memory was uploaded successfully..",
        data: newMem,
      });
    } catch (e) {
      res.json({ ok: false, message: "Memory failed to upload.." });
    }
  }

  async deleteM(req, res) {
    const { id } = req.body;
    try {
      const deleted = await find({ _id: id });
      res.json({
        ok: true,
        message: "Memory deleted successfully..",
      });
    } catch (e) {
      res.json({ ok: false, message: "Failed to delete memory.." });
    }
  }
}

module.exports = new MemoryController();
