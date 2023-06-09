// const expenseSchema = new mongoose.schema({
//     category: {
//         type: String,
//         minlength: 1,
//         maxlength: 40,
//         required: true,
//     },

//     name: {
//         type: String,
//         minlength: 1,
//         maxlength: 40,
//     },

//     amount: {
//         type: Number,
//         min: 0,
//         max: 1000000,
//         required: true
//     },

//     date: {
//         type: String,
//         immutable: true,
//         required: true,
//     },

//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     }

// });


export const Data1 = [
    {
        id: 1,
        category: "Transportas",
        name: null,
        amount: 15,
        date: "2015-05-12"
    },
    {
        id: 2,
        category: "Transportas",
        name: null,
        amount: 35,
        date: "2015-05-12"
    },
    {
        id: 3,
        category: "Laisvalaikis",
        name: "atrakcionai",
        amount: 25,
        date: "2015-05-12"
    },
    {
        id: 4,
        category: "Laisvalaikis",
        name: "ledas",
        amount: 50,
        date: "2015-05-12"
    },
    {
        id: 5,
        category: "Maistas",
        name: "Iki",
        amount: 100,
        date: "2015-05-12"
    },
    {
        id: 5,
        category: "Maistas",
        name: "Lidl",
        amount: 75,
        date: "2015-05-12"
    },
    {
        id: 6,
        category: "Transportas",
        name: null,
        amount: 15,
        date: "2015-07-12"
    },
    {
        id: 7,
        category: "Transportas",
        name: null,
        amount: 35,
        date: "2015-07-12"
    },
    {
        id: 8,
        category: "Laisvalaikis",
        name: "atrakcionai",
        amount: 25,
        date: "2015-07-12"
    },
    {
        id: 9,
        category: "Laisvalaikis",
        name: "ledas",
        amount: 50,
        date: "2015-07-12"
    },
    {
        id: 10,
        category: "Maistas",
        name: "Iki",
        amount: 100,
        date: "2015-07-12"
    },
    {
        id: 11,
        category: "Maistas",
        name: "Lidl",
        amount: 75,
        date: "2015-07-12"
    }





];

const Data2 = [
    {
        name: "paskola",
        amount: 500,
        date: "2015-07-15"
    },
    {

        name: "darbas",
        amount: 1000,
        date: "2015-07-15"
    },
    {

        name: "arbatpinigiai",
        amount: 20,
        date: "2015-07-15"
    },
    {

        name: "biznis",
        amount: 100,
        date: "2015-07-15"
    },
    {

        name: "gatve",
        amount: 500,
        date: "2015-07-15"
    }
];

const budgetData = [
    {
        name: "Transportas",
        color: "Sviesiai Rozine",
        amount: 800
    },
    {
        name: "Maistas ir gerimai",
        color: "Zalia",
        amount: 600
    },
    {
        name: "Pramogos",
        color: "Oranzine",
        amount: 700
    }
];