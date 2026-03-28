
/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

/**
 * mqlib blocks
 */

//% weight=100 color=#5c2d91 icon=""
//% groups=['tft彩屏','others']
namespace mqlib {

    /**
     * tft显示中文
     */
    //% subcategory="tft"
    //% group='tft彩屏'
    //% block='tft显示中文'
    export function tftShowCh(): void {
        
    }


    // 假设你有一个 TFT 画点函数
    // 这里给一个通用接口，你可以对接真实硬件或 Canvas
    interface TFT {
        drawPoint(x: number, y: number, color: number): void;
    }

    // 在 (x,y) 显示 16×16 汉字
    export function lcdShowCN16(
        // tft: TFT,
        x: number,
        y: number,
        ch: string,
        // color: number,
        // bgColor: number
    ) {
        const c = findCN16(ch);
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
    mqlib.lcdShowCN16(1, 1, '中')

    // 显示字符串（多汉字）
    // export function lcdShowStrCN16(
    //     tft: TFT,
    //     x: number,
    //     y: number,
    //     str: string,
    //     color: number,
    //     bgColor: number
    // ) {
    //     let cx = x;
    //     for (const ch of str) {
    //         lcdShowCN16(tft, cx, y, ch, color, bgColor);
    //         cx += 16;
    //     }
    // }

}
