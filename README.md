# postman-autosave-patch
Postman autosave patch for Postman 10.12.x

This is a brutal patch for adding Autosave functionality in Postman 10.12.x.
See here for why this is needed: https://github.com/postmanlabs/postman-app-support/issues/8195

## How to install
- Update Postman to the latest version (better if 10.12.2)
- Open your Postman folder (for example in Windows is <appdata>/Local/Postman)
- Enter the app-10.12.0 folder
- Enter the "resources" folder
- Open the terminal in this folder and execute "npx asar extract app.asar app" to extract the app.asar archive. Requires node
- Remove or rename the app.asar file to something else (es. _app.asar)
- Copy the contents of this repo "app" folder inside the "app" folder you just created by extracting

Launch Postman and you should have autosave enabled.

## This is not an official patch and it is given as-is. Will probably break after every Postman update!