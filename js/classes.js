export class Game {
    constructor(title, image, genre, rating, description){
        this.title = title;
        this.image = image;
        this.genre = genre;
        this.rating = rating;
        this.description = description;
    }
}

export class Account {
    constructor(firstName, lastName, email, username, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

export class Post{
    constructor(title, body){
        this.title = title;
        this.body = body;
    }
}