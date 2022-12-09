// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let block = document.createElement('div')
block.innerText = 'qweasdzxc'
block.classList.add('wrap', 'collapse', 'alpha', 'beta')
block.style.background = 'grey'
block.style.color = 'white'
block.style.fontSize = '30px'
block.style.margin = '10px'
document.body.append(block)
document.body.append(block.cloneNode(true))

