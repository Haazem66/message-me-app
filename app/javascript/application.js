// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery
//= require semantic-ui
import "@hotwired/turbo-rails"
import * as jquery from "jquery"
import "semantic-ui" 
import "controllers"


scroll_bottom = function() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

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
scroll_bottom();
// $(document).on('turbo:load', function(){ //     $('.ui.dropdown').dropdown(); // }) import "channels"
