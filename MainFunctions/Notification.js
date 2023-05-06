function sendNotification(message)
{
    let exitBox = document.querySelector('.exitBox');
    let box = document.querySelector('.MainNotificationBox');
    document.getElementById('BOXTEXT').innerText = message;

    exitBox.style.animation = 'notification-pop-up 0.5s ease-out forwards';
    box.style.animation = 'notification-pop-up 0.5s ease-out forwards';

    let mainBox = document.querySelector('.notificationBox');

    mainBox.style.display = 'block';
    mainBox.style.visibility = 'visible';
}
function dismissNotification()
{
    let exitButton = document.querySelector('.exitBox');
    let mainNotification = document.querySelector('.MainNotificationBox');
    exitButton.style.animation = 'exit-animation 0.5s ease-out forwards';
    mainNotification.style.animation = 'exit-animation 0.5s ease-out forwards';

    let mainBox = document.querySelector('.notificationBox');

    setTimeout(function() {
        mainBox.style.display = 'none';
        mainBox.style.visibility = 'hidden';
    }, 500);
}