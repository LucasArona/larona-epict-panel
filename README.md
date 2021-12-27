# ePict Panel for Grafana

## Introduction

This panel allows you to choose the image you want, and show live metrics over it.
You can easily add values on complex diagrams, or infrastructure picture for example.

Enter the URL of the image you want, and add some metrics on it.

### Options

#### Background URL

Enter the URL of the image over which you want to display metrics.

#### Autoscale

Determines if the panel should automatically scale down its content to fit the view. This is useful if the image you want to show is too big for smaller screens.
Note that the autoscale feature is disabled while you are editing the settings, this allows you to accurately position your boxes.

#### Boxes definitions

The boxes contains the data you want to show over the background image.

When you add a box, you have to set the **Metric Name** first (by default: "A-Series"), this value must match the name of the metric you want to display in this box.
You can easily choose the Metric you want by clicking on **Change Metric**.

If you want, you can add a **Prefix** and/or a **Suffix** that will be appended before/after the value on your image.

The **Position** are the coordinates (X, Y) at which the value will be drawn. X:0, Y:0 is the top left corner of your image. 
Note that you can Ctrl-Click anywhere on the image, and a popup will show you the coordinates of the point on which you clicked. You can also move a box on the image with your mouse directly.

If you add a link in the **URL** field, you will be able to click on the metric to follow that link.

The **Symbol Library** allows you the show a symbol inside your box, you can also **Hide value** to hide the metric's value.

The **Orb** category allows you to show an orb either next to the text, or without the text.

The **Use thresholds** checkbox allows you to specify different colors based on the current value of your metric. You can also choose if the value blinks when the thresholds are reached.