export function informationUpdateDraw(data, blockRef, block) {

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
                    width: 500,
                    height: 300,
                    theme: 'main',
                    type: 'github',
                    title: 'name',
                    info: {
                        name:"scene-ui",
                        synopsis:'a scene-drived ui lib for a more quickly frontend!',
                        stars:'100',
                        forks:'100',
                        languageList:'Vue TypeScript html JavaScript css'
                    }
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