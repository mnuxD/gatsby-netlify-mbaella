// import data from "../data/data-test.json"

const data = require("../data/data-test.json")

exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
