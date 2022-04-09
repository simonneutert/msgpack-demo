# MsgPack Demo Application

This is a simple demo showing off a [MsgPack](https://msgpack.org) implementation using Ruby as an emitter of objects and JavaScript/NodeJS consuming the content served.

### Roadmap

- [ ] consumer example in the browser ⏳

## Content

### Emitter

- Ruby 💎
  - with [Roda](https://github.com/jeremyevans/roda) as Web-Framework
  - [Falcon](https://github.com/socketry/falcon) as the server

### Consumer-Backend

- JavaScript/NodeJS 🟢
  - plain Vanilla 🍦

## Get started!

**Terminal 1** *emitter*

`$ bundle install`  
`$ bundle exec falcon serve --count 10`

**Terminal 2** *consumer-backend*

`$ npm install`  
`$ node index.js` or run a debugger (like VS Code)

## Credits

JSON Example file is taken from:

https://github.com/json-iterator/test-data/blob/master/large-file.json
