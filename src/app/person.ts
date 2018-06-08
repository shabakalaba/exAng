export class Person {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    /* // TS won't like this, will create an error in the people service.
    getAge(): number {
        let today: Date = new Date();
        let age: number = today.getFullYear() - this.dateOfBirth.getFullYear();

        if(today.getMonth() > this.dateOfBirth.getMonth() && today.getDate() > this.dateOfBirth.getDate()){
            age--;
        } 
        return age;
    }
    */
}
