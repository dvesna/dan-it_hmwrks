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
        const newImg = document.createElement('img');
        portfolioGalleryContainer.appendChild(newImg);
        newImg.classList.add(obj.className);
        newImg.setAttribute('src', `img/${obj.folderName}/${item}`)
        if (item.startsWith('graphic-design')) {
            newImg.dataset.imgType = `portfolio-graphic-design`;
        }
        if (item.startsWith('landing-page')) {
            newImg.dataset.imgType = `portfolio-landing-pages`;
        }
        if (item.startsWith('web-design')) {
            newImg.dataset.imgType = `portfolio-web-design`;
        }
        if (item.startsWith('wordpress')) {
            newImg.dataset.imgType = `portfolio-wordpress`;
        }
        if (itemIndex > defaultPicturesQuantity) {
            newImg.hidden = true;
        }
    });

    const tabs = [...document.querySelectorAll('.portfolio-navbar-item')];
    const portfolioItems = [...document.querySelectorAll('.portfolio-item')];

    portfolioGalleryTabs.addEventListener('click', (event) => {
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
