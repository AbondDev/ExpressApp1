
module.exports.renderHome = (req,res) => {
  res.render('home')
}

module.exports.renderNews = (req,res) => {
  res.render('news')
}

module.exports.renderServices = (req,res) => {
  res.render('services')
}

module.exports.renderAboutUs = (req,res) => {
  res.render('aboutUs')
}

module.exports.renderContactUsForm = (req, res) => {
  res.render('contactUs')
}

module.exports.sendContact = (req,res) => {
  console.log(req.body)
  res.redirect('/')
}
