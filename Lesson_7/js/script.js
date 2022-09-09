const animations = [
    'pulse',
    'tada',
    'jello',
    'bounce',
    'swing',
    'flash',
    'rubberBand',
    'hinge',
    'backInDown', 
    'backOutDown',
    'fadeIn',
    'fadeOut',
    'flip',
    'lightSpeedInRight',
    'rotateIn',
    'zoomIn',
]

const tags = document.body.querySelectorAll('div, p, img')
const btns = document.querySelectorAll('btn')

function randomColor() {
    return `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
}

function clickHandler (event) {
    event.stopPropagation()

    event.target.parentNode.style = `
            background-color: ${randomColor()};
        `

    event.target.style = `
        width: 300px;
        height: 300px;
        border: solid 2px #000;
        border-radius: 4px;
        text-align: center
        animation: bounce;
        margin: 50px 100px 100px 0;
        transition: 0.6s all;
    `

    let ind = animations
    .filter(animation => event.target.classList
        .contains(animation))
            .join('')

    event.target.classList.remove(ind)
    event.target.classList.add(animations[Math.round(
        Math.random() * (animations.length - 1))])

    event.target.innerText = `I'm ${event.target.tagName}`
}

function mouseEnterHandler (event) {
    event.target.style = `
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: #000;
        text-align: center;
        color: #fff;
        margin: 50px;
        transition: 0.6s all;
    `
}

function mouseLeaveHandler (event) {
    event.target.style = `
        width: 100px;
        height: 100px;
        border-radius: 25%;
        background: #000;
        text-align: center;
        color: #fff;
        margin: 50px;
        transition: 0.6s all;
    `

    event.target.innerText = `Touch me`
}

tags.forEach((tag, index) => {
    tag.classList.add(animations[Math.round(
        Math.random() * (animations.length - 1)
    )])

    tag.addEventListener('mouseover', mouseEnterHandler)
    tag.addEventListener('mouseleave', mouseLeaveHandler)
    tag.addEventListener('click', clickHandler)
})

//EX1

const createElem = (tagName, container = document.body) => {
    return container.appendChild(document.createElement(tagName))
}

const links = [
    `https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg`,
    'https://i.ytimg.com/vi/VFAjnCLeygI/maxresdefault.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
    'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg',
    'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg'
]

const elem = Object.assign(createElem('p'), {
    style: `
        box-sizing: border-box;
        width: 50px;
        height: 50px;
        background-color: #ddd;
        color: #fff;
        border: solid 2px #000;
        border-radius: 16px;
        text-align: center;
        margin: 20px
    `,
    innerText: `I'm P`
})

elem.onclick = function (event) {
    const img = Object.assign(createElem('img'), {
        style: `
            width: 100px;
            height: 100px;
            transition: 1s all;
        `,
        src: `${links[Math.round(Math.random() * (links.length - 1))]}`,
        onmouseover: function (event) {
            event.target.style.width = `200px`
            event.target.style.height = `200px`
        },
        onclick: function (event) {
            event.target.parentNode.removeChild(event.target)
        },
        onmouseleave: function (event) {
            event.target.style.width = `100px`
            event.target.style.height = `100px`
        }
    })
}

//EX 2

// var collection = ["first", "second", "third", "fourth"]

// function over ( event ) {
//     event.target.style['background-color'] = `#ffff0050`
// }
// function out ( event ) {
//     event.target.style['background-color'] = `#ff00ff50`
// }
// function clickHandler ( event ) {
//     event.target.parentNode.removeChild(event.target)
// }

// let container = document.body

// collection.forEach (
//     function ( tag, index, arr  ) {
//         container = container
//             .appendChild(document.createElement('div'))

//         container.style = `
//             transition: 1s all;
//             background-color: #ff00ff50;
//             border: dotted 1px yellow;
//             padding: 50px;
//         `

//         container.title = tag

//         container.onclick = function (event) {
//             event.target.remove()
//         }
//         container.onmouseover = function (event) {
//             event.target.style['background-color'] = `#ffff0050`
//             console.log()
//         }
//         container.onmouseout = function (event) {
//             event.target.style['background-color'] = `#ff00ff50`
//         }
//     }
// )

//EX3

var collection = [1, 2, 3, 4, 5, 6, 7]

function unwrap (parent) {
    
    const fragment = document.createDocumentFragment();
    
    while (parent.firstChild) {
        const child = parent.removeChild(parent.firstChild);
        fragment.appendChild(child);
    }

    // parent.parentNode.replaceChild(fragment, parent);
    parent.parentNode.appendChild(fragment)
}

let container = document.body

collection.forEach (
    function ( tag, index, arr  ) {
        container = container
            .appendChild(document.createElement('div'))

        container.style = `
            transition: 1s all;
            background-color: #ff00ff50;
            border: dotted 1px yellow;
            padding: 50px;
        `

        container.title = tag

        container.onclick = function (event) {
            unwrap(event.target)
            event.target.parentNode.removeChild(event.target)
        }
        container.onmouseenter = function (event) {
            event.target.style['background-color'] = `#ffff0050`
            console.log()
        }
        container.onmouseleave = function (event) {
            event.target.style['background-color'] = `#ff00ff50`
        }
    }
)