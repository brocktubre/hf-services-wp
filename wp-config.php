<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'hf_services_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'password123!@#');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ToB_Y5<3@,V((WB-qX5mLK6o6Sv,5Zi!*zWgGz^SO9oXiaT&o7x4-v/r0!826YkY');
define('SECURE_AUTH_KEY',  't*o_~)-l96ld~[?_xcdpO234[rv=Slox>g=]G8W]58CJ:l]`EJ0|`mexjN95XB/$');
define('LOGGED_IN_KEY',    ')mm<Y<W+!egX#oEt3tYJ[Fi6`I%coExVXi+=nM]9{1Q]Gd,rh)}gZg:*c;#xtCMa');
define('NONCE_KEY',        'D&CvKoJ?4pK#y $G]#?XXXG0wmo2%60Bzzl ]k0ALRlRwsmJVGttE@[<flG &*uO');
define('AUTH_SALT',        '8O.[~`Nw?FFH!I.c[/{vx(%#uO+_5[}nJ{{0gQ1p+ws!yH?8`=(*.ZMD&[@|O+zC');
define('SECURE_AUTH_SALT', 'SQ1[tRdm{.V@Z,F 7E7YB^%<z)dyR-4t7Odfs3A{RjC&R{l]l{*.=I([$!k*_~F8');
define('LOGGED_IN_SALT',   '&c?jSy4cuxJ#*!_M9=)Ub {me_ k*eQW(7J:au!(kTM}I@|iQIC&^Y0u:VyRX Yb');
define('NONCE_SALT',       'M:v)`w:~%)?WSCxZ6)PaUu@y*Jn$@wtHC=E)Kr|F{:r#! 5_N6+Hq%[)^`w1c{js');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
