class OTPHelper {
    getOTP() {
        return cy.request('https://receive-smss.com/sms/' + Cypress.config('mobileNumber') + '/')
            .then(html => {
                const htmlString = html.body.match(/.*Happy Dropboxing!.*/);
                const boldText = htmlString[0].match(/<b>(.*?)<\/b>/);
                return boldText[0].match(/\d+/)[0];
            });
    }
}

export default new OTPHelper();
