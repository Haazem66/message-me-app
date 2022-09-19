// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery
//= require semantic-ui
import "@hotwired/turbo-rails"
import * as jquery from "jquery"
import "semantic-ui" 
import "controllers"
$(function() {     $('.ui.dropdown').dropdown(); 

}); 

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
// $(document).on('turbo:load', function(){ //     $('.ui.dropdown').dropdown(); // }) 