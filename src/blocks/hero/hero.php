<?php

add_action("enqueue_block_assets", "eecontractingllc__enqueue_hero_frontend_assets");
add_action("enqueue_block_editor_assets", "eecontractingllc__enqueue_hero_editor_assets");

function eecontractingllc__enqueue_hero_editor_assets()
{
  // Get nav menu data from WP database
  $theme_locations = get_nav_menu_locations();
  $term = get_term($theme_locations['menu-1'], 'nav_menu');
  $nav = wp_get_nav_menu_items($term);

  $term = get_term($theme_locations['footer'], 'nav_menu');
  $hero = wp_get_nav_menu_items($term);

  // Enqueue editor script with injected nav menu data
  wp_register_script(
    'eecontractingllc-hero-editor',
    plugins_url('hero-editor.js', __FILE__),
    ['wp-blocks', 'wp-element', 'wp-editor']
  );

  wp_localize_script('eecontractingllc-hero-editor', 'navMenu', $nav);
  wp_localize_script('eecontractingllc-hero-editor', 'heroMenu', $hero);

  wp_enqueue_script('eecontractingllc-hero-editor');

  wp_enqueue_style(
    'eecontractingllc-hero-editor',
    plugins_url('hero-editor.css', __FILE__),
    ['wp-edit-blocks']
  );
}

function eecontractingllc__enqueue_hero_frontend_assets()
{
  wp_enqueue_style(
    'eecontractingllc-hero-style',
    plugins_url('hero-style.css', __FILE__),
    []
  );

  wp_enqueue_script(
    'eecontractingllc-hero-behavior',
    plugins_url('hero-behavior.js', __FILE__),
    ['jquery']
  );
}
