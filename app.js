let pronombre = ['the', 'our'];
let adjetivo = ['great', 'big',];
let sustantivo = ['jogger', 'racoon'];
let extension = ['.com', '.es', '.cl'];

function generadordominio(arr1, arr2, arr3, arr4){
      let newdominio = [];
    for (let a = 0; a < arr1.length; a++){
        for (let b = 0; b < arr2.length; b++){
            for (let c = 0; c < arr3.length; c++){
                for (let d = 0; d < arr4.length; d++){
                newdominio = arr1[a] + arr2[b] + arr3[c] + arr4[d]+"";
                console.log(newdominio)
                }
            }
        }
    }
}
generadordominio(pronombre,adjetivo,sustantivo,extension)
