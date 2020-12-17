const Email = require('../nodemailer')
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

module.exports.sendContact = async (req,res) => {
  console.log(req.body)
  const email = new Email(req.body.contact)
  await email.generateTestEmailAccountWithTransporter()
  await email.sendTestEmail()
  return res.redirect('/')
}
