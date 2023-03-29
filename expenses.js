const days_items = document.querySelectorAll(".day");

function getMax(json) {
    let amount = json.map(function (data) {
        return data.amount;
    })
    let max = Math.max(...amount);
    return max;
}

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        const max = getMax(json);
        let index = 0;

        days_items.forEach((day) => {
            if(json[index].amount === max) {
                day.children[1].style.backgroundColor = "var(--clr-primary-cyan)"
            }
            day.children[0].innerText = "$" + json[index].amount
            day.children[1].style.height = (180 * (json[index].amount / max))*0.8 + "px"
            day.children[2].innerText = json[index].day
            index++;
        })
        console.log(json)
    });

