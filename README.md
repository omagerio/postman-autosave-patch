# postman-autosave-patch
Postman autosave patch for Postman 10.12.x

This is a brutal patch for adding Autosave functionality in Postman 10.12.x.
See here for why this is needed: https://github.com/postmanlabs/postman-app-support/issues/8195

## How to install
- Update Postman to the latest version (better if 10.12.4)
- Open your Postman folder (for example in Windows is <appdata>/Local/Postman)
- Enter the app-10.12.0 folder
- Enter the "resources" folder
- Open the terminal in this folder and execute "npx asar extract app.asar app" to extract the app.asar archive (requires node)
- Rename the app.asar file to something else (es. app_old.asar)
- Copy the contents of this repo "app" folder inside the "app" folder you just created by extracting

Launch Postman and you should have autosave enabled.

## This is not an official patch and it is given as-is. Will probably break after every Postman update

Tested on Windows with version 10.12.4

## Known issues
- Breaks the "new request" button in the tabs panel. Please use the "add request" menu in the left sidebar to create a new request