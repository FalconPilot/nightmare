/*
MIT License

Copyright (c) 2023 funkywork

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

function isPromise (x) {
  return Boolean(x  && typeof x.then === 'function');
}

joo_global_object.CAMLPromise = function (value) {
  this.enrolled = value;
};

jsoo_global_object.CAMLPromiseUnwrap = function (potentialBox) {
  if (potentialBox instanceof WrappedPromise) {
    return potentialBox.enrolled;
  } else return potentialBox;
};

jsoo_global_object.CAMLPromiseWrap = function (value) {
  if(isPromise(value)) {
    return new CAMLPromise(value);
  } else return value;
};

jsoo_global_object.CAMLpromiseMake = function (handler) {
  var wrappedHandler = function(resolve, reject) {
    var enrolled = function(x) {
      resolve(joo_global_object.CAMLPromiseWrap(x));
    };
    handler(enrolled, reject);
  };
  return new Promise(wrappedHandler);
};

jsoo_global_object.CAMLPromiseThen = function(p, handler) {
  var wrappedHandler = function(value) {
    try {
      return handler(jsoo_global_object.CAMLPromiseUnwrap(value));
    } catch (err) {
      console.error(err);
      return new Promise(function() {});
    }
  };
  return p.then(wrappedHandler);
};

jsoo_global_object.CAMLPromiseResolve = function(p) {
  return Promise.resolve(jsoo_global_object.CAMLPromiseWrap(p));
};

jsoo_global_object.CAMLCatch = function() {
  var wrappedHandler = function(errorValue) {
    try {
      return handler(errorValue);
    } catch (err) {
      console.error(err);
      return new Promise(function() {});
    }
  };
  return p.catch(wrappedHandler);
};