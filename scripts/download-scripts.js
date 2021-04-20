const http = require('https');
const fs = require('fs');

const download = function (url, dest, cb) {
    var file = fs.createWriteStream(dest);
    http.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close(cb);  // close() is async, call cb after close completes.
        });
    }).on('error', function (err) { // Handle errors
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        if (cb) cb(err.message);
    });
};

const files = [
    [ "https://raw.githubusercontent.com/mneedham/lusid-sdk-python/readme-refactoring/sdk/examples/hello_world.py", 
      "developer/modules/lusid/examples/hello_world.py" ],
    [ "https://raw.githubusercontent.com/mneedham/lusid-sdk-csharp/master/sdk/Lusid.Sdk.Tests/HelloWorld.cs", 
      "developer/modules/lusid/examples/HelloWorld.cs" ],
    [ "https://raw.githubusercontent.com/mneedham/lusid-sdk-java/add-example/examples/src/main/java/com/finbourne/examples/HelloWorld.java",
      "developer/modules/lusid/examples/HelloWorld.java"]
]
files.forEach(value => {
    const [remote, local] = value
    download(remote, local)
})