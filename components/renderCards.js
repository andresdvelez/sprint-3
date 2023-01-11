export const renderCards = (cardData) => {
  propertyGrid.innerHTML += `
    <div id="${cardData?.id}" class="property__card">
        <div class="property__card-preview" style="background-image: url(${cardData?.img})">
            <div class="card-preview--first-row">
                <div class="card-preview--first-left">
                    <span class="property-type">${cardData?.type}</span>
                    <span class="property-status">${cardData?.status}</span>
                </div>
                <span class="property-featured"><i class="fa-solid fa-bolt"></i></span>
            </div>
            <div class="card-preview--second-row">
                <span class="property-price">${cardData?.price}</span>
                <div class="card-preview--second-right">
                <div class="property-compare"><i class="fa-regular fa-heart fa-heart-compare"></i></div>
                <div class="property-compare"><i class="fa-solid fa-arrow-right-arrow-left"></i></div>
                </div>
            </div>
        </div>
        <div class="property__card-details">
            <p class="card__details-location">${cardData?.location}</p>
            <address class="card__details-address">
                272 S Rexford Dr, Beverly Hills, CA <br />
                90212, USA
            </address>
            <div class="owner-row">
                <div class="owner-row-left">
                    <img src="./assets/agent.png" alt="Owner picture" />
                    <p class="owner-name">${cardData?.owner.name}</p>
                </div>
                <p class="owner-row-right">${cardData?.owner.timeReleased}</p>
            </div>
            <div class="line"></div>
            <div class="property-features">
                <div class="property-area">
                    <img src="./assets/area-icon.svg" alt="" />
                    <p class="area">2400 Sq Ft</p>
                </div>
                <div class="property-features-right">
                    <div class="features-right-wrapper">
                        <img src="./assets/garage-icon.svg" alt="" />
                        <p>2</p>
                    </div>
                    <div class="features-right-wrapper">
                        <img src="./assets/bathroom-icon.svg" alt="" />
                        <p>3</p>
                    </div>
                    <div class="features-right-wrapper">
                        <img src="./assets/bedroom-icon.svg" alt="" />
                        <p>3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      `;
};
