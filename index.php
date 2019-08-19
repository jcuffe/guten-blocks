<?php

/**
 * Plugin Name: EEContracting Gutenberg Blocks
 * Author: Justin schweb
 * Version: 1.0.0
 */

// function loadMyBlock()
// {
//     wp_enqueue_script(
//         'two-column-block',
//         plugin_dir_url(__FILE__) . 'blocks/two-column-block.js',
//         array('wp-blocks', 'wp-editor'),
//         true
//     );
// }
// add_action('enqueue_block_editor_assets', 'loadMyBlock');

add_action('init', 'eecontractingllc__register_blocks');

function eecontractingllc__register_blocks()
{
    // Register our block script with WordPress
    $blocks = array('service-list-item', 'two-column-blurb');

    // Have access to wp_nav_menu

    // Get menu items
    // Register them somehow
    // Utilize them in javascript
    ?>
<script>
    window.nav = `<?= wp_nav_menu(array('theme_location' => 'menu-1', 'echo' => false)) ?>`
</script><?php
                foreach ($blocks as $blockName) {
                    wp_register_script(
                        'eecontractingllc-' . $blockName . '-script',
                        plugins_url('dist/' . $blockName . '.js', __FILE__),
                        array('wp-blocks', 'wp-element', 'wp-editor')
                    );

                    // Register base CSS  
                    wp_register_style(
                        'eecontractingllc-' . $blockName . '-style',
                        plugins_url('dist/' . $blockName . '-style.css', __FILE__),
                        array()
                    );

                    // Register editor-specific CSS
                    wp_register_style(
                        'eecontractingllc-' . $blockName . '-editor',
                        plugins_url('dist/' . $blockName . '-editor.css', __FILE__),
                        array('wp-edit-blocks')
                    );

                    // Enqueue the assets in the editor
                    register_block_type('eecontractingllc/' . $blockName, array(
                        'editor_script' => 'eecontractingllc-' . $blockName . '-script',
                        'editor_style' => 'eecontractingllc-' . $blockName . '-editor',
                        'style' => 'eecontractingllc-' . $blockName . '-style'
                    ));
                }
            }
