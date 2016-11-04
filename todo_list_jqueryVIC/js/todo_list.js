var TodoList = (function(){
  //Privado
  var tasks = [];
  var $list;

  function Task(taskTitle){
    // Privado
    var id = nextId();
    var $li;

    function nextId(){
      var tasksCount = tasks.length;
      if(tasksCount == 0){
        // Es el primer elemento, retorno 1
        var nextId = 1
      }else{
        // Busco el ultimo elemento (mayor id) y le sumo 1
        var nextId = tasks[tasksCount - 1].getId() + 1
      }
      return nextId;
    }


    // Publico
    this.title = taskTitle;
    this.done = false;
    this.getId = function(){
      return id
    }
    this.render = function(){
      $li = $(
        "<li data-id=" + this.getId() + " class='ui-state-default'>" +
          "<div class='checkbox'>" + 
            "<label><input type='checkbox' id='check' />" + this.title + "</label>" +
            "<label style='float: right;'>" +
              "<button class='btn btn-danger btn-xs btn-remove'><span class='glyphicon glyphicon-trash'></span></button>" +
            "</label>" +
          "</div>"+
        "</li>"
      );
      $list.append($li);
    }


  }

  function getTask(taskId){
    var task = tasks.find(function(task){
      return task.getId() == taskId;
    });
    return task;
  }

  // Publico
  function setElement(element) {
    $list = element;
  }

  function addTask(taskTitle){
    var task = new Task(taskTitle);
    tasks.push(task);
    task.render();
  }

  function removeTask(taskId){
    var foundTask = getTask(taskId);
    if(foundTask){
      var foundTaskIndex = tasks.indexOf(foundTask);
      tasks.splice(foundTaskIndex, 1);
    }
  }

  function showTasks(){
    for(i in tasks){
      var task = tasks[i];
      console.log("ID: " + task.getId() + ", Title: " + task.title + ", Done: " + task.done);
    }
  }



  function markAsDone(taskId){
    var task = getTask(taskId);
    task.done = !task.done;
  }




  var object = {
    setElement: setElement,
    addTask: addTask,
    removeTask: removeTask,
    showTasks: showTasks,
    markAsDone: markAsDone
  }

  return object;
})();