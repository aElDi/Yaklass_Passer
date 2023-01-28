
function tren(vproc, voc) {
    var tp = document.getElementsByClassName('topic-progress');
    for (var k = 0; k < tp.length; k++) {
        let act = tp[k];
        var prc = act.firstElementChild;
        prc.lastElementChild.style = 'width:' + vproc + '%';

        var oc = document.createElement('span');
        oc.classList.add('crc-mark');
        oc.title = 'оценка';
        oc.innerText = voc;
        act.insertBefore(oc, act.firstChild);
    }

    var th = document.querySelectorAll('.theory-table td.tbl-points');
    for (var p = 0; p < th.length; p++) {
        let t = th[p];
        t.innerHTML = '<div class="svg-sprite-vs result-perfect"></div>';
    }
    var els = document.querySelectorAll('.exercise-table div.tbl-points');
    for (var i = 0; i < els.length; i++) {
        let f = els[i];
        f.firstElementChild.classList.replace('top-point-empty', 'top-point-full');
        f.firstElementChild.classList.replace('top-point-half', 'top-point-full');
        f.firstElementChild.classList.replace('profile-point-empty', 'profile-point-full');
        var max = Number(f.lastElementChild.innerText);
        max = isNaN(max) ? Number(f.lastElementChild.lastElementChild.innerText) : max;
        f.lastElementChild.innerHTML = '';
        var ern = document.createElement('span');
        ern.classList.add('earned');
        ern.innerText = max;
        var elm = document.createElement('span');
        elm.classList.add('max');
        elm.innerText = max;
        f.appendChild(ern);
        f.innerHTML += ' / ';
        f.appendChild(elm);
    }
}

browser.storage.local.get(['proc', 'oc']).then((data) => {
    tren(data.proc, data.oc);
    browser.storage.local.remove(['proc', 'oc']);
})