/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    addonOption: {
    	subOption: ['1', '2', '3'],
    },
    APP: {
    	appOptionRewrite: 'addon'
    }
  };
};
