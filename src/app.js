var notepad = new Core_Passport_Login_Enter_NotepadModel();

notepad.get().done(function() {
  var enter = new Core_Passport_Login_Enter_EnterModel();
  enter.s_login = 'spa.gromakov@gmail.com';
  enter.s_notepad = notepad.s_notepad;
  enter.s_password = notepad.hash('lkchpy91');
  enter.post().done(function() {
    console.log('User has been authorized');
  }).fail(function(o_error) {
    if (o_error['s_message'])
      console.log(o_error['s_message']);
    else
      console.log('An error has occurred while attempt to sign in.');
  });
}).fail(function(o_error) {
  if (o_error['s_message'])
    console.log(o_error['s_message']);
  else
    console.log('An error has occurred while attempt to create notepad.');
});
