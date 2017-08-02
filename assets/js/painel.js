$(function(){
  var $commit = $('.commit-card');

  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/xxrafaelzxx/events',
    success: function(data) {
      $.each(data, function(i, commites){
        var eae = commites.payload.ref,
        typedata = commites.type;

        if (typedata == "PushEvent" && eae !== null) {
          eae2 = eae.split('/')[2]
          $('.commits').append('<div class="commit-card"><div class="person-avatar" style="background-image: url('+ commites.actor.avatar_url +');"></div><p class="action font2 fw700"><span class="type-of-action font2 fw700">Pushed</span> to <span class="branch font2 fw700">'+ eae2 +'</span> at <a class="repository font2 fw700" target="_blank" href="https://github.com/'+commites.repo.name+'" >'+ commites.repo.name +'</a></p><p class="log-commit font2 fw700"><a target="_blank" href="https://github.com/'+commites.actor.login+'" class="git-user font2 fw700">'+ commites.actor.login +' </a><span class="action-logged font1 fw400">commited '+ commites.payload.commits[0].message +'</span></p></div>')
        }
      });

    }
  });

});
