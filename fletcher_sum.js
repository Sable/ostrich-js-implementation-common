function fletcher_sum_ndarray(A) {
    var sum1 = 0;
    var sum2 = 0;

    if (A.shape.length === 1) {
        for (var i = 0; i < A.size; ++i) {
            sum1 = (sum1 + A.get(i)) % 255;
            sum2 = (sum2 + sum1) % 255;
        } 
    } else if (A.shape.length === 2) {
        for (var i = 0; i < A.shape[1]; ++i) {
            for (var j = 0; j < A.shape[0]; ++j) {
                sum1 = (sum1 + A.get(j,i)) % 255;
                sum2 = (sum2 + sum1) % 255;
            }
        }
    }

    return sum2 * 256 + sum1;
}
