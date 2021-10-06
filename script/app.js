function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    const passwordInput = document.querySelector(".js-input-password");
    const passwordToggle = document.querySelector(".js-toggle-password");

    const passwordOptions = ['password', 'text'];

    //Met change-event zou ook wel werken, dit werkt voor alle soorten input
    //verlengde versie
    passwordToggle.addEventListener('click',function(){
        console.log(passwordToggle.checked);

        if (passwordToggle.checked){
            passwordInput.type = 'text';
        }
        else{
            passwordInput.type = 'password';
        }
    });
    
    //verkorte versie
    //+ voor de this.checked zet de true or false waarde om naar een numerische waarde 0 of 1
    passwordToggle.addEventListener('change', function () {
        passwordInput.type = passwordOptions[+this.checked];
    });
}

//wacht tot het document eerst geladen is voordat het java uitvoerd
document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});