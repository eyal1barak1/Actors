
class MovieModel {
    constructor(movie_nameOrObject, Length_in_minutes, Poster, Director, Main_stars) {
        if (typeof movie_nameOrObject === 'object') {
            this.Movie_name = movie_nameOrObject.Movie_name;
            this.Length_in_minutes = movie_nameOrObject.Length_in_minutes;
            this.Poster = movie_nameOrObject.Poster;
            this.Director = movie_nameOrObject.Director;
            this.Main_stars = movie_nameOrObject.Main_stars;
        } else {
            this.Movie_name = movie_nameOrObject;
            this.Length_in_minutes = Length_in_minutes;
            this.Poster = Poster;
            this.Director = Director;
            this.Main_stars = Main_stars;
        }
    }
}

export default MovieModel;