function timeout() {
    setTimeout(function () {
        window.open('https://stackoverflow.com/users/8826629/joel-guerra-msft', '_blank')
        timeout();
    }, 43000000);
}