/* ***création des variables à partir du localstorage */
let orderId = localStorage.getItem('orderId');
let orderPrice = localStorage.getItem('orderPrice');
let infoClient = JSON.parse(localStorage.getItem('cont'));

/*** affichage du message de confirmation de la commande */
function textConfirm() {
    terminate.innerHTML =
        `
        <p>Cher ${infoClient.firstName}, nous avons le plaisir de vous confirmer votre commande.</p>
        <p>Voici l'id de votre commande : </p>
        <h1>${orderId}</h1>
        <p>Pour un total de : </p>
        <h2>${orderPrice}.00 €</h2>
        <p>Toute l'équipe Orinoco vous remercie pour votre confiance, et vous dit à bientôt.</p>
    `
}
textConfirm();