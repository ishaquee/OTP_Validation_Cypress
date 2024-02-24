import DropboxLoginPage from '../pages/dropboxLoginPage';
import OTPHelper from '../Helpers/otpHelper';

describe('Login to Dropbox website using 2FA OTP verification', () => {
    beforeEach(() => {
        DropboxLoginPage.visit();
        cy.wait(5000);
    });

    it('should login to Dropbox account with OTP verification', () => {
        const { username, password } = Cypress.config();

        DropboxLoginPage.submitEmail(username);
        cy.wait(2000);
        DropboxLoginPage.submitPassword(password);
        cy.wait(10000);

        OTPHelper.getOTP().then(otp => {
            DropboxLoginPage.submitCode(otp);
        });

        cy.wait(5000);
        DropboxLoginPage.verifyURL('https://www.dropbox.com/home');
    });
});
