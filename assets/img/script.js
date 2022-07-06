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
createActionItem("assets\img\actions\animewoman.jpg","Anime Woman","R$300,00")
createActionItem("assets\img\actions\dragonballpersonagem.jpg","Dragon Ball","R$200,00")
createActionItem("assets\img\actions\starwarspersonagem.jpg", "Personagem Star Wars", "R$250,00")
console.log(listFigure)
createPaintingItem("assets\img\painting\clock.jpg","Clock","R$100,00")
createPaintingItem("assets\img\painting\gamepad.jpg","Game Pad","R$150,00")
createPaintingItem("assets\img\painting\personagem.jpg","Personagem", "R$150,00")
console.log(listPainting)