export default function decorate(block) {
  const [image, content] = block.children;

  image.classList.add('hero-banner-image');
  content.classList.add('hero-banner-content');

  const paragraphs = content.querySelectorAll('p');

  if (paragraphs.length > 0) {
    const h1 = document.createElement('h1');
    h1.innerHTML = paragraphs[0].innerHTML;
    paragraphs[0].replaceWith(h1);
  }

  const button = content.querySelector('a');

  if (button) {
    button.classList.add('hero-banner-button');
  }
}
