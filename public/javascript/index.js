$('#opCarousel').on('slide.bs.carousel', function() {
    // do something…
})

const carousel = document.querySelector('#opCarousel')
carousel.addEventListener('slide.bs.carousel', e => {
    console.log(e)
})

const sayHi = () => {
    // const thaiasset = document.queryselector('#thai');
    // thaiasset.setattribute('src','https://192.168.11.208:5678/obj/asset.gltf')
    AFRAME.scenes[0].emit('changeModel', {
        modelId: "https://192.168.11.208:5678/obj/asset.gltf"
    })
    console.log("Whats up bud")
}