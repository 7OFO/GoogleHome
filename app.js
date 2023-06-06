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
                descricao: 'Projeto de streaming de filmes, séries e canais desenvolvidos para as plataformas LG e Samsung. Este foi meu primeiro projeto e está disponível para milhares de pessoas.',
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
                ]
            },
            {
                id: 2,
                nome: 'Projeto Streaming NXKIDS LG/SAMSUNG',
                descricao: 'Projeto de streaming de filmes, séries e canais infantíl, desenvolvidos para as plataformas LG e Samsung.',
                techs: [
                    'HTML, ',
                    'CSS, ',
                    'Javascript, ',
                    'JQuery'
                ],
                link: '#',
                media: [
                    './assets/Projects/LG/lg-kids-1.jpg',
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
        element.techs.forEach(tech => {
            projectTech.textContent += tech
        });
        projectInfo.append(projectTitle)
        projectInfo.append(projectDescription)
        projectInfo.append(projectTech)
        projectMain.append(projectInfo)
        projectMain.append(projectMediaContainer)
        projectsSection.append(projectMain)
    });


})