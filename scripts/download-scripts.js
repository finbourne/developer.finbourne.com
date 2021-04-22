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
      "developer/modules/lusid/examples/getting-started/hello_world.py" ],
    [ "https://raw.githubusercontent.com/mneedham/lusid-sdk-csharp/master/sdk/Lusid.Sdk.Tests/HelloWorld.cs", 
      "developer/modules/lusid/examples/getting-started/HelloWorld.cs" ],
    [ "https://raw.githubusercontent.com/mneedham/lusid-sdk-java/add-example/examples/src/main/java/com/finbourne/examples/HelloWorld.java",
      "developer/modules/lusid/examples/getting-started/HelloWorld.java"],

    [ "https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/test_instruments_master.py",
      "developer/modules/lusid/examples/instrument-master/test_instruments_master.py"],
    [ "https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_output/identifiers.csv",
      "developer/modules/lusid/examples/instrument-master/identifiers.csv"],
    [ "https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_output/get_instrument.csv",
      "developer/modules/lusid/examples/instrument-master/get_instrument.csv"],
      [ "https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_output/get_instrument_client_internal.csv",
      "developer/modules/lusid/examples/instrument-master/get_instrument_client_internal.csv"],
    [ "https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_output/get_instruments.csv",
      "developer/modules/lusid/examples/instrument-master/get_instruments.csv"],
      [ "https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_output/get_instruments_now.csv",
      "developer/modules/lusid/examples/instrument-master/get_instruments_now.csv"],      
      [ "https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_output/get_instruments_later.csv",
      "developer/modules/lusid/examples/instrument-master/get_instruments_later.csv"],        
    [ "https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_output/get_instruments_properties.csv",
      "developer/modules/lusid/examples/instrument-master/get_instruments_properties.csv"],
    [ "https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_output/instruments.csv",
      "developer/modules/lusid/examples/instrument-master/instruments.csv"],
    [ "https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_output/luids.csv",
      "developer/modules/lusid/examples/instrument-master/luids.csv"],
    [ "https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_output/search_instruments.csv",
      "developer/modules/lusid/examples/instrument-master/search_instruments.csv"],
]
files.forEach(value => {
    const [remote, local] = value
    download(remote, local)
})