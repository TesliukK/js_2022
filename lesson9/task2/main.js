
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];



for (const cours of coursesArray) {

    //General block--------------------------------------------------------
    let container = document.createElement('div')
    container.classList.add('cont')
    document.body.appendChild(container)

    //First block----------------------------------------------------------
    let contOfTitle = document.createElement('div')
    contOfTitle.classList.add('contOfTitle')

    let title = document.createElement('div')
    title.classList.add('titleBlock')

    let h1 = document.createElement('h1')
    h1.innerText = `${cours.title}`
    title.append(h1)
    contOfTitle.append(title)

    //Second block-------------------------------------------------------
    let monthDurationBlock = document.createElement('div')
    monthDurationBlock.classList.add('monthDurationBlock')

    //monthDuration block-----------------------------------------------
    let monthDuration = document.createElement('div')
    monthDuration.classList.add('monthDuration')

    let h2monthDuration = document.createElement('h2')
    h2monthDuration.classList.add('h2monthDuration')
    h2monthDuration.innerText = `Month Duration`

    let pmonthDuration = document.createElement('p')
    pmonthDuration.innerText = `${cours.monthDuration} month`
    monthDuration.appendChild(h2monthDuration)
    h2monthDuration.append(pmonthDuration)

    //hourDuration block-----------------------------------------------------
    let hourDuration = document.createElement('div')
    hourDuration.classList.add('hourDuration')

    let h2hourDuration = document.createElement('h2')
    h2hourDuration.classList.add('h2hourDuration')
    h2hourDuration.innerText = `Hour Duration`

    let phourDuration = document.createElement('p')
    phourDuration.innerText = `${cours.hourDuration} hour`
    hourDuration.appendChild(h2hourDuration)
    h2hourDuration.append(phourDuration)

    monthDurationBlock.append(monthDuration,hourDuration)

//    ulBlock-------------------------------------------------------------------
    let ulContainer = document.createElement('div')
    ulContainer.classList.add('ulContainer')
let ulBlock = document.createElement('div')
    ulBlock.classList.add('ulBlock')

    let ul = document.createElement('ul')
    for (let i = 0; i < 3; i++) {
        let li = document.createElement('div')
        li.classList.add('li')
        li.innerText = `${cours.modules[i]}`
        ul.append(li)
    }

    for (let i = 3; i < cours.modules.length; i++) {
        let li2 = document.createElement('li')
        li2.innerText = `${cours.modules[i]}`
        ul.append(li2)
    }

    ulContainer.appendChild(ulBlock)
    ulBlock.appendChild(ul)
    container.append(contOfTitle,monthDurationBlock, ulContainer)
}









