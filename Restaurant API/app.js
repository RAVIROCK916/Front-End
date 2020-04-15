fetch('test.json').then(function(response) {
    return response.json();
})
.then(function(data) {
    // data.sort((a, b) => {
    //     return (a.Brand>b.Brand ? 1:-1);
    // });
    data.forEach(restaurant => {
        var container = document.querySelector(".container");

        var card = document.createElement("div");
        var brand = document.createElement("h2");
        var variety = document.createElement("p");
        var style = document.createElement("i");
        var top = document.createElement("b");
        var country = document.createElement("mark");
        var star_div = document.createElement("div");
        var stars = document.createElement("strong");
        var star = document.createElement("em");

        brand.innerText = restaurant.Brand;
        variety.innerText = restaurant.Variety;
        style.innerText = restaurant.Style;
        top.innerText = restaurant["Top Ten"];
        country.innerText = restaurant.Country;
        stars.innerText = restaurant.Stars;
        card.classList.add("card");
        star.classList.add("fas");
        star.classList.add("fa-star");

        card.appendChild(brand);
        card.appendChild(variety);
        card.appendChild(style);
        card.appendChild(top);
        card.appendChild(country);
        card.appendChild(star_div);
        star_div.appendChild(stars);
        star_div.appendChild(star);
        container.appendChild(card);
    });

    var container = document.querySelector(".container");
    var cards = document.querySelectorAll(".container > div");
    var search = document.querySelector("#search");
    var sort = document.querySelector("#sort");
    var option = document.querySelectorAll(".option");

    document.querySelector(".fa-search").addEventListener("click", function(e) {
        var val = document.querySelector("#search").value;
        console.log(val);
        
        cards.forEach(el => {
            if(el.childNodes[0].innerText.search(val)<0) {
                el.style.display = "none";
            }
            else {
                el.style.display = "block";
            }            
        })
    });

    sort.addEventListener("change", function(e) {
        function sortList(idx) {
            var i, switching, b, shouldSwitch;
            container = document.querySelector(".container");
            switching = true;
            /* Make a loop that will continue until
            no switching has been done: */
            while (switching) {
                // start by saying: no switching is done:
                switching = false;
                b = container.getElementsByClassName("card");
                // Loop through all container-items:
                for (i = 0; i < (b.length - 1); i++) {
                    // start by saying there should be no switching:
                    shouldSwitch = false;
                    /* check if the next item should
                    switch place with the current item: */
                    if (b[i].childNodes[idx].innerHTML > b[i + 1].childNodes[idx].innerHTML) {
                        /* if next item is alphabetically
                        lower than current item, mark as a switch
                        and break the loop: */
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    /* If a switch has been marked, make the switch
                    and mark the switch as done: */
                    container.insertBefore(b[i + 1], b[i]);
                    switching = true;
                }
            }
        }
        switch(e.target.value) {
            case "name":
                sortList(0);
                break;
            case "country":
                sortList(4);
                break;
            case "stars":
                sortList(5);
                break;
            default:
                break;
        }
    });

    option.forEach(el => {
        el.addEventListener("click", function() {
            console.log('Hi');
        })
    });
})
.catch(function(error) {
    console.error("Something went wrong while retreiving data");
    console.error(error);
});