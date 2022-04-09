const https = require("https");
const { Unpackr } = require("msgpackr");

// https://stackoverflow.com/a/21961005
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const optionsBig = {
  hostname: "localhost",
  port: 9292,
  path: "/big",
  method: "GET",
};

const optionsMini = {
  hostname: "localhost",
  port: 9292,
  path: "/mini",
  method: "GET",
};

function getter(url, idx) {
  https.get(url, function (response) {
    const unpacker = new Unpackr();
    const content = [];

    response.on("data", function (chunk) {
      content.push(...chunk);
    });

    response.on("end", function () {
      // all data has been downloaded
      const data = Uint8Array.from(content);
      let objs = unpacker.unpack(data);

      console.log(
        `${objs.length} objects received - each object has ${objs[0].size} keys`
      );
      console.log(Array.from(objs[0].keys()));
      // objs[0].get('actor') // how you navigate through the object's content
      console.log("-----------------------------" + ` ${idx + 1}`);
    });
  });
}

const range = (elems) => {
  return [...Array(elems).keys()];
};

range(5).forEach((i) => {
  getter(optionsBig, i);
});

range(10).forEach((i) => {
  getter(optionsMini, i);
});
