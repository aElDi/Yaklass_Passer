function go() {
    var proc = document.getElementById('prc').value;
    var oc = document.getElementById('oc').value;
    browser.storage.local.set({
        proc: proc,
        oc: oc
    }).then(() => {
        browser.tabs.executeScript({
            file: "main.js"
        });
    })
}

document.getElementById('gbtn').addEventListener('click', () => {
    go();
})