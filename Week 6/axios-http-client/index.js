const axios = require('axios');

let baseUrl = 'https://ian-beer-api.herokuapp.com/beers'

// axios.get(baseUrl)
//      .then(result => {
//         console.log(result.data);
//      })
//      .catch(error => {
//          console.log(error);
//      })

// let newBeer = {
//     name: "Fetal Position",
//     price: 3333.33
// };

// axios.post(baseUrl, newBeer)
//      .then(result => {
//         console.log(result.data);
//      })
//      .catch(error => {
//          console.log(error);
//      })

// let idToUpdate = "d500f36b-e611-6c7c-2cf6-033cd4bd020d";
// let updateUrl = baseUrl + '/' + idToUpdate;
// let updateData = {name: "brainsmashin.io", price: 4999.99};
// axios.put(updateUrl, updateData)
//       .then(result => {
//           console.log(result.data);
//       })
//       .catch(error => {
//           console.log(error);
//       })

// let idToDelete = "8e31eaa3-664d-86dd-082a-9f6960d6317e";
// let deleteUrl = baseUrl + '/' + idToDelete;
// axios.delete(deleteUrl)
//      .then(result => {
//          console.log(result.data);
//      })
//      .catch(error => {
//          console.log(error);
//      })

let idToGet = "d500f36b-e611-6c7c-2cf6-033cd4bd020d";
let urlToGet = baseUrl + '/' + idToGet;
axios.get(urlToGet)
     .then(result => {
         console.log(result.data);
     })
     .catch(err => {
         console.log(err);
     })