/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    addonOption: ['some_option1', 'some_option2'],
    APP: {
    	appOptionRewrite: 'addon'
    }
  };
};
