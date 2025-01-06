# Page builder

While you could make different templates for all your page types, the idea is to make pages as modular as possible. Every unique element of your website could be a partial and a dedicated button in the page builder.

If the layout of a page is totally different - or you really want to - you can always opt for using templates.

The blocks in the page builder are vertically layed out using [Stacks](/features/stacks.md). Blocks itself use a custom [Fluid grid](/features/fluid-grid.md)

## Adding blocks
Add a block by using the [add block command](/getting-started/commands.html#add-page-builder-block). Alternatively you could edit `resources/fieldsets/page_builder.yaml` to add blocks (preferably imports) to the fieldset. In `resources/views/default.antlers.html` you can see the blocks being loaded. Antlers will look in the `resources/views/page_builder/` folder for partials with the handle of your block.

Peak ships with the following blocks:

* Article ([long form content](/features/bard.html))
* Call to action (title, text and a button)
* Collection (title and links to other entries)
* [Forms](/features/forms.html)
* Link blocks (blocks with a title and text that link to other entries)

For example if you add a fieldset to the `page_builder.yaml` with the handle `call_to_action` make sure you add a `_call_to_action.antlers.html` file to the `resources/views/page_builder` folder.

> Note: blocks are scoped under `block` to avoid collision with other fields. Make sure you reference variables in a block like this:
```html
{{ block:field_name }}
```

Alternatively you can use the generate block command in Peak. Run `php please peak:make:block` and follow the instructions by filling in a name, a filename and a fieldset instruction. All the files needed will be generated and the block will be added to the `page_builder.yaml` file.

## Block partial
All page builder blocks extend the `resources/views/page_builder/_block.antlers.html` partial so you only have to add site wide styling for blocks in one partial. All block content will be slotted into this partial.

## Installing blocks
You can install premade blocks using the [install block command](/getting-started/commands.html#install-page-builder-block). Peak ships with a bunch of premade blocks you can style yourself.
