import { ADD_POST } from "./types";

import img1 from '../posts/img/1.jpg'
import bokutoPhoto from '../posts/img/bokuto.jpg'
import img2 from '../posts/img/2.jpg';
import kurooPhoto from '../posts/img/kurooLogo.png';
import kageyamaPhoto from '../posts/img/kageyamaLogo.jpg';
import img3 from '../posts/img/3.jpg';
import img4 from '../posts/img/4.jpg'

let initialAuthorState = {
  name: "",
  photo: bokutoPhoto,
  nickname: "@example.com",
  id:1,
  content: {
    text: '',
  },
  image: {
    src: '',
  },
  date: {
    day: '-',
  },
  comments: {
    quantity: 0,
  },
  shares: {
    quantity: 0,
  },
  likes: {
    quantity: 0,
  },
  downloads: {
    quantity: 0,
  },
};

let initialState = {
    authors: [
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
            quantity: 22,
          },
          shares: {
            quantity: 22,
          },
          likes: {
            quantity: 22,
          },
          downloads: {
            quantity: 22,
          },
        },
        {
          name: "Куро Іванович",
          photo: kurooPhoto,
          nickname: "@kuroneko@nyan.com",
          id:2,
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
            quantity: 22,
          },
          shares: {
            quantity: 22,
          },
          likes: {
            quantity: 22,
          },
          downloads: {
            quantity: 22,
          },
        },
        {
          name: "Кагеяма Панасович",
          photo: kageyamaPhoto,
          nickname: "@bestsetterever@king.com",
          id:3,
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
            quantity: 22,
          },
          shares: {
            quantity: 22,
          },
          likes: {
            quantity: 22,
          },
          downloads: {
            quantity: 22,
          },
        },
        {
          name: "Кагеяма Панасович",
          photo: kageyamaPhoto,
          nickname: "@bestsetterever@king.com",
          id:4,
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
            quantity: 22,
          },
          shares: {
            quantity: 22,
          },
          likes: {
            quantity: 22,
          },
          downloads: {
            quantity: 22,
          },
        },
    ],
    
}

export const addPostReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
          return {
            ...state,
            authors: [
              {
                ...initialAuthorState,
                name: action.payload.name,
                content: {
                  ...initialAuthorState.content,
                  ...action.payload.content
                },
                image: {
                  ...initialAuthorState.image,
                  ...action.payload.image
                }
              },
              ...state.authors
            ]
          }
    }
    return state;
}
