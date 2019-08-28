<?php

add_action("enqueue_block_assets", "eecontractingllc__enqueue_animated_navbar_frontend_assets");
add_action("enqueue_block_editor_assets", "eecontractingllc__enqueue_animated_navbar_editor_assets");

function eecontractingllc__enqueue_animated_navbar_editor_assets()
{
  // Get nav menu data from WP database
  $theme_locations = get_nav_menu_locations();
  $term = get_term($theme_locations['menu-1'], 'nav_menu');
  $menu = wp_get_nav_menu_items($term);

  // Enqueue editor script with injected nav menu data
  wp_register_script(
    'eecontractingllc-animated-navbar-editor',
    plugins_url('animated-navbar-editor.js', __FILE__),
    ['wp-blocks', 'wp-element', 'wp-editor']
  );
  wp_localize_script('eecontractingllc-animated-navbar-editor', 'nav', $menu);
  wp_enqueue_script('eecontractingllc-animated-navbar-editor');

  wp_enqueue_style(
    'eecontractingllc-animated-navbar-editor',
    plugins_url('animated-navbar-editor.css', __FILE__),
    ['wp-edit-blocks']
  );
}

function eecontractingllc__enqueue_animated_navbar_frontend_assets()
{
  wp_enqueue_style(
    'eecontractingllc-animated-navbar-style',
    plugins_url('animated-navbar-style.css', __FILE__),
    []
  );

  wp_enqueue_script(
    'eecontractingllc-animated-navbar-behavior',
    plugins_url('animated-navbar-behavior.js', __FILE__),
    ['jquery']
  );
}
