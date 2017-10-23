<script>
  import MidiSelector from './MidiSelector'
  import Pad from './DrumPad'

  export default {
    components: {
      'midi-selector': MidiSelector,
      'pad': Pad
    },
    data () {
      return {
        currentIntput: null,
        messages: []
      }
    },
    methods: {
      clear () {
        this.messages = []
      },
      inputChanged (newInput) {
        this.currentIntput = newInput
        if (this.currentIntput) {
          console.log(JSON.stringify(this.currentIntput.id))
          this.currentIntput.onmidimessage = this.onMidi
        }
      },
      onMidi (e) {
        this.messages.push(new Message(e))
        const isKeyDown = e.data[0] === 144
        const isKeyUp = e.data[0] === 128 || isKeyDown && e.data[2] === 0
        if (isKeyDown) {
          this.onNoteOn(e.data[1], e.data[2])
        } else if (isKeyUp) {
          this.onNoteOff(e.data[1], e.data[2])
        }
      },
      onNoteOn (key, velo) {
      },
      onNoteOff (key, velo) {
      }
    }
  }

  class Message {
    constructor (e) {
      this.e = e
    }
    toString () {
      return this.e.data
    }
  }
</script>

<template>
  <div>
    <midi-selector @inputChanged="inputChanged"></midi-selector>
    <select multiple @keyup.delete="clear">
      <option v-for="message in messages" value="message">
        {{ message.toString() }}
      </option>
    </select>
    <pad></pad>
  </div>
</template>
