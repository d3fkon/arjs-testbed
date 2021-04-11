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
const models = []
for (const item of menuItems)
    models.push(new Model(item.name, item.object.url, item.object.scale));

/// Register AFRAME State Singleton
AFRAME.registerState({
    // Initial Model
    initialState: {
        model: models[0],
    },

    handlers: {
        // Change model, given a model
        changeModel: function (state, action) {
            state.model = action.model;
        },
        // Automatically switch to the next model based on the 'currentIndex' passed in the action
        nextModel: function (state, action) {
            const { currentIndex } = action;
            state.model = models[currentIndex % models.length]
        }
    },
});