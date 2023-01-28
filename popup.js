function go() {
    let proc = document.getElementById('prc').value;
    let oc = document.getElementById('oc').value;
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