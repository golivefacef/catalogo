const mysql = require("mysql");
const { rootCertificates } = require("tls");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "alex",
  password: "alexbarbosa",
  database: "",
});

connection.connect(function (err) {
  if (err) return console.log(err);
  console.log("conectado no banco de dados");
  //createTable(connection);
  // addRows(connection);
});

/*
function createTable(conn) {
  const sql =
    "CREATE TABLE IF NOT EXISTS produtos (n" +
    "ID int NOT NULL AUTO_INCREMENT, n" +
    "NOME_PRODUTO varchar(200) NOT NULL, n" +
    "PRECO int NOT NULL, n" +
    "ESTOQUE int n" +
    ");";

  conn.query(sql, function (error, results, fields) {
    if (error) return console.log(error);
    console.log("Tabela criada com sucesso");
  });
}
*/

// Gerando varios registros na tabela.
/*
function addRows(conn) {
  const sql = "INSERT INTO PRODUTOS(NOME_PRODUTO,PRECO,ESTOQUE) VALUES ?";
  const values = [
    ["Vinho Tinto", 10, 10],
    ["Vinho Branco", 30, 20],
    ["Vinho Rose", 20, 14],
  ];

  conn.query(sql, [values], function (error, results, fields) {
    if (error) return console.log(error);
    console.log("Registros gravados com sucesso!");
    conn.end(); // fechando a conexão
  });
}
*/
