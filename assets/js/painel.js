$(function(){
  var $commit = $('.commit-card');

  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/LukasMeine/events',
    success: function(data) {
      console.log(data)
      $.each(data, function(i, commits){
        $('.commits').append('<div class="commit-card"><div class="person-avatar" style="background-image: url('+ commits.actor.avatar_url +');"></div><p class="action font2 fw700"><span class="type-of-action font2 fw700">Commited</span> to <span class="branch font2 fw700">novo_siest</span> at <span class="repository font2 fw700">LukasMeine/siestera</span></p><p class="log-commit font2 fw700"><span class="git-user font2 fw700">'+ commits.actor.login +' </span><span class="action-logged font1 fw400">commited Devmind commit in 2017-07-31 11:59:02</span></p></div>')
      });

    }
  });
});
