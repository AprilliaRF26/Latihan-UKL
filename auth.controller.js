const { User } = require("../models");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

// Fungsi login sesuai soal UKL
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Cari user berdasarkan username
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Bandingkan password dengan MD5
    if (md5(password) !== user.password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Buat token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      "secret",
      { expiresIn: "1d" }
    );

    // Response sesuai soal
    res.json({
      status: "success",
      message: "Login berhasil",
      token
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
