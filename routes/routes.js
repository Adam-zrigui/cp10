import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
res.render('home')
})
router.get('/contact' , (req, res) => {
res.render('contact')
});
router.get('/service', (req, res) => {
    res.render('service')
})
export default router 