function countTime() {
    var date = new Date();
    var now = date.getTime();
    var endDate = new Date("2021-04-06 00:00:00");
    var end = endDate.getTime();
    var leftTime = end - now;
    var d, h, m, s;
    if (leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    document.getElementById("day").innerHTML = d;
    document.getElementById("hour").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("sec").innerHTML = s;
    setTimeout(countTime, 1000);
}