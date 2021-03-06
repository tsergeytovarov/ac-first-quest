// все панели
var $fields = document.querySelectorAll('.quest__challenge');
// текущая панель
var fieldsCurrent = 0;
// количество панелей
var fieldsCount = $fields.length;
// для единовременного показа сообщения об успешном завершении
var message = 0;

var i = 0;

if (fieldsCount) { // если есть панели

  for (i = 0; i < fieldsCount; i++){ // перебираем панелт

    $fields[i].setAttribute("data-item", i);

    if ( i != fieldsCurrent ) $fields[i].classList.add('hidden'); // все кроме первой прячем

    var sel = $fields[i].querySelectorAll('select'); // выбираем в текущей селект

    sel[0].addEventListener('change', function(){ // вешаем на него ивент при изменении

      var parent = this.parentNode.parentNode.parentNode.getAttribute("data-item");
      if( parent != fieldsCurrent) return false;

      fieldsCurrent = fieldsCurrent + 1; // следующая панель

      if ( fieldsCurrent <= fieldsCount - 1 ){ // если проходим условие
        $fields[fieldsCurrent].classList.remove("hidden"); // то показываем следуюую панель
        var position = $fields[fieldsCurrent].offsetTop - window.innerHeight/2;
        window.scrollTo(0, position);
      } else { // если нет
        if( message == 0 ){ // и если еще не выводили сообщение что задание выполнено
          alert("задание выполнено!"); // выводим сообщение
          message = 1; // больше сообщение не показываем
        };
      };
    });
  };
};
