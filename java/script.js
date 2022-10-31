let inputTouched = {
    email: false,
    senha: false
}

const entradaemail = document.getElementById("entradaemail")
const entradasenha = document.getElementById("entradasenha")
const inputWrapperEmail = document.getElementById("input-wrapper-email")
const inputWrapperPassword = document.getElementById("input-wrapper-password")
const avisoemail = document.getElementById("avisoemail")
const avisosenha = document.getElementById("avisosenha")

const inputOnBlur = (ev) =>{
    if(inputTouched.email){
        if(!validateEmail(entradaemail.value) && !validatePhone(entradaemail.value)){
            avisoemail.style.display="block"
            entradaemail.style.borderBottom='2px solid #e87c03'
        }
        else{
            avisoemail.style.display="none"
            entradaemail.style.borderBottom="none"
        }
    }
    if(inputTouched.senha){
        if(!(entradasenha.value.length >= 4 && entradasenha.value.length <= 60)){
            avisosenha.style.display="block"
            entradasenha.style.borderBottom='2px solid #e87c03'
        }
        else{
            avisosenha.style.display="none"
            entradasenha.style.borderBottom="none"
        }
    }
}

const inputOnFocus = (ev) =>{
    inputTouched[ev.name] = true;
}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validatePhone = email => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(email).toLowerCase());
}