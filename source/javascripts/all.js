//= require jquery
//= require bootstrap-sprockets
//= require_tree .



$(document).on('click', function(e){
  if (e.target.matches('.step-item')) {
    e.target.remove();
  }
})

$(document).ready(function() {

  $(document).on('keyup', function(event) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
    if ($('.form').hasClass('hidden')) {
      if ( event.keyCode == 65 ) {
        $("#player1_race td.active").next().addClass('active');
        $('#player1_race td.active').first().removeClass('active');
      }

      if ( event.keyCode == 76 ) {
        $( "#player2_race td.active" ).next().addClass('active');
        $('#player2_race td.active').first().removeClass('active');
      }
    }
  });

  $('#step-creation').on('submit', function(event){
    event.preventDefault();
    var value = $('#step').val();
    var newStep = "<a class='step-item'>" + value + "</a>"
    $('#steps').append(newStep);
    $('#step').val("");
  });

  $('#team-creation').on('submit', function(event){
    event.preventDefault();
    refreshNames();
  });

  function refreshNames() {
    var teamOne = $('#name_team_1').val();
    var teamTwo = $('#name_team_2').val();
    var teamThree = $('#name_team_3').val();
    $('#team-name-1').text(teamOne);
    $('#team-name-2').text(teamTwo);
    $('#team-name-3').text(teamThree);
  }

  $('#start').on('click', function() {
    refreshNames();
    $('.form').addClass('hidden');
    $('.race').removeClass('hidden');
  })

});


