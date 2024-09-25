// home-tag
const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.style.transform = 'scale(1.1) rotate(0deg)';
    });
    tag.addEventListener('mouseout', () => {
        tag.style.transform = '';
    });
});