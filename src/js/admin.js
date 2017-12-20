import CardAPI from './lib/cardAPI';

const init = () => {
  CardAPI.read().then(data => {
    console.log(data);
    document.querySelector(`.length`).innerHTML = data.length;

    // const $table = document.getElementById(`table`);

    data.forEach(d => {
      console.log(d);
      // const $container = document.createElement(`div`);
      // $container.classList.add(`admin_row`);
      // const $from = document.createElement(`p`);
      // const $to = document.createElement(`p`);
      // const $text = document.createElement(`p`);
      //
      // $from.innerHTML = d.from;
      // $to.innerHTML = d.to;
      // $text.innerHTML = d.text;
      //
      // $container.append($from);
      // $container.append($to);
      // $container.append($text);
      // $table.append($container);
    });



  });
};

init();
