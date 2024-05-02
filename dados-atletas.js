class Atleta {
  constructor(nome, idade, peso, altura, notas){
  this.nome = nome
  this.idade = idade
  this.peso = peso
  this.altura = altura
  this.notas = notas
}
calculaCategoria(){
  if(this.idade >= 9 && this.idade <= 11){
  return "Infantil"
  
  }
  else if(this.idade >= 12 && this.idade <= 13){
    return "Juvenil"
  }
  else if(this.idade >= 14 && this.idade <= 15){
    return "Intermediário"
  }
  else if(this.idade >= 16 && this.idade <= 30){
    return "Adulto"
  }
  else{
    return "Sem Categoria"
  }
}
calculaIMC(){
  let quadrado = this.altura * this.altura 
  return this.peso / quadrado
}
calculaMediaValida(atleta){
    let notas = atleta.notas.sort(function(a,b){
      if (a > b){
        return 1
      } else if (a < b){
        return -1
      } else{
        return 0 
      }
    });
    console.log(notas);
    let notasMeio = notas.slice(1,4);
    console.log(notasMeio);
    let soma = notasMeio.reduce(function(total, atual){
        return total + atual;
    });
    let media = soma / notasMeio.length;
    return media;
}

obtemNomeAtleta(){
  return this.nome
}
obtemIdadeAtleta(){
  return this.idade
}
obtemPesoAtleta(){
  return this.peso
}
obtemNotasAtleta(){
  return this.notas
}
obtemCategoria(){
  return this.calculaCategoria()
}
obtemIMC(){
  return this.calculaIMC()
}
obtemMediaValida(){
  return this.calculaMediaValida
}
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
