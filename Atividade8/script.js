let contador = 0; 
       let array = []; 
       function onClick() { 
         let idade = document.getElementById("idade").value; 
         let genero = document.getElementById("genero").value; 
         let opiniao = document.getElementById("opiniao").value; 
         let respostas = { 
           idade: parseInt(idade), 
           genero: genero, 
           opiniao: parseInt(opiniao) 
         }; 
  
         array.push(respostas); 
  
         console.log(idade); 
         alert("Obrigado por enviar a sua opinião"); 
         contador += 1; 
  
         if (contador === 45) { 
             console.log("chegou aqui") 
           results(); 
         } 
       } 
       function results() { 
         calcMedia(); 
         maisVelha(); 
         maisNova(); 
         contPessimo(); 
         porcentBomRuim(); 
         respostasGenero(); 
       } 
  
       function calcMedia(){ 
           let idadeSum = 0; 
           array.map((e) => { 
             idadeSum += e.idade; 
           }) 
           let avg = idadeSum/array.length; 
          
         alert("A media da idade dos participantes foi " + avg);
       } 
  
       function maisVelha() { 
           let olderidade =  array.map((e) => e.idade).sort()[array.length - 1] 
           alert("A pessoa mais velha tem " + olderidade + " anos"); 
       } 
  
       function maisNova(){ 
         let neweridade =  array.map((e) => e.idade).sort()[0] 
           alert("A pessoa mais nova tem " + neweridade + " anos"); 
       } 
  
       function contPessimo(){ 
           let badopiniaoscontadoridade = 0; 
           array.forEach((e) => { 
               if(e.opiniao == 1){ 
                 badopiniaoscontadoridade += 1; 
               } 
           }); 
  
           alert(badopiniaoscontadoridade + " pessoas responderam péssimo" ) 
       } 
  
       function porcentBomRuim(){ 
         let goodAndGreatrespostas = 0;   
          
         array.forEach(e => { 
             if(e.opiniao == 3 || e.opiniao == 4){ 
                 goodAndGreatrespostas += 1; 
             } 
           }); 
           let percentidade = (goodAndGreatrespostas * 100)/array.length  
  
           alert(percentidade.toFixed(2) + "%" + " equivale ao percentual de respostas ótimas e boas");
       } 
  
       function respostasGenero(){ 
           let respostascontador = array.length; 
           alert(respostascontador + " homems e mulheres responderam a pesquisa");
       } 