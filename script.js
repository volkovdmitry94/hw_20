(() => {
    const imgDB = [
        'https://cutt.ly/i2HcaAb',
        'https://cutt.ly/U2HckA3',
        'https://cutt.ly/J2HcbQi',
        'https://cutt.ly/e2HcOW0',
        'https://cutt.ly/i2HcaAb',
        'https://cutt.ly/U2HckA3',
        'https://cutt.ly/J2HcbQi'
    ];

    const imgList = document.getElementById('imgList');
    const alertZoneDiv = document.getElementById('alertZone');
    const alertContentDiv = document.getElementById('alertContent');
    const imgContent = document.getElementById('imgContent');

    const render = () => {
        for (let i = 0; i < imgDB.length; i++) {
            const newImg = document.createElement('img');
            newImg.style.width = '80px';
            newImg.style.height = '80px';
            newImg.style.marginRight = '20px';
            newImg.src = imgDB[i] + '';
            newImg.style.cursor = 'pointer';
            imgList.appendChild(newImg);
        }
    };

    imgList.addEventListener('click', (element) => {
        if (element.target.tagName === 'IMG') {
            imgContent.src = element.target.src + '';
            alertZoneDiv.classList.remove('hide');
            alertContentDiv.classList.remove('hide');
        }
    });
    alertZoneDiv.addEventListener('click', () => {
        alertZoneDiv.classList.add('hide');
        alertContentDiv.classList.add('hide');
    });
    alertContentDiv.addEventListener('click', (event) => {
        if (event.target.id === 'close') {
            alertZoneDiv.classList.add('hide');
            alertContentDiv.classList.add('hide');
        }
    });

    render();
}) ();