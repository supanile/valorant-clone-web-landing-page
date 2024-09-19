const headerInfoBtn = document.getElementById('headerInfoBtn');
const blackDot = document.getElementById('blackDot');
const hoverMask = document.getElementById('hoverMask');
const menuLeft = document.querySelectorAll('#menuLeft > li');

headerInfoBtn.addEventListener("mouseover", () => {
    blackDot.style.backgroundColor = '#fff';
    hoverMask.style.transform = 'translateX(0%) skew(-10deg)';
});

headerInfoBtn.addEventListener("mouseout", () => {
    blackDot.style.backgroundColor = '#111';
    hoverMask.style.transform = 'translateX(-100%) skew(-10deg)';
});

menuLeft.forEach(function (liElement) {

    let dropdownMenu = liElement.querySelector('.menu_left--dropdown');
    let pTag = liElement.querySelector('p');
    let hoverLine = document.createElement('span');
    hoverLine.classList.add('hover-line');

    liElement.addEventListener('mouseover', () => {
        pTag.appendChild(hoverLine);
    });
    liElement.addEventListener('mouseout', () => {
        pTag.removeChild(hoverLine);
    });

    if (dropdownMenu) {

        pTag.innerHTML += ' <i class="fa-solid fa-caret-down" style=" font-size: 10px;margin-left: 3px; position: relative; top: -2px; "></i> '
        liElement.addEventListener('mouseover', () => {
            dropdownMenu.style.display = 'block';
        });
        liElement.addEventListener('mouseout', () => {
            dropdownMenu.style.display = 'none';
        });
    }
});