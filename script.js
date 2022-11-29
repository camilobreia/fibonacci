function calcular(){
    let num = document.getElementById('numtxt') 
    let res = document.getElementById('res')
    if (num.value.length == 0){
        alert('Digite um valor corretamente')
    } else{
        let numberFibo = Number(num.value)
        fibo(numberFibo)    
    }
    function fibo(numberFibo){
        //res.innerHTML = `o numero é ${numberFibo}`
        let n1 = 0
        let n2 = 1 
        res.innerHTML = '1 \u{1F449}' //gambiarra para aparecer o primeiro número
        for (let c=1; c<numberFibo; c++){
            let n = n1 + n2
            n1 = n2
            n2 = n
            res.innerHTML += ` ${n} \u{1F449} `
        }
        res.innerHTML += ` \u{1F3C1} `
    }

}