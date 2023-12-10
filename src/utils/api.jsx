import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nc-marketplace-sem-4.onrender.com',
  });

//   <XXXXXXXXXXXX>
//    TO update to front end project, use marketplace as placeholder
//     </XXXXXXXXXXXX>

export const getUsers = () => {
    // return api.get(`/api/users`).then((response) => {
    //   return response.data;
    // });

    // BEnd returns array of user objects
    // [
    //     {
    //       "username": "tickle122",
    //       "name": "Tom Tickle",
    //       "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
    //     },
    //     {
    //       "username": "grumpy19",
    //       "name": "Paul Grump",
    //       "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
    //     }
    // ]

    // hard code data for now, till link to back end 
    // should be able to display these 2 and select one to setUserContext in Users.jsx
    const data = [
        {
          "username": "tickle122",
          "name": "Tom Tickle",
          "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
        },
        {
          "username": "grumpy19",
          "name": "Paul Grump",
          "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
        }
    ]
    return data
  };