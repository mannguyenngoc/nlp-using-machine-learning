var express = require('express');
var app = express();
const utf8 = require('utf8');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')

db = low(adapter)

db.defaults({employee: []})
  .write();

app.get('/', callName);
async function callName(req, res) {
  var result = "";
  var array;

  var spawn = require('child_process',encoding='utf-8').spawn;
  
  var document = "tôi cảm thấy đau đầu nặng nề"
  var process = spawn('python', [
   './run_naive_bayes.py', document])

  await process.stdout.on('data', function(data) {
    for (let i = 0; i < data.toString().length-2; i++) result += data.toString()[i]
    console.log("result = " + result)
    //console.log("result after = " + result)
    array = db.get('employee').value()
    console.log(array)
    
  });


}

app.listen(3000, function () {
  console.log('server listening');
})