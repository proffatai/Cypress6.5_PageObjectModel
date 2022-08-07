// let's import the class
import {LoginPage} from "../Pageobject/classDeclaration"  // .. was an alternative to navigate to cypress then integration. 
// we could have use this: import {LoginPage} from 'cypress/integration/Pageobject/classDeclaration'

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