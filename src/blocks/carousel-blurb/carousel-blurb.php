<?php

add_action("enqueue_block_assets", "eecontractingllc__enqueue_carousel_blurb_frontend_assets");
add_action("enqueue_block_editor_assets", "eecontractingllc__enqueue_carousel_blurb_editor_assets");

function eecontractingllc__enqueue_carousel_blurb_editor_assets()
{
  wp_enqueue_script(
    'eecontractingllc-carousel-blurb-editor',
    plugins_url('carousel-blurb-editor.js', __FILE__),
    ['wp-blocks', 'wp-element', 'wp-editor']
  );

  wp_enqueue_style(
    'eecontractingllc-carousel-blurb-editor',
    plugins_url('carousel-blurb-editor.css', __FILE__),
    ['wp-edit-blocks']
  );
}

function eecontractingllc__enqueue_carousel_blurb_frontend_assets()
{
  wp_enqueue_script(
    'slick-carousel',
    'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
    ['jquery']
  );

  wp_enqueue_script(
    'eecontractingllc-carousel-blurb-behavior',
    plugins_url('carousel-blurb-behavior.js', __FILE__),
    ['slick-carousel', 'jquery']
  );

  wp_enqueue_style(
    'slick-carousel',
    'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
    []
  );

  wp_enqueue_style(
    'eecontractingllc-carousel-blurb-style',
    plugins_url('carousel-blurb-style.css', __FILE__),
    []
  );
}
