const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{


const fs = require('fs');

deleteFolderRecursive('/Users/plummoon/leowork/demo/nodedemo/hello', (err) => {
  if (err) throw err;
});

	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('{text:\'LiYue Hello World\'}');
});

server.listen(port,hostname,()=>{
	console.log(`Server running at http://${hostname}:${port}/`)
})

var deleteFolderRecursive = function(path) {

	const fs = require('fs');
  if( fs.existsSync(path) ) {
      fs.readdirSync(path).forEach(function(file) {
        var curPath = path + "/" + file;
          if(fs.statSync(curPath).isDirectory()) { // recurse
              deleteFolderRecursive(curPath);
          } else { // delete file
              fs.unlinkSync(curPath);
          }
      });
      fs.rmdirSync(path);
      console.log('successfully deleted /Users/plummoon/leowork/demo/nodedemo/hello');
    }
};