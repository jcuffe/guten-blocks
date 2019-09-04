<?php

add_action("enqueue_block_assets", "eecontractingllc__enqueue_three_column_image_blurb_frontend_assets");
add_action("enqueue_block_editor_assets", "eecontractingllc__enqueue_three_column_image_blurb_editor_assets");

function eecontractingllc__enqueue_three_column_image_blurb_editor_assets()
{
  wp_enqueue_script(
    'eecontractingllc-three-column-image-blurb-editor',
    plugins_url('three-column-image-blurb-editor.js', __FILE__),
    ['wp-blocks', 'wp-element', 'wp-editor']
  );

  wp_enqueue_style(
    'eecontractingllc-three-column-image-blurb-editor',
    plugins_url('three-column-image-blurb-editor.css', __FILE__),
    ['wp-edit-blocks']
  );
}

function eecontractingllc__enqueue_three_column_image_blurb_frontend_assets()
{
  wp_enqueue_style(
    'eecontractingllc-three-column-image-blurb-style',
    plugins_url('three-column-image-blurb-style.css', __FILE__),
    []
  );
}
