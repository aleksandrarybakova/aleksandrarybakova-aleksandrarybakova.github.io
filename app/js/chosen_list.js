let chosen_list = {
    product_item: $('.product_form__item'),
    number_item: $('.num_of_prod'),


    show_chosen_list: function() {
        
        
        add_more.add_form.addClass('d-none');
        $('#add_more')[0].classList.add('d-none'); 
        $('.secure')[0].classList.add('d-none') ;
        for(let i=2; i<=choose_quant.quant_num; i++){
            // $(`#product${i}`).removeClass('d-none')
            $('.product_form__content').append(`<div class="product_form__group" id="product${i}">
        <section class="product_form__item">
          <p class="product_form__header product_name">Product <span class="num_of_prod">3</span></p>
          <label for="" class="product_form__description">Enter main keyword for the product</label>
          <input type="text" class="product_form__data" placeholder="for example, sylicon wine cup">
        </section> 
        <section>
          <label for="" class="product_form__description">Enter link to the similar product as a reference</label>
          <input type="text" class="product_form__data" placeholder="https://...">
        </section>
      </div>`)
        }
        add_more.start_form.removeClass('d-none');

        if($('.product_form__content').height() > 370){
            $('.product_form__content--wrapper').css('overflow-y', 'scroll')
        }
    
        
        // $('#add_more').addClass('d-none');
        // $('.secure').addClass('d-none');
       
    }

}