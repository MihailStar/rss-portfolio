const blockClassName = 'portfolio';

const $buttonsContainer = document.querySelector<HTMLDivElement>(
  `.${blockClassName}__buttons`
);
if (!($buttonsContainer instanceof HTMLDivElement)) {
  throw new Error('Buttons container not found');
}
const $buttons = $buttonsContainer.querySelectorAll<
  HTMLButtonElement & { dataset: { season: string } }
>(`button`);
const $images = document.querySelectorAll<HTMLImageElement>(
  `.${blockClassName}__images img`
);

$buttonsContainer.addEventListener('click', (event) => {
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  event.preventDefault();

  if (target.classList.contains('button_active')) {
    return;
  }

  $buttons.forEach(($button) => {
    $button.classList.add('button_with-pulse');
    $button.classList.remove('button_active');
  });
  target.classList.add('button_active');
  target.classList.remove('button_with-pulse');

  $images.forEach(($image, index) => {
    $image.src = `./images/content/${target.dataset['season'] ?? 'autumn'}/${
      index + 1
    }.jpg`;
  });
});

function preloadImages(): void {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  for (let index = 1; index <= 6; index += 1) {
    seasons.forEach((season) => {
      new Image(450, 560).src = `./images/content/${season}/${index}.jpg`;
    });
  }
}

preloadImages();
