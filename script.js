function js_add_rows(){
    let valor = document.getElementById("txtNumRows").value
    number = parseInt(valor)

   if(isNaN(number)){
        alert("Apenas valores numéricos são válidos.")
    }

    else if(number >= 1 && number <= 10){
        let table = document.getElementById("sampleTable");

        for (let i = 0; i < number; i++){
            let qtdlinhas = table.rows.length;
        let linha = table.insertRow(qtdlinhas)
        let cell1 = linha.insertCell(0)
        let cell2 = linha.insertCell(1)

        cell1.innerHTML = `Row${qtdlinhas} Cell1` 
        cell2.innerHTML = `Row${qtdlinhas} Cell2`
      }
    }

    else if(number < 1 || number > 10) {
        alert("Os valores válidos são apenas entre 1 e 10.")
    }
}