# for node.js compatibility
$env:NODE_OPTIONS = "--openssl-legacy-provider"
dotnet publish "./CalculatorCLI" -r win-x64 -c Release -o "./CalculatorCLI/drop"
& npm install
& npm run pack
Pop-Location