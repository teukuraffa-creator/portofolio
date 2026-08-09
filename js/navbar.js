const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('a[href]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    const isInternalPage = href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto:') && !link.hasAttribute('download');

    if (!isInternalPage || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    document.body.classList.add('page-exit');
    window.setTimeout(() => {
      window.location.href = href;
    }, 320);
  });
});
