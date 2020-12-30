// window.setTimeout(function () {
//     alert('HAMMER TIME!');
// }, 5000);

function hammertime (time) {
    window.setTimeout(function () {
        alert(`${time} is hammertime!`)
    }, time);
}

hammertime(5000)