/// <refrence types="cypress" />
export class LoginPage  //we had to use the export keyword before the class Name because we need to export the class to the login.js file
{   

    // Css attribute for the login
     useName= '#uname';
     pssd='#pwd';
     btn='[type="submit"]';
     cntk='[href="contact.html"]'
     scCode='.footer > :nth-child(3) > a'
     // we created methods for each action and I created a class attr for the css of each component (username field, password field, submit button)
    
     //we are getting the argument from the login.js file and we need to specify the datatype of the variable via varName: datatypeName. 
     navigate(url: string)
    {
        cy.visit(url)
    }
    enterUsername(username: string){
        cy.get(this.useName).type(username) 
    }
    enterPassword(password: string){
        cy.get(this.pssd).type(password)  
    }
    clickSubmit(){
        cy.get(this.btn).click()
    }

    //Let's visit the contact page so we can get see the source code
    contact(){
        cy.get(this.cntk).click()
    }

    openSourceCode(){
        cy.get(this.scCode).click()
    }
}