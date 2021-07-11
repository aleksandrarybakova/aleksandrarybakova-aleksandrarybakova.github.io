let choose_quant = {
    choose_item: $('.prod_quant'),
    choose_item_wrap: $('.choise_products__item'),
    discount: $('.prod_quant__discount'),
    input: $('.choise_products__item--check'),
    quant_num: null,

    change_colors: function(){
        if(choose_quant.input.attr('checked')){
        choose_quant.discount.css('color', '#A7A2CB');
        choose_quant.choose_item_wrap.css({'backgroundColor' : '#ffffff'});
        $(this).css({'backgroundColor' : '#F4F5FA'});
        $(this).find('.prod_quant__discount').css('color', '#23C967');
        choose_quant.quant_num = parseInt(choose_quant.get_num_of_products($(this).find('.quant_num')) )      
        }
    },

    get_num_of_products: function(el) {
        let quant_num = el.html();
        return quant_num;
    }



}