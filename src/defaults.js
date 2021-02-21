((ls) => {
  'use strict';

  // One-time reset of settings
  chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
      // Open the options page after install
    } else if (
      details.reason === 'update' &&
      /^(((0|1)\..*)|(2\.(0|1)(\..*)?))$/.test(details.previousVersion)
    ) {
      // Clear data from versions before 2.1
      ls.clear();
    }
  });
  // Global
  ls.animation_duration = '500';
  // Popup
  var defaults = {
    // Filters
    folder_name: '',
    new_file_name: '',
    filter_min_width: 200,
    filter_min_width_enabled: true,
    filter_max_width: 3000,
    filter_max_width_enabled: true,
    filter_min_height: 200,
    filter_min_height_enabled: true,
    filter_max_height: 3000,
    filter_max_height_enabled: true,
    // Filters
    show_image_width_filter: true,
    show_image_height_filter: true,
    // Images
    show_image_url: false,
    show_open_image_button: false,
    show_download_image_button: false,
    columns: 2,
    image_min_width: 200,
    image_max_width: 300,
    image_border_width: 3,
    image_border_color: '#34A82D !important',
  };

  for (var option in defaults) {
    if (ls[option] === undefined) ls[option] = defaults[option];
    ls[option + '_default'] = defaults[option];
  }

  ls.options = JSON.stringify(Object.keys(defaults));
})(localStorage);
