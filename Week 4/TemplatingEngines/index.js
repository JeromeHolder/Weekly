const express = require('express'),
      app = express(); //call express like a fn to createa  new server and store that server in the variable 'app'

app.set('view engine', 'ejs'); //Tells express: "Anytime someone tries to render, use EJS"


app.get('/shoppers/:username', (req, res) => {
    console.log('dynamic route was hit');
    console.log(req.params);
    res.send("you hit the dynamic route");
})

// let renderContext = {
//     username: 'lazerwolf',
//     shoppingPhilosophy: 'I just believe that if you like it, you should buy it.',
//     media: {
//         image: 'https://images.pexels.com/photos/879415/pexels-photo-879415.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
//     },
//     spendingLimit = 1000
// };
// let randy = {
//     username: 'rando',
//     shoppingPhilosophy: 'That is gonna be a no for me, dawg',

// }
app.get('/profile', (req, res) => {
    let lazerwolf = {
        username: 'lazerwolf',
        shoppingPhilosophy: 'I just believe that if you like it, you should buy it.',
        spendingLimit: 1000,
        role: 'customer'
    }
    let randy = {
        username: 'rando',
        shoppingPhilosophy: 'That is gonna be a no for me, dawg',
        spendingLimit: 10,
        role: 'admin'
    }
    res.render('shopping-profile', lazerwolf);
});

app.get('/friends', (req, res) => {
    let dataContext = {
        friends: [
            {
                username: 'lazerwolf',
                spendingLimit: 1000,
            },
            {
                username: 'phil',
                spendingLimit: 10,
            },
            {
                username: 'kim',
                spendingLimit: 25000
            }
        ]
    }
    res.render('friendsList', dataContext)
});

app.listen(8080, () => {console.log('The Server listening on 8080\nPress CTRL + C to stop server.')});