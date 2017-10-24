<template>
  <div>
    <input type="file" multiple ref="filechooser" @change="fileSelected"/>
    <div class="pad" @dragover.prevent @drop.prevent.stop="dropped"></div>
  </div>
</template>
<script>
  import { upload } from '../upload.js'
  import fs from 'fs';

  export default {
    created () {
      this.context = new AudioContext({latencyHint: 1 / 44100 * 32})
    },
    mounted () {
      // debugger
    },
    methods: {
      fileSelected () {
        // debugger
      },
      dropped (e) {

        debugger;
        let fr = new FileReader()
        fr.onload = ({target}) => {
          this.context.decodeAudioData(target.result, (buffer) => {
            var source = this.context.createBufferSource() // creates a sound source
            source.buffer = buffer                    // tell the source which sound to play
            source.connect(this.context.destination)      // connect the source to the context's destination (the speakers)
            source.start(0)
          })
        }
        let file = e.dataTransfer.files[0]
        upload(file, result => {
          debugger
        })
        // debugger
      }
    }
  }
</script>

<style scoped>
  .pad {
    width: 100px;
    height: 100px;
    background-color: black;
  }
</style>
