// import {combineReducers, createStore} from "redux";
import React from 'react';

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
import store from '../store';



// let postReducer = (store = initialStore, action) => {
//     // const newStore = store;
//     switch(action.type){
//         case "ADD_POST": {
//             return {
//                 posts: {
//                     create: action.create
//                 }
//             }
//             // newStore.data.test = action.payload.test;
//         }
//         case "INCREMENT_QUANTITY": {
//             // newStore.authors = {...action.element};
//             // return newStore.element + 1;           
//         }
//         case "DECREMENT_QUANTITY": {
//             //     newStore.rights = {...action.rights};
//             //     return newStore.element + 1;
//         }
//     }
//     // if(action.type === "ADD_POST"){
//         // newStore.data.test = action.payload.test;
//     // }
//     // if(action.type === "INCREMENT_QUANTITY") {
//     //     newStore.authors = {...action.element};
//     //     return newStore.element + 1;
//     // }
//     // if(action.type === "DECREMENT_QUANTITY") {
//     //     newStore.rights = {...action.rights};
//     //     return newStore.element + 1;
//     // }
//     default: {
//         return newStore;
//     }
// };




export default postReducer;