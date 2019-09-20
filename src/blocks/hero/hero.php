<?php

add_action("enqueue_block_assets", "eecontractingllc__enqueue_hero_frontend_assets");
add_action("init", "eecontractingllc__enqueue_hero_editor_assets");

function eecontractingllc__enqueue_hero_editor_assets()
{
  // Enqueue editor script with injected nav menu data
  wp_register_script(
    'eecontractingllc-hero-editor',
    plugins_url('hero-editor.js', __FILE__),
    ['wp-blocks', 'wp-element', 'wp-editor']
  );

  wp_enqueue_script('eecontractingllc-hero-editor');

  wp_enqueue_style(
    'eecontractingllc-hero-editor',
    plugins_url('hero-editor.css', __FILE__),
    ['wp-edit-blocks']
  );

  register_block_type('eecontractingllc/hero', [
    'editor_script' => 'eecontractingllc-hero-editor',
    'render_callback' => 'eecontractingllc__render_hero'
  ]);
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

function eecontractingllc__render_hero($attributes, $content)
{
  $imageUrl = $attributes["imageUrl"];
  $headline = $attributes["headline"];
  $buttonText = $attributes["buttonText"];

  $markup = "<div class=\"wp-block-eecontractingllc-hero\" style=\"background-image: url('$imageUrl')\">" .
    "<h1 class=\"headline\">$headline</h1>" .
    "<ul class=\"hero-menu\">" .
    wp_nav_menu(['theme_location' => 'footer', 'container' => '', 'menu_class' => 'hero-menu', 'echo' => false]) .
    "</ul>" .
    "<div class=\"splash\">" .
    "<ul class=\"splash-menu\">" .
    wp_nav_menu(['theme_location' => 'menu-1', 'container' => '', 'menu_class' => 'splash-menu', 'echo' => false]) .
    "</ul>" .
    "<img src=\"" .
    plugins_url('../src/common/svg/logo-splash.svg', __FILE__) .
    "\"/>" .
    "<button class=\"primary thick\">$buttonText</button>" .
    "</div>" .
    "</div>";
  return $markup;
}
