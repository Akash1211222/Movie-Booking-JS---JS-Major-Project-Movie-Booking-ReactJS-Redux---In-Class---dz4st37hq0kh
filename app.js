import {fetchMovieAvailability,fetchMovieList} from "./api.js"
const bookTicketBtn = document.querySelector('#book-ticket-btn')
bookTicketBtn.addEventListener('click', (e) => handleBookTicket(e))
let selectedSeats = []
function htmlToElement(html) {
    const template = document.createElement('template')
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}