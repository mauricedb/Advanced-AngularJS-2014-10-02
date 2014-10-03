var watches = [];
function apply() {
    watches.forEach((function (watch) {
        var value = watch.watcher();
        if (value !== watch.previous) {
            watch.previous = value;
            watch.notify(value);
        }
    }));
}

var data = {
    name: ""
};

//Object.observe(data, function(e) {
//    console.log(e);
//});



watches.push({
    watcher: function() {
        return data.name;
    },
    notify:function(value) {
        console.log("New value:", value)
    }
});

apply()
data.name = "Maurice";
apply()



data.name = "John";
apply()

data.x = 1;
apply()
