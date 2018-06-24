{
    "id": "nodebb-plugin-create-topic",
    "url": "https://github.com/Blowedminds/nodebb-plugin-fill-composer",
    "library": "./index.js",
    "staticDirs": {
        "images": "public/images"
    },
    "less": [
        "assets/style.less"
    ],
    "hooks": [
        { "hook": "action:composer.topic.new", "method": "fillFields" }
    ],
    "scripts": [
        "public/src/client.js"
    ]
}