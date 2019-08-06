<template>
  <input type="file" :multiple="multiple" @change="onChange">
</template>

<script>
  export default {
    props: {
      multiple: {
        type: Boolean,
        default: false,
      },
      done: {
        type: Function,
        default: () => {
        },
      },
    },
    methods: {
      onChange(e) {
        let files = e.target.files;
        var allFiles = [];
        for (var i = 0; i < files.length; i++) {
          let file = files[i];
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            // Make a fileInfo Object
            let fileInfo = {
              name: file.name,
              type: file.type,
              size: Math.round(file.size / 1000) + ' kB',
              base64: reader.result,
              file: file,
            };
            allFiles.push(fileInfo);
            if (allFiles.length === files.length) {
              if (this.multiple) this.done(allFiles);
              else this.done(allFiles[0]);
            }
          };
        }
      },
    },
  };
</script>
