<template>
  <div>
    <midi-selector @inputChanged="inputChanged"></midi-selector>
    <select multiple>
      <option v-for="message in messages" value="message">
        {{ message.toString() }}
      </option>
    </select>
  </div>
</template>

<script>
  import MidiSelector from './MidiSelector'

  class Message {
    constructor (e) {
      this.e = e
    }
    toString () {
      return this.e.data
    }
  }

  export default {
    components: {
      'midi-selector': MidiSelector
    },
    data () {
      return {
        currentIntput: null,
        messages: []
      }
    },
    methods: {
      inputChanged (newInput) {
        this.currentIntput = newInput
        if (this.currentIntput) {
          console.log(JSON.stringify(this.currentIntput.id))
          this.currentIntput.onmidimessage = this.onMidi
        }
      },
      onMidi (e) {
        this.messages.push(new Message(e))
        if (e.data[0] === 144) {
          this.onNoteOn(e.data[1], e.data[2])
        } else if (e.data[0] === 128) {
          this.onNoteOff(e.data[1], e.data[2])
        }
      },
      onNoteOn (key, velo) {
      },
      onNoteOff (key, velo) {
      }

    }
  }
</script>
