const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();

//Arreglo con los usuarios autorizados
const users = [
  {
    user: "luis",
    pass: "pass123",
  },
  {
    user: "fernando",
    pass: "pass123",
  },
];
//Modulos Get
router.get("/", (req, res) => res.send("hello"));
router.get("/compras", verifyToken, (req, res) => {
  res.status(200).send("autorizado");
});
router.get("/menu", verifyToken, (req, res) => {
  res.status(200).send("autorizado");
});
router.get("/proyectos", verifyToken, (req, res) => {
  res.status(200).send("autorizado");
});
router.get("/estadisticas", verifyToken, (req, res) => {
  res.status(200).send("autorizado");
});

//Modulo Post
router.post("/login", (req, res) => {
  const { user, pass } = req.body;
  if (!user || !pass) {
    return res.status(400).send("user and pass are required");
  } else {
    const data = users.find((u) => u.user === user && u.pass === pass);
    const accessToken = jwt.sign({ user: data.user }, "jwt_secret");
    res.json({ accessToken });
  }
});

module.exports = router;

//Funcion que verifica que el usuario tenga el token, de lo contrario no esta autorizado
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Error, you are not authorized");
  }

  const token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Error, you are not authorized");
  }

  const dataVerify = jwt.verify(token, "jwt_secret");
  next();
}
