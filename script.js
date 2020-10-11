let $container = document.getElementById('container')
let container = []


for (let i = 127744; i <= 127776; i++) {
    container.push(`<div class="emoji">&#${i}</div><div class="code">${i}</div>`)
    };
for (let i =127791; i <= 127796; i++){
        container.push(`<div class="emoji">&#${i}</div><div class="code">${i}</div>`)
        };

 for (let i =9800; i <= 9810; i++){
            container.push(`<div class="emoji">&#${i}</div><div class="code">${i}</div>`)
            }

$container.innerHTML = container.join('')

