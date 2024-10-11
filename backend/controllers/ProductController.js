import {pool} from "../db/db.js";

export const getProducts = async (req, res) => {
    try {
        const products = await pool.query("SELECT * FROM catalog_products");
        res.json(products.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера')
    }
}