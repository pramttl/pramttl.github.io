function polypointscircle(N,x0,y0,R) {
    // Returns an array with the coodrdinates of a regular polygon.
    var polypoints = new Array();
    for (i=0; i<N; i++){
      alpha = i * (2*Math.PI)/N + (Math.PI/2);
      x = x0 + R*Math.cos(alpha)
      y = y0 - R*Math.sin(alpha)
      polypoints.push({x:x,y:y})
    }
    return polypoints;
    // Example: polypoints = 
};

var pp = polypointscircle(5,500,500,200)

$('#cy').cytoscape({
  showOverlay: false,

  layout: {
    name: 'preset'
  },
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'shape': 'data(faveShape)',
        'width': 'mapData(weight, 40, 80, 20, 60)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 2,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff'
      })
    .selector(':selected')
      .css({
        'border-width': 3,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'width': 'mapData(strength, 70, 100, 2, 6)',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'none',
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'target-arrow-color': 'data(faveColor)'
      })
    .selector('edge.questionable')
      .css({
        'line-style': 'dotted',
        'target-arrow-shape': 'diamond'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'node1.example.com', name: 'node1.example.com', weight: 10, faveColor: '#6FB1FC', faveShape: 'ellipse' }, 
        position: {x: pp[0].x, y: pp[0].y}, },
      { data: { id: 'node2.example.com', name: 'node2.example.com', weight: 10, faveColor: '#6FB1FC', faveShape: 'ellipse' }, 
        position: {x: pp[1].x, y: pp[1].y}, },
      { data: { id: 'node3.example.com', name: 'node3.example.com', weight: 10, faveColor: '#6FB1FC', faveShape: 'ellipse' }, 
        position: {x: pp[2].x, y: pp[2].y}, },
      { data: { id: 'node4.example.com', name: 'node4.example.com', weight: 10, faveColor: '#6FB1FC', faveShape: 'ellipse' }, 
        position: {x: pp[3].x, y: pp[3].y}, },
      { data: { id: 'node5.example.com', name: 'node5.example.com', weight: 10, faveColor: '#6FB1FC', faveShape: 'ellipse' }, 
        position: {x: pp[4].x, y: pp[4].y}, },
    ],
    edges: [
      { data: { source: 'node1.example.com', target: 'node2.example.com', faveColor: '#6FB1FC', strength: 90 } },
    ]
  },
  
  ready: function(){
    window.cy = this;
    
    // giddy up
  }
});
