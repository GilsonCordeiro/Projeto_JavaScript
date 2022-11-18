/* Transformar notas escolares
    * 90 para cima -> A
    * 80 - 89 -> B
    * 70 - 79 -> C
    * 60 - 69 -> D
    * menor que 60 -> F
*/
let score = 45

function getScore(score) {
   
    let scoreA = score >= 90  && score <= 100
    let scoreB = score >= 80  && score <= 89
    let scoreC = score >= 70  && score <= 79
    let scoreD = score >= 60  && score <= 69
    let scoreF = score < 60 && score > 0

    let scoreFinal;


    if(scoreA){
        scoreFinal = "A"
    } else if(scoreB) {
        scoreFinal = "B"
    } else if(scoreC) {
        scoreFinal = "C"
    } else if(scoreD) {
        scoreFinal = "D"
    } else if(scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }
    // console.log(scoreFinal)
    return scoreFinal
}
console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(70))
console.log(getScore(76))
console.log(getScore(85))
console.log(getScore(90))
console.log(getScore(93))