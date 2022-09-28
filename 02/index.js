const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado === true) {
            console.log("Este carro já está ligado")
        } else {
            this.ligado = true

        }
        // const ligar = this.ligado === true ? "Este carro já está ligado" : this.ligado = true;
        // console.log(ligar);
    },
    desligar: function () {
        if (this.ligado === false) {
            console.log("Este carro já esta Desligado.");
        } else {
            this.ligado = false;
            this.velocidade = 0;
        }
    },
    acelerar: function () {
        if (this.ligado === false) {
            console.log("Não é possível acelerar um carro desligado");
        } else {
            this.velocidade += 10;

        }
        // const acelera = this.ligado === false ? "Não é possível acelerar um carro desligado" : this.velocidade = 10;
        // console.log(acelera);
    },
    desacelerar: function () {
        if (this.ligado === false) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            this.velocidade -= 10;
        }
        //const freiar = this.ligado === false ? "Não é possível desacelerar um carro desligado." : this.velocidade -= 10;
    },
    status: function () {
        const status = this.ligado === false ? "Desligado" : "Ligado"
        console.log(`Carro ${status}. Velocidade: ${this.velocidade}.`);
    }
}

// carro.status();
// console.log(carro.desligar());
carro.desligar();
carro.status();
carro.ligar();
carro.status();
carro.ligar();
carro.status();
carro.acelerar();
carro.status();
carro.acelerar();
carro.status();
carro.desacelerar();
carro.status();
carro.desligar();
carro.status();
carro.acelerar();
carro.desacelerar();