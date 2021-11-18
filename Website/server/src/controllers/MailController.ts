import { BodyParams, Res } from '@tsed/common';
import { Controller } from '@tsed/di';
import { Post } from '@tsed/schema';
import nodemailer from 'nodemailer';

@Controller('/mail')
export class HelloWorldController {
  @Post('/')
  ContactEmail(
    @BodyParams() data: { email: string; subject: string; content: string },
    @Res() res: Res
  ) {
    const { email, subject, content } = data;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'megaaqely@gmail.com',
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        accessToken: process.env.GOOGLE_ACCESS_TOKEN,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });
    let mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: subject,
      generateTextFromHTML: true,
      html: `<div>
        ${content}
      </div>`,
    };
    transporter.sendMail(mailOptions, (err, res) => {
      if (!err) {
      } else {
        console.log(err);
      }
    });
    res.send('done');
  }
}
