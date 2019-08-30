// tabs changer on "Our Services" section

const servicesTabsContainer = document.querySelector('.services .dropdown-navbar');
const servicesTabsArray = document.querySelectorAll('.services .dropdown-navbar .dropdown-navbar-item');
const servicesTextArray = document.querySelectorAll('.tabs-content li');

servicesTabsArray.forEach((el, index) => {
    servicesTextArray[index].hidden = !el.classList.contains('selected-item');
});

servicesTabsContainer.addEventListener('click', (event) => {
    const clickedItem = (event.target);
    servicesTabsArray.forEach((el, index) => {
        el.classList.remove('selected-item');
        if (el === clickedItem) {
            servicesTabsArray[index].classList.add('selected-item');
            servicesTextArray.forEach(e => {
                e.hidden = true
            });
            servicesTextArray[index].hidden = false;
        }
    });
});

// portfolio-organizer
// portfolio-organizer

const customGallery2 = {
    folderName: 'portfolio',
    className: 'portfolio-item',
    fileList: [
        'graphic-design1.jpg',
        'graphic-design2.jpg',
        'graphic-design3.jpg',
        'graphic-design4.jpg',
        'graphic-design5.jpg',
        'graphic-design6.jpg',
        'graphic-design7.jpg',
        'graphic-design8.jpg',
        'graphic-design9.jpg',
        'graphic-design10.jpg',
        'graphic-design11.jpg',
        'graphic-design12.jpg',
        'landing-page1.jpg',
        'landing-page2.jpg',
        'landing-page3.jpg',
        'landing-page4.jpg',
        'landing-page5.jpg',
        'landing-page6.jpg',
        'landing-page7.jpg',
        'web-design1.jpg',
        'web-design2.jpg',
        'web-design3.jpg',
        'web-design4.jpg',
        'web-design5.jpg',
        'web-design6.jpg',
        'web-design7.jpg',
        'wordpress1.jpg',
        'wordpress2.jpg',
        'wordpress3.jpg',
        'wordpress4.jpg',
        'wordpress5.jpg',
        'wordpress6.jpg',
        'wordpress7.jpg',
        'wordpress8.jpg',
        'wordpress9.jpg',
        'wordpress10.jpg']
};

const portfolioGalleryContainer = document.getElementById('portfolio');
const portfolioGalleryTabs = document.getElementById('portfolio-tabs');
const portfolioLoadBtn = document.querySelector('[data-btn="portfolio-extra-loader"]');

let defaultPicturesQuantity = 11;

function createGallery(obj, fileName) {
    fileName.forEach((item, itemIndex) => {
        const newPortfolioItem = document.createElement('div');
        const portfolioItemOptions = document.createElement('div');
        const optionsLink = document.createElement('button');
        const optionsZoom = document.createElement('button');
        const optionsTitle = document.createElement('p');
        const optionsSubtitle = document.createElement('p');
        const newImg = document.createElement('img');

        newPortfolioItem.classList.add(obj.className);
        portfolioItemOptions.classList.add('portfolio-item-options');
        optionsLink.classList.add('portfolio-options-btn-link');
        optionsZoom.classList.add('portfolio-options-btn-zoom');
        optionsTitle.classList.add('portfolio-options-title');
        optionsSubtitle.classList.add('portfolio-options-subtitle');

        portfolioItemOptions.append(optionsLink, optionsZoom, optionsTitle, optionsSubtitle);

        newPortfolioItem.append(newImg, portfolioItemOptions);
        portfolioGalleryContainer.appendChild(newPortfolioItem);

        newImg.setAttribute('src', `img/${obj.folderName}/${item}`)
        if (item.startsWith('graphic-design')) {
            newPortfolioItem.dataset.imgType = `portfolio-graphic-design`;
            optionsTitle.innerText = 'creative design';
            optionsSubtitle.innerText = 'Graphic Design';
        }
        if (item.startsWith('landing-page')) {
            newPortfolioItem.dataset.imgType = `portfolio-landing-pages`;
            optionsTitle.innerText = 'creative design';
            optionsSubtitle.innerText = 'Landing Pages';
        }
        if (item.startsWith('web-design')) {
            newPortfolioItem.dataset.imgType = `portfolio-web-design`;
            optionsTitle.innerText = 'creative design';
            optionsSubtitle.innerText = 'Web Design';
        }
        if (item.startsWith('wordpress')) {
            newPortfolioItem.dataset.imgType = `portfolio-wordpress`;
            optionsTitle.innerText = 'creative design';
            optionsSubtitle.innerText = 'Wordpress';
        }
        if (itemIndex > defaultPicturesQuantity) {
            newPortfolioItem.hidden = true;
        }
    });

    const tabs = [...document.querySelectorAll('.portfolio-navbar-item')];
    const portfolioItems = [...document.querySelectorAll('.portfolio-item')];

    portfolioGalleryTabs.addEventListener('click', (event) => {
        event.preventDefault();
        event.target.classList.add('selected-item');
        tabs.forEach((item) => {
            if (item !== event.target) {
                item.classList.remove('selected-item');
            }
        });
        const newTarget = tabs.find((item) => item === event.target);
        portfolioItems.forEach((elem, index) => {
            elem.hidden = elem.dataset.imgType !== newTarget.dataset.imgType;
            if (newTarget.dataset.imgType === 'portfolio' && index <= defaultPicturesQuantity) {
                elem.hidden = false;
            }
        })
    });

    portfolioLoadBtn.addEventListener('click', (event) => {
        defaultPicturesQuantity += 12;
        portfolioItems.forEach((item, index) => {
            item.hidden = index > defaultPicturesQuantity;
        });
        if (defaultPicturesQuantity === 35) {
            portfolioLoadBtn.remove()
        }
    });
}

createGallery(customGallery2, customGallery2.fileList);

// slider in review section

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
});
