var images =
["Familia.jpg","crianca.jpg", "Mãe.jpg", "pai.jpg","avo.jpg","vo.jpg"];

var nomes =
["Álbum de Família","Criança", "Mãe", "Pai", "Vô", "Vó"];

var i=0;
function update()
{
    i++;
    var numbersOfFamilyMemberInArray = 5
    if (i>numbersOfFamilyMemberInArray)
{
    i = 0;
}
var updatedImage = imagem[i];
var updatedNames = nomes[i];
document.getElementById("familiaImagem").src = updatedImage;
document.getElementsByName("familiaNome").innerHTML = updatedNames;
}