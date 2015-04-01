/**
 *
 *  @function
 *  @description:   Anonimous function autoexecutable
 *  @params jQuery $.- An jQuery object instance
 *  @params window window.- A Window object Instance
 *  @author: @_Chucho_
 *
 */
(function($, window, undefined) {

    var _mine    = window._mine,
    mine,
    // Use the correct document accordingly with window argument(sandbox)
    document    = window.document,
    location    = window.location,
    navigator   = window.navigator;

    // Map over mine in case of overwrite
    _mine  = window.mine;

    // Define a local copy of mine
    mine = function() {
        if(!(this instanceof mine)) {

            // The mine object is actually just the init constructor 'enhanced'
            return new mine.fn.init();
        }
        return mine.fn.init();
    };

    //  Object prototyping
    mine.fn = mine.prototype = {
        /**
         *
         *  @function:  !constructor
         *  @description:   Constructor method
         *  @author: @_Chucho_
         *
         */
        //  Método constructor
        constructor:    mine,
        /**
         *
         *  @function:  !init
         *  @description:   Inicializer method
         *  @author: @_Chucho_
         *
         */
        //  !Método inicializador
        init:   function() {

        },
    };

    // Give the init function the mine prototype for later instantiation
    mine.fn.init.prototype = mine.fn;

    mine = mine.fn;

    // Expose mine to the global object

    window.mine  = mine;

})(jQuery, window);