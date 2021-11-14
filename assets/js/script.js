var tasks = [];

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(".saveBtn").click(function() {
    var taskText = $(this).siblings("textarea").val()
    tasks.push({
        text: taskText
    });
    console.log(tasks);
    saveTasks();
});
