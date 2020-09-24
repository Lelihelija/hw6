import React, {Component} from "react";
import Post from './post.js'
import './styles.css';

import img1 from './img/1.jpg'
import bokutoPhoto from './img/bokuto.jpg'
import img2 from './img/2.jpg';
import kurooPhoto from './img/kurooLogo.png';
import kageyamaPhoto from './img/kageyamaLogo.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg'

import CommentsIcon from '../images/chat.svg';
import SharesIcon from '../images/reload.svg';
import LikesIcon from '../images/heart.svg';
import DownloadsIcon from '../images/download.svg';


const authors = [
    {
      name: "Бокуто Васильович",
      photo: bokutoPhoto,
      nickname: "@superowl2000@owl.com",
      id:1,
      content: {
        text: 'Оп, кроссовер.',
      },
      image: {
        src: img1,
      },
      date: {
        day: '1 вересня',
      },
      comments: {
        src: CommentsIcon,
        quantity: 22,
      },
      shares: {
        src: SharesIcon,
        quantity: 22,
      },
      likes: {
        src: LikesIcon,
        quantity: 22,
      },
      downloads: {
        src: DownloadsIcon,
        quantity: 22,
      },
    },
    {
      name: "Куро Іванович",
      photo: kurooPhoto,
      nickname: "@kuroneko@nyan.com",
      id:1,
      content: {
        text: 'І в мене є няшна картинка!',
      },
      image: {
        src: img2,
      },
      date: {
        day: '2 вересня',
      },
      comments: {
        src: CommentsIcon,
        quantity: 22,
      },
      shares: {
        src: SharesIcon,
        quantity: 22,
      },
      likes: {
        src: LikesIcon,
        quantity: 22,
      },
      downloads: {
        src: DownloadsIcon,
        quantity: 22,
      },
    },
    {
      name: "Кагеяма Панасович",
      photo: kageyamaPhoto,
      nickname: "@bestsetterever@king.com",
      id:1,
      content: {
        text: 'ООО!!',
      },
      image: {
        src: img3,
      },
      date: {
        day: '3 вересня',
      },
      comments: {
        src: CommentsIcon,
        quantity: 22,
      },
      shares: {
        src: SharesIcon,
        quantity: 22,
      },
      likes: {
        src: LikesIcon,
        quantity: 22,
      },
      downloads: {
        src: DownloadsIcon,
        quantity: 22,
      },
    },
    {
      name: "Кагеяма Панасович",
      photo: kageyamaPhoto,
      nickname: "@bestsetterever@king.com",
      id:1,
      content: {
        text: 'Напишіть мені, можу скинути ще цілу пачку таких картинок!',
      },
      image: {
        src: img4,
      },
      date: {
        day: '3 вересня',
      },
      comments: {
        src: CommentsIcon,
        quantity: 22,
      },
      shares: {
        src: SharesIcon,
        quantity: 22,
      },
      likes: {
        src: LikesIcon,
        quantity: 22,
      },
      downloads: {
        src: DownloadsIcon,
        quantity: 22,
      },
    },
];

export default class Posts extends Component {
    

    render() {
        return (
            <div className="posts-wrapper">
            { authors.map((author, index) => <Post key={index} {...author}/>)}
            </div>
        ) 
    }
}; 