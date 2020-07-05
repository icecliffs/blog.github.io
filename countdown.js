function countTime() {
    var date = new Date();
    var now = date.getTime();
    var endDate = new Date("2020-09-19 00:00:00");
    var end = endDate.getTime();
    var leftTime = end - now;
    var d, h, m, s;
    if (leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    document.getElementById("day").innerHTML = d + "天";
    document.getElementById("hour").innerHTML = h + "时";
    document.getElementById("min").innerHTML = m + "分";
    document.getElementById("sec").innerHTML = s + "秒";
    setTimeout(countTime, 1000);

}