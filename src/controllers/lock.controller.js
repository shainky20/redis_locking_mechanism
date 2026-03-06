import client from "../config/redis.js";

export const acquireLock = async (req, res) => {
const result = await client.set("mylock", "locked", {
NX: true,
EX: 10
});

res.json({ result });
};