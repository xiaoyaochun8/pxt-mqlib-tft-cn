/**
 * mqlib blocks
 * 取模工具 https://www.zhetao.com/fontarray.html
 */

//% weight=100 color=#5c2d91 icon=""
//% groups=['tft-汉字库','others']
namespace mqlib {

    // 假设你有一个 TFT 画点函数
    // 这里给一个通用接口，你可以对接真实硬件或 Canvas
    // interface TFT {
    //     drawPoint(x: number, y: number, color: number): void;
    // }

    /**
     * 在 (x,y) 显示 16×16 汉字
     */
    function showCN16Tft(
        x: number,
        y: number,
        ch: string,
        // color: number,
        // bgColor: number
    ) {
        const c = findCN16Tft(ch);
        if (!c) return;

        for (let i = 0; i < 16; i++) {       // 行 0~15
            for (let j = 0; j < 16; j++) {     // 列 0~15
                const byteIdx = i * 2 + (j >> 3);
                const bit = 0x80 >> (j & 0x07);

                if (c.dot[byteIdx] & bit) {
                    // tft.drawPoint(x + j, y + i, color);
                    RBTFT18.drawPixel(x + j, y + i, Color.Red)
                } else {
                    // tft.drawPoint(x + j, y + i, bgColor);
                    RBTFT18.drawPixel(x + j, y + i, Color.Black)
                }
            }
        }
    }

    /**
     * tft显示字符串（多汉字）
     */
    //% subcategory="tft"
    //% group='tft-汉字库'
    //% block="tft彩屏显示中文 $str 在位置x: $x, y: $y"
    //% x.min=0 x.max=112 x.defl=0
    //% y.min=0 y.max=159 y.defl=0
    export function tftShowCN(
        x: number,
        y: number,
        str: string,
        // color: number,
        // bgColor: number
    ) {
        let cx = x;
        let cy = 0;
        let cNum = 0;
        for (const ch of str) {
            cy = (y + Math.floor(cNum / 8)) * 16;
            showCN16Tft(cx, cy, ch);
            cx += 16;
            cNum += 1;
        }
    }

}