/* Celsius em fahrenheit

C = (F - 32) * 5/9
F = C * 9/5 + 32 
*/

// transformDegree('50F')
function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // Fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
     throw new Error("Grau nao indentificado")   
    }
    
    // Fluxo ideal F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32)* 5/9
    let degreeSign = 'C'

    //Fluxo alternativo
    if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
   
       }

    return formula(updateDegree) + degreeSign
    
}
try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}