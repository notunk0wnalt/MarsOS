class Compositor {
    constructor() {
        this.config = './../public/templates/config.jsonc'
        this.size = []
        this.renderStack = [
            {
                name: 'defaultimage',
                type: 'image',
                source: './../public/assets/images/untitled.png',
                element: null,
                layer: 0
            }
        ]
    }

    render() {
        for (const obj in this.renderStack){
            switch(obj.type) {
                case 'image':
                    if (obj.element == null) {
                        let newimg = document.createElement('img');
                        newImage.src = obj.source;
                        newImage.style.zIndex = obj.layer;

                        obj.element = newImg;
                        document.getElementById('compositor-root').append(newImage);
                    } else {
                        let objElement = obj.element
                        objElement.zIndex = obj.name;
                        objElement.src = obj.src
                    }
                    break;
            }
        }
    }
}