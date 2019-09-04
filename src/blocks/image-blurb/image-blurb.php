<?php

add_action("enqueue_block_assets", "eecontractingllc__enqueue_image_blurb_frontend_assets");
add_action("enqueue_block_editor_assets", "eecontractingllc__enqueue_image_blurb_editor_assets");

function eecontractingllc__enqueue_image_blurb_editor_assets()
{
  wp_enqueue_script(
    'eecontractingllc-image-blurb-editor',
    plugins_url('image-blurb-editor.js', __FILE__),
    ['wp-blocks', 'wp-element', 'wp-editor']
  );

  wp_enqueue_style(
    'eecontractingllc-image-blurb-editor',
    plugins_url('image-blurb-editor.css', __FILE__),
    ['wp-edit-blocks']
  );
}

function eecontractingllc__enqueue_image_blurb_frontend_assets()
{
  wp_enqueue_style(
    'eecontractingllc-image-blurb-style',
    plugins_url('image-blurb-style.css', __FILE__),
    []
  );
}
