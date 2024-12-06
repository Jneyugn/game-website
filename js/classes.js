export class Game {
    constructor(title, image, genre, rating, description){
        this.title = title;
        this.image = image;
        this.genre = genre;
        this.rating = rating;
        this.description = description;
    }

    posts = [];

    createPost(post){
        this.posts.push(post);
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
    constructor(username, editable, body){
        this.username = username
        this.editable = editable;
        this.body = body;
    }
}