"use strict";

var path = require("path");

module.exports = {
  entry:     "./app.js", output: {
    path: __dirname + "/dist", filename: "bundle.js"
  }, module: {
    loaders: [{
      test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
    },
      {
        test: /.js/,
        include: path.join(__dirname, 'node_modules/auth0-lock'),
        loaders: ['transform?packageify', 'transform?brfs']
      },
      {
        test: /.ejs/,
        include: path.join(__dirname, 'node_modules/auth0-lock/'),
        loader: 'transform?ejsify'
      },{
        test: /.json/,
        include: path.join(__dirname, 'node_modules/auth0-lock/i18n/ru.json'),
        loader: 'json'
      },{
        test: /.json$/,
        exclude: /ru/,
        include: path.join(__dirname, 'node_modules/auth0-lock'),
        loader: 'json5'
      }
    ]
  }
};