import { mailerTransport } from '../core/nodeMailer/nodeMailer';

interface SendMailProps  {
        emailFrom: string,
        emailTo:string
        subject: string,
        html: any,
}
export const sendEmail= async ({emailTo, subject, emailFrom, html }:SendMailProps) => {
    try {
        let sendingInfo = await mailerTransport.sendMail(
            {
                from: emailFrom, 
                to: emailTo,
                subject: subject,
                html: html
            }
        )
       console.log(sendingInfo) 

} catch (error) {
      console.log(error)  
}
}