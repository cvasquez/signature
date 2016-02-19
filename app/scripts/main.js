var firstName = '',
    lastName = '',
    position = '';

updateSignature('#firstName', firstName, '.firstName');
updateSignature('#lastName', lastName, '.lastName');
updateSignature('#position', position, '.position');
updateSignature('#phone', phone, '.phone');
updateSignature('#website', website, '.website');
updateSignature('#twitter', twitter, '.twitter');

function updateSignature(elem, theVar, theField) {
  $(elem).keyup(function() {
    theVar = $(elem).val();

    $(theField).html(theVar);
  });
}
