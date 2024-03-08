function search() {
  var input, filter, cards, card, title, i, txtValue;
  input = document.getElementById('searchBar');
  filter = input.value.toUpperCase();
  cards = document.querySelectorAll('.card');

  for (i = 0; i < cards.length; i++) {
    card = cards[i];
    title = card.querySelector('.card_title');
    txtValue = title.textContent || title.innerText;

    // Oculta ou exibe o card com base na correspondência do título
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  }
}


var buttons = document.getElementsByClassName("button_group_text");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].innerHTML = '<i class="ph ph-heart-straight"></i>';
  
  // Adicionar um contador específico para cada botão
  var contador = 1;

  buttons[i].addEventListener("click", function () {
    contador++;
    if (contador % 2 == 0) {
      this.innerHTML = '<i class="ph-fill ph-heart-straight"></i>';
    } else {
      this.innerHTML = '<i class="ph ph-heart-straight"></i>';
    }
  });
}

