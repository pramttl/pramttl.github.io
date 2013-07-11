$('#cy').cytoscape({
  showOverlay: false,

  layout: {
    name: 'preset'
  },
  
  style: cytoscape.stylesheet()
    .selector('node.ganeti-node')
      .css({
        'shape': 'ellipse',
        'height': 'mapData(weight, 40, 80, 10, 30)',
        'width': 'mapData(weight, 40, 80, 10, 30)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 1,
        'text-outline-color': '#6FB1FC',
        'background-color': '#6FB1FC',
        'color': '#fff'
      })
    .selector('node.ganeti-instance')
      .css({
        'shape': 'rectangle',
        'height':2,
        'width': 20,
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 0.5,
        'font-size':3,
        'text-outline-color': '#FC6FB1',
        'background-color': '#FC6FB1',
        'color': '#fff',
        'visibility':'hidden',
      })
    .selector('node.ganeti-instance.active')
      .css({
        'visibility':'visible',
        'text-outline-color': 'brown',
        'background-color': 'white',
      })
    .selector(':selected')
      .css({
        'border-width': 2,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'width': 'mapData(strength, 0, 100, 0, 25)',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'none',
        'line-color': 'data(color)',
        'source-arrow-color': 'data(color)',
        'target-arrow-color': 'data(color)'
      })
    .selector('edge.instance-edge')
      .css({
        'target-arrow-shape': 'none'
      })
    .selector('edge.active')
      .css({
        'line-color':"red",
        'target-arrow-color':"red"
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: CytoNodeList,
    edges: CytoEdgeList,
  },
  
  ready: function(){
    window.cy = this;

    // To make Primary Instances corresponding to a Ganeti-Node visible.
    cy.$('node.ganeti-node').click(function(){
        // First hide any of the instance-vertices that are already visible.
        cy.$(".ganeti-instance").css({visibility:"hidden"});
        // Now, show the instance vertices corresponding to this node (being clicked)
        var branches_selector = "edge[source='" + this.id() + "']";
        // Make target of each branch ending at an instance vertice visible.
        cy.$(branches_selector).filter(".instance-edge").each(function(i, branch){
            branch.target()[0].css({visibility:'visible'});
        });
    });

    // Highlights the edge indicating failover direction.
    cy.$('node.ganeti-instance').mousedown(function(){
        cy.$('edge').toggleClass("active",false);
        pnode = VMGraph[this.id()][0];
        snode = VMGraph[this.id()][1];
        snode_edge_selector = "edge[source='" + pnode + "'][target='" + snode + "']";
        //console.log(snode_edge_selector);
        eles = cy.$(snode_edge_selector)
        eles.toggleClass("active",true);
    });

  }
});

// InputBox Instance-Node Search Feature.
function vertexSearch(e) {
    if (e.keyCode == 13) {
        text = $('#vertexInput').val() // get the current value of the input field.
        var node_selector = "node[name ^='" + text + "']";
        console.log(node_selector);
        cy.$(node_selector).toggleClass("active",true)
    }
}

