# Setup
* npm install
* npm install -g webpack

Add your keys at the top of the app.js file.

# Build
Change into the root of this directory and run webpack

# Duplicating the Issue
Serve index.html and the dist folder and make sure CORS is enabled for your
host.

1. Login once which completes successfully.
2. Refresh the page and click login again.
3. Look in the console and you will see the "Uncaught type error".