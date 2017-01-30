function fibonachiCycle(n) {
    var a = 1, ta,
        b = 1, tb,
        c = 1, rc = 0, tc,
        d = 0, rd = 1;

    while(n) {
        if (n & 1) {
            tc = rc;
            rc = rc * a + rd * c;
            rd = tc * b + rd * d;
        }
        ta = a;
        tb = b;
        tc = c;
        a = a * a  + b * c;
        b = ta * b + b * d;
        c = c * ta + d * c;
        d = tc * tb + d * d;

        n >>= 1;
    }
    return rc;
}
function fibonachiRec(n)
{
    if (n == 0) {
        return 0;
    }
    if (n == -1 || n == 1) {
        return 1;
    }
    if (n > 0) {
        return fibonachiRec(n - 1) + fibonachiRec(n - 2);
    }
    if (n < 0) {
        return fibonachiRec(n + 2) - fibonachiRec(n + 1);
    }
}