const nodemailer = require('nodemailer');
class Email {
  constructor(contact) {
    this.contact = contact
    this.transporter = {}
    // this.html = generateMessageHTML()
    // this.innerText = generateMessageInnerText()
  }

  generateMessageInnerText() {
    const {
      name,
      email,
      phone,
      date,
      notes
    } = this.contact;
    return `Contact Request from: ${name} | Email: ${email} | Phone: ${phone} | date: ${date}. Message: ${notes}`;
  }
  generateMessageHTML() {
    const {
      name,
      email,
      phone,
      date,
      notes
    } = this.contact;
    return `<h1>Contact Request from: ${name}</h1> <h2>Email:</h2> ${email}  <h2>Phone:</h2> ${phone}  <h2>date:</h2> ${date} <p> Message: ${notes}</p>`
  }
  async generateTestEmailAccountWithTransporter() {
    const testAccount = await nodemailer.createTestAccount();
    this.transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      }
    });
    console.log(this)
  }
  async sendTestEmail() {
    await this.transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: generateMessageInnerText(), //this.innerText, // plain text body
      html: this.generateMessageHTML()// this.html // html body
    }).then(info => {
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }).catch(err => {
      console.log("Error sending email")
      console.log(err)
    });
  }

}
module.exports = Email
