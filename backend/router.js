const express = require("express");
const router = express.Router();
const silly=require("./schema");


  
  router.get('/thing', async (req, res) => {
    try {
        const items = await silly.find();
        return res.status(200).json(items);
    } catch (error) {
        console.error("Error fetching menu:", error);
        return res.status(500).json({ msg: "Internal server error" });
   }
  });



router.post("/sillyThings_are", async (req, res) => {
    try {
      const { name, description, location ,date } = req.body;
      if (!name || !description || !location || !date) {
        return res.status(400).send({ msg: "Please provide all details" });
      }
  
      const item = new silly({ name, description, location ,date });
      await item.save();
      return res.status(201).send({ msg: "Item added successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ msg: "Something went wrong" });
    }
  });




router.put("/put_thing/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({ msg: "Please provide an ID" });
        }

        const { name, description, location , date } = req.body;
        if (!name || !description || !location || !date) {
            return res.status(400).send({ msg: "All fields (name, description, location ,date) are required" });
        }

        const updatedItem = await silly.findByIdAndUpdate(
            id,
            { name, description, location, date },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).send({ msg: "Item not found" });
        }

        return res.status(200).send({ msg: "Item updated successfully", updatedItem });

    } catch (error) {
        console.error("PUT Error:", error);
        return res.status(500).send({ msg: "Something went wrong", error });
    }
});


router.delete("/delete_item/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({ msg: "Please provide an ID" });
        }

        const deletedItem = await silly.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).send({ msg: "Item not found" });
        }

        return res.status(200).send({ msg: "Item deleted successfully" });

    } catch (error) {
        console.error("DELETE Error:", error);
        return res.status(500).send({ msg: "Something went wrong", error });
    }
});

module.exports = router;