window.onload = () => {
    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity(elem, {
        // options
        cellAlign: 'center',
        contain: false,
        pageDots: true,
        wrapAround: true,
        dragThreshold: 10,
        selectedAttraction: 0.2,
        friction: 0.8,
        bgLazyLoad: 2,
    });
    flkty.on('settle', (currentIndex) => {
        AFRAME.scenes[0].emit('nextModel', { currentIndex })
    })

}


const sayHi = () => {
    // const thaiasset = document.queryselector('#thai');
    // thaiasset.setattribute('src','https://192.168.11.208:5678/obj/asset.gltf')
    AFRAME.scenes[0].emit('changeModel', {
        modelId: "https://192.168.11.208:5678/obj/asset.gltf"
    })
    console.log("Whats up bud")
}