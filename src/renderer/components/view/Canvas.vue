<template>
    <canvas ref="canvas" id="canvas"></canvas>
</template>

<script>
  import { ipcRenderer } from 'electron';
  import Canvas from '../../Modules/Canvas';
  import { decode } from '../../Modules/Image';

  export default {
    name: 'Canvas',
    mounted() {
      const context = this.$refs.canvas.getContext('2d');
      this.canvas = new Canvas(context);
      ipcRenderer.on('file-readed', (event, path) => {
        this.openInCanvas(path);
      });
    },
    methods: {
      openInCanvas(path) {
        const image = decode(path);
        this.canvas.insertImage(image).then(dimensions => this.$emit('ImageLoaded', dimensions));
      },
    },
  };
</script>

<style scoped>
  
</style>
