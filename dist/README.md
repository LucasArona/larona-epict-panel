# ePict Panel for Grafana

## Introduction

This panel allows you to choose the image you want, and show live metrics over it.
You can easily add values on complex diagrams, or infrastructure picture for example.

Enter the URL of the image you want, and add some metrics.

### Options

#### Background URL

Enter the URL of the image over which you want to display metrics.

#### Boxes definitions

The boxes contains the data you want to show over the background image.

When you add a box, you have to set the **Metric Name** first (by default: "A-Series"), this value must match the name of the query you want to display in this box.

For example, if you want to show the value of the query "B" (that you created in "Metrics" tab), set this field to "B-Series". You can also use the "Alias" that you may have defined in your query.

If you want, you can add a **Prefix** and/or **Suffix** that will be appended before/after the value on your image.

The **Position** are the coordinates (X, Y) at which the value will be drawn. X:0, Y:0 is the top left corner of your image. 
Note that you can Ctrl-Click anywhere on the image, and a popup will show you the coordinates of the point on which you clicked.

If you add a link in the **URL** field, you will be able to click on the metric to follow that link.

The **Use thresholds** checkbox allows you to specify different colors based on the current value of your metric. You can also choose that the value blinks when the thresholds are reached. 

When **Has Orb** is checked, an orb can be displayed either next to the text or without the text.
The coloring follows the same threshold rules as the metric.

## Changelog

### v1.0.0

- First release

### v1.0.1

- Fix: Decimal separator now correctly localized

### v1.1.0

- New feature: You can now add a Link to your boxes.
- New feature: Added the option to display a prefix in addition to the suffix
- New feature: Add the thresholds feature (colors and blink)
- Bugfix: An error was displayed if the last datapoint of the serie was null

### v1.2.0
- New feature: You can now display a colored orb with the text

### v1.2.1
- New feature: You can now duplicate boxdefinitions

