var tasks = [];

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

$("save-task .saveBtn").click(function() {
    var taskText = $("textarea").val();
    tasks.push({
        text: taskText
    });
    console.log(tasks);
});

loadTasks();