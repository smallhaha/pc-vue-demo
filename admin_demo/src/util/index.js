let handleScroll = function(AnchoLlink, type) {
    if (type) {
        // 滚动事件 发生后 拿到当前滚动的距离
        let scrollY =
            document.getElementsByClassName("el-main")[0].scrollTop + 90;
        for (var i = 0; i < AnchoLlink.length; i++) {
            if (document.getElementById("box" + i)) {
                let frist = document.getElementById("box" + i).offsetTop;
                if (i < AnchoLlink.length - 1) {
                    if (document.getElementById("box" + (i + 1))) {
                        let last = document.getElementById("box" + (i + 1)).offsetTop;
                        if (scrollY) {
                            if (frist <= scrollY && scrollY < last) {
                                return AnchoLlink[i];
                            }
                        }
                    }

                }
            }
        }

    } else {
        return AnchoLlink
    }
}
export default {
    handleScroll
}