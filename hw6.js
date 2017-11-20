var options = {
  valueNames: [ 'id']
};

// Init list
var idField = $('#id-field'),
    nameField = $('#name-field'),
    addBtn = $('#add-btn'),
    removeBtns = $('.remove-item-btn'),
    editBtns = $('.edit-item-btn');

// Sets callbacks to the buttons in the list
refreshCallbacks();

addBtn.click(function() {
  contactList.add({
    id: Math.floor(Math.random()*110000),
    name: nameField.val(),
    });
  clearFields();
  refreshCallbacks();
});

editBtn.click(function() {
  var item = contactList.get('id', idField.val())[0];
  item.values({
    id:idField.val(),
    name: nameField.val(),
    });
  clearFields();
  addBtn.show();
});

function refreshCallbacks() {
  // Needed to add new buttons to jQuery-extended object
  removeBtns = $(removeBtns.selector);

  
  removeBtns.click(function() {
    var itemId = $(this).closest('tr').find('.id').text();
    contactList.remove('id', itemId);
  });
  
  editBtns.click(function() {
    var itemId = $(this).closest('tr').find('.id').text();
    var itemValues = contactList.get('id', itemId)[0].values();
    idField.val(itemValues.id);
    nameField.val(itemValues.name);
   
    editBtn.show();
    addBtn.hide();
  });
}

function clearFields() {
  nameField.val('');
  
}