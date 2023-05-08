
if (0) {
var data = {
    messenger: "kesetovic.m",
    phone: "062 442 535",
    email: "miralem79.k1+iptv-podrska@gmail.com"
};

function __decipher(v) {
    var buff = "";
    for (let i = 2, j = v.length + 2; i < j; i += 2) {
        buff += v[i - 2];
    }
    return buff;
}

Object.values(document.querySelectorAll("*[data-decipher]")).forEach(function(e) {
    var key = e.getAttribute("data-decipher");
    if (key in data)
        e.innerText = __decipher(data[key]);
});
}

var isPlayingAd = false;
var hasInteracted = false;
var videoAd = document.querySelector("#videoAds");
var willPlayAd = true;

var autoplayAd = setInterval(function() {
    if (!isPlayingAd && document.hasFocus() && hasInteracted) {
        try {
            videoAd.muted = true;
            videoAd.play();
            videoAd.muted = false;
            videoAd.controls = true;
        } catch (e) {
            isPlayingAd = false;
            return;
        }
        isPlayingAd = true;
    }
}, 1e3);

if (!willPlayAd)
    clearInterval(autoplayAd);

document.addEventListener("click", function(e) {
    hasInteracted = true;
});

window.addEventListener("scroll", function(e) {
    hasInteracted = true;
});

var makeYear = 2023;
var currYear = Number(String(new Date()).split(' ', 4)[3]);
var copyrightYear = document.querySelector("#copyrightYear");

if (currYear > makeYear) {
    copyrightYear.innerText = `${makeYear}-${currYear}`;
} else {
    copyrightYear.innerText = makeYear;
}
