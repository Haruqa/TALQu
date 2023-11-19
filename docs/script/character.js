document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelectorAll('.details');

    details.forEach(element => {
        const summary = element.querySelector('.details__summary');
        const content = element.querySelector('.details__content');

        summary.addEventListener('click', e => {
            e.preventDefault();
            if (element.open) {
                const openDetails = content.animate(
                {
                    opacity: [1, 0],
                    height: [content.offsetHeight + 'px', 0],
                },
                {
                    duration: 360,
                    easing: 'ease-out',
                }
                );
                openDetails.onfinish = () => {
                    element.removeAttribute('open');
                }
            } else {
                element.setAttribute('open', 'true');
                const openDetails = content.animate(
                {
                    opacity: [0, 1],
                    height: [0, content.offsetHeight + 'px'],
                },
                {
                    duration: 360,
                    easing: 'ease-out',
                }
                );
            }
        });
    });
});

var copy_icons = document.getElementsByClassName("copy_icon");
for (let index = 0; index < copy_icons.length; index++) {
    copy_icons[index].addEventListener('click', async (event) => {
        await navigator.clipboard.writeText(event.target.attributes.getNamedItem('copy_target').value);
        var default_innerHTML = event.target.childNodes[0].innerHTML
        event.target.childNodes[0].innerHTML = "「" + event.target.attributes.getNamedItem('copy_target').value + "」<br>をコピーしました！"
        setTimeout(function() {
            event.target.childNodes[0].innerHTML = default_innerHTML
        }, 1000);
    });
}

