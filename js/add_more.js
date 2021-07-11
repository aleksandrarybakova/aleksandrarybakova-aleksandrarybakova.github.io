let add_more = {
    add_link: $('.add_more'),
    add_form: $('.add_form'),
    start_form: $('.start_form'),
    form: $('.product_form'),

    create_add_form: function(){             
        add_more.start_form.addClass('d-none');
        add_more.add_form.removeClass('d-none')
        
    }
}
