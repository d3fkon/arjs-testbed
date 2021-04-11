// An object which takes A-Frame Asset Properties
class Model {
    constructor(name, url, scale) {
        this.name = name;
        this.url = url;
        this.scale = [...scale].join(' ');
    }
}

/// All available models in the project
// TODO: Should created from an API
const models = [
    new Model('Thai Curry', '/obj/thai.gltf', [0.25, 0.25, 0.25]),
    new Model('Thai Hotdog', '/obj/hotdog.gltf', [1, 1, 1]),
    new Model('Burger', '/obj/neoburger.gltf', [0.5, 0.5, 0.5]),
];

/// Register AFRAME State Singleton
AFRAME.registerState({
    // Initial Model
    initialState: {
        model: models[0],
    },

    handlers: {
        // Change model, given a model
        changeModel: function(state, action) {
            state.model = action.model;
        },
        // Automatically switch to the next model based on the 'currentIndex' passed in the action
        nextModel: function(state, action) {
            const { currentIndex } = action;
            state.model = models[currentIndex % models.length]
        }
    },
});