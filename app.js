
let userName = "";
let userPassword = "";
let userAmount = "";



function getUsers() {
    let user = document.getElementById("user-list");
    let pass = document.getElementById("exampleInputPassword1");

    if (user != "Choose a user:") {
        for (var i = 0; i <= users.length - 1; i++) {
            if (user.value == users[i].name && pass.value == users[i].password) {
                userName = users[i].name;
                userPassword = users[i].password;
                userAmount = parseInt(users[i].balance);

                password.style.display = "none";
                parrafo.style.display = "none";
                button1.style.display = "none";
                optionsList.style.display = "none";
                hidePassword.style.display = "none";
                welcomuser.innerText = "Welcome   " + user.value;

                setTimeout(function () {

                    welcomuser.style.display = "none";
                    idConsult.style.display = "block";
                    idGetCash.style.display = "block";
                    idDeposit.style.display = "block";
                    idbackToOptions.style.display = "none";
                    idCloseLogin.style.display = "block";

                }, 1000)
            }
            else if (pass != users[i].password) {
                parrafo.style.color = "red";
                parrafo.innerText = "The user or password is incorrect. Try again"
            }
        }
    }
    else {
        console.log("ingresa usuario/contraseña")
        parrafo.style.color = "red";
        parrafo.innerText = "The user or password is incorrect. Try again"
    }

}

function fConsult() {
    parrafo.style.display = "block";
    parrafo.innerText = `Tu saldo actual es: ${userAmount}`;

    idConsult.style.display = "none";
    idGetCash.style.display = "none";
    idDeposit.style.display = "none";
    idbackToOptions.style.display = "block";
    idInsert.style.display = "none";
    idCloseLogin.style.display = "none";
}
function fOptions() {
    idConsult.style.display = "block";
    idGetCash.style.display = "block";
    idDeposit.style.display = "block";
    parrafo.style.display = "none";
    idbackToOptions.style.display = "none";
    idInsert.style.display = "none";
    idConfirm.style.display = "none";
    idDepositar.style.display = "none";
    idCloseLogin.style.display = "block";
}
function fGetCash() {
    idInsert.style.display = "block";
    idConsult.style.display = "none";
    idGetCash.style.display = "none";
    idDeposit.style.display = "none";

    parrafo.style.display = "block";
    parrafo.innerText = `Ingresa monto a retirar`;
    idbackToOptions.style.display = "block";
    idConfirm.style.display = "block";
    idCloseLogin.style.display = "none";
}

function fSusbtractmount() {
    userAmount = parseInt(userAmount) - parseInt(ingresarCantidad.value);
    if (userAmount >= 10 && userAmount <= 990) {

        parrafo.style.display = "block";
        parrafo.innerText = `Tu saldo actual es: ${userAmount}`;
    }
    else {
        if (userAmount < 10) {
            userAmount = parseInt(userAmount) + parseInt(ingresarCantidad.value);
            parrafo.style.display = "block";
            parrafo.innerText = `Operación invalida, no puedes tener menos de 10`;
        }

    }

}
function fDeposit() {
    idInsert.style.display = "block";
    idConsult.style.display = "none";
    idGetCash.style.display = "none";
    idDeposit.style.display = "none";

    parrafo.style.display = "block";
    parrafo.innerText = `Ingresa monto a depositar`;
    idbackToOptions.style.display = "block";
    idDepositar.style.display = "block";
    idCloseLogin.style.display = "none";
}

function fAddAmountD() {
    userAmount = parseInt(userAmount) + parseInt(ingresarCantidad.value);


    if (userAmount >= 10 && userAmount <= 990) {

        parrafo.style.display = "block";
        parrafo.innerText = `Tu saldo actual es: ${userAmount}`;
    }
    else {
        if (userAmount > 990) {
            userAmount = parseInt(userAmount) - parseInt(ingresarCantidad.value);
            parrafo.style.display = "block";
            parrafo.innerText = `Operación invalida, no puedes tener mas de 990`;
        }

    }

}


function CloseSession() {
    password.style.display = "block";
    parrafo.style.display = "block";
    button1.style.display = "block";
    optionsList.style.display = "block";
    hidePassword.style.display = "block";
  
    idConsult.style.display = "none";
    idGetCash.style.display = "none";
    idDeposit.style.display = "none";
    idCloseLogin.style.display = "none";
    parrafo.style.color="black";
    parrafo.innerText="We'll never share your password with anyone else.";
}



closeLogin.addEventListener("click", CloseSession);
idConfirmAmount.addEventListener("click", fSusbtractmount);
idConfirmDepositAmount.addEventListener("click", fAddAmountD);
button1.addEventListener("click", getUsers);
Consult.addEventListener("click", fConsult);
getCash.addEventListener("click", fGetCash);
Deposit.addEventListener("click", fDeposit);
backToOptions.addEventListener("click", fOptions);
infohide.addEventListener('submit', () => {
    event.preventDefault();

})











