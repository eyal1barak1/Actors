
class ActorModel {
    constructor(first_name, last_name, birthday, image_link, imdb_link) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.birthday = birthday;
        this.image_link = image_link;
        this.imdb_link = imdb_link;
    }

    calculateAge() { // birthday is a date
        var ageDifMs = Date.now() - this.birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

}

export default ActorModel;