function matlab_modulo(x, y) {
    var n = Math.floor(x/y);
    return x - n*y;
}

function fletcher_sum_ndarray(A) {
    var sum1 = 0;
    var sum2 = 0;

    if (A.shape.length === 1) {
        for (var i = 0; i < A.size; ++i) {
            sum1 = matlab_modulo((sum1 + A.get(i)),255);
            sum2 = matlab_modulo((sum2 + sum1),255);
        } 
    } else if (A.shape.length === 2) {
        for (var i = 0; i < A.shape[1]; ++i) {
            for (var j = 0; j < A.shape[0]; ++j) {
                sum1 = matlab_modulo((sum1 + A.get(j,i)),255);
                sum2 = matlab_modulo((sum2 + sum1),255);
            }
        }
    } else if (A.shape.length === 3) {
        for (var i = 0; i < A.shape[2]; ++i) {
            for (var j = 0; j < A.shape[1]; ++j) {
                for (var k = 0; k < A.shape[0]; ++k) {
                    sum1 = matlab_modulo((sum1 + A.get(k,j,i)),255);
                    sum2 = matlab_modulo((sum2 + sum1),255);
                }
            }
        }
    } else {
        throw new Error('Unsupported shape of dimension: ' + A.shape.length);
    }

    return sum2 * 256 + sum1;
}
