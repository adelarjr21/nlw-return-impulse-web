import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "ec120cc8713762",
		pass: "0d588726578fdc"
	}
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData){
		await transport.sendMail({
				from: 'Equipe Feedget <oi@feedget.com>',
				to: 'Adelar G de Souza Jr <adelarjr.s@gmail.com>',
				subject,
				html: body
			})
	}
}