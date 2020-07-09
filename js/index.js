$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
        interval: 2000
    });

    // ********* MODAL #1 *********
    $('#contacto1').on('show.bs.modal', function (e){ //fires immediately when the instance is called
        console.log('se esta mostrando modal 1');

        $('#contactoBtn1').removeClass('btn-outline-success');
        $('#contactoBtn1').addClass('btn-primary');
    });

    $('#contacto1').on('show.bs.modal', function (e){ //fires when the modal has been made visible
        console.log('se mostró modal 1');
    });

    $('#contacto1').on('hide.bs.modal', function (e){ //fires immediately when the instance is called
        console.log('se esta ocultando modal 1');

        $('#contactoBtn1').removeClass('btn-primary');
        $('#contactoBtn1').addClass('btn-outline-success');
    });

    $('#contacto1').on('hidden.bs.modal', function (e){ //fires when the modal has been made visible
        console.log('se ocultó modal 1');
    });

    // ********* MODAL #2 *********
    $('#contacto2').on('show.bs.modal', function (e){ //fires immediately when the instance is called
        console.log('se esta mostrando modal 2');

        $('#contactoBtn2').removeClass('btn-outline-success');
        $('#contactoBtn2').addClass('btn-primary');
    });

    $('#contacto2').on('show.bs.modal', function (e){ //fires when the modal has been made visible
        console.log('se mostró modal 2');
    });

    $('#contacto2').on('hide.bs.modal', function (e){ //fires immediately when the instance is called
        console.log('se esta ocultando modal 2');

        $('#contactoBtn2').removeClass('btn-primary');
        $('#contactoBtn2').addClass('btn-outline-success');
    });

    $('#contacto2').on('hidden.bs.modal', function (e){ //fires when the modal has been made visible
        console.log('se ocultó modal 2');
    });

    // ********* MODAL #3 *********
    $('#contacto3').on('show.bs.modal', function (e){ //fires immediately when the instance is called
        console.log('se esta mostrando modal 3');

        $('#contactoBtn3').removeClass('btn-outline-success');
        $('#contactoBtn3').addClass('btn-primary');
    });

    $('#contacto3').on('show.bs.modal', function (e){ //fires when the modal has been made visible
        console.log('se mostró modal 3');
    });

    $('#contacto3').on('hide.bs.modal', function (e){ //fires immediately when the instance is called
        console.log('se esta ocultando modal 3');

        $('#contactoBtn3').removeClass('btn-primary');
        $('#contactoBtn3').addClass('btn-outline-success');
    });

    $('#contacto3').on('hidden.bs.modal', function (e){ //fires when the modal has been made visible
        console.log('se ocultó modal 3');
    });
});
