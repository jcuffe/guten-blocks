<?php

add_action("enqueue_block_assets", "eecontractingllc__enqueue_divider_image_frontend_assets");
add_action("enqueue_block_editor_assets", "eecontractingllc__enqueue_divider_image_editor_assets");

function eecontractingllc__enqueue_divider_image_editor_assets()
{
  wp_enqueue_script(
    'eecontractingllc-divider-image-editor',
    plugins_url('divider-image-editor.js', __FILE__),
    ['wp-blocks', 'wp-element', 'wp-editor']
  );

  wp_enqueue_style(
    'eecontractingllc-divider-image-editor',
    plugins_url('divider-image-editor.css', __FILE__),
    ['wp-edit-blocks']
  );
}

function eecontractingllc__enqueue_divider_image_frontend_assets()
{
  wp_enqueue_style(
    'eecontractingllc-divider-image-style',
    plugins_url('divider-image-style.css', __FILE__),
    []
  );
}
