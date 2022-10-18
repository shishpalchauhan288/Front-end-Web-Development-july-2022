class PersonalDetails {
    uname;
    umail;
    uid;
    printPersonalDetails(){
        console.log(this.uname, this.uemail, this.uid);
    }
}


class AddressDetails extends PersonalDetails {
    ucity;
    ustate;
    ucountry;

    printDetails(){
        this.printPersonalDetails();
        console.log(this.ucity, this.ustate, this.ucountry);
    }
}