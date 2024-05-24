const msalInstance = new msal.PublicClientApplication(msalConfig);

function signIn() {
    msalInstance.loginPopup(loginRequest)
        .then(loginResponse => {
            console.log("id_token acquired at: " + new Date().toString());
            console.log(loginResponse);

            if (msalInstance.getAllAccounts().length > 0) {
                showWelcomeMessage();
            }
        }).catch(error => {
            console.error(error);
        });
}

function signOut() {
    const logoutRequest = {
        account: msalInstance.getAllAccounts()[0]
    };

    msalInstance.logoutPopup(logoutRequest)
        .then(() => {
            console.log("User signed out.");
            document.getElementById("signIn").style.display = 'block';
            document.getElementById("signOut").style.display = 'none';
            document.getElementById("welcomeMessage").innerText = '';
        }).catch(error => {
            console.error(error);
        });
}

function showWelcomeMessage() {
    const account = msalInstance.getAllAccounts()[0];
    if (account) {
        document.getElementById("welcomeMessage").innerText = `Welcome ${account.username}`;
        document.getElementById("signIn").style.display = 'none';
        document.getElementById("signOut").style.display = 'block';
    }
}

window.onload = function() {
    if (msalInstance.getAllAccounts().length > 0) {
        showWelcomeMessage();
    }
};
