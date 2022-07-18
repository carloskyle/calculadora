function calcular(n1, n2){

    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value

    selector = document.getElementById("selector").value

    switch(selector){
        case '+':
             calculo = parseInt(n1) + parseInt(n2)
             document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`
             break

         case '-':
             calculo = parseInt(n1) - parseInt(n2)
             document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} - ${n2} é = ${calculo}`
             break

        case '/':
            calculo = parseInt(n1) / parseInt(n2)
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} / ${n2} é = ${calculo}`
            break

        case '*':
            calculo = parseInt(n1) * parseInt(n2)
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} x ${n2} é = ${calculo}`
            break
            
             }
}
