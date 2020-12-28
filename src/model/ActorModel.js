
class ActorModel {
    constructor(first_name, last_name, birthday, image_link, imdb_link) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.birthday = birthday;
        this.image_link = image_link;
        this.imdb_link = imdb_link;
    }

    calculateAge() { // birthday is a date
        var today = new Date();
        var birthDate = new Date(this.birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        return age;
    }

}

export default ActorModel;