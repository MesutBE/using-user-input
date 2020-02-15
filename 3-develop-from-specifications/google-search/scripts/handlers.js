function gooooogle(triggeredEvent) {
  // read & process user input
  debugger;
  const userInput = triggeredEvent.target.form.query.value;

  // call the core logic
  const searchQuery = generateSearchURL(userInput);

  // render results for the user
  window.open(searchQuery, '_blank');

  // log action for developers
  console.log('\n-- user action --');
  console.log('userInput:', '(' + typeof userInput + ')', userInput);
  console.log('searchURL:', '(' + typeof searchQuery + ')', searchQuery);

  // tell the browser everything is OK
  return true;
}
