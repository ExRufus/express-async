module.exports = {
    index: async(req, res, next) => {
        const data = {
            title: "Hello World",
            subTitle: "Welcome to the world :*"
        };
        const articles = [{
            title: "Artikel 1",
            author: "Luffy",
            content: " One Piece",
            publish: true
        },
        {
            title: "Artikel 2",
            author: "Naruto",
            content: " Naruto",
            publish: true
        },
        {
            title: "Artikel 3",
            author: "Goku",
            content: " Dragon Ball Z",
            publish: true
        }
        ];
        res.render('index', {
            page: data,
            articles: articles
        })
    },
    detail: async(req, res,next) => {
        const page = {
            title: "Artikel1"
        }
        const articles = [{
            title: "Artikel 1",
            author: "Luffy",
            content: " One Piece",
            publish: false
        },
        {
            title: "Artikel 2",
            author: "Naruto",
            content: " Naruto",
            publish: true
        },
        {
            title: "Artikel 3",
            author: "Goku",
            content: " Dragon Ball Z",
            publish: true
        }
        ];
        const article = {
            title: "One Piece",
            author: "Eichiro Oda",
            content: " Adventure ",
            publish: true
        };
        res.render('detail-article.ejs', {
            article,
            page,
            articles 
        })
    }
}