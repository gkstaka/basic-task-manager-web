regexAtSign = /\@/;
regexDot = /\./;
function changeEmail() {
    let emailTag = document.getElementById("email");
    newEmailValue = window.prompt("Coloque o novo e-mail").trim();
    if (newEmailValue.length > 0 && regexAtSign.test(newEmailValue) && regexDot.test(newEmailValue)) {
        emailTag.innerText = newEmailValue;
    } else {
        alert("E-mail inválido");
    }
}

// Regex for password: must contain at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character

regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\.\?]).{8,}$/;

// Password is defined as 1A2b3$4C
function changePassword() {
    // Passwords shouldn't be saved here, duh
    let password = "1A2b3$4C";

    // Ideally it would be a input field with a password in a new page address
    passwordCheck = window.prompt("Digite a senha atual: ").trim();
    if (passwordCheck === password) {
        while (true) { 
            newPassword = window.prompt("Digite a nova senha: ").trim();
            if (regexPassword.test(newPassword)) {
                password = newPassword;
                alert("Senha alterada com sucesso!");
                break;
            } else {
                alert("A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caracter especial");
            }
        }
    }
    else {
        alert("Senha incorreta")
    }

}
