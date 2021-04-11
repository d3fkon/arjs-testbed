window.onload = () => {
    const carousel = document.querySelector('#opCarousel')
    $('#opCarousel').bind('slid.bs.carousel', function(e) {
        const currentIndex = ($('div.active').index());
        AFRAME.scenes[0].emit('nextModel', { currentIndex })
    });

}


const sayHi = () => {
    // const thaiasset = document.queryselector('#thai');
    // thaiasset.setattribute('src','https://192.168.11.208:5678/obj/asset.gltf')
    AFRAME.scenes[0].emit('changeModel', {
        modelId: "https://192.168.11.208:5678/obj/asset.gltf"
    })
    console.log("Whats up bud")
}