import express from "express";

const router = express.Router();

//inicio
router.get("/", (req, res) => {
    res.render("inicio");
});

export default router;