import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
      this.filmsInTheaters = [{
        title: "Barbie",
        date: new Date(),
        price: 1459.40,
        poster: "https://media.vogue.mx/photos/649a07a3b57b9043d1e57cc6/1:1/w_1200,h_1200,c_limit/BAR-00238.jpg"
      },{
        title: "Moana",
        date: new Date(),
        price: 1459.40,
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg"
      },{
        title: "Spider-Man: No Way Home",
        date: new Date(),
        price: 1459.40,
        poster: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/3c82c67bdbb947b8ed57ee9f4c89531bfc755426839b8598c275c799591c1288._RI_V_TTW_.jpg"
      },{
        title: "Barbie",
        date: new Date(),
        price: 1459.40,
        poster: "https://media.vogue.mx/photos/649a07a3b57b9043d1e57cc6/1:1/w_1200,h_1200,c_limit/BAR-00238.jpg"
      },{
        title: "Moana",
        date: new Date(),
        price: 1459.40,
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg"
      },{
        title: "Spider-Man: No Way Home",
        date: new Date(),
        price: 1459.40,
        poster: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/3c82c67bdbb947b8ed57ee9f4c89531bfc755426839b8598c275c799591c1288._RI_V_TTW_.jpg"
      },{
        title: "Barbie",
        date: new Date(),
        price: 1459.40,
        poster: "https://media.vogue.mx/photos/649a07a3b57b9043d1e57cc6/1:1/w_1200,h_1200,c_limit/BAR-00238.jpg"
      },{
        title: "Moana",
        date: new Date(),
        price: 1459.40,
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg"
      },{
        title: "Spider-Man: No Way Home",
        date: new Date(),
        price: 1459.40,
        poster: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/3c82c67bdbb947b8ed57ee9f4c89531bfc755426839b8598c275c799591c1288._RI_V_TTW_.jpg"
      },{
        title: "Barbie",
        date: new Date(),
        price: 1459.40,
        poster: "https://media.vogue.mx/photos/649a07a3b57b9043d1e57cc6/1:1/w_1200,h_1200,c_limit/BAR-00238.jpg"
      },{
        title: "Moana",
        date: new Date(),
        price: 1459.40,
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg"
      },{
        title: "Spider-Man: No Way Home",
        date: new Date(),
        price: 1459.40,
        poster: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/3c82c67bdbb947b8ed57ee9f4c89531bfc755426839b8598c275c799591c1288._RI_V_TTW_.jpg"
      },]
  }

  filmsInTheaters;

  filmsUpcoming = [{
    title: "Avengers: EndGame",
    date: new Date(),
    price: 1459.40,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg"
  },{
    title: "Tangled",
    date: new Date(),
    price: 1459.40,
    poster: "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_FMjpg_UX1000_.jpg"
  },{
    title: "Fast And Furious 9",
    date: new Date(),
    price: 1459.40,
    poster: "https://es.web.img2.acsta.net/pictures/20/01/31/13/54/0249203.jpg"
  },{
    title: "Frozen II",
    date: new Date(),
    price: 1459.40,
    poster: "https://lumiere-a.akamaihd.net/v1/images/p_frozen2_19644_4c4b423d.jpeg"
  },{
    title: "Avengers: EndGame",
    date: new Date(),
    price: 1459.40,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg"
  },{
    title: "Tangled",
    date: new Date(),
    price: 1459.40,
    poster: "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_FMjpg_UX1000_.jpg"
  },{
    title: "Fast And Furious 9",
    date: new Date(),
    price: 1459.40,
    poster: "https://es.web.img2.acsta.net/pictures/20/01/31/13/54/0249203.jpg"
  },{
    title: "Frozen II",
    date: new Date(),
    price: 1459.40,
    poster: "https://lumiere-a.akamaihd.net/v1/images/p_frozen2_19644_4c4b423d.jpeg"
  },{
    title: "Avengers: EndGame",
    date: new Date(),
    price: 1459.40,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg"
  },{
    title: "Tangled",
    date: new Date(),
    price: 1459.40,
    poster: "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_FMjpg_UX1000_.jpg"
  },{
    title: "Fast And Furious 9",
    date: new Date(),
    price: 1459.40,
    poster: "https://es.web.img2.acsta.net/pictures/20/01/31/13/54/0249203.jpg"
  },{
    title: "Frozen II",
    date: new Date(),
    price: 1459.40,
    poster: "https://lumiere-a.akamaihd.net/v1/images/p_frozen2_19644_4c4b423d.jpeg"
  },{
    title: "Avengers: EndGame",
    date: new Date(),
    price: 1459.40,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg"
  },{
    title: "Tangled",
    date: new Date(),
    price: 1459.40,
    poster: "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_FMjpg_UX1000_.jpg"
  },{
    title: "Fast And Furious 9",
    date: new Date(),
    price: 1459.40,
    poster: "https://es.web.img2.acsta.net/pictures/20/01/31/13/54/0249203.jpg"
  },{
    title: "Frozen II",
    date: new Date(),
    price: 1459.40,
    poster: "https://lumiere-a.akamaihd.net/v1/images/p_frozen2_19644_4c4b423d.jpeg"
  },]
}
