
document.body.style.backgroundColor = "grey"

var container = document.createElement("div")
container.style.backgroundColor = "black"
container.setAttribute("class", "text-center")
document.body.append(container)

var heading = document.createElement("h2")
heading.innerHTML = "Animie App"
heading.style.color = "white"
heading.style.marginBottom = "1rem"
container.append(heading)

var container_div = document.createElement("div")
container_div.setAttribute("class", "input-gorup")
container_div.style.display = "flex"
container.append(container_div)

var Inputbox = document.createElement("input")
Inputbox.setAttribute("type", "text")
Inputbox.setAttribute("class", "form-control col-lg-6 mb-3")
Inputbox.setAttribute("placeholder", "Type Animie Name to search...")
Inputbox.setAttribute("id", "myInput")
container_div.style.justifyContent = "center"
container_div.append(Inputbox)

var search_btn = document.createElement("button")
search_btn.innerText = "Search"
search_btn.setAttribute("onclick", "search()")
search_btn.setAttribute("class", "btn btn-secondary mb-3")
container_div.append(search_btn)

function search() {

    document.getElementById("noContent").innerHTML = ""

    document.getElementById("display_box").innerHTML = ""

    var value = document.getElementById("myInput").value

    if (value == "" || null) {
        alert("input box empty")
    }

    else {
        viewinfo()
        document.getElementById("myInput").value = ""
    }
}

async function viewinfo() {
    try {

        const api = "https://api.jikan.moe/v3";
        var value = document.getElementById("myInput").value

        var data = await fetch(api + "/search/anime?q=" + value + "&page=1")
        var resp = await data.json();
        var len = resp.results.length


            for (var i = 0; i < len; i++) {
            const element = resp.results[i]

            var cardcol = document.createElement("div")
            cardcol.setAttribute("class", "col mt-4")
            document.getElementById("display_box").append(cardcol)

            var card = document.createElement("div")
            card.setAttribute("class", "card")
            cardcol.append(card)

            var cardimage = document.createElement("div")
            cardimage.setAttribute("class", "cardimage")
            card.append(cardimage)

            var img = document.createElement("img")
            img.setAttribute("class","card-img-top")
            img.src = element.image_url
            cardimage.append(img)

            var cardbody = document.createElement("div")
            cardbody.setAttribute("class", "card-body")
            card.append(cardbody)

            var title = document.createElement("h5")
            title.setAttribute("class","card-title")
            title.innerText = "Title : " + element.title
            cardbody.append(title)

            var episode = document.createElement("p")
            episode.setAttribute("class","card-title")
            episode.innerText = "Episodes : " + element.episodes
            cardbody.append(episode)

            var type = document.createElement("p")
            type.setAttribute("class","card-title")
            type.innerText = "Type : " + element.type
            cardbody.append(type)

            var imdb = document.createElement("p")
            imdb.setAttribute("class","card-title")
            imdb.innerText = "IMDB Rating : " + element.score
            cardbody.append(imdb)

        }
    } catch (error) {
        console.error()
    }
}