import nodemailer from 'nodemailer';

export async function sendMail(formdata){
    'use server'
    const {SMTP_PASSWORD, SMTP_EMAIL} = process.env;

    const transport = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user : SMTP_EMAIL,
            pass : SMTP_PASSWORD
        }
    })

    try{
        const testResult = await transport.verify();
        console.log(testResult)}
    catch(error){
        console.log(error)
        return
    }

    let mailOptions = {
        from: formdata.get('to'),
        to: SMTP_EMAIL,
        subject: `${formdata.get('name')} quiere cominicarse contigo`,
        text: formdata.get('body')
      };

    try{
        const sendResult = await transport.sendMail(mailOptions)
    } catch(error){
        console.log(error)
    }


}