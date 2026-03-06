import redisClient from "../config/redis.js";

// Acquire Lock
export const acquireLock = async (req, res) => {
  try {
    const { key } = req.body;

    const result = await redisClient.set(key, "locked", {
      NX: true,
      EX: 10,
    });

    if (result === "OK") {
      return res.json({
        success: true,
        message: `Lock acquired for ${key}`,
      });
    }

    return res.json({
      success: false,
      message: `Lock already exists for ${key}`,
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Release Lock
export const releaseLock = async (req, res) => {
  try {
    const { key } = req.body;

    await redisClient.del(key);

    res.json({
      success: true,
      message: `Lock released for ${key}`,
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};