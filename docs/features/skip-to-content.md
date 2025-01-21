# Skip to content

Peak includes a skip to content button which is the first button that pops up when a user tabs. This enables them to skip directly to the content and skip the menu buttons.

> Note: the strings used in the partial are translatable and can be edited in `resources/lang/en/site.php`.

If you need to, you can add additional skip links via the slot of the view or disable the default content link by passing `defaults="false"`.

```
{{ partial:statamic-peak-tools::navigation/skip_links defaults="false" }}
    <a href="#search">Search</a>
    <a href="#contact">Contact</a>
{{ /partial:statamic-peak-tools::navigation/skip_links }}
```

The view that is being used to render this is part of the [Tools Addon](/getting-started/addons.html#tools). If you want to make changes to the views from this addon, you can publish them by running:

```bash
php artisan vendor:publish --tag="statamic-peak-tools-views"
```
