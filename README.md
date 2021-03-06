# Visualising a Ganeti Cluster Graph with HTML5, Javascript (using Cytoscape JS)

The code makes use of the sample OSUOSL cluster configuration JSON and tries to 
create graphical visualisations for the cluster graph  made avaialbe by @ramereth, 
courtsey [OSUOSL](http://github.com/osuosl).
The goal of this is project is to experiment with various Ganeti Cluster Visualization 
strategies that System administrators find useful and develop intuitive prototypes.

The greater goal is to support the [Ganeti Web Manager](https://github.com/osuosl/ganeti_webmgr) 
project at the [OSUOSL](http://osuosl.org). Visualisation of clusters in the 
form of smart cluster mappings that will help System Administrators,
get more insights into their Cluster, Node, VM configuration
 and usage in a convenient manner.

# Requirements

All required Javascript Libraries are included in this project. A modern HTML5 
compatible web browser should be used.
The use of a Web Server is suggested to run the code without any problems, 
as scripts may use AJAX requests on the fly.

# Setup

1. Download Code and deploy in web directory of any running web server 
like Apache, Nginx,etc.

2. Visit the directory location in the browser.

# Example

[Ganeti-Cluster-Mapping-Example] (http://pramttl.github.io/)

This illustrates some visualization strategies of a ganeti cluster network.

### Features

* Nodes are represented as circles, which can host a number of primary instances, 
  and mirror data for instances hosted on other secondary nodes.
* Any node can play the role of both a primary node or a secondary node.
* Edges between nodes show the direction of failover possibility between two nodes.
* Edge thickness between the nodes gives and idea of the total number of failover
  possibilities existing between two nodes.
* Clicking on a Node causes it to show all the "Instances" attached to it. (Primary Instances)
* Instances "red" in color are not "running" and might require a failover.
* Mousedown on an instance highlights the corresponding failover edge
* Instance Lookup box provided on top-left. Type in a few characters and all matching instances are highlihted.
* Zoom In - Zoom Out using mouse scroll in any region by placing mouse-pointer there first.
* Long-click & hold the graph at any point and pan it in any direction to shift the whole graph object.
* Pan by using arrow keys, or use the previous mouse method: longclick-hold-move
* Select any node ans press the character "s" to see all the secondary instances for a given node.
* Press the character "c" at any time to clear (actually hide) all the visible instances.
* Press the character 'r' to reset the whole graph orientation as in the beginning.
* Most of this important information is available easily pressing character the 'h' ie. help.

### Todo/Upcoming features:

* Better instance arrangement or layout.
* Less subtle, more convenient panning


# Copyright

This work is licensed under a [Creative Commons Attribution-Share Alike 3.0
United States License](http://creativecommons.org/licenses/by-sa/3.0/us/).

vi: set tw=80 ft=markdown :
