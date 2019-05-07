$(document).ready(function() {

    const _api = axios.create({
        baseURL: `http://localhost:3000`,
    });

    async function prikaziSlike(slike) {
        $(`#prikaz_slika_prvi`).append(` <div class="col-xs-12 col-md-4"><img data=${slike.id} src="../${slike.img1Url}" class="img-fluid" alt="${slike.name}">
                            </div>`);
    }

    async function getSlike() {
        const response = await _api.get(`/slike`);
        const slike = await response.data;
        for (const slika of slike) {
            prikaziSlike(slika);
        }
    }
    getSlike();

    function displayModal(e) {
        if (e.target.classList.contains("img-fluid")) {
            let id = e.target.getAttribute('data');
            localStorage.setItem('img id', JSON.stringify(id));
            getDetails()
        }
    }
    async function getDetails() {
        let id = JSON.parse(localStorage.getItem('img id'));
        let response = await _api.get(`/slike?id=${id}`);
        let resp = await response.data;
        _renderModal(resp[0])
    }

    function _renderModal(resp) {
        const { id, img1Url, name } = resp;
        $('#id01').append(`  
        <div class="animate">
        <div class="kontejner modal-body margina-top">
        <img class="img-fluid rounded mx-auto d-block" data=${id} src="../${img1Url}"  alt="${name}">
        </div>
        </div>
`)
        $('#id01').css({ "display": "block", "width": "100%" })
    }

    let modal = document.getElementById('id01');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            $('#id01').html('')
        }
    }

    $(`#prikaz_slika_prvi`).click(displayModal)
});