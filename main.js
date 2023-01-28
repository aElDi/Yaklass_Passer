
function tren(input_proc, input_mark) {
    let tp = document.getElementsByClassName('topic-progress')[0];
    tp.firstElementChild.lastElementChild.style = 'width:' + input_proc + '%';
    let oc = document.createElement('span');
    oc.classList.add('crc-mark');
    oc.innerText = input_mark;
    tp.insertBefore(oc, tp.firstChild);
    let tbl_points = document.querySelectorAll('.theory-table td.tbl-points');
    for (t of tbl_points) {
        t.innerHTML = '<div class="svg-sprite-vs result-perfect"></div>';
    }
    document.querySelectorAll('.exercise-table div.tbl-points').forEach((f) => {
        f.firstElementChild.classList.replace('top-point-empty', 'top-point-full');
        f.firstElementChild.classList.replace('top-point-half', 'top-point-full');
        f.firstElementChild.classList.replace('profile-point-empty', 'profile-point-full');

        let max = Number(f.lastElementChild.innerText);
        max = isNaN(max) ? Number(f.lastElementChild.lastElementChild.innerText) : max;

        f.lastElementChild.innerHTML = '';

        let earned_points = document.createElement('span');
        earned_points.classList.add('earned');
        earned_points.innerText = max;

        let max_points = document.createElement('span');
        max_points.classList.add('max');
        max_points.innerText = max;

        f.appendChild(ern);
        f.innerHTML += ' / ';
        f.appendChild(max_points);
    });

}

browser.storage.local.get(['proc', 'oc']).then((data) => {
    tren(data.proc, data.oc);
    browser.storage.local.remove(['proc', 'oc']);
})