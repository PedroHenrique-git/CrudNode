import validator from 'validator';

export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }
    init(){
        this.events();
    }
    events(){
        if(!this.form){
            return;
        }else{
            this.form.addEventListener('submit', e =>{
                e.preventDefault();
                this.validate(e);
            });
        }
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const telefoneInput = el.querySelector('input[name="telefone"]'); 


        let error = false;

        if(!validator.isEmail(emailInput.value)){
            alert('Email inválido');
            error = true;
        }

        if(nomeInput.value.length < 10 || nomeInput.value.length > 50){
            alert('O nome precisa ter entre 10 e 50 caracteres');
            error = true;
        }

        if(sobrenomeInput.value.length < 10 || sobrenomeInput.value.length > 50){
            alert('O sobrenome precisa ter entre 10 e 50 caracteres');
            error = true;
        }

        if(telefoneInput.value.length < 10){
            alert('O telefone precisa 10 caracteres');
            error = true;
        }

        if(!error) el.submit();
    }
}