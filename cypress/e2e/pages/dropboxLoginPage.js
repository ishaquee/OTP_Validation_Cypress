class DropboxLoginPage {
    visit() {
        cy.visit('https://www.dropbox.com/login');
    }

    getEmailInput() {
        return cy.get('[name="susi_email"]', { timeout: 10000 });
    }

    getPasswordInput() {
        return cy.get('[name="login_password"]', { timeout: 10000 });
    }

    getCodeInput() {
        return cy.get('[name="code"]', { timeout: 10000 });
    }

    submitEmail(email) {
        this.getEmailInput().should('be.visible').type(email + '{enter}');
    }

    submitPassword(password) {
        this.getPasswordInput().should('be.visible').type(password + '{enter}');
    }

    submitCode(code) {
        this.getCodeInput().should('be.visible').type(code + '{enter}');
    }

    verifyURL(url) {
        cy.url().should('eq', url);
    }
}

export default new DropboxLoginPage();
