class Compositor {
    constructor() {
        this.config = './../public/templates/config.jsonc'
        this.size = []
        this.renderStack = [
            {
                name: 'defaultimage',
                type: 'image',
                source: '/public/assets/images/Untitled.png',
                element: null,
                layer: 1
            }
        ]
    }

    render() {
        for (let object in this.renderStack){
            console.log(object)
            switch(object.type) {
                case 'image':
                    if (object.element == null) {
                        let newimg = document.createElement('img');
                        newImage.src = object.source;
                       // newImage.style.zIndex = object.layer;

                        object.element = newImg;
                        document.getElementById('compositor-root').append(newImage);
                    } else {
                        let objElement = object.element
                        //objElement.zIndex = object.name;
                        //objElement.src = object.src
                    }
                    break;
            }
        }
    }
}