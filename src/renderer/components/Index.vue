<template>
  <div id="wrapper">
     <div class="row">
      <div id="property-bar" class="col col-12"></div>
    </div>
    <div class="row">
      <div id="tollbox" class="col col-1"></div>
      <div ref="viewport" id="viewport" class="col col-10">
        <Canvas ref="canvas" v-on:ImageLoaded="setScale"/>
      </div>

    </div>
  </div>
 
</template>

<script>
  import Canvas from './view/Canvas';
  export default {
    name: 'index',
    components: {
      Canvas,
    },
    methods: {
      setScale(canvasDimensions) {
        console.log(canvasDimensions);
        const viewport = this.$refs.viewport;// eslint-disable-line
        const canvas = this.$refs.canvas.$el;// eslint-disable-line
        let zoom;
        if (canvasDimensions.width > viewport.clientWidth) {
          zoom = ((canvasDimensions.width * 0.1) / ((viewport.clientWidth - 100) * 0.2)) * 0.1;
        } else {
          zoom = ((viewport.clientWidth * 0.3) / ((canvasDimensions.width - 100) * 0.15)) * 0.15;
        }
        console.log(zoom);
        canvas.style = `zoom: ${zoom}`;
      },
    },
  };
</script>

<style lang="scss">
  #wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(53, 57, 60, 1)
  }
  #property-bar {
    display: block;
    width: 100%;
    height: 30px;
    background-color: #000;
  }
  #tollbox {
    background-color: rgb(30, 32, 34);
    width: 100%;
    height: 90vh;
  }
  #viewport {
    background: rgb(20, 22, 24);
    overflow: auto;
    height: 90vh;
    justify-content: center;
    align-items: center;
  }

</style>
