import Page from "./page";

class PracticeForm extends Page{

    get header(){
        return  $('.main-header');
    }

    get fname(){ return $('#firstName')}
    get lname(){ return $('#lastName')}
    get gender(){return $$('[name="gender"]')}
    get email(){return $('#userEmail')}
    get mobNo(){return $('[placeholder="Mobile Number"]')}
    get sub(){return $('input#subjectsInput')}
    get hobby(){return $$('.custom-checkbox .custom-control-label')}
    get btnsub(){return $('[type="submit"]')}
    get confirmatiom_msg(){return $('.modal-title')}

        async selectGender(gen:string) {
            for(let i=0;i<await this.gender.length;i++){
                const getAtt= await this.gender[i].getAttribute('value');
                if(getAtt===gen){
                  await (await this.gender[i]).doubleClick();
                  break;
                }
              }
            
        }

        async selectHobiee(hobbie:string) {
            for (let index = 0; index < await this.hobby.length; index++) {
                if(await this.hobby[index].getText()===hobbie){
                  await this.hobby[index].click();
                }
              }
        }

        async setName(fName:string, lName:string) {
          await this.fname.setValue(fName);
          await this.lname.setValue(lName);
        }
        async setEmail(email:string) {
          await this.email.setValue(email);
        }
        async setMobile(mob:string) {
          await this.mobNo.setValue(mob);
        }
        async setSubject(sub:string) {
          await this.sub.setValue(sub);
        }


}
export default new PracticeForm()