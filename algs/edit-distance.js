function calculateLevDistance (src, target) {
    if (!tgt.length) return src.length;
    if (!src.length) return tgt.length;

    return Math.min(
        calculateLevDistance( src.slice(1), tgt ) + 1, calculateLevDistance( tgt.slice(1), src ) + 1,
        calculateLevDistance( src.slice(1), tgt.slice(1) ) + ( src[0] == tgt[0] ? 0 : 1 )
    );
}
