const reviews = [

    {
        id: 1,
        name: "laura grassi",
        job: "front end pleno",
        img: 
        "https://p16-amd-va.tiktokcdn.com/tos-maliva-avt-0068/bbc4e8a48bc668c2dbb8065c6be23a67~c5_720x720.jpeg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo corrupti amet harum ab dolorem. Qui, molestiae magni quibusdam non quod voluptas temporibus reprehenderit earum, asperiores impedit accusantium. Cupiditate, est adipisci! "
    },

    {
        id: 2,
        name: "filipe dechamps",
        job: "programador & criador de conteúdo",
        img: 
        "https://media-exp1.licdn.com/dms/image/C5603AQGmr1EOhC1Gyw/profile-displayphoto-shrink_800_800/0/1613487379448?e=1666224000&v=beta&t=mrRAPB19wmrcCZ4rtJyKPssS5nfU97HFt59-4v2tz0M",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias optio eum placeat omnis labore beatae, voluptate et aliquid alias dicta ullam veniam quaerat in odio eveniet neque quos? Provident."
    },

    {
        id: 3,
        name: "thiago medeiros",
        job: "full stack & instrutor",
        img: 
        "https://media-exp1.licdn.com/dms/image/C4D03AQGvv1C3Mq403A/profile-displayphoto-shrink_800_800/0/1658185410905?e=1666224000&v=beta&t=OLd2CNYC2E3SGom-mu2ftNo24qrSkZfglO-aXzGG7Lo",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ipsam optio quaerat beatae sint at similique, voluptatum placeat culpa! Quo minima ratione nulla vero rem aut vitae voluptas distinctio obcaecati!"
    },

    {
        id: 4,
        name: "guilherme braga",
        job: "desenvolvedor de software full stack",
        img: 
        "https://media-exp1.licdn.com/dms/image/C4D03AQFx_DzorBOiyA/profile-displayphoto-shrink_800_800/0/1654209580109?e=1666224000&v=beta&t=V35eXyuhtN611HmE6FrvP6lKtezQV49sCT7Qa2RRJEE",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere dignissimos ut, excepturi neque commodi quae quia quisquam autem consequuntur quod voluptates expedita voluptatem minima. Ab vel nobis repudiandae atque quibusdam."
    },

    {
        id: 5,
        name: "dellean santos",
        job: "engenheiro front end & educador",
        img: 
        "https://media-exp1.licdn.com/dms/image/C4D03AQHFHLQjC_dxew/profile-displayphoto-shrink_800_800/0/1658622464981?e=1666224000&v=beta&t=og8BK1PmC7Uw895kClaEYqpsuP5Cit3AwDWv1lXZUgM",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui, tempora ad mollitia numquam non? Quasi, distinctio dicta blanditiis velit expedita voluptate sunt libero id a aut odit quibusdam fugit."
    },

    {
        id: 6,
        name: "rafaella ballerini",
        job: "desenvolvedora de software & criadora de conteudo",
        img: 
        "https://media-exp1.licdn.com/dms/image/C4D03AQE3T9SwW5oPGw/profile-displayphoto-shrink_800_800/0/1612878972645?e=1666224000&v=beta&t=enHXG5Qz00jjfMQAZxs_fZQUrWzIHY1m6PKyWQ3AyOQ",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia consequatur nobis maiores, voluptatum quibusdam omnis aliquam illum consequuntur nesciunt assumenda vero numquam error, totam fugiat blanditiis eligendi consectetur dolor dolores."
    },

]

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0

window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
})

// mostra a pessoa com base no item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// mostra a proxima pessoa
nextBtn.addEventListener('click', function () {
    currentItem++
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem)
})

// mostra a pessoa anterior
prevBtn.addEventListener('click', function () {
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})

// mostra pessoa aleatoria
randomBtn.addEventListener('click', function() {
    console.log('ent vc veio ver meu projeto!!! muito obg :)')

    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem)
})

