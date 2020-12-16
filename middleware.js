const sanitize = require('sanitize-html');
const sanitizerSettings = {
  allowedTags: [],
  allowedAttributes: {}
}
module.exports.cleanBody = (req, res, next) => {

  for (element in req.body.contact) {
    req.body.contact[element] = sanitize(req.body.contact[element],sanitizerSettings)
  }
  next();
};
