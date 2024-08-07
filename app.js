window.addEventListener('load', async () => {
    const searchInput = document.querySelector('.search--input')
    const dropDownArea = document.querySelector('.dropdown--main')
    searchInput.addEventListener('click', () => {
        dropDownArea.classList.toggle('show')
    })

   const projectsList = await fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });

    const projectsSection = document.querySelector('.projects')
    const ptojectsList = projectsList["projectsList"]


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
            projectMedia.setAttribute('loading', 'lazy')
            projectMediaContainer.append(projectMedia)
        });
        let pos = 0
        const interval = setInterval(() => {
            console.log(800 * element.media.length)
            pos >= 800 * element.media.length
                ? pos = 0
                : pos += 800
            projectMediaContainer.scrollTo({ left: pos, behavior: 'smooth' })
        }, 20000 / (element.media.length));

        const projectTitle = document.createElement('h2')
        projectTitle.className = 'projTitle'
        projectTitle.textContent = element.nome
        const projectDescription = document.createElement('p')
        projectDescription.className = 'projDescription'
        projectDescription.textContent = element.descricao
        const projectTech = document.createElement('p')
        projectTech.className = 'projTech'
        projectTech.textContent = 'Tecnologias usadas : '
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
    avt.addEventListener('click', () => {
        window.location.href = 'https://www.linkedin.com/in/fstofoli/'
    })
})