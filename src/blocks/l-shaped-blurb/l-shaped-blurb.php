<?php

add_action("enqueue_block_assets", "eecontractingllc__enqueue_l_shaped_blurb_frontend_assets");
add_action("enqueue_block_editor_assets", "eecontractingllc__enqueue_l_shaped_blurb_editor_assets");

function eecontractingllc__enqueue_l_shaped_blurb_editor_assets()
{
  wp_enqueue_script(
    'eecontractingllc-l-shaped-blurb-editor',
    plugins_url('l-shaped-blurb-editor.js', __FILE__),
    ['wp-blocks', 'wp-element', 'wp-editor']
  );

  wp_enqueue_style(
    'eecontractingllc-l-shaped-blurb-editor',
    plugins_url('l-shaped-blurb-editor.css', __FILE__),
    ['wp-edit-blocks']
  );
}

function eecontractingllc__enqueue_l_shaped_blurb_frontend_assets()
{
  wp_enqueue_style(
    'eecontractingllc-l-shaped-blurb-style',
    plugins_url('l-shaped-blurb-style.css', __FILE__),
    []
  );
}
