const data = [
    {
        id: 1,
        img: './assets/img/mern.png',
        main_content: 'Mern Full Stack Development Classroom',
        description: 'his is the content of Card 1',
    },
    {
        id: 2,
        img: './assets/img/mern.png',
        main_content: 'Mern Full Stack Development Classroom',
        description: 'his is the content of Card 1',
    },
    {
        id: 3,
        img: './assets/img/mern.png',
        main_content: 'Mern Full Stack Development Classroom',
        description: 'his is the content of Card 1',
    },
    {
        id: 4,
        img: './assets/img/mern.png',
        main_content: 'Mern Full Stack Development Classroom',
        description: 'his is the content of Card 1',
    },
]

const itemPerPage = 4
let currentPage = 1

function displayData() {
    const start = (currentPage -1) * itemPerPage
    const end = start + itemPerPage
    const paginatedData = data.slice(start, end)

    const container = document.querySelector('.container')
    container.innerHTML = ''

    paginatedData.forEach(item => {
        const listItem = document.createElement('div')
        listItem.classList.add('list-items')

        const img = document.createElement('img')
        img.classList.add('img-item')
        img.src = item.img

        const content = document.createElement('div')
        content.classList.add('content')

        const mainContent = document.createElement('p')
        mainContent.classList.add('main-content')
        mainContent.textContent = item.main_content

        const description = document.createElement('p')
        description.classList.add('description')
        description.textContent = item.description

        content.appendChild(mainContent)
        content.appendChild(description)

        listItem.appendChild(img)
        listItem.appendChild(content)

        container.appendChild(listItem)
    }) 
}

displayData()