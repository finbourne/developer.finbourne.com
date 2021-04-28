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
  ["https://raw.githubusercontent.com/mneedham/lusid-sdk-python/readme-refactoring/sdk/examples/hello_world.py",
    "developer/modules/lusid/examples/getting-started/hello_world.py"],
  ["https://raw.githubusercontent.com/mneedham/lusid-sdk-csharp/master/sdk/Lusid.Sdk.Tests/HelloWorld.cs",
    "developer/modules/lusid/examples/getting-started/HelloWorld.cs"],
  ["https://raw.githubusercontent.com/mneedham/lusid-sdk-java/add-example/examples/src/main/java/com/finbourne/examples/HelloWorld.java",
    "developer/modules/lusid/examples/getting-started/HelloWorld.java"],

  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/test_instruments_master.py",
    "developer/modules/lusid/examples/instrument-master/test_instruments_master.py"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_instruments_master/test_output/identifiers.csv",
    "developer/modules/lusid/examples/instrument-master/identifiers.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_instruments_master/test_output/get_instrument.csv",
    "developer/modules/lusid/examples/instrument-master/get_instrument.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_instruments_master/test_output/get_instrument_client_internal.csv",
    "developer/modules/lusid/examples/instrument-master/get_instrument_client_internal.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_instruments_master/test_output/get_instruments.csv",
    "developer/modules/lusid/examples/instrument-master/get_instruments.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_instruments_master/test_output/get_instruments_now.csv",
    "developer/modules/lusid/examples/instrument-master/get_instruments_now.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_instruments_master/test_output/get_instruments_later.csv",
    "developer/modules/lusid/examples/instrument-master/get_instruments_later.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_instruments_master/test_output/get_instruments_properties.csv",
    "developer/modules/lusid/examples/instrument-master/get_instruments_properties.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_instruments_master/test_output/instruments.csv",
    "developer/modules/lusid/examples/instrument-master/instruments.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_instruments_master/test_output/luids.csv",
    "developer/modules/lusid/examples/instrument-master/luids.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_instruments_master/test_output/search_instruments.csv",
    "developer/modules/lusid/examples/instrument-master/search_instruments.csv"],

  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_transaction_portfolios/test_output/get_portfolio.csv",
    "developer/modules/lusid/examples/transaction-portfolio/get_portfolio.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_transaction_portfolios/test_output/get_updated_portfolio.csv",
    "developer/modules/lusid/examples/transaction-portfolio/get_updated_portfolio.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/test_transaction_portfolios.py",
    "developer/modules/lusid/examples/transaction-portfolio/test_transaction_portfolios.py"],

  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_configure_transaction_types/test_output/transaction_types.csv",
    "developer/modules/lusid/examples/transaction-types/transaction_types.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/test_configure_transaction_types.py",
    "developer/modules/lusid/examples/transaction-types/test_configure_transaction_types.py"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/lusid_utils.py",
    "developer/modules/lusid/examples/lusid_utils.py"],

  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_user_defined_properties/test_output/get_property.csv",
    "developer/modules/lusid/examples/user-defined-properties/get_property.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_user_defined_properties/test_output/portfolio_manager_property.txt",
    "developer/modules/lusid/examples/user-defined-properties/portfolio_manager_property.txt"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/test_user_defined_properties.py",
    "developer/modules/lusid/examples/user-defined-properties/test_user_defined_properties.py"],

  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_transactions/test_output/transactions.csv",
    "developer/modules/lusid/examples/transactions/transactions.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_transactions/test_output/transactions_response.csv",
    "developer/modules/lusid/examples/transactions/transactions_response.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/test_transactions.py",
    "developer/modules/lusid/examples/transactions/test_transactions.py"],

  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_holdings/test_output/transactions.csv",
    "developer/modules/lusid/examples/holdings/transactions.csv"],
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_holdings/test_output/holdings.csv",
    "developer/modules/lusid/examples/holdings/holdings.csv"],
    ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_holdings/test_output/holdings_first_day_trading.csv",
    "developer/modules/lusid/examples/holdings/holdings_first_day_trading.csv"],
    ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_holdings/test_output/holdings_funds_loaded.csv",
    "developer/modules/lusid/examples/holdings/holdings_funds_loaded.csv"],
    ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_holdings/test_output/holdings_second_day_trading.csv",
    "developer/modules/lusid/examples/holdings/holdings_second_day_trading.csv"],    
    ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/data/test_holdings/test_output/holdings_positions.csv",
    "developer/modules/lusid/examples/holdings/holdings_positions.csv"],            
  ["https://raw.githubusercontent.com/mneedham/lusid-python-tools/instrument-master/tests/integration/examples/test_holdings.py",
    "developer/modules/lusid/examples/holdings/test_holdings.py"],

]
files.forEach(value => {
  const [remote, local] = value
  download(remote, local)
})