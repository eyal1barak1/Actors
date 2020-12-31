
class ActorModel {
    constructor(first_nameOrObject, last_name, birthday, image_link, imdb_link) {
        if (typeof first_nameOrObject === 'object') {
            this.first_name = first_nameOrObject.first_name;
            this.last_name = first_nameOrObject.last_name;
            this.birthday = first_nameOrObject.birthday;
            this.image_link = first_nameOrObject.image_link;
            this.imdb_link = first_nameOrObject.imdb_link;
        } else {
            this.first_name = first_nameOrObject;
            this.last_name = last_name;
            this.birthday = birthday;
            this.image_link = image_link;
            this.imdb_link = imdb_link;
        }
    }

    calculateAge() { // birthday is a date
        var today = new Date();
        var birthDate = new Date(this.birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        return age;
    }

}

export default ActorModel;