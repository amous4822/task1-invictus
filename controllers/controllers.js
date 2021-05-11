const chrs = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const l = chrs.length;

function int_to_cust(i) {
  var result = "";
  // console.log(i)
  while (i) {
    result = chrs[i % BigInt(l)] + result;
    i = i / BigInt(l);
  }
  if (!result) result = chrs[0];

  return result;
}

function cust_to_int(s) {
  result = BigInt(0);

  for (var i = 0; i != s.length; i++) {
    result = result * BigInt(l) + BigInt(chrs.indexOf(s[i]));
  }
  return result.toString(36);
}

function convert(str) {
  const base = 36;
  const res = [...str].reduce(
    (acc, curr) => BigInt(parseInt(curr, base)) + BigInt(base) * acc,
    0n
  );
  return res;
}

const encoder = (req, res, next) => {
  const encoded = int_to_cust(convert(req.body.stringToEncode));
  res.status(200).json({
    encoded
  });
};

const decoder = (req, res, next) => {
    const decoded = cust_to_int(req.body.stringToDecode);
    res.status(200).json({
      decoded
    });
  };


module.exports.encoder = encoder;
module.exports.decoder = decoder;
