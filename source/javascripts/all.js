//= require jquery
//= require bootstrap-sprockets
//= require_tree .

// DB
var DB = {
  teams: [],
  steps: []
};

// ?

$(document).on('click', function(e){
  if (e.target.matches('.step-item')) {
    e.target.remove();
  }
});

$(document).ready(function() {

  // WAGONS
  function moveForward(teamId) {
    var team = DB.teams[teamId];
    var $track = $(".racer-table .player[data-team="+ teamId +"]");

    $track.find("td.active").next().addClass('active');
    $track.find("td.active").first().removeClass('active');

  }

  function moveBackward(teamId) {
    var team = DB.teams[teamId];
    var $track = $(".racer-table .player[data-team="+ teamId +"]");

    $track.find("td.active").prev().addClass('active');
    $track.find("td.active").last().removeClass('active');
  }

  // STEPS CREATION

  $('#step-creation').on('submit', function(event){
    event.preventDefault();
    var value = $('#step').val();
    var newStep = "<a class='step-item'>" + value + "</a>";

    createStep(newStep);

    $('#steps').append($("<li>").html(DB.steps.length + " - " + newStep));
    $('#step').val("");
  });

  function createStep(step) {
    DB.steps.push(step)    
  }

  function displaySteps() {
    console.log(DB.steps);
  }

  // TEAMS CREATION

  $('#team-creation').on('submit', function(event){
    event.preventDefault();
    createTeams();
  });

  function createTeams() {
    var teamOne = $('#name_team_1').val();
    var teamTwo = $('#name_team_2').val();

    DB.teams = [
      {
        name: teamOne,
        score: 0
      },
      {
        name: teamTwo,
        score: 0
      }
    ];
  }

  function displayTeams() {
    // T1
    $('.team-controls[data-team=0] .team-name').text(DB.teams[0].name);
    $('.team-controls[data-team=0] .score').text(DB.teams[0].score);
    // T2
    $('.team-controls[data-team=1] .team-name').text(DB.teams[1].name);
    $('.team-controls[data-team=1] .score').text(DB.teams[1].score);
  }

  // SCORES

  $(".team-controls .score-up").on("click", function() {
    var teamId = $(this).parents(".team-controls").data('team');
    var team = DB.teams[teamId];
    team.score += 1;
    displayTeams();
    moveForward(teamId);
  });

  $(".team-controls .score-down").on("click", function() {
    var teamId = $(this).parents(".team-controls").data('team');
    var team = DB.teams[teamId];
    team.score -= 1;
    displayTeams();
    moveBackward(teamId);
  });


  // START THE COMPETITION
  $('#start').on('click', function() {
    displayTeams();
    displaySteps();

    $('.form').addClass('hidden');
    $('.race').removeClass('hidden');
  });

});


