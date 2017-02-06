var path = new Path();
path.strokeColor = 'black';
var start = new Point(100,100);
path.moveTo(start);
path.lineTo(start + [100,-50]);

var circle = new Path.circle({
    center: view.center,
    radius:30,
    strokeColor: 'black'
});

function onResize(event)
{
    path.position = view.center;
}