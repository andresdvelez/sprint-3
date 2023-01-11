export const renderCardModal = (cardData, htmlElement) => {
  htmlElement.innerHTML = `
    <div class="property__modal-left">
        <img class="modal__left-img" src=${cardData.img} alt="" />
    </div>
    <div class="property__modal-right">
        <p class="modal-desc">summer house for rent</p>
        <p class="modal-location">Beverly Hills, CA</p>
        <p class="price price-modal">From $1,700.00 Per Month</p>
        <div class="modal-properties__container">
            <div class="property__features-modal">
                <i class="fa-solid fa-chart-area"></i>
                <p class="area-text">
                <span>${cardData.area}</span>
                </p>
                </div>
            <div class="property__features-modal">
                <i class="fa-solid fa-bed"></i>
                <p class="area-text">
                <span>${cardData.bedroom} Beds</span>
                </p>
            </div>
            <div class="property__features-modal">
                <i class="fa-solid fa-bath"></i>
                <p class="area-text">
                <span>${cardData.bathroom} Bath</span>
                </p>
            </div>
            <div class="property__features-modal">
                <i class="fa-solid fa-warehouse"></i>
                <p class="area-text">
                <span>${cardData.garage} Garage</span>
                <span></span>
                </p>
            </div>
        </div>
    </div> 
    `;
};
