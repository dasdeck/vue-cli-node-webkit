export default class SamplePlayer {
    constructor (file) {
        this.file = file;
    }

    createVoices () {
        this.voices = [];
        for (let i = 0; i < this.getNumVoices(); i++) {
            this.voices.push(new SamplePlayerVoice(this));
        }
    }

    getNumVoices () {
        return 32;
    }
}

class SamplePlayerVoice {
    constructor (player) {
        this.player = player;
    }
}
