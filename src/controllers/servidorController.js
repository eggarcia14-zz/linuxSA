const controller = {};
var resud;
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    ///PRIMERA CONSULTA ENLISTANDO SERVIDORES///
    conn.query("SELECT * from servidor", (err, result1) => {
      if (err) {
        res.json(err);
      }
      res.render("index", {
        //ENVIANDO DATOS DE CONSULTAS A VIEW DE LA WEB (index.ejs)
        data: result1,
      });
    });
  });
};
module.exports = controller;
