function ehDataValida(dia, mes, ano) {
    
    if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {return false;}
    if (dia <= 0 || mes <= 0 || ano <= 0) {return false;}
    
    if (mes > 12) {return false;}

    if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {return dia <= 30;}
     else if (mes === 2)
        {if ((ano % 400 === 0) || (ano % 100 !== 0 && ano % 4 === 0)) {return dia <= 29;}
            else {return dia <= 28;}} 
             else {return dia <= 31;}
}
