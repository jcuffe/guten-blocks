<?php

add_action("enqueue_block_assets", "eecontractingllc__enqueue_service_list_item_frontend_assets");
add_action("enqueue_block_editor_assets", "eecontractingllc__enqueue_service_list_item_editor_assets");

function eecontractingllc__enqueue_service_list_item_editor_assets()
{
  wp_enqueue_script(
    'eecontractingllc-service-list-item-editor',
    plugins_url('service-list-item-editor.js', __FILE__),
    ['wp-blocks', 'wp-element', 'wp-editor']
  );

  wp_enqueue_style(
    'eecontractingllc-service-list-item-editor',
    plugins_url('service-list-item-editor.css', __FILE__),
    ['wp-edit-blocks']
  );
}

function eecontractingllc__enqueue_service_list_item_frontend_assets()
{
  wp_enqueue_style(
    'eecontractingllc-service-list-item-style',
    plugins_url('service-list-item-style.css', __FILE__),
    []
  );
}
