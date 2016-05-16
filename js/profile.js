$(function(){

  bowtie.user.profile(function(profile){
    if(profile.avatar){
      $("#avatar").each(function(){
        this.src = profile.avatar.url;
      });
    }
  });

  $("#avatar-upload").on("change", function(){
    var file = this.files[0];

    // Update the current avatar preview
    if(file){
       var fr = new FileReader();
       fr.onload = function () {
         $("#avatar").each(function(){
           this.src = fr.result;
         });
       }
       fr.readAsDataURL(file);
     }

    // Store the new avatar with the Bowtie User Profile
    bowtie.user.profile({
      avatar: file
    }, function(){
      alert("saved");
    })
  });

  $("#update_profile").on("click", function(){
    var profileName = $('#profile_name').val();
    var profileEmail = $('#profile_email').val();
    var profileOptin = $('#profile_optin').val();
    var profileMessage = $('#profile_message').val();

    // Store the new twitter handle to the Bowtie User Profile
    bowtie.user.profile({
      name: profileName,
      email: profileEmail,
      optin: profileOptin,
      message: profileMessage,
    }, function(){
      alert("Updated!");
    })
  });

});
