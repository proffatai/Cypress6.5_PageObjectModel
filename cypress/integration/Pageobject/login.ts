// let's import the class
import{LoginPage} from '../Pageobject/classDeclaration'
 // Alternative to line 2:import {LoginPage} from 'C:/Users/Ibrahim F A/Desktop/Cypress6.5_PageObjectModel/cypress/integration/Pageobject/classDeclaration'

let obj = new LoginPage() //creating an object of the class
it('login test', ()=>{

    let website='https://trytestingthis.netlify.app/';
    let username='test';
    let password ='test';

   obj.navigate(website);
   obj.enterUsername(username);
   obj.enterPassword(password);
   obj.clickSubmit();
   obj.contact();
   obj.openSourceCode();
})