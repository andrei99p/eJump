document.addEventListener('DOMContentLoaded', function() {
    let draggedElement = null;
    let isRedSnapped = false;
    let isBlueSnapped = false;

    document.addEventListener('dragstart', function(event) {
        if (event.target.classList.contains('circle')) {
            draggedElement = event.target;
        }
    });

    document.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    document.addEventListener('drop', function(event) {
        event.preventDefault();

        if (draggedElement) {
            const offsetX = event.clientX - draggedElement.offsetWidth / 2;
            const offsetY = event.clientY - draggedElement.offsetHeight / 2;

            if (draggedElement.classList.contains('red')) {
                if (!isRedSnapped) {
                    draggedElement.style.left = offsetX + 'px';
                    draggedElement.style.top = offsetY + 'px';
                }

                const blueSquare = document.getElementById('blueSquare');
                const redSquare = document.getElementById('redSquare');
                const rectBlue = blueSquare.getBoundingClientRect();
                const rectRed = redSquare.getBoundingClientRect();

                if (
                    draggedElement.classList.contains('red') &&
                    event.clientX >= rectBlue.left &&
                    event.clientX <= rectBlue.right &&
                    event.clientY >= rectBlue.top &&
                    event.clientY <= rectBlue.bottom
                ) {
                    draggedElement.style.left = '250px';
                    draggedElement.style.top = '150px';
                    isRedSnapped = false;
                }

                if (
                    draggedElement.classList.contains('red') &&
                    event.clientX >= rectRed.left &&
                    event.clientX <= rectRed.right &&
                    event.clientY >= rectRed.top &&
                    event.clientY <= rectRed.bottom
                ) {
                    draggedElement.style.left = rectRed.left + rectRed.width / 2 - draggedElement.offsetWidth / 2 + 'px';
                    draggedElement.style.top = rectRed.top + rectRed.height / 2 - draggedElement.offsetHeight / 2 + 'px';
                    isRedSnapped = true;
                }
            }

            if (draggedElement.classList.contains('blue')) {
                if (!isBlueSnapped) {
                    draggedElement.style.left = offsetX + 'px';
                    draggedElement.style.top = offsetY + 'px';
                }

                const blueSquare = document.getElementById('blueSquare');
                const redSquare = document.getElementById('redSquare');
                const rectBlue = blueSquare.getBoundingClientRect();
                const rectRed = redSquare.getBoundingClientRect();

                if (
                    draggedElement.classList.contains('blue') &&
                    event.clientX >= rectRed.left &&
                    event.clientX <= rectRed.right &&
                    event.clientY >= rectRed.top &&
                    event.clientY <= rectRed.bottom
                ) {
                    draggedElement.style.left = '250px';
                    draggedElement.style.top = '250px';
                    isBlueSnapped = false;
                }

                if (
                    draggedElement.classList.contains('blue') &&
                    event.clientX >= rectBlue.left &&
                    event.clientX <= rectBlue.right &&
                    event.clientY >= rectBlue.top &&
                    event.clientY <= rectBlue.bottom
                ) {
                    draggedElement.style.left = rectBlue.left + rectBlue.width / 2 - draggedElement.offsetWidth / 2 + 'px';
                    draggedElement.style.top = rectBlue.top + rectBlue.height / 2 - draggedElement.offsetHeight / 2 + 'px';
                    isBlueSnapped = true;

                }
            }

            draggedElement = null;
        }
    });
});