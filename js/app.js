var modal_estilos = 'display: block;'
+'width: 85%; max-width: 600px;'
+'background: #fff; padding: 15px;'
+'border-radius: 5px;'
+'-webkit-box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75);'
+'-moz-box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75);'
+'box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75);'
+'position: fixed;'
+'top: 50%; left: 50%;'
+'transform: translate(-50%,-50%);'
+'z-index: 99999999; text-align: center';

var fundo_modal_estilos = 'top: 0; right: 0;'
+'bottom: 0; left: 0; position: fixed;'
+'background-color: rgba(0, 0, 0, 0.6); z-index: 99999999;'
+'display: none;';


    var colunm_one = '<div id="fundo_modal-1" style="'+fundo_modal_estilos+'">'
    +'<div id="colunm_one" style="'+modal_estilos+'">'
     +'<div class="row">'
        +'<div class="col-sm-5" style="text-align: left;">'
           +'<img src="/images/filme-1.jpg">'
        +'</div>'
        +'<div class="col-sm-7" style="text-align: left;">'
           +'<h5>O Esquadrão Suicida (2021)</h5>'
           +'<h6>Ação, Aventura, Fantasia, Comédia | 2h 12m</h6><br>'
           +'<small><b>Sinopse:</b> Os supervilões Harley Quinn (Margot Robbie), Bloodsport (Idris Elba), Peacemaker (John Cena) e uma coleção de malucos condenados da prisão de Belle Reve juntam-se à super-secreta e super-obscura Força Tarefa X, enquanto são deixados na remota ilha de Corto Maltese para combater o inimigo.</small>'
        +'</div>'
     +'</div>'
    +'</div></div>';
    $("body").append(colunm_one);
    $("#fundo_modal-1, .close").click(function(){ $("#fundo_modal-1").hide(); });
    $("#colunm_one").click(function(e){ e.stopPropagation(); });

//==========================================================================================

    var colunm_two = '<div id="fundo_modal-2" style="'+fundo_modal_estilos+'">'
    +'<div id="colunm_two" style="'+modal_estilos+'">'
     +'<div class="row">'
        +'<div class="col-sm-5" style="text-align: left;">'
           +'<img src="/images/filme-2.jpg">'
        +'</div>'
        +'<div class="col-sm-7" style="text-align: left;">'
           +'<h5>A Guerra do Amanhã (2021)</h5>'
           +'<h6>Ação, Ficção científica, Aventura | 2h 18m</h6><br>'
           +'<small><b>Sinopse:</b> Em 2051, a humanidade está perdendo uma guerra global contra uma espécie mortal de alienígenas. Para garantir a sobrevivência dos humanos, soldados e civis do presente são transportados para o futuro e se juntam à luta, entre eles Dan Forester, um pai de família determinado a salvar o mundo para sua filha.</small>'
        +'</div>'
     +'</div>'
    +'</div></div>';
    $("body").append(colunm_two);
    $("#fundo_modal-2, .close").click(function(){ $("#fundo_modal-2").hide(); });
    $("#colunm_two").click(function(e){ e.stopPropagation(); });

//==========================================================================================

    var colunm_three = '<div id="fundo_modal-3" style="'+fundo_modal_estilos+'">'
    +'<div id="colunm_three" style="'+modal_estilos+'">'
     +'<div class="row">'
        +'<div class="col-sm-5" style="text-align: left;">'
           +'<img src="/images/filme-3.jpg">'
        +'</div>'
        +'<div class="col-sm-7" style="text-align: left;">'
           +'<h5>Justiça em Família (2021)</h5>'
           +'<h6>Ação, Thriller, Drama | 1h 50m</h6><br>'
           +'<small><b>Sinopse:</b> Ele perdeu o amor de sua vida por causa da ganância da indústria farmacêutica. Agora, sua filha está órfã e a justiça não chega. Por enquanto.</small>'
        +'</div>'
     +'</div>'
    +'</div></div>';
    $("body").append(colunm_three);
    $("#fundo_modal-3, .close").click(function(){ $("#fundo_modal-3").hide(); });
    $("#colunm_three").click(function(e){ e.stopPropagation(); });

//==========================================================================================

    var colunm_four = '<div id="fundo_modal-4" style="'+fundo_modal_estilos+'">'
    +'<div id="colunm_four" style="'+modal_estilos+'">'
     +'<div class="row">'
        +'<div class="col-sm-5" style="text-align: left;">'
           +'<img src="/images/filme-4.jpg">'
        +'</div>'
        +'<div class="col-sm-7" style="text-align: left;">'
           +'<h5>Operação Narco (2021)</h5>'
           +'<h6>Ação, Drama, Crime | 1h 33m</h6><br>'
           +'<small><b>Sinopse:</b> O cartel de drogas colombiano comanda uma missão para atravessar o México e entregar cocaína nos Estados Unidos enquanto mantém duas jovens reféns. O plano é exposto quando o ex-militar Bruce Stryker ajuda a polícia da fronteira a resgatar as duas garotas. Em resposta, o dono do cartel sequestra a família de Bruce e o obriga a ajudar a organização criminosa em seu próximo carregamento, desta vez em um submarino. Agora, cabe a Bruce se tornar um criminoso para resgatar sua família com vida.</small>'
        +'</div>'
     +'</div>'
    +'</div></div>';
    $("body").append(colunm_four);
    $("#fundo_modal-4, .close").click(function(){ $("#fundo_modal-4").hide(); });
    $("#colunm_four").click(function(e){ e.stopPropagation(); });

//==========================================================================================

var colunm_five = '<div id="fundo_modal-5" style="'+fundo_modal_estilos+'">'
+'<div id="colunm_five" style="'+modal_estilos+'">'
 +'<div class="row">'
    +'<div class="col-sm-5" style="text-align: left;">'
       +'<img src="/images/filme-9.jpg">'
    +'</div>'
    +'<div class="col-sm-7" style="text-align: left;">'
       +'<h5>Mortal Kombat (2021)</h5>'
       +'<h6>Ação, Fantasia, Aventura | 1h 50m</h6><br>'
       +'<small><b>Sinopse:</b> O lutador de MMA Cole Young deve treinar para liberar seu verdadeiro poder para unir-se aos maiores campeões mundiais contra inimigos da Exoterra em uma batalha decisiva pelo universo.</small>'
    +'</div>'
 +'</div>'
+'</div></div>';
$("body").append(colunm_five);
$("#fundo_modal-5, .close").click(function(){ $("#fundo_modal-5").hide(); });
$("#colunm_five").click(function(e){ e.stopPropagation(); });



