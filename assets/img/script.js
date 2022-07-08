let item = {}

let listFigure = [];
let listPainting = [];

function createActionItem(imagem,nome,valor){
   
    let resultado = {
        imagem: imagem,
        nome: nome,
        valor: valor,
    }
    return listFigure.push(resultado)
}

function createPaintingItem(imagem,nome,valor){
    
    let resultado = {
        imagem: imagem,
        nome: nome,
        valor: valor,
    }
    return listPainting.push(resultado)
}
createActionItem("./assets/img/actions/animewoman.jpg","Anime Woman","R$300,00")
createActionItem("./assets/img/actions/dragonballpersonagem.jpg","Dragon Ball","R$200,00")
createActionItem("./assets/img/actions/starwarspersonagem.jpg", "Personagem Star Wars", "R$250,00")
console.log(listFigure)
createPaintingItem("./assets/img/painting/clock.jpg","Clock","R$100,00")
createPaintingItem("./assets/img/painting/gamepad.jpg","Game Pad","R$150,00")
createPaintingItem("./assets/img/painting/personagem.jpg","Personagem", "R$150,00")
console.log(listPainting)

let secaoFigure   = document.getElementById("listFigure")
let secaoPainting = document.getElementById("listPaints")
console.log(secaoFigure)
function addProdutosFigure(arrProdutos){
    
    for(let i = 0; i < arrProdutos.length; i++){
        
        let produtoListado = arrProdutos[i]
        let card           = criandoCardProduto(produtoListado)
        console.log(card)
        secaoFigure.appendChild(card)
    }
}
function addProdutosPaints(arrProdutos){
    
    for(let i = 0; i < arrProdutos.length; i++){
        
        let produtoListado = arrProdutos[i]
        let card           = criandoCardProduto(produtoListado)
        console.log(card)
        secaoPainting.appendChild(card)
    }
}

function criandoCardProduto(produto){
    let nome    = produto.nome
    let preco   = produto.valor.replace(/[^0-9 ,]/g,'')
    let imagem  = produto.imagem

    let tagLi    = document.createElement("li")
    let tagImge  = document.createElement("img")
    let tagNome  = document.createElement("p")
    let tagPreco = document.createElement("p")

    tagImge.src         = imagem
    tagImge.alt         = nome
    tagNome.innerText   = nome
    tagPreco.innerText  = `R$${preco}`

    tagLi.appendChild(tagImge)
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)

    return tagLi
}
addProdutosFigure(listFigure)
addProdutosPaints(listPainting)