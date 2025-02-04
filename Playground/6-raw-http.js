const http = require("http")

const url =
  "http://api.weatherstack.com/current?access_key=8066b3d52e6dd5eb26b522971aac7e86&query=40,-75&units=f";

const request = http.request(url, (response) => {

  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString()
  });

  response.on("end", () => {
    const body = JSON.parse(data)
    console.log(body)
  });

});

request.on('error', (error) => {
  console.log('error', error)
})
request.end()