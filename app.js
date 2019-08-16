new Vue({
    el: '#monstros',
    data: {
        hp_jogador: 0,
        hp_monstro: 0,
        turno_numero: 0,
        em_jogo: false,
        log_list: [],
        hp_jogador_p: '',
        hp_monstro_p: '',
        jogador_cor: 'greenyellow',
        monstro_cor: 'greenyellow'
    },
    created() {
        this.hp_jogador = 100;
        this.hp_monstro = 100;
    },
    methods: {
        ataqueNormal(){
            let jogador_hit = Math.floor(Math.random() * 5) + 1;
            let monstro_hit = Math.floor(Math.random() * 10) + 1;
            this.hp_jogador -= monstro_hit;
            this.hp_monstro -= jogador_hit;
            this.turno_numero++;
            let jogada_jogador = {
                turno: this.turno_numero,
                from: true,
                msg: "O jogador atinge o monstro com " + jogador_hit + " de dano!"
            }
            let jogada_monstro = {
                turno: this.turno_numero,
                from: false,
                msg: "O monstro atinge o jogador com " + monstro_hit + " de dano!"
            }
            this.log_list.push(jogada_jogador, jogada_monstro);
            this.fimTurno();
        },
        ataqueEspecial(){
            let jogador_hit = Math.floor(Math.random() * 10) + 1;
            let monstro_hit = Math.floor(Math.random() * 5) + 1;
            this.hp_jogador -= monstro_hit;
            this.hp_monstro -= jogador_hit;
            this.turno_numero++;
            let jogada_jogador = {
                turno: this.turno_numero,
                from: true,
                msg: "O jogador atinge o monstro com " + jogador_hit + " de dano!"
            }
            let jogada_monstro = {
                turno: this.turno_numero,
                from: false,
                msg: "O monstro atinge o jogador com " + monstro_hit + " de dano!"
            }
            this.log_list.push(jogada_jogador, jogada_monstro);
            this.fimTurno();
        },
        curar() {
            let jogador_hit = Math.floor(Math.random() * 10) + 1;
            let monstro_hit = Math.floor(Math.random() * 5) + 1;
            this.hp_jogador += jogador_hit;
            this.hp_jogador -= monstro_hit;
            this.turno_numero++;
            let jogada_jogador = {
                turno: this.turno_numero,
                from: true,
                msg: "O jogador se recupera em " + jogador_hit + " de dano!"
            }
            let jogada_monstro = {
                turno: this.turno_numero,
                from: false,
                msg: "O monstro atinge o jogador com " + monstro_hit + " de dano!"
            }
            this.log_list.push(jogada_jogador, jogada_monstro);
            this.fimTurno();
        },
        iniciarJogo() {
            this.hp_jogador = 100;
            this.hp_monstro = 100;
            this.em_jogo = true;
            this.log_list = [];
            this.turno_numero = 0;
        },
        pararJogo() {
            this.log_list = [];
            this.hp_jogador = 100;
            this.hp_monstro = 100;
            this.em_jogo = false;
            this.hp_jogador++;
            this.hp_monstro++;
            this.turno_numero = 0;
        },
        fimTurno(){
            if (this.hp_jogador <= 0) {
                alert("Game over! Você perdeu!");
                this.pararJogo();
            } else if (this.hp_monstro <= 0) {
                alert("Parabéns, você venceu!");
                this.pararJogo();
            }
        }
    },
    watch: {
        hp_jogador() {
            this.hp_jogador_p = this.hp_jogador + '%';
            if (this.hp_jogador >= 100) {
                this.hp_jogador = 100;
                this.jogador_cor = 'greenyellow';
            }
            else if (this.hp_jogador <= 20) {
                this.jogador_cor = 'red';
            } else {
                this.jogador_cor = 'greenyellow';
            }
        },
        hp_monstro() {
            this.hp_monstro_p = this.hp_monstro + '%';
            if (this.hp_monstro >= 100) {
                this.hp_monstro = 100;
                this.monstro_cor = 'greenyellow';
            }
            else if (this.hp_monstro <= 20) {
                this.monstro_cor = 'red';
            } else {
                this.monstro_cor = 'greenyellow';
            }
        }
    }
})