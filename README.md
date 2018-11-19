# ePict Panel for Grafana

## Introduction

This panel allows you to choose the image you want, and show live metrics over it.
You can easily add values on complex diagrams, or infrastructure picture for example.

Enter the URL of the image you want, and add some metrics.

### Options

#### Background URL

Enter the URL of the image over which you want to display metrics. For example: http://webSrv1/datacenter-network.jpg

#### Boxes definitions

The boxes contains the data you want to show over the background image.

When you add a box, you have to set the **Metric Name** first (by default: "A-Series"), this value must match the name of the query you want to display in this box.

For example, if you want to show the value of the query "B" (that you created in "Metrics" tab), set this field to "B-Series".

If you want, you can add a **Suffix** that will be appended after the value on your image.

The **Position** are the coordinates (X, Y) at which the value will be drawn. X:0, Y:0 is the top left corner of your image. 
Note that you can Ctrl-Click anywhere on the image, and a popup will show you the coordinates of the point on which you clicked.

## Changelog

### v1.0.0

- First release
