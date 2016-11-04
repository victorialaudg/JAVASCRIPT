$(document).ready(function(){

var $todoList=$("#todo-list");
//var $todolistdone=$("#todo-listdone");
TodoList.setElement($todoList);
//TodoList.setElement($todolistdone);


$('#btn-add').click(function(){
	var $input = $("#input-task");
	var taskTitle= $input.val();
	//alert(taskTitle);
	TodoList.showTasks();
	//debugger
	TodoList.addTask(taskTitle);
	$('#input-task').val("");

	updatePendingTasksCounter();

	

});

$("#todo-list").on("click",".btn-remove", function(){
	var $li= $(this).parents("li");
	var taskId=$li.data('id');
	TodoList.removeTask(taskId);
	$li.remove();
	updatePendingTasksCounter();
});





function updatePendingTasksCounter(){

	var $norealizadas= $('input[type=checkbox]:not(:checked)').length;
	var $realizadas= $('input[type=checkbox]:checked').length;
	$('#count-todos').text($norealizadas);
}



$("#todo-list").on('click','input[type=checkbox]', function(){
	var $li= $(this).parents("li");
	var $realizadas= $('input[type=checkbox]:checked');
	var $txt= $li.text();
    $("#todo-listdone").append($li);
     
});



$("#todo-listdone").on('click','input[type=checkbox]', function(){
	var $li= $(this).parents("li");
	var $norealizadas= $('input[type=checkbox]:not(:checked)');
	$("#todo-list").append($li);

});

$("#todo-listdone").on('click','.btn-remove',function(){
	var $li= $(this).parents("li");
	var taskId=$li.data('id');
	TodoList.removeTask(taskId);
	$li.remove();
	updatePendingTasksCounter();
});



/*
function tareasrealizadas(){
	var $realizadas= $('input[type=checkbox]:checked');
	$('body').on('click','input[type=checkbox]', function(){

	TodoList.markAsDone(taskId);
});

  }
*/
$('body').on('click', 'input[type=checkbox]', function(){
	updatePendingTasksCounter();
	});
	
});

/* 
Todo el acceso y modificación del DOM se hará mediante JQuery
Para referencia, consultar https://api.jquery.com/ y https://www.google.com.ar/
No es necesario modificar nada más que este archivo para resolver los siguientes ejercicios.

var $todoList=document.getElementById("todo-list");
TodoList.setElement("$todoList");

1) Cuando el DOM esté completo, invocar una funcion que ejecute todas las sentencias de este archivo
Para esto usar ready()

Lo que sigue va todo dentro de la función que invoca ready()

1) declarar una variable $todoList que contenga el elemento ul. 
// TodoList.setElement($todoList); // Luego vinculo el módulo TodoList con la ul

2) Dentro del event handler (funcion a ejecutarse dado cierto evento) del evento click
del boton para agregar tareas, hacer lo siguiente:
Obtener el valor del input y guardarlo en una variable taskTitle. Usar .val()
// TodoList.addTask(taskTitle);
Vaciar el input. Usar .val("")

3) Ante el evento click sobre el boton de eliminar (de clase btn-remove),
se tiene que invocar a TodoList.removeTask(taskId)
El taskId lo podemos obtener a través del atributo data-id de cada Task, con el metodo data().
Para obtener un data attribute llamado nombre, por ej:
<a href="htp://www.google.com.ar" data-nombre='pepe'>Ir a Google</a>
lo podemos obtener como $('a').data('nombre'); // Devuelve 'pepe'
Ver método render() de Task.
Para obtener el li que contiene al boton, podemos usar parents('elSelector')
Luego eliminar el li encontrado, usando remove()

4) Implementar una funcion updatePendingTasksCounter()
que cuente las tareas sin tildar (pendientes) y modifique el valor del contador al pie de la lista.
Utilizar text() para cambiar el valor del contador.
La propiedad del checkbox que indica si esta seleccionado o no es 'checked'
Invocar a esta nueva función donde se considere necesario

5) Implementar la funcionalidad de marcar una tarea como realizada, invocando a
TodoList.markAsDone(taskId)
*/