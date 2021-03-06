/* global exports */
/* global process */
"use strict";

// module Benchotron.StdIO

exports.stdoutWrite = function (str) {
  return function () {
    process.stdout.write(str);
  };
};

exports.stderrWrite = function (str) {
  return function () {
    process.stderr.write(str);
  };
};

exports.closeInterface = function (i) {
  return function() {
    i.close();
  };
};
