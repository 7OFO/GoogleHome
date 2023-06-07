window.addEventListener('load', () => {
    const searchInput = document.querySelector('.search--input')
    const dropDownArea = document.querySelector('.dropdown--main')
    searchInput.addEventListener('click', () => {
        dropDownArea.classList.toggle('show')
    })

    const projectsSection = document.querySelector('.projects')
    const ptojectsList =
        [
            {
                id: 1,
                nome: 'Projeto Streaming NXPLAY LG/SAMSUNG',
                descricao: 'Projeto de streaming de filmes, séries e canais desenvolvidos para as plataformas LG e Samsung. Este foi meu primeiro projeto na empresa NXTV onde eu ainda não estava familiarizado com linguagens para web, até então só havia programado para desktop, foi um projeto onde consegui me destacar dentro da empresa e me tornar de fato um Front-End. Este projeto está disponível para milhares de pessoas.',
                techs: [
                    'HTML, ',
                    'CSS, ',
                    'Javascript, ',
                    'JQuery'
                ],
                link: 'https://br.lgappstv.com/main/tvapp/detail?appId=989662',
                media: [
                    './assets/Projects/LG/lg-1.jpg',
                    './assets/Projects/LG/lg-2.jpg',
                    './assets/Projects/LG/lg-3.jpg',
                    './assets/Projects/LG/lg-4.jpg',
                    './assets/Projects/LG/lg-5.jpg',
                    './assets/Projects/LG/lg-6.jpg',
                    './assets/Projects/LG/lg-7.jpg',
                    './assets/Projects/LG/lg-8.jpg',
                    './assets/Projects/LG/lg-9.jpg',
                ]
            },
            {
                id: 2,
                nome: 'Projeto Streaming NXKIDS WEB',
                descricao: 'Projeto de streaming de filmes, séries e canais infantíl, desenvolvidos para satisfazer a demanda de programação infantíl.',
                techs: [
                    'HTML, ',
                    'CSS, ',
                    'PHP',
                    'Laravel, ',
                    'JQuery, ',
                    'Javascript'
                ],
                link: 'https://nxkids.com.br/',
                media: [
                    './assets/Projects/WEB/k1.jpg',
                    './assets/Projects/WEB/k2.jpg',
                    './assets/Projects/WEB/k3.jpg',
                    './assets/Projects/WEB/k4.jpg',
                    './assets/Projects/WEB/k5.jpg',
                ]
            }
        ]

    ptojectsList.forEach(element => {
        const projectMain = document.createElement('div')
        projectMain.className = 'projMain'
        const projectMediaContainer = document.createElement('div')
        projectMediaContainer.className = 'projectMediaContainer'
        const projectInfo = document.createElement('div')
        projectInfo.className = 'projInfo'
        element.media.forEach(media => {
            const projectMedia = document.createElement('img')
            projectMedia.className = 'projMedia'
            projectMedia.src = media
            projectMediaContainer.append(projectMedia)
        });
        let pos = 0
            const interval = setInterval(() => {
                console.log(800 * element.media.length)
                pos >= 800 * element.media.length
                ? pos = 0
                : pos += 800
                projectMediaContainer.scrollTo({ left: pos, behavior: 'smooth' })
            }, 3000);

        const projectTitle = document.createElement('h2')
        projectTitle.className = 'projTitle'
        projectTitle.textContent = element.nome
        const projectDescription = document.createElement('p')
        projectDescription.className = 'projDescription'
        projectDescription.textContent = element.descricao
        const projectTech = document.createElement('p')
        projectTech.className = 'projTech'
        projectTech.textContent = 'Técnologias usadas : '
        element.techs.forEach(tech => {
            projectTech.textContent += tech
        });
        const projectLink = document.createElement('a')
        projectLink.className = 'projLink'
        projectLink.href = element.link
        projectLink.textContent = 'Acessar página'
        projectInfo.append(projectTitle)
        projectInfo.append(projectDescription)
        projectInfo.append(projectTech)
        projectInfo.append(projectLink)
        projectMain.append(projectInfo)
        projectMain.append(projectMediaContainer)
        projectsSection.append(projectMain)
    });

    const avt = document.querySelector('.avatar')
    avt.addEventListener('click',()=>{
        window.location.href = 'https://www.linkedin.com/in/fstofoli/'
    })


})