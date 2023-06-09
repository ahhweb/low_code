export function dialogUpdateDraw(data, blockRef, block) {

    let {offsetWidth, offsetHeight} = blockRef.value;

    let style = data.value.style; // 内部已经渲染的组件
    if (data.value.blocks.length - data.value.style.length === 1) {
        if (block.alignCenter) {
            block.left = block.left - offsetWidth / 2;
            block.top = block.top - offsetHeight / 2;
            block.alignCenter = false
        }
        block.width = offsetWidth;
        block.height = offsetHeight;

        data.value = {
            ...data.value, style: [
                ...style,
                {
                    modelValue: false,
                    title: "默认标题",
                    context: "a short message",
                    width: 400,
                    modal: true,
                    lockScroll: false,
                    closeOnClickModal: true
                }
            ]
        }
    }

    if (data.value.blocks.length === data.value.style.length) {
        blockRef.value.style.width = null
        blockRef.value.style.height = null
        block.width = offsetWidth;
        block.height = offsetHeight;
    }
}