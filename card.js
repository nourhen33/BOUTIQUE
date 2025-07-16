/**
 * Reusable Card Component
 * @param {string} title - The title of the product
 * @param {string} price - The price of the product
 * @param {string[]} features - Array of features to display
 * @param {string} imageSrc - Source URL for the product image
 * @param {string} imageAlt - Alt text for the product image
 * @returns {string} HTML string for the card
 */
function Card(title, price, features, imageSrc, imageAlt) {
  // Create features list HTML
  const featuresHTML = features.map(feature => `<li>${feature}</li>`).join('');
  
  return `
    <div class="produit card">
      <img src="${imageSrc}" alt="${imageAlt}">
      <div class="card-content">
        <h3>${title}</h3>
        <p class="card-price">${price}</p>
        <ul class="card-features">
          ${featuresHTML}
        </ul>
        <button class="card-button">Acheter maintenant</button>
      </div>
    </div>
  `;
}

/**
 * Renders cards to a container
 * @param {Array} cardsData - Array of card data objects
 * @param {string} containerId - ID of the container element
 */
function renderCards(cardsData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID '${containerId}' not found`);
    return;
  }
  
  const cardsHTML = cardsData.map(card => 
    Card(card.title, card.price, card.features, card.imageSrc, card.imageAlt)
  ).join('');
  
  container.innerHTML = cardsHTML;
}

// Product data
const productsData = [
  {
    title: "Collier personnalisé",
    price: "99,99 €",
    features: ["Personnalisable", "Acier inoxydable", "Livraison gratuite"],
    imageSrc: "Collier.jpg",
    imageAlt: "Collier"
  },
  {
    title: "Bracelet élégant",
    price: "59,99 €",
    features: ["Réglable", "Plaqué or", "Résistant à l'eau"],
    imageSrc: "Bracelet.jpg",
    imageAlt: "Bracelet"
  },
  {
    title: "Collier Luxueux",
    price: "149,99 €",
    features: ["Cristaux Swarovski", "Coffret cadeau", "Garantie 2 ans"],
    imageSrc: "Collier luxueux.jpg",
    imageAlt: "Collier luxueux"
  },
  {
    title: "Boucles d'oreilles dorées",
    price: "79,99 €",
    features: ["Plaqué or 18k", "Hypoallergénique", "Fermoir sécurisé"],
    imageSrc: "boucle.jpg",
    imageAlt: "Boucles d'oreilles"
  },
  {
    title: "Bague élégante",
    price: "89,99 €",
    features: ["Taille ajustable", "Argent sterling", "Design moderne"],
    imageSrc: "bague.jpg",
    imageAlt: "Bague"
  },
  {
    title: "Bague en diamant",
    price: "299,99 €",
    features: ["Diamant véritable", "Certificat d'authenticité", "Écrin de luxe"],
    imageSrc: "istockphoto-1430665152-612x612.jpg",
    imageAlt: "Bague en diamant"
  },
  {
    title: "Boucles d'oreilles perles",
    price: "69,99 €",
    features: ["Perles naturelles", "Fermoir en argent", "Élégant"],
    imageSrc: "boucle blanc.jpg",
    imageAlt: "Boucles d'oreilles en perles"
  }
];

// Initialize cards when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderCards(productsData, 'produits-container');
});