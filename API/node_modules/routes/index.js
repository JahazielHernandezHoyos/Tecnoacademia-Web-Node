import express from "express";

const router = express.Router();

//inicio
router.get("/", (req, res) => {
    res.render("inicio");
});

router.get("/galeria", (req, res) => {
    res.render("galeria");
});

export default router;