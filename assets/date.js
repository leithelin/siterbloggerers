const now = new Date();

const year = document.querySelectorAll('.year');
for (let i = 0; i < year.length; ++i) {
    year[i].innerHTML = now.getFullYear();
}

let dateTxt = now.toLocaleDateString('cs-CZ', {year: 'numeric', month: 'long', day: 'numeric'});

const date = document.querySelectorAll('.today');

for (let i = 0; i < date.length; ++i) {
    date[i].innerHTML = dateTxt;
}