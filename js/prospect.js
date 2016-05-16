$(function(){
  $("form.prospect-registration").submit(function(event){
    event.preventDefault();
    var email = $("input[name='prospect[email]']", this).val();

    bowtie.user.profile({
      email: email,
      email_submitted_at: Date.now()
    }).done(function(){
      $('.prospect-registration-pending', this).hide();
      $('.prospect-registration-successful', this).show();
    }.bind(this));
  });
});
