<?php

/**
 * Plugin Name: EEContracting Gutenberg Blocks
 * Author: Justin schweb
 * Version: 1.0.0
 */

$glob = plugin_dir_path(__FILE__) . "dist/*.php";
foreach (glob($glob) as $block) {
    include $block;
}
