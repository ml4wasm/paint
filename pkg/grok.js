let wasm_bindgen;
(function() {
    const __exports = {};
    let wasm;

    let cachegetFloat64Memory0 = null;
    function getFloat64Memory0() {
        if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== wasm.memory.buffer) {
            cachegetFloat64Memory0 = new Float64Array(wasm.memory.buffer);
        }
        return cachegetFloat64Memory0;
    }

    let WASM_VECTOR_LEN = 0;

    function passArrayF64ToWasm0(arg, malloc) {
        const ptr = malloc(arg.length * 8);
        getFloat64Memory0().set(arg, ptr / 8);
        WASM_VECTOR_LEN = arg.length;
        return ptr;
    }

    let cachegetInt32Memory0 = null;
    function getInt32Memory0() {
        if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
            cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
        }
        return cachegetInt32Memory0;
    }

    function getArrayF64FromWasm0(ptr, len) {
        return getFloat64Memory0().subarray(ptr / 8, ptr / 8 + len);
    }
    /**
    * @param {Float64Array} vec_a
    * @param {Float64Array} vec_b
    * @returns {Float64Array}
    */
    __exports.elementwise_addition = function(vec_a, vec_b) {
        try {
            const retptr = wasm.__wbindgen_export_0.value - 16;
            wasm.__wbindgen_export_0.value = retptr;
            var ptr0 = passArrayF64ToWasm0(vec_a, wasm.__wbindgen_malloc);
            var len0 = WASM_VECTOR_LEN;
            var ptr1 = passArrayF64ToWasm0(vec_b, wasm.__wbindgen_malloc);
            var len1 = WASM_VECTOR_LEN;
            wasm.elementwise_addition(retptr, ptr0, len0, ptr1, len1);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v2 = getArrayF64FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 8);
            return v2;
        } finally {
            wasm.__wbindgen_export_0.value += 16;
        }
    };

    /**
    * @param {Float64Array} vec
    * @param {number} n
    * @returns {Float64Array}
    */
    __exports.elementwise_scalar_multiplication = function(vec, n) {
        try {
            const retptr = wasm.__wbindgen_export_0.value - 16;
            wasm.__wbindgen_export_0.value = retptr;
            var ptr0 = passArrayF64ToWasm0(vec, wasm.__wbindgen_malloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.elementwise_scalar_multiplication(retptr, ptr0, len0, n);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = getArrayF64FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 8);
            return v1;
        } finally {
            wasm.__wbindgen_export_0.value += 16;
        }
    };

    /**
    * @param {Float64Array} image
    * @param {Float64Array} weights
    * @returns {Float64Array}
    */
    __exports.prediction = function(image, weights) {
        try {
            const retptr = wasm.__wbindgen_export_0.value - 16;
            wasm.__wbindgen_export_0.value = retptr;
            var ptr0 = passArrayF64ToWasm0(image, wasm.__wbindgen_malloc);
            var len0 = WASM_VECTOR_LEN;
            var ptr1 = passArrayF64ToWasm0(weights, wasm.__wbindgen_malloc);
            var len1 = WASM_VECTOR_LEN;
            wasm.prediction(retptr, ptr0, len0, ptr1, len1);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v2 = getArrayF64FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 8);
            return v2;
        } finally {
            wasm.__wbindgen_export_0.value += 16;
        }
    };

    async function load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {

            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);

                } catch (e) {
                    if (module.headers.get('Content-Type') != 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else {
                        throw e;
                    }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);

        } else {

            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };

            } else {
                return instance;
            }
        }
    }

    async function init(input) {
        if (typeof input === 'undefined') {
            let src;
            if (typeof document === 'undefined') {
                src = location.href;
            } else {
                src = document.currentScript.src;
            }
            input = src.replace(/\.js$/, '_bg.wasm');
        }
        const imports = {};


        if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
            input = fetch(input);
        }

        const { instance, module } = await load(await input, imports);

        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;

        return wasm;
    }

    wasm_bindgen = Object.assign(init, __exports);

})();
