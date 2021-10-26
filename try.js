try{
  console.log('start of try runs');

  unicycle;  //nothing on the program called like this

  console.log ('end of try runs --does not reach');

  }catch(err){

    console.log('error has occured: ' + err);
  } finally {
    console.log('this always run');
  }

  console.log('...then the execution continues');