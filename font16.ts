namespace mqlib{
    // 16x16 汉字点阵结构
    export interface CN16TftChar {
        str: string;       // 汉字
        dot: number[];   // 32 字节点阵
    }

    // 只包含：中、文
    export const CN16Tft: CN16TftChar[] = [
        {
            str: "中",
            dot: [
                0x01, 0xc0,
                0x03, 0xc0,
                0x01, 0xc0,
                0x7f, 0xfe,
                0x7f, 0xfe,
                0x73, 0xce,
                0x73, 0xce,
                0x73, 0xce,
                0x7f, 0xfe,
                0x7f, 0xfe,
                0x7f, 0xfe,
                0x63, 0xc6,
                0x03, 0xc0,
                0x03, 0xc0,
                0x03, 0xc0,
                0x03, 0xc0
            ]
        },
        {
            str: "文",
            dot: [
                0x07, 0x00,
                0x07, 0x80,
                0x03, 0x80,
                0xff, 0xff,
                0xff, 0xff,
                0x1c, 0x38,
                0x1e, 0x38,
                0x0e, 0x70,
                0x0f, 0xf0,
                0x07, 0xe0,
                0x03, 0xc0,
                0x07, 0xe0,
                0x0f, 0xf8,
                0x7e, 0x7e,
                0xfc, 0x1f,
                0xf0, 0x07
            ]
        }
    ];

    // 查找汉字
    export function findCN16Tft(ch: string): CN16TftChar | null {
        let result = CN16Tft.find(item => item.str === ch)
        if(result){
            return result
        }else{
            return null
        }
    }
}